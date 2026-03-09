'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, 
  Phone, 
  MessageCircle, 
  CheckCircle2,
  LineChart,
  Truck,
  ShieldCheck
} from 'lucide-react';
import Button from '../components/ui/Button';
import ProductCard from '../components/ui/ProductCard';

import productsData from '@/data/products.json';
import siteConfig from '@/data/siteConfig.json';

export default function Home() {
  const featuredProducts = productsData.categories.flatMap(cat => 
    cat.products.filter(p => p.featured).map(p => ({ ...p, category: cat.name }))
  );  
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-gradient text-white">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero_bg.png"
            alt="Construction Materials"
            fill
            className="object-cover opacity-10"
            priority
          />
          <div className="absolute inset-0 bg-brand-gradient/60" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-block px-4 py-1.5 rounded-full bg-accent/20 border border-accent/20 text-accent text-xs font-bold uppercase tracking-[0.2em]">
                 {siteConfig.hero.dailyRatesNotice}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                {siteConfig.hero.title}
              </h1>
              <p className="text-lg md:text-xl text-slate-300 font-medium max-w-2xl leading-relaxed">
                {siteConfig.hero.subtitle}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="xl" variant="accent" className="rounded-full shadow-elite" onClick={() => window.location.href = `tel:${siteConfig.contact.phoneRaw}`}>
                   <Phone size={20} className="mr-2" />
                   CALL NOW
                </Button>
                <Button size="xl" variant="success" className="rounded-full shadow-elite" onClick={() => window.open(`https://wa.me/${siteConfig.contact.whatsappRaw}`, '_blank')}>
                   <MessageCircle size={20} className="mr-2" />
                   GET RATE ON WHATSAPP
                </Button>
            </div>

            {/* Daily Rates Alert */}
            <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-white animate-pulse-slow">
              <CheckCircle2 className="text-accent shrink-0" size={24} />
              <p className="text-sm md:text-base font-bold tracking-tight">
                Cement & Iron Rates Change Daily – <span className="text-accent">Contact Us For Latest Prices</span>
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 right-0 w-1/3 h-64 bg-brand-gradient/40 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      </section>

      {/* Featured Products Section */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
              Featured Products
            </h2>
            <div className="w-24 h-1.5 bg-accent mx-auto rounded-full" />
            <p className="text-slate-500 font-medium max-w-2xl mx-auto">
              We supply only the most trusted and certified brands in the construction industry.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <ProductCard 
                key={index}
                {...product}
                className={`animate-slide-up-fade animation-delay-${index * 100}`}
              />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/products">
              <Button variant="outline" size="lg" className="rounded-full px-12 border-slate-200 text-slate-600 hover:border-accent hover:text-accent">
                VIEW ALL PRODUCTS
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Legacy Section */}
      <section className="py-20 md:py-24 bg-brand-gradient text-white relative overflow-hidden">
        {/* Background Decorative */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full translate-y-1/3 -translate-x-1/3 blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-black uppercase tracking-[0.2em] backdrop-blur-md">
                 Our Legacy
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight">
                A Foundation Built on <br />
                <span className="text-accent underline decoration-white/10 underline-offset-8">Trust & Quality.</span>
              </h1>
              <p className="text-lg text-white/70 font-medium leading-relaxed max-w-xl">
                 {siteConfig.about.ourLegacy}
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button variant="accent" size="lg" className="rounded-full shadow-2xl px-12" onClick={() => window.location.href = `tel:${siteConfig.contact.phoneRaw}`}>
                   CALL US TODAY
                </Button>
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-4">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white/20 bg-white/10 backdrop-blur-md" />
                    ))}
                  </div>
                  <span className="text-sm font-black text-white/40 uppercase tracking-widest text-[10px]">
                     Trusted by 500+ Clients
                  </span>
                </div>
              </div>
            </div>
            
            <div className="relative animate-scale-in flex justify-center lg:justify-end">
               <div className="aspect-square relative w-full max-w-[440px] rounded-[60px] overflow-hidden border-8 border-white/10 shadow-2xl rotate-3">
                  <Image 
                    src="/images/hero_bg.png" 
                    alt="Hafiz Iron Store" 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-brand-gradient/20 mix-blend-overlay" />
               </div>
               <div className="absolute -bottom-6 -left-6 bg-accent p-8 rounded-3xl shadow-2xl text-white -rotate-3">
                  <p className="text-5xl font-black tracking-tighter italic">15+</p>
                  <p className="text-xs font-black uppercase tracking-[0.2em] opacity-80">Years Excellence</p>
               </div>
            </div>
          </div>
        </div>
      </section>
      {/* Trust & Quality Section */}
      <section className="py-20 md:py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {siteConfig.home.features.map((feature: any, i: number) => {
              const getFeatureIcon = (id: string) => {
                switch (id) {
                  case 'rates': return <LineChart size={32} />;
                  case 'delivery': return <Truck size={32} />;
                  case 'quality': return <ShieldCheck size={32} />;
                  default: return <ShieldCheck size={32} />;
                }
              };
              return (
                <div key={i} className="flex flex-col items-center text-center space-y-4 group">
                  <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-all duration-300 transform group-hover:-translate-y-2">
                    {getFeatureIcon(feature.id)}
                  </div>
                  <h3 className="text-xl font-extrabold text-primary tracking-tight">{feature.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="relative z-20 -mb-28 px-4 md:px-6">
        <div className="container mx-auto bg-brand-gradient rounded-[40px] md:rounded-[60px] overflow-hidden relative min-h-[450px] flex items-center shadow-elite border border-white/10">
          {/* Floating Decorative Elements */}
          <div className="absolute top-1/4 -left-12 w-48 h-12 bg-white/10 rounded-full rotate-45 blur-md animate-pulse-slow" />
          <div className="absolute top-1/2 -right-12 w-64 h-16 bg-accent/20 rounded-full -rotate-45 blur-lg" />
          <div className="absolute bottom-1/4 left-1/3 w-32 h-8 bg-sky-400/20 rounded-full rotate-12 blur-sm" />
          <div className="absolute top-20 right-1/4 w-4 h-4 bg-white/20 rounded-full animate-bounce" />
          <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-accent/40 rounded-full" />

          <div className="container mx-auto px-6 py-16 md:px-16 md:py-0 relative z-10 w-full">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Text Side */}
              <div className="flex-1 text-center lg:text-left space-y-8 max-w-2xl">
                <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-xs font-bold uppercase tracking-[0.4em] text-white/60">GROW FAST WITH US</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter leading-[0.9]">
                  Need Today's <br />
                  <span className="text-accent underline decoration-white/10 underline-offset-8">Market Rate?</span>
                </h2>
                <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4">
                  {/* Modern Pill Button 1 */}
                  <button 
                    onClick={() => window.location.href = `tel:${siteConfig.contact.phoneRaw}`}
                    className="group relative flex items-center bg-white rounded-full p-2 pl-8 pr-2 transition-all hover:scale-105 active:scale-95 shadow-2xl"
                  >
                    <span className="text-primary font-black uppercase tracking-widest text-sm mr-6">Call Now</span>
                    <div className="w-12 h-12 bg-[#0172B2] rounded-full flex items-center justify-center text-white group-hover:bg-accent transition-colors">
                      <Phone size={20} />
                    </div>
                  </button>

                  {/* Modern Pill Button 2 */}
                  <button 
                    onClick={() => window.open(`https://wa.me/${siteConfig.contact.whatsappRaw}`, '_blank')}
                    className="group relative flex items-center bg-white rounded-full p-2 pl-8 pr-2 transition-all hover:scale-105 active:scale-95 shadow-2xl"
                  >
                    <span className="text-primary font-black uppercase tracking-widest text-sm mr-6">WhatsApp</span>
                    <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center text-white group-hover:bg-accent transition-colors">
                      <MessageCircle size={20} />
                    </div>
                  </button>
                </div>
                <p className="text-white/30 font-black uppercase tracking-[0.3em] text-[10px]">
                  Bulk Orders Accepted & Delivered Across Sahiwal
                </p>
              </div>

              {/* Illustration Side (Right) */}
              <div className="flex-1 relative hidden lg:block">
                 <div className="relative z-10 w-full aspect-square max-w-[420px] animate-float mx-auto">
                    {/* Decorative orbital rings */}
                    <div className="absolute inset-0 border-2 border-white/10 rounded-full" />
                    <div className="absolute inset-12 border-2 border-white/5 rounded-full rotate-45" />
                    
                    {/* Glass Card UI style elements */}
                    <div className="absolute top-1/4 right-0 p-6 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl transform rotate-12 -translate-x-12">
                       <CheckCircle2 size={32} className="text-accent mb-2" />
                       <p className="text-xs font-black text-white/80 uppercase tracking-widest leading-none">Fast Delivery</p>
                       <p className="text-[10px] text-white/40 mt-1 uppercase">Same-day service</p>
                    </div>

                    <div className="absolute bottom-1/4 left-0 p-6 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl transform -rotate-12 translate-x-12">
                       <div className="text-2xl font-black text-white mb-1">100%</div>
                       <p className="text-[10px] text-white/40 uppercase tracking-widest leading-none">Original Brand</p>
                    </div>

                    {/* Icon Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center translate-y-4">
                       <ShieldCheck size={140} className="text-white opacity-20" />
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
