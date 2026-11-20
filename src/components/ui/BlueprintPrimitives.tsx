import React from 'react';
import { motion } from 'framer-motion';
import { soundEngine } from '../../utils/soundEngine';

export const VertexDots: React.FC<{ color?: 'white' | 'gold' | 'sapphire' }> = ({
  color = 'white',
}) => {
  const colorClasses =
    color === 'gold'
      ? 'bg-gold-300 shadow-[0_0_10px_#C9A24D]'
      : color === 'sapphire'
      ? 'bg-sapphire-400 shadow-[0_0_10px_#38BDF8]'
      : 'bg-white shadow-[0_0_8px_rgba(255,255,255,0.85)] group-hover:bg-gold-300 group-hover:shadow-[0_0_10px_#C9A24D]';

  return (
    <>
      <span
        className={`pointer-events-none absolute -top-[2.5px] -left-[2.5px] z-10 h-[5px] w-[5px] transition-all duration-300 group-hover:scale-125 ${colorClasses}`}
      />
      <span
        className={`pointer-events-none absolute -top-[2.5px] -right-[2.5px] z-10 h-[5px] w-[5px] transition-all duration-300 group-hover:scale-125 ${colorClasses}`}
      />
      <span
        className={`pointer-events-none absolute -bottom-[2.5px] -left-[2.5px] z-10 h-[5px] w-[5px] transition-all duration-300 group-hover:scale-125 ${colorClasses}`}
      />
      <span
        className={`pointer-events-none absolute -bottom-[2.5px] -right-[2.5px] z-10 h-[5px] w-[5px] transition-all duration-300 group-hover:scale-125 ${colorClasses}`}
      />
    </>
  );
};

export const HoverBorderTrace: React.FC<{ color?: 'gold' | 'sapphire' }> = ({
  color = 'gold',
}) => {
  const lineH =
    color === 'sapphire'
      ? 'bg-gradient-to-r from-sapphire-400/90 via-sapphire-300/70 to-white/40 shadow-[0_0_10px_rgba(56,189,248,0.45)]'
      : 'bg-gradient-to-r from-gold-400/90 via-gold-300/70 to-white/40 shadow-[0_0_10px_rgba(201,162,77,0.45)]';
  const lineV =
    color === 'sapphire'
      ? 'bg-gradient-to-b from-sapphire-400/90 via-sapphire-300/70 to-white/40 shadow-[0_0_10px_rgba(56,189,248,0.45)]'
      : 'bg-gradient-to-b from-gold-400/90 via-gold-300/70 to-white/40 shadow-[0_0_10px_rgba(201,162,77,0.45)]';

  return (
    <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
      {/* Top edge: draws left -> right from Top-Left corner */}
      <span
        className={`absolute top-0 left-0 h-[1.5px] w-full origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 ${lineH}`}
      />
      {/* Bottom edge: draws right -> left from Bottom-Right corner */}
      <span
        className={`absolute right-0 bottom-0 h-[1.5px] w-full origin-right scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 ${lineH}`}
      />
      {/* Right edge: draws top -> bottom meeting Bottom-Right */}
      <span
        className={`absolute top-0 right-0 h-full w-[1.5px] origin-top scale-y-0 transition-transform duration-300 delay-150 ease-out group-hover:scale-y-100 ${lineV}`}
      />
      {/* Left edge: draws bottom -> top meeting Top-Left */}
      <span
        className={`absolute bottom-0 left-0 h-full w-[1.5px] origin-bottom scale-y-0 transition-transform duration-300 delay-150 ease-out group-hover:scale-y-100 ${lineV}`}
      />
    </div>
  );
};

export const HudCorners: React.FC<{ variant?: 'gold' | 'sapphire' }> = () => {
  const borderCol = 'border-white/35 group-hover:border-white/70';

  return (
    <>
      <span
        className={`pointer-events-none absolute top-0 left-0 h-3 w-3 border-t border-l transition-all duration-300 group-hover:h-4 group-hover:w-4 ${borderCol}`}
      />
      <span
        className={`pointer-events-none absolute right-0 bottom-0 h-3 w-3 border-r border-b transition-all duration-300 group-hover:h-4 group-hover:w-4 ${borderCol}`}
      />
    </>
  );
};

interface HudButtonProps {
  children: React.ReactNode;
  variant?: 'gold' | 'sapphire';
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit';
  fullWidth?: boolean;
  className?: string;
}

export const HudButton: React.FC<HudButtonProps> = ({
  children,
  variant = 'gold',
  onClick,
  href,
  type = 'button',
  fullWidth = false,
  className = '',
}) => {
  const baseClass = `group relative inline-flex items-center justify-center gap-3 px-8 py-4 font-display text-[11px] font-bold tracking-[0.25em] uppercase transition-all duration-300 ${
    fullWidth ? 'w-full' : ''
  } bg-white/[0.04] text-slate-100 hover:bg-white/[0.09] hover:text-white ${className}`;

  const handleEnter = () => soundEngine.playHover();
  const handleClick = () => {
    soundEngine.playClick();
    if (onClick) onClick();
  };

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        onMouseEnter={handleEnter}
        onClick={() => soundEngine.playClick()}
        className={baseClass}
      >
        <HudCorners variant={variant} />
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      onMouseEnter={handleEnter}
      onClick={handleClick}
      className={baseClass}
    >
      <HudCorners variant={variant} />
      {children}
    </motion.button>
  );
};

export const ScrollPrompt: React.FC<{
  text?: string;
  centered?: boolean;
  href?: string;
}> = ({ text = 'Scroll down to explore more', centered = false, href = '#mission' }) => {
  return (
    <a
      href={href}
      className={`group inline-flex flex-col gap-2.5 text-xs tracking-wider text-slate-400 transition-colors hover:text-gold-300 ${
        centered ? 'mx-auto items-center' : 'items-start'
      }`}
    >
      <span className="flex flex-col items-center gap-1.5">
        <span className="h-1 w-1 animate-pulse rounded-full bg-sapphire-400 shadow-[0_0_8px_#38BDF8]" />
        <span
          className="h-1 w-1 animate-pulse rounded-full bg-sapphire-400/70"
          style={{ animationDelay: '220ms' }}
        />
        <span
          className="h-1 w-1 animate-pulse rounded-full bg-gold-400/80"
          style={{ animationDelay: '440ms' }}
        />
      </span>
      <span className="font-sans text-[12px] text-slate-400 group-hover:text-slate-200">
        {text}
      </span>
    </a>
  );
};
