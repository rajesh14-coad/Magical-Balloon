import React from 'react';

/**
 * Reusable Luxury Button Component
 * Design Architecture:
 * - Primary: Premium Indian Green (#138808 -> #1cb80e)
 * - Secondary / Saffron: Warm Saffron Accent (#FF7722 -> #FFA059)
 * - Outline: Refined Glassmorphic border
 * - STRICTLY ZERO BLUE
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href,
  type = 'button',
  icon: Icon,
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed select-none cursor-pointer tracking-wide";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-7 py-3.5 text-base gap-2.5 font-semibold"
  };

  const variantStyles = {
    // Primary: Dominant Indian Green with emerald depth & glow
    primary: "bg-gradient-to-r from-[#138808] to-[#1cb80e] text-white font-semibold shadow-md shadow-[#138808]/25 hover:shadow-xl hover:shadow-[#138808]/40 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
    
    // Secondary / Saffron: Radiant Saffron for accents & secondary actions
    secondary: "bg-gradient-to-r from-[#FF7722] to-[#FFA059] text-white font-semibold shadow-md shadow-[#FF7722]/20 hover:shadow-xl hover:shadow-[#FF7722]/35 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
    saffron: "bg-gradient-to-r from-[#FF7722] to-[#FFA059] text-white font-semibold shadow-md shadow-[#FF7722]/20 hover:shadow-xl hover:shadow-[#FF7722]/35 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
    green: "bg-gradient-to-r from-[#138808] to-[#1cb80e] text-white font-semibold shadow-md shadow-[#138808]/25 hover:shadow-xl hover:shadow-[#138808]/40 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
    
    // Outline: Glassmorphic border that illuminates with green or saffron on hover
    outline: "border border-zinc-200/80 bg-white/70 text-zinc-800 backdrop-blur-md hover:border-[#138808] hover:text-[#138808] hover:bg-white shadow-sm dark:border-white/15 dark:bg-white/[0.05] dark:text-zinc-100 dark:hover:border-[#138808] dark:hover:text-[#22B814] dark:hover:bg-white/[0.1] active:scale-[0.98]"
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {Icon && <Icon className="w-4 h-4 shrink-0" />}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses} {...props}>
      {Icon && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
    </button>
  );
}
