import React, { CSSProperties } from 'react';

// Mock the Next.js Image component with a regular img
interface ImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  priority?: boolean;
}

export const Image = ({ 
  src, 
  alt, 
  fill, 
  className, 
  priority, 
  ...rest 
}: ImageProps) => {
  const style: CSSProperties = fill ? { 
    position: 'absolute',
    height: '100%',
    width: '100%',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    objectFit: 'cover' as 'cover'
  } : {};
  
  return (
    <img 
      src={src} 
      alt={alt} 
      className={className} 
      style={style}
      {...rest}
    />
  );
};

export default {
  Image
}; 