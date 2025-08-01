import React from 'react';
interface LogoProps {
  variant?: 'light' | 'dark' | 'color';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}
export const Logo: React.FC<LogoProps> = ({
  variant = 'color',
  className = '',
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12'
  };
  const textColor = {
    light: 'text-white',
    dark: 'text-gray-800',
    color: 'text-emerald-600'
  };
  const iconColor = {
    light: '#ffffff',
    dark: '#1f2937',
    color: '#059669'
  };
  return <div className={`flex items-center ${className}`}>
      <div className={`${sizeClasses[size]} mr-3`}>
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className={`h-full w-auto`}>
          <path d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30 30-13.432 30-30S48.568 2 32 2zm0 5c13.807 0 25 11.193 25 25S45.807 57 32 57 7 45.807 7 32 18.193 7 32 7z" fill={iconColor[variant]} fillOpacity="0.2" />
          <path d="M32 12c-11.046 0-20 8.954-20 20s8.954 20 20 20 20-8.954 20-20-8.954-20-20-20zm0 5c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15 0-8.284 6.716-15 15-15z" fill={iconColor[variant]} fillOpacity="0.4" />
          <circle cx="32" cy="32" r="10" fill={iconColor[variant]} />
          <path d="M32 22v-8M32 50v-8M22 32h-8M50 32h-8" stroke={iconColor[variant]} strokeWidth="4" strokeLinecap="round" />
          <path d="M24.5 24.5l-5.65-5.65M44.5 44.5l-5.65-5.65M24.5 39.5l-5.65 5.65M44.5 19.5l-5.65 5.65" stroke={iconColor[variant]} strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      <div className={`font-bold ${textColor[variant]} tracking-tight leading-none`}>
        <span className="text-xl">BLACK</span>
        <span className="text-xl">STRIDE</span>
        <div className="text-xs font-medium tracking-wider">
          AGRICULTURAL EXPORTS
        </div>
      </div>
    </div>;
};