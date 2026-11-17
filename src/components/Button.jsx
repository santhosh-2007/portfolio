import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'left',
  href,
  download,
  target,
  rel,
  onClick,
  disabled = false,
  loading = false,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl relative overflow-hidden group select-none active:scale-[0.98]";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-7 py-3 text-base gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-accent-purple via-indigo-600 to-accent-blue text-white shadow-glow-purple hover:shadow-glow-mixed hover:brightness-110 border border-white/10",
    secondary:
      "bg-background-card hover:bg-background-cardHover text-slate-200 border border-surface-border hover:border-surface-borderHover hover:text-white shadow-sm backdrop-blur-md",
    outline:
      "bg-transparent text-accent-blue hover:text-white border border-accent-blue/40 hover:border-accent-blue hover:bg-accent-blue/10 shadow-sm",
    ghost:
      "bg-transparent text-slate-300 hover:text-white hover:bg-white/5",
    gradientBorder:
      "bg-background-card text-slate-100 border border-accent-purple/40 hover:border-accent-blue/70 hover:shadow-glow-blue",
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${
    variantStyles[variant] || variantStyles.primary
  } ${disabled || loading ? 'opacity-60 cursor-not-allowed pointer-events-none' : 'cursor-pointer'} ${className}`;

  const content = (
    <>
      {loading ? (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          ></path>
        </svg>
      ) : (
        Icon && iconPosition === 'left' && <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />
      )}
      <span>{children}</span>
      {!loading && Icon && iconPosition === 'right' && (
        <Icon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={combinedStyles}
        download={download}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
        onClick={onClick}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={combinedStyles}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
}
