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

export const HudCorners: React.FC<{ variant?: 'gold' | 'sapphire' }> = ({
  variant = 'gold',
}) => {
  const borderCol =
    variant === 'gold'
      ? 'border-gold-400 group-hover:border-gold-200'
      : 'border-sapphire-400 group-hover:border-gold-300';

  return (
    <>
      <span
        className={`pointer-events-none absolute -top-[1px] -left-[1px] h-2.5 w-2.5 border-t-[1.5px] border-l-[1.5px] transition-all duration-300 group-hover:h-3.5 group-hover:w-3.5 ${borderCol}`}
      />
      <span
        className={`pointer-events-none absolute -top-[1px] -right-[1px] h-2.5 w-2.5 border-t-[1.5px] border-r-[1.5px] transition-all duration-300 group-hover:h-3.5 group-hover:w-3.5 ${borderCol}`}
      />
      <span
        className={`pointer-events-none absolute -bottom-[1px] -left-[1px] h-2.5 w-2.5 border-b-[1.5px] border-l-[1.5px] transition-all duration-300 group-hover:h-3.5 group-hover:w-3.5 ${borderCol}`}
      />
      <span
        className={`pointer-events-none absolute -bottom-[1px] -right-[1px] h-2.5 w-2.5 border-b-[1.5px] border-r-[1.5px] transition-all duration-300 group-hover:h-3.5 group-hover:w-3.5 ${borderCol}`}
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
  } ${
    variant === 'gold'
      ? 'bg-gradient-to-r from-gold-500/20 to-gold-500/5 border border-gold-500/35 text-gold-200 hover:bg-gold-500/25 hover:border-gold-400 hover:shadow-[0_0_30px_rgba(201,162,77,0.25)]'
      : 'bg-white/[0.02] border border-white/10 text-slate-100 hover:bg-sapphire-400/10 hover:border-sapphire-400/45 hover:shadow-[0_0_28px_rgba(56,189,248,0.22)]'
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
