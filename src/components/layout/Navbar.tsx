'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import Button from '../ui/Button';

import siteConfig from '@/data/siteConfig.json';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'PRODUCTS', href: '/products' },
    { name: 'ABOUT US', href: '/about' },
    { name: 'CONTACT', href: '/contact' },
  ];

  const isHome = pathname === '/';
  const shouldBeSolid = !isHome || scrolled;

  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        shouldBeSolid 
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-100 py-4 shadow-sm' 
          : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group relative">
          <div className="premium-logo-container w-[160px] h-[62px] flex items-center justify-center transition-all duration-500 group-hover:scale-105">
            <Image 
              src={siteConfig.logo} 
              alt={siteConfig.name}
              width={140}
              height={90}
              className={cn(
                "object-contain transition-all duration-300",
                isHome && !scrolled && "brightness-0 invert opacity-90"
              )}
              priority
            />
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  'text-xs font-black tracking-widest transition-all hover:text-accent relative py-2',
                  isActive 
                    ? 'text-accent' 
                    : (shouldBeSolid ? 'text-slate-600' : 'text-white/90')
                )}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent animate-scale-in" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="hidden md:block">
          <Button 
            variant="accent" 
            size="md"
            className="rounded-full shadow-lg"
            onClick={() => window.location.href = `tel:${siteConfig.contact.phoneRaw}`}
          >
            CALL NOW
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "md:hidden p-2 rounded-lg transition-colors",
            scrolled ? "text-primary hover:bg-slate-100" : "text-white hover:bg-white/10"
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] bg-white md:hidden animate-fade-in">
          <div className="p-6">
            <div className="flex justify-between items-center mb-12">
              <div className="flex items-center gap-3">
                <Image 
                  src={siteConfig.logo} 
                  alt={siteConfig.name}
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <div className="flex flex-col">
                  <span className="font-black text-lg tracking-tight text-primary uppercase leading-none">
                    {siteConfig.shortName}
                  </span>
                  <span className="text-[7px] font-bold tracking-[0.2em] uppercase mt-1 text-slate-400">
                    Iron & Building Store
                  </span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 text-primary">
                <X size={28} />
              </button>
            </div>
            
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'text-4xl font-extrabold tracking-tight',
                    pathname === link.href ? 'text-accent' : 'text-slate-300'
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <div className="mt-12 flex flex-col gap-4">
              <Button 
                className="w-full justify-center text-lg rounded-2xl h-16" 
                variant="accent"
                onClick={() => window.location.href = `tel:${siteConfig.contact.phoneRaw}`}
              >
                CALL NOW
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
