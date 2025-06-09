import { ButtonHTMLAttributes, ReactNode } from 'react';
import Link from 'next/link';

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'href'> {
  variant?: 'primary' | 'ghost';
  children: ReactNode;
  className?: string;
  href?: string;
}

export default function Button({ 
  variant = 'primary', 
  children, 
  className = '', 
  href,
  ...props 
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center px-6 py-2.5 rounded-3xl transition-opacity duration-300 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-color-01 text-white hover:opacity-90 shadow-sm',
    ghost: 'bg-transparent text-color-01 border border-color-01 hover:opacity-70'
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
} 