import React from 'react';
import { motion } from 'framer-motion';
import { soundEngine } from '../../utils/soundEngine';

// Retained as a clean no-op for compatibility (no decorative corner dots on institutional cards)
export const VertexDots: React.FC<{ color?: 'white' | 'gold' | 'sapphire' }> = () => null;

// Refined dual-corner perimeter hairline trace on hover (strict single gold #C1A258)
export const HoverBorderTrace: React.FC<{ color?: 'gold' | 'sapphire' }> = () => {
  const lineH = 'bg-[#C1A258]/80';
  const lineV = 'bg-[#C1A258]/80';

  return (
    <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
      <span
        className={`absolute top-0 left-0 h-[1px] w-full origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 ${lineH}`}
      />
      <span
        className={`absolute right-0 bottom-0 h-[1px] w-full origin-right scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 ${lineH}`}
      />
      <span
        className={`absolute top-0 right-0 h-full w-[1px] origin-top scale-y-0 transition-transform duration-300 delay-150 ease-out group-hover:scale-y-100 ${lineV}`}
      />
      <span
        className={`absolute bottom-0 left-0 h-full w-[1px] origin-bottom scale-y-0 transition-transform duration-300 delay-150 ease-out group-hover:scale-y-100 ${lineV}`}
      />
    </div>
  );
};

// Unified 2-opposite-corner architectural bracket button frame
export const HudCorners: React.FC<{
  variant?: 'gold' | 'sapphire';
  tone?: 'on-navy' | 'on-ivory';
}> = ({ tone = 'on-navy' }) => {
  const borderCol =
    tone === 'on-ivory'
      ? 'border-[#0E1B2E]/35 group-hover:border-[#0E1B2E]/80'
      : 'border-[#F8F6F2]/40 group-hover:border-[#C1A258]';

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
  tone?: 'on-navy' | 'on-ivory';
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit';
  fullWidth?: boolean;
  className?: string;
}

export const HudButton: React.FC<HudButtonProps> = ({
  children,
  tone = 'on-navy',
  onClick,
  href,
  type = 'button',
  fullWidth = false,
  className = '',
}) => {
  const baseClass = `group relative inline-flex items-center justify-center gap-3 px-7 py-3.5 font-sans text-xs font-semibold tracking-[0.16em] uppercase transition-all duration-300 ${
    fullWidth ? 'w-full' : ''
  } ${
    tone === 'on-ivory'
      ? 'bg-[#0E1B2E]/[0.06] text-[#0E1B2E] hover:bg-[#0E1B2E] hover:text-[#F8F6F2]'
      : 'bg-[#F8F6F2]/[0.05] text-[#F8F6F2] hover:bg-[#C1A258]/15 hover:text-[#C1A258]'
  } ${className}`;

  const handleEnter = () => soundEngine.playHover();
  const handleClick = () => {
    soundEngine.playClick();
    if (onClick) onClick();
  };

  if (href) {
    return (
      <motion.a
        href={href}
        whileTap={{ scale: 0.99 }}
        onMouseEnter={handleEnter}
        onClick={() => soundEngine.playClick()}
        className={baseClass}
      >
        <HudCorners tone={tone} />
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      whileTap={{ scale: 0.99 }}
      onMouseEnter={handleEnter}
      onClick={handleClick}
      className={baseClass}
    >
      <HudCorners tone={tone} />
      {children}
    </motion.button>
  );
};

export const ScrollPrompt: React.FC<{
  text?: string;
  centered?: boolean;
  href?: string;
}> = ({ text = 'Faites défiler pour explorer', centered = false, href = '#metrics' }) => {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-3 font-sans text-[11px] font-medium tracking-[0.18em] text-[#D8DDE6]/70 uppercase transition-colors hover:text-[#C1A258] ${
        centered ? 'mx-auto' : ''
      }`}
    >
      <span className="h-[1px] w-7 bg-[#C1A258]/70 transition-all duration-300 group-hover:w-11" />
      <span>{text}</span>
    </a>
  );
};
