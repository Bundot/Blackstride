import React from 'react';

import blackStrideLogo from '../../assets/blackstridelogo.svg';
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
    color: 'text-[#023a48]'
  };

  const logoFilter = {
    light: 'brightness(0) invert(1)',
    dark: 'none',
    color: 'none'
  };
  return <div className={`flex items-center ${className}`}>
      <div className={`${sizeClasses[size]} mr-3`}>
        <img
          src={blackStrideLogo}
          alt="Black Stride"
          className="h-full w-auto"
          style={{ filter: logoFilter[variant] }}
        />
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