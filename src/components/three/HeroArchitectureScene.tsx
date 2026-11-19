import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { Language } from '../../data/imaadData';
import { WORLD_MAP_GEO } from '../../data/worldMapGeo';

const GLOBE_RADIUS = 2.15;

export interface OperatingHub {
  id: string;
  country: { en: string; fr: string };
  city: string;
  flag: string;
  lat: number;
  lon: number;
}

const OPERATING_HUBS: OperatingHub[] = [
  {
    id: '384',
    country: { en: 'IVORY COAST', fr: "CÔTE D'IVOIRE" },
    city: 'Abidjan',
    flag: '🇨🇮',
    lat: 5.36,
    lon: -4.01,
  },
  {
    id: '686',
    country: { en: 'SENEGAL', fr: 'SÉNÉGAL' },
    city: 'Dakar',
    flag: '🇸🇳',
    lat: 14.72,
    lon: -17.47,
  },
  {
    id: '324',
    country: { en: 'GUINEA', fr: 'GUINÉE' },
    city: 'Conakry',
    flag: '🇬🇳',
    lat: 9.64,
    lon: -13.58,
  },
  {
    id: '204',
    country: { en: 'BENIN', fr: 'BÉNIN' },
    city: 'Cotonou',
    flag: '🇧🇯',
    lat: 6.37,
    lon: 2.39,
  },
  {
    id: '566',
    country: { en: 'NIGERIA', fr: 'NIGÉRIA' },
    city: 'Lagos',
    flag: '🇳🇬',
    lat: 6.52,
    lon: 3.38,
  },
  {
    id: '120',
    country: { en: 'CAMEROON', fr: 'CAMEROUN' },
    city: 'Yaoundé',
    flag: '🇨🇲',
    lat: 3.85,
    lon: 11.5,
  },
  {
    id: '646',
    country: { en: 'RWANDA', fr: 'RWANDA' },
    city: 'Kigali',
    flag: '🇷🇼',
    lat: -1.94,
    lon: 30.06,
  },
  {
    id: '262',
    country: { en: 'DJIBOUTI', fr: 'DJIBOUTI' },
    city: 'Djibouti',
    flag: '🇩🇯',
    lat: 11.59,
    lon: 43.15,
  },
];

// Capital flow corridors connecting IMAAD's operating hubs across Africa
const CORRIDOR_PAIRS: [number, number][] = [
  [1, 2], // Dakar -> Conakry
  [2, 0], // Conakry -> Abidjan
  [0, 3], // Abidjan -> Cotonou
  [0, 4], // Abidjan -> Lagos
  [4, 5], // Lagos -> Yaoundé
  [5, 6], // Yaoundé -> Kigali
  [6, 7], // Kigali -> Djibouti
  [0, 6], // Abidjan -> Kigali (transcontinental spine)
];

/**
 * Exact spherical projection matching Three.js SphereGeometry UV coordinates
 */
function latLonToVec3(lat: number, lon: number, radius: number): THREE.Vector3 {
  const phi = (lon + 180) * (Math.PI / 180);
  const theta = (90 - lat) * (Math.PI / 180);
  const x = -radius * Math.cos(phi) * Math.sin(theta);
  const y = radius * Math.cos(theta);
  const z = radius * Math.sin(phi) * Math.sin(theta);
  return new THREE.Vector3(x, y, z);
}

/**
 * Build a crisp 2048x1024 equirectangular canvas texture highlighting:
 * - Rest of world in subtle slate-navy
 * - Full African continent in luminous sapphire with glowing coastline
 * - All 8 IMAAD operating countries in bright metallic gold
 */
function createAfricaHighlightTexture(): THREE.CanvasTexture {
  const width = 2048;
  const height = 1024;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d')!;

  const toX = (lon: number) => ((lon + 180) / 360) * width;
  const toY = (lat: number) => ((90 - lat) / 180) * height;

  // 1. Deep Sovereign Obsidian-Navy Ocean Base
  const oceanGrad = ctx.createLinearGradient(0, 0, 0, height);
  oceanGrad.addColorStop(0, '#02050d');
  oceanGrad.addColorStop(0.5, '#061124');
  oceanGrad.addColorStop(1, '#02050d');
  ctx.fillStyle = oceanGrad;
  ctx.fillRect(0, 0, width, height);

  // 2. Subtle Architectural Graticule Grid (every 15 degrees)
  ctx.lineWidth = 0.7;
  for (let lon = -180; lon <= 180; lon += 15) {
    ctx.strokeStyle =
      lon === 0 ? 'rgba(201, 162, 77, 0.16)' : 'rgba(56, 189, 248, 0.08)';
    ctx.beginPath();
    ctx.moveTo(toX(lon), 0);
    ctx.lineTo(toX(lon), height);
    ctx.stroke();
  }
  for (let lat = -75; lat <= 75; lat += 15) {
    ctx.strokeStyle =
      lat === 0 ? 'rgba(201, 162, 77, 0.16)' : 'rgba(56, 189, 248, 0.08)';
    ctx.beginPath();
    ctx.moveTo(0, toY(lat));
    ctx.lineTo(width, toY(lat));
    ctx.stroke();
  }

  // Helper to trace a polygon ring safely (skipping antimeridian wrap jumps)
  const traceRing = (ring: number[][]) => {
    if (ring.length < 2) return;
    ctx.beginPath();
    ctx.moveTo(toX(ring[0][0]), toY(ring[0][1]));
    for (let i = 1; i < ring.length; i++) {
      const prevLon = ring[i - 1][0];
      const currLon = ring[i][0];
      if (Math.abs(currLon - prevLon) > 180) {
        ctx.moveTo(toX(currLon), toY(ring[i][1]));
      } else {
        ctx.lineTo(toX(currLon), toY(ring[i][1]));
      }
    }
    ctx.closePath();
  };

  // 3. Rest of the World (Muted background context — including non-Africa regions)
  ctx.fillStyle = 'rgba(100, 116, 139, 0.13)';
  ctx.strokeStyle = 'rgba(56, 189, 248, 0.16)';
  ctx.lineWidth = 0.85;
  for (const ring of [
    ...WORLD_MAP_GEO.world,
    ...WORLD_MAP_GEO.middleEast,
    ...WORLD_MAP_GEO.latinAmerica,
  ]) {
    traceRing(ring);
    ctx.fill();
    ctx.stroke();
  }

  // 4. Highlighted African Continent (Ambient radial aura + luminous sapphire fill)
  const africaAura = ctx.createRadialGradient(
    toX(18),
    toY(2),
    20,
    toX(18),
    toY(2),
    260
  );
  africaAura.addColorStop(0, 'rgba(30, 107, 255, 0.24)');
  africaAura.addColorStop(0.6, 'rgba(201, 162, 77, 0.08)');
  africaAura.addColorStop(1, 'rgba(0, 0, 0, 0)');
  ctx.fillStyle = africaAura;
  ctx.fillRect(toX(-35), toY(45), toX(68) - toX(-35), toY(-45) - toY(45));

  // Fill all non-operating African countries in rich luminous sapphire-navy
  ctx.save();
  ctx.fillStyle = 'rgba(30, 107, 255, 0.36)';
  ctx.strokeStyle = 'rgba(125, 211, 252, 0.55)';
  ctx.lineWidth = 1.25;
  ctx.shadowColor = 'rgba(56, 189, 248, 0.45)';
  ctx.shadowBlur = 10;
  for (const ring of WORLD_MAP_GEO.africa) {
    traceRing(ring);
    ctx.fill();
  }
  ctx.shadowBlur = 0;
  for (const ring of WORLD_MAP_GEO.africa) {
    traceRing(ring);
    ctx.stroke();
  }
  ctx.restore();

  // 5. Highlight IMAAD's 8 Operating Countries in Radiant Metallic Gold
  ctx.save();
  ctx.fillStyle = 'rgba(229, 193, 88, 0.92)';
  ctx.strokeStyle = '#FFF5D1';
  ctx.lineWidth = 2.0;
  ctx.shadowColor = 'rgba(243, 217, 139, 0.95)';
  ctx.shadowBlur = 14;
  for (const country of WORLD_MAP_GEO.operating) {
    for (const ring of country.rings) {
      traceRing(ring);
      ctx.fill();
      ctx.stroke();
    }
  }
  ctx.restore();

  // Subtle golden radiance spots centered on every hub (ensuring compact states like Rwanda/Benin/Djibouti gleam)
  for (const hub of OPERATING_HUBS) {
    const cx = toX(hub.lon);
    const cy = toY(hub.lat);
    const glow = ctx.createRadialGradient(cx, cy, 1, cx, cy, 24);
    glow.addColorStop(0, 'rgba(255, 245, 209, 0.85)');
    glow.addColorStop(0.35, 'rgba(229, 193, 88, 0.42)');
    glow.addColorStop(1, 'rgba(229, 193, 88, 0)');
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(cx, cy, 24, 0, Math.PI * 2);
    ctx.fill();
  }

  // 6. Crisp Golden Continental Coastline of Africa
  ctx.save();
  ctx.strokeStyle = 'rgba(229, 193, 88, 0.85)';
  ctx.lineWidth = 2.1;
  ctx.shadowColor = 'rgba(229, 193, 88, 0.7)';
  ctx.shadowBlur = 8;
  for (const arc of WORLD_MAP_GEO.africaCoast) {
    if (arc.length < 2) continue;
    ctx.beginPath();
    ctx.moveTo(toX(arc[0][0]), toY(arc[0][1]));
    for (let i = 1; i < arc.length; i++) {
      ctx.lineTo(toX(arc[i][0]), toY(arc[i][1]));
    }
    ctx.stroke();
  }
  ctx.restore();

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  texture.needsUpdate = true;
  return texture;
}

/**
 * Convert an array of polyline coordinate arcs into Three.js LineSegments BufferGeometry on the sphere
 */
function buildSurfaceLinesGeometry(
  arcs: number[][][],
  radius: number
): THREE.BufferGeometry {
  const positions: number[] = [];
  for (const arc of arcs) {
    for (let i = 0; i < arc.length - 1; i++) {
      const a = latLonToVec3(arc[i][1], arc[i][0], radius);
      const b = latLonToVec3(arc[i + 1][1], arc[i + 1][0], radius);
      positions.push(a.x, a.y, a.z, b.x, b.y, b.z);
    }
  }
  const geom = new THREE.BufferGeometry();
  geom.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(positions, 3)
  );
  return geom;
}

/**
 * Pulsing 3D Beacon Marker flush to the globe surface
 */
const HubBeacon: React.FC<{
  hub: OperatingHub;
  index: number;
  isSpotlight: boolean;
  lang: Language;
}> = ({ hub, index, isSpotlight, lang }) => {
  const groupRef = useRef<THREE.Group>(null);
  const pulseRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const worldPosVec = useMemo(() => new THREE.Vector3(), []);

  const { position, quaternion } = useMemo(() => {
    const pos = latLonToVec3(hub.lat, hub.lon, GLOBE_RADIUS + 0.025);
    const normal = pos.clone().normalize();
    const quat = new THREE.Quaternion().setFromUnitVectors(
      new THREE.Vector3(0, 0, 1),
      normal
    );
    return { position: pos, quaternion: quat };
  }, [hub.lat, hub.lon]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const cycle = (t * 0.75 + index * 0.37) % 1;
    if (pulseRef.current) {
      const maxScale = isSpotlight ? 3.2 : 2.2;
      const scale = 0.8 + cycle * maxScale;
      pulseRef.current.scale.set(scale, scale, 1);
      const mat = pulseRef.current.material as THREE.MeshBasicMaterial;
      mat.opacity = (1 - cycle) * (isSpotlight ? 0.95 : 0.65);
    }
    if (coreRef.current) {
      const s = isSpotlight ? 1.45 + Math.sin(t * 5) * 0.18 : 1.0;
      coreRef.current.scale.setScalar(s);
    }
    if (labelRef.current && groupRef.current) {
      groupRef.current.getWorldPosition(worldPosVec);
      // Fade tag cleanly if the hub rotates toward the far hemisphere
      labelRef.current.style.opacity = worldPosVec.z > 0.35 ? '1' : '0';
    }
  });

  return (
    <group ref={groupRef} position={position} quaternion={quaternion}>
      {/* Glowing Core Orb */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[0.036, 16, 16]} />
        <meshBasicMaterial color={isSpotlight ? '#FFF8DC' : '#F3D98B'} />
      </mesh>

      {/* Surface Inner Halo Ring */}
      <mesh>
        <ringGeometry args={[0.048, 0.068, 24]} />
        <meshBasicMaterial
          color="#E5C158"
          transparent
          opacity={isSpotlight ? 0.95 : 0.7}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Expanding Animated Pulse Ring */}
      <mesh ref={pulseRef}>
        <ringGeometry args={[0.06, 0.078, 28]} />
        <meshBasicMaterial
          color={isSpotlight ? '#FFF3C4' : '#E5C158'}
          transparent
          opacity={0.75}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Delicate Vertical Sovereign Light Spire */}
      <mesh position={[0, 0, isSpotlight ? 0.095 : 0.045]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.005, 0.012, isSpotlight ? 0.19 : 0.09, 8]} />
        <meshBasicMaterial
          color={isSpotlight ? '#FFF3C4' : '#E5C158'}
          transparent
          opacity={isSpotlight ? 0.9 : 0.55}
        />
      </mesh>

      {/* Single Clean Floating Label for Active Spotlighted Operating Country */}
      {isSpotlight && (
        <Html
          position={[0, 0, 0.22]}
          center
          zIndexRange={[10, 0]}
          style={{ pointerEvents: 'none' }}
        >
          <div
            ref={labelRef}
            className="flex items-center gap-1.5 whitespace-nowrap rounded border border-[#E5C158]/85 bg-[#040812]/95 px-3 py-1.5 shadow-[0_6px_24px_rgba(0,0,0,0.92),0_0_18px_rgba(201,162,77,0.45)] backdrop-blur-md transition-opacity duration-300"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#F3D98B] shadow-[0_0_8px_#F3D98B]" />
            <span className="text-xs leading-none">{hub.flag}</span>
            <span className="font-mono text-[11px] font-bold tracking-[0.14em] text-white uppercase">
              {hub.country[lang]}
            </span>
            <span className="font-mono text-[10px] font-medium text-[#E5C158]">
              · {hub.city}
            </span>
          </div>
        </Html>
      )}
    </group>
  );
};

/**
 * Animated Curved Capital-Flow Corridors arching gracefully across Africa
 */
const CapitalFlowArcs: React.FC = () => {
  const pulsesRef = useRef<(THREE.Mesh | null)[]>([]);

  const arcsData = useMemo(() => {
    return CORRIDOR_PAIRS.map(([fromIdx, toIdx], idx) => {
      const start = latLonToVec3(
        OPERATING_HUBS[fromIdx].lat,
        OPERATING_HUBS[fromIdx].lon,
        GLOBE_RADIUS + 0.025
      );
      const end = latLonToVec3(
        OPERATING_HUBS[toIdx].lat,
        OPERATING_HUBS[toIdx].lon,
        GLOBE_RADIUS + 0.025
      );
      const dist = start.distanceTo(end);
      const mid = start
        .clone()
        .add(end)
        .multiplyScalar(0.5)
        .normalize()
        .multiplyScalar(GLOBE_RADIUS + 0.14 + dist * 0.18);

      const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
      const tubeGeom = new THREE.TubeGeometry(curve, 36, 0.006, 6, false);
      return {
        curve,
        tubeGeom,
        color: idx === 7 ? '#38BDF8' : '#E5C158',
        opacity: 0.42,
        pulseColor: '#FFF6D6',
        speed: 0.24 + (idx % 3) * 0.06,
        offset: idx * 0.21,
      };
    });
  }, []);

  useEffect(() => {
    return () => {
      arcsData.forEach((a) => a.tubeGeom.dispose());
    };
  }, [arcsData]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    arcsData.forEach((arc, i) => {
      const mesh = pulsesRef.current[i];
      if (!mesh) return;
      const u = (t * arc.speed + arc.offset) % 1;
      const pt = arc.curve.getPoint(u);
      mesh.position.copy(pt);
    });
  });

  return (
    <group>
      {arcsData.map((arc, idx) => (
        <React.Fragment key={idx}>
          <mesh geometry={arc.tubeGeom}>
            <meshBasicMaterial
              color={arc.color}
              transparent
              opacity={arc.opacity}
            />
          </mesh>
          <mesh
            ref={(el) => {
              pulsesRef.current[idx] = el;
            }}
          >
            <sphereGeometry args={[0.02, 10, 10]} />
            <meshBasicMaterial color={arc.pulseColor} />
          </mesh>
        </React.Fragment>
      ))}
    </group>
  );
};

/**
 * Soft Fresnel Atmospheric Halo Rim Shader
 */
const AtmosphericRim: React.FC = () => {
  const shaderArgs = useMemo(
    () => ({
      uniforms: {
        uColor: { value: new THREE.Color('#38BDF8') },
        uGold: { value: new THREE.Color('#C9A24D') },
      },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          vViewPosition = -mvPosition.xyz;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        uniform vec3 uGold;
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        void main() {
          vec3 viewDir = normalize(vViewPosition);
          float fresnel = pow(1.0 - max(dot(vNormal, viewDir), 0.0), 3.4);
          vec3 col = mix(uColor, uGold, 0.35);
          gl_FragColor = vec4(col, fresnel * 0.55);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }),
    []
  );

  return (
    <mesh>
      <sphereGeometry args={[GLOBE_RADIUS + 0.09, 64, 64]} />
      <shaderMaterial args={[shaderArgs]} />
    </mesh>
  );
};

const SovereignArchitecturalGlobe: React.FC<{
  activeSlide: number;
  lang: Language;
}> = ({ activeSlide, lang }) => {
  const globeGroup = useRef<THREE.Group>(null);
  const planetGroup = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  // Cycle active spotlight across the 8 operating hubs every 3.2 seconds
  const [spotlightIdx, setSpotlightIdx] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setSpotlightIdx((prev) => (prev + 1) % OPERATING_HUBS.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  // Build procedural high-res Earth + Africa + 8 Operating Countries texture
  const globeTexture = useMemo(() => createAfricaHighlightTexture(), []);

  // Crisp 3D vector coastline of Africa + 8 operating countries
  const { africaCoastGeom, operatingOutlineGeom } = useMemo(() => {
    const coast = buildSurfaceLinesGeometry(
      WORLD_MAP_GEO.africaCoast,
      GLOBE_RADIUS + 0.014
    );
    const opArcs: number[][][] = [];
    for (const c of WORLD_MAP_GEO.operating) {
      for (const r of c.rings) opArcs.push(r);
    }
    const op = buildSurfaceLinesGeometry(opArcs, GLOBE_RADIUS + 0.02);
    return {
      africaCoastGeom: coast,
      operatingOutlineGeom: op,
    };
  }, []);

  useEffect(() => {
    return () => {
      globeTexture.dispose();
      africaCoastGeom.dispose();
      operatingOutlineGeom.dispose();
    };
  }, [globeTexture, africaCoastGeom, operatingOutlineGeom]);

  // Ambient floating telemetry starfield particles
  const particlePositions = useMemo(() => {
    const count = 220;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 2.6 + Math.random() * 2.3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  // Base orientation: Center Africa (+14°E) squarely facing the camera (+Z)
  const BASE_ROT_Y = -((90 + 14) * Math.PI) / 180;
  const BASE_ROT_X = 0.09;

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (planetGroup.current) {
      const swayY = Math.sin(t * 0.24) * 0.44;
      const swayX = Math.cos(t * 0.19) * 0.06;
      const slideOffset = (activeSlide - 1) * 0.12;

      const targetRotY = BASE_ROT_Y + swayY + slideOffset + state.pointer.x * 0.22;
      const targetRotX = BASE_ROT_X + swayX + state.pointer.y * 0.14;

      planetGroup.current.rotation.y = THREE.MathUtils.lerp(
        planetGroup.current.rotation.y,
        targetRotY,
        0.04
      );
      planetGroup.current.rotation.x = THREE.MathUtils.lerp(
        planetGroup.current.rotation.x,
        targetRotX,
        0.04
      );
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = Math.PI / 2.6 + Math.sin(t * 0.3) * 0.1;
      ring1Ref.current.rotation.z = t * 0.16;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = Math.PI / 3 + Math.cos(t * 0.25) * 0.12;
      ring2Ref.current.rotation.z = -t * 0.13;
    }
  });

  const accentColor = activeSlide === 2 ? '#38BDF8' : '#E5C158';
  const isDesktop = viewport.width >= 8.5;
  const isTablet = viewport.width >= 6.0 && viewport.width < 8.5;
  const groupPosition: [number, number, number] = isDesktop
    ? [-1.25, 0.04, 0]
    : isTablet
      ? [-0.95, 0.05, 0]
      : [0, 0.82, -0.4];
  const groupScale = isDesktop ? 1.02 : isTablet ? 0.84 : 0.64;

  return (
    <group ref={globeGroup} position={groupPosition} scale={groupScale}>
      {/* Animated Earth + Highlighted Africa + Operating Hubs Group */}
      <group ref={planetGroup} rotation={[BASE_ROT_X, BASE_ROT_Y, 0]}>
        {/* 1. Textured Earth Sphere with Highlighted Africa & Gold Operating Countries */}
        <mesh>
          <sphereGeometry args={[GLOBE_RADIUS, 72, 72]} />
          <meshBasicMaterial map={globeTexture} transparent opacity={0.97} />
        </mesh>

        {/* 2. Soft Atmospheric Sapphire-Gold Fresnel Rim */}
        <AtmosphericRim />

        {/* 3. Crisp 3D Vector Coastline of Africa */}
        <lineSegments geometry={africaCoastGeom}>
          <lineBasicMaterial color="#F3D98B" transparent opacity={0.78} />
        </lineSegments>

        {/* 4. Crisp 3D Vector Borders of the 8 Operating Countries */}
        <lineSegments geometry={operatingOutlineGeom}>
          <lineBasicMaterial color="#FFF6D6" transparent opacity={0.95} />
        </lineSegments>

        {/* 5. Pulsing Sovereign Hub Beacons across the 8 Operating Countries */}
        {OPERATING_HUBS.map((hub, idx) => (
          <HubBeacon
            key={hub.id}
            hub={hub}
            index={idx}
            isSpotlight={idx === spotlightIdx}
            lang={lang}
          />
        ))}

        {/* 6. Animated Curved Capital-Flow Corridors */}
        <CapitalFlowArcs />
      </group>

      {/* Outer Architectural Geodesic Wireframe Lattice (Subtle HUD Frame) */}
      <mesh>
        <icosahedronGeometry args={[2.32, 2]} />
        <meshBasicMaterial
          color={accentColor}
          wireframe
          transparent
          opacity={0.09}
        />
      </mesh>

      {/* Orbital Capital Flow Ring 1 (Close to Globe) */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[2.46, 0.01, 16, 120]} />
        <meshBasicMaterial color="#C9A24D" transparent opacity={0.48} />
      </mesh>

      {/* Orbital Capital Flow Ring 2 (Close to Globe) */}
      <mesh ref={ring2Ref}>
        <torusGeometry args={[2.68, 0.008, 16, 120]} />
        <meshBasicMaterial color="#38BDF8" transparent opacity={0.38} />
      </mesh>

      {/* Floating Telemetry Nodes */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlePositions.length / 3}
            array={particlePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.04}
          color="#F3D98B"
          transparent
          opacity={0.75}
          sizeAttenuation
        />
      </points>
    </group>
  );
};

export const HeroArchitectureScene: React.FC<{
  activeSlide: number;
  lang?: Language;
}> = ({ activeSlide, lang = 'en' }) => {
  return (
    <div className="pointer-events-none absolute inset-0 z-[1] opacity-95">
      <Canvas camera={{ position: [0, 0, 6.8], fov: 46 }} dpr={[1, 2]}>
        <ambientLight intensity={1} />
        <SovereignArchitecturalGlobe activeSlide={activeSlide} lang={lang} />
      </Canvas>
    </div>
  );
};
