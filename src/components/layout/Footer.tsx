'use client';

import React from 'react';
import Link from 'next/link';
import { Hammer, Phone, MapPin, MessageCircle, ArrowUpRight, ShieldCheck, Building2 } from 'lucide-react';
import Button from '../ui/Button';

import siteConfig from '@/data/siteConfig.json';

const Footer = () => {
  return (
    <>
      {/* Footer Content */}
      <footer className="bg-[#00385F] pt-56 md:pt-48 pb-12 overflow-hidden relative border-t border-white/5">
        <div className="absolute inset-0 bg-white/[0.02] pointer-events-none" />
      <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <Link href="/" className="flex items-center group">
                <div className="premium-logo-container w-[110px] h-[45px] md:w-[130px] md:h-[54px] flex items-center justify-center transition-all duration-500 group-hover:scale-105">
                <img 
                  src={siteConfig.logo} 
                  alt={siteConfig.name}
                    className="w-full h-full object-contain brightness-0 invert opacity-90 p-2"
                />
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Bahaawalpur premier destination for high-grade structural steel and certified cement brands. Foundations built with trust since 2023.
            </p>
            <div className="flex gap-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white hover:bg-white/10"
                onClick={() => window.open(`https://wa.me/${siteConfig.contact.whatsappRaw}`, '_blank')}
              >
                <MessageCircle size={20} />
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Products', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`}
                    className="text-slate-400 hover:text-accent transition-colors text-sm font-medium"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400 hover:text-accent transition-colors">
                <Phone size={18} className="text-accent shrink-0" />
                <span className="text-sm font-medium">{siteConfig.contact.phone}</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400 hover:text-accent transition-colors">
                <MapPin size={18} className="text-accent shrink-0" />
                <span className="text-sm font-medium">{siteConfig.contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs font-medium uppercase tracking-widest">
            © {new Date().getFullYear()} {siteConfig.name}. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6">
            <span className="text-slate-500 text-xs hover:text-white cursor-pointer transition-colors uppercase tracking-widest">Privacy Policy</span>
            <span className="text-slate-500 text-xs hover:text-white cursor-pointer transition-colors uppercase tracking-widest">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
