'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'accent' | 'success' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'icon';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary: 'bg-primary text-white hover:bg-slate-800 border-transparent shadow-md',
      secondary: 'bg-secondary text-white hover:bg-slate-600 border-transparent shadow-md',
      outline: 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white',
      accent: 'bg-accent text-white hover:bg-accent-hover border-transparent shadow-lg shadow-accent/20',
      success: 'bg-success text-white hover:bg-success-hover border-transparent shadow-lg shadow-success/20',
      ghost: 'bg-transparent text-primary hover:bg-slate-100 border-transparent',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base font-semibold',
      lg: 'px-8 py-4 text-lg font-bold',
      xl: 'px-10 py-5 text-xl font-extrabold tracking-tight',
      icon: 'p-2',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-xl transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export default Button;
