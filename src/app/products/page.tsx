'use client';

import React from 'react';
import { 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  Info,
  Layers,
  Container,
  Wrench
} from 'lucide-react';
import productsData from '@/data/products.json';
import siteConfig from '@/data/siteConfig.json';
import Button from '../../components/ui/Button';
import ProductCard from '../../components/ui/ProductCard';
import { FadeIn, StaggerContainer, StaggerItem, ScaleIn } from '../../components/ui/MotionWrapper';

export default function ProductsPage() {
  const categories = productsData.categories;

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'cement': return <Layers className="text-accent" size={28} />;
      case 'iron': return <Container className="text-accent" size={28} />;
      case 'construction': return <Wrench className="text-accent" size={28} />;
      default: return <Layers className="text-accent" size={28} />;
    }
  };

  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <section className="pt-36 pb-20 bg-brand-gradient text-white relative overflow-hidden">
        {/* Background Decorative */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full translate-y-1/3 -translate-x-1/3 blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <FadeIn className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/70">Our Materials</span>
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-8">
              Full Material <span className="text-accent underline decoration-white/10 underline-offset-8">Catalog</span>
            </h1>
            <p className="text-lg text-white/70 font-medium leading-relaxed mb-10 max-w-2xl">
              We provide only the highest grade construction materials. Due to market volatility, prices are updated daily. Please contact us for the latest rates.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-4 p-5 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 group hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-white shrink-0 shadow-lg">
                  <Info size={24} />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-accent">Rate Inquiry</p>
                  <p className="text-sm font-bold text-white">Call for Today’s Rate</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-5 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 group hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-success rounded-xl flex items-center justify-center text-white shrink-0 shadow-lg">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-success">Availability</p>
                  <p className="text-sm font-bold text-white">Wholesale & Retail Available</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Categories */}
      {categories.map((category) => (
        <section key={category.id} id={category.id} className="py-20 border-b border-slate-50 last:border-b-0">
          <div className="container mx-auto px-4 md:px-6">
            <FadeIn className="flex items-center gap-4 mb-12">
              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
                {getCategoryIcon(category.id)}
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight">
                {category.name}
              </h2>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.products.map((product, index) => (
                <StaggerItem key={index}>
                  <ProductCard 
                    category={category.name}
                    {...product}
                  />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="relative z-20 -mb-28 px-4 md:px-6">
        <ScaleIn>
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
                  Need a Bulk Order <br />
                  <span className="text-accent underline decoration-white/10 underline-offset-8">Quotation?</span>
                </h2>
                <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4">
                  {/* Modern Pill Button 1 */}
                  <button 
                    onClick={() => window.location.href = `tel:${siteConfig.contact.phoneRaw}`}
                    className="group relative flex items-center bg-white rounded-full p-2 pl-8 pr-2 transition-all hover:scale-105 active:scale-95 shadow-2xl"
                  >
                    <span className="text-primary font-black uppercase tracking-widest text-sm mr-6">Contact Us</span>
                    <div className="w-12 h-12 bg-[#0172B2] rounded-full flex items-center justify-center text-white group-hover:bg-accent transition-colors">
                      <Phone size={20} />
                    </div>
                  </button>

                  {/* Modern Pill Button 2 */}
                  <button 
                    onClick={() => window.open(`https://wa.me/${siteConfig.contact.whatsappRaw}`, '_blank')}
                    className="group relative flex items-center bg-white rounded-full p-2 pl-8 pr-2 transition-all hover:scale-105 active:scale-95 shadow-2xl"
                  >
                    <span className="text-primary font-black uppercase tracking-widest text-sm mr-6">WhatsApp Now</span>
                    <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center text-white group-hover:bg-accent transition-colors">
                      <MessageCircle size={20} />
                    </div>
                  </button>
                </div>
                <p className="text-white/30 font-black uppercase tracking-[0.3em] text-[10px]">
                  Bulk Orders Accepted & Delivered Across Bahawalpur
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
                       <p className="text-xs font-black text-white/80 uppercase tracking-widest leading-none">High Quality</p>
                       <p className="text-[10px] text-white/40 mt-1 uppercase">Certified Material</p>
                    </div>

                    <div className="absolute bottom-1/4 left-0 p-6 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl transform -rotate-12 translate-x-12">
                       <div className="text-2xl font-black text-white mb-1">80%</div>
                       <p className="text-[10px] text-white/40 uppercase tracking-widest leading-none">Market Loyalty</p>
                    </div>

                    {/* Icon Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center translate-y-4">
                       <Layers size={140} className="text-white opacity-20" />
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
        </ScaleIn>
      </section>
    </main>
  );
}
