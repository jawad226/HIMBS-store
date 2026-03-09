'use client';

import React from 'react';
import Image from 'next/image';
import { 
  ShieldCheck, 
  Truck, 
  Users, 
  Award,
  CheckCircle2,
  Phone,
  MessageCircle
} from 'lucide-react';
import Button from '../../components/ui/Button';

import siteConfig from '@/data/siteConfig.json';

export default function AboutPage() {
  const getValueIcon = (id: string) => {
    switch (id) {
      case 'trust': return <Award size={32} />;
      case 'quality': return <ShieldCheck size={32} />;
      case 'delivery': return <Truck size={32} />;
      case 'support': return <Users size={32} />;
      default: return <Award size={32} />;
    }
  };

  const values = siteConfig.about.values;

  return (
    <main className="flex flex-col min-h-screen pt-24 bg-white">
      {/* Intro Section */}
      <section className="py-20 bg-brand-gradient text-white relative overflow-hidden">
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

      {/* Values Section */}
      <section className="py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary tracking-tight">
               Why Choose Us?
            </h2>
            <p className="text-slate-500 font-medium max-w-2xl mx-auto">
               We don't just sell materials; we provide the strength that holds your dreams together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((item: any, i: number) => (
              <div key={i} className="p-10 rounded-3xl border border-slate-100 bg-white hover:shadow-xl transition-all duration-500 group">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 text-accent group-hover:bg-accent group-hover:text-black transition-colors">
                   {getValueIcon(item.id)}
                </div>
                <h3 className="text-xl font-extrabold text-primary tracking-tight mb-4">
                   {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                   {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-24 bg-white text-primary overflow-hidden relative border-y border-slate-100">
         <div className="absolute inset-0 bg-slate-50/50 pointer-events-none" />
         <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
               <div className="space-y-10">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <span className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">Our Standards</span>
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  </div>
                  <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight text-primary">
                     Our Commitment to <br />
                     <span className="text-accent underline decoration-slate-200 underline-offset-8 text-5xl md:text-7xl">Structural Excellence.</span>
                  </h2>
                  <div className="space-y-6">
                     {siteConfig.about.commitments.map((text: string, i: number) => (
                       <div key={i} className="flex gap-4 items-start group">
                          <CheckCircle2 className="text-accent shrink-0 mt-1 transform group-hover:scale-110 transition-transform" size={24} />
                          <p className="text-xl text-slate-500 font-medium group-hover:text-primary transition-colors">{text}</p>
                       </div>
                     ))}
                  </div>
               </div>
               
               <div className="grid grid-cols-2 gap-6 relative">
                  <div className="space-y-6">
                     <div className="aspect-[4/5] relative rounded-[40px] overflow-hidden shadow-2xl border-4 border-slate-100">
                        <Image src="/images/cement.png" alt="Cement" fill className="object-cover" />
                        <div className="absolute inset-0 bg-primary/5" />
                     </div>
                  </div>
                  <div className="space-y-6 pt-12">
                     <div className="aspect-[4/5] relative rounded-[40px] overflow-hidden shadow-2xl border-4 border-slate-100">
                        <Image src="/images/steel.png" alt="Steel" fill className="object-cover" />
                        <div className="absolute inset-0 bg-primary/5" />
                     </div>
                  </div>
                  {/* Subtle background glow */}
                  <div className="absolute -inset-24 bg-accent opacity-5 blur-[120px] rounded-full pointer-events-none" />
               </div>
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

          <div className="container mx-auto px-8 md:px-16 relative z-10 w-full">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Text Side */}
              <div className="flex-1 text-center lg:text-left space-y-8 max-w-2xl">
                <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-xs font-bold uppercase tracking-[0.4em] text-white/60">READY TO BUILD?</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9]">
                  Let's Start Your <br />
                  <span className="text-accent underline decoration-white/10 underline-offset-8">Construction.</span>
                </h2>
                <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4">
                  {/* Modern Pill Button 1 */}
                  <button 
                    onClick={() => window.location.href = `tel:${siteConfig.contact.phoneRaw}`}
                    className="group relative flex items-center bg-white rounded-full p-2 pl-8 pr-2 transition-all hover:scale-105 active:scale-95 shadow-2xl"
                  >
                    <span className="text-primary font-black uppercase tracking-widest text-sm mr-6">Call Our Team</span>
                    <div className="w-12 h-12 bg-[#0172B2] rounded-full flex items-center justify-center text-white group-hover:bg-accent transition-colors">
                      <Phone size={20} />
                    </div>
                  </button>

                  {/* Modern Pill Button 2 */}
                  <button 
                    onClick={() => window.open(`https://wa.me/${siteConfig.contact.whatsappRaw}`, '_blank')}
                    className="group relative flex items-center bg-white rounded-full p-2 pl-8 pr-2 transition-all hover:scale-105 active:scale-95 shadow-2xl"
                  >
                    <span className="text-primary font-black uppercase tracking-widest text-sm mr-6">Get Rates</span>
                    <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center text-white group-hover:bg-accent transition-colors">
                      <MessageCircle size={20} />
                    </div>
                  </button>
                </div>
                <p className="text-white/30 font-black uppercase tracking-[0.3em] text-[10px]">
                  Quality Materials delivered across Sahiwal since 2008
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
                       <ShieldCheck size={32} className="text-accent mb-2" />
                       <p className="text-xs font-black text-white/80 uppercase tracking-widest leading-none">Safe & Secure</p>
                       <p className="text-[10px] text-white/40 mt-1 uppercase">Trusted Partner</p>
                    </div>

                    <div className="absolute bottom-1/4 left-0 p-6 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl transform -rotate-12 translate-x-12">
                       <div className="text-2xl font-black text-white mb-1">15+</div>
                       <p className="text-[10px] text-white/40 uppercase tracking-widest leading-none">Years Service</p>
                    </div>

                    {/* Icon Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center translate-y-4">
                       <Users size={140} className="text-white opacity-20" />
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
