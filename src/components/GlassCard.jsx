import React from 'react';

/**
 * Reusable Ultra-Premium GlassCard Component
 * Features:
 * - Light Mode: Frosted white glass (bg-white/70, backdrop-blur-md, soft ambient shadows)
 * - Dark Mode: Sleek dark glass (dark:bg-[#12141A]/70, dark:border-white/10, subtle dark glow)
 * - Smooth hover micro-interaction: hover:-translate-y-1 hover:shadow-xl transition-all duration-300
 * - Supports `title`, `image`, `badge`, `accent`, and `children`
 * - STRICTLY ZERO BLUE
 */
export default function GlassCard({
  title,
  subtitle,
  image,
  imageAlt,
  badge,
  children,
  className = '',
  accent = 'saffron', // 'saffron' | 'green' | 'neutral'
  padding = 'p-6',
  onClick,
  ...props
}) {
  const accentGlow = {
    saffron: 'hover:border-[#FF7722]/40 dark:hover:border-[#FF7722]/50 hover:shadow-[#FF7722]/10',
    green: 'hover:border-[#138808]/40 dark:hover:border-[#138808]/50 hover:shadow-[#138808]/10',
    neutral: 'hover:border-zinc-300 dark:hover:border-white/20'
  };

  return (
    <div
      onClick={onClick}
      className={`
        relative rounded-2xl overflow-hidden
        bg-white/75 backdrop-blur-md
        border border-white/80 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05)]
        dark:bg-[#12141A]/70 dark:border-white/[0.08] dark:shadow-[0_16px_40px_-8px_rgba(0,0,0,0.5)]
        hover:-translate-y-1 hover:shadow-xl
        transition-all duration-300 ease-out
        ${accentGlow[accent] || accentGlow.saffron}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      {...props}
    >
      {/* Optional Top Image */}
      {image && (
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900">
          <img
            src={image}
            alt={imageAlt || title || "Card Image"}
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            loading="lazy"
          />
          {badge && (
            <div className="absolute top-3 right-3">
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-white/90 text-zinc-900 shadow-sm backdrop-blur-sm dark:bg-[#0A0B0E]/80 dark:text-zinc-100 dark:border dark:border-white/10">
                {badge}
              </span>
            </div>
          )}
        </div>
      )}

      {/* Card Content Area */}
      <div className={padding}>
        {/* Title & Subtitle */}
        {(title || subtitle) && (
          <div className="mb-3">
            {badge && !image && (
              <span className="inline-block text-[11px] font-bold tracking-wider uppercase text-[#FF7722] mb-1">
                {badge}
              </span>
            )}
            {title && (
              <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Children Content */}
        {children}
      </div>
    </div>
  );
}
