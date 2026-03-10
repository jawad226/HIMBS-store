'use client';

import React, { useState } from 'react';
import { 
  PhoneCall, 
  Mail, 
  Globe, 
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Phone,
  ShieldCheck,
  Users
} from 'lucide-react';
import Button from '@/components/ui/Button';
import siteConfig from '@/data/siteConfig.json';
import { FadeIn, StaggerContainer, StaggerItem, ScaleIn } from '@/components/ui/MotionWrapper';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send inquiry. Please try again later.');
      }

      setSubmitted(true);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <main className="flex flex-col min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="pt-36 pb-20 bg-brand-gradient text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
        <FadeIn className="container mx-auto px-4 md:px-6 relative z-10 text-center space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-black uppercase tracking-[0.2em] backdrop-blur-md">
            Get In Touch
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
            Let's Build Something <br />
            <span className="text-accent underline decoration-white/10 underline-offset-8">Great Together.</span>
          </h1>
          <p className="text-lg text-white/70 font-medium max-w-2xl mx-auto leading-relaxed pt-4">
            Whether you're starting a new construction or needs bulk supplies, our team is here to provide the best market rates and quality materials.
          </p>
        </FadeIn>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-24 container mx-auto px-4 md:px-6 relative z-20 -mt-12 md:-mt-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start max-w-7xl mx-auto">
          
          {/* Left Side: Contact Information Cards */}
          <StaggerContainer className="lg:w-1/3 space-y-6 w-full" staggerDelay={0.15}>
            <StaggerItem>
              <div className="group relative bg-white p-8 md:p-10 rounded-[40px] shadow-sm border border-slate-100 hover:shadow-elite hover:border-accent/20 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full -z-10 group-hover:bg-accent/5 group-hover:scale-110 transition-all duration-500" />
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 text-slate-400 group-hover:text-accent group-hover:bg-accent/10 transition-colors duration-500">
                <Globe size={26} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-black text-primary tracking-tight mb-3">Head Office</h3>
              <p className="text-slate-500 font-medium leading-relaxed text-sm">
                {siteConfig.contact.address}
              </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="group relative bg-white p-8 md:p-10 rounded-[40px] shadow-sm border border-slate-100 hover:shadow-elite hover:border-accent/20 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full -z-10 group-hover:bg-accent/5 group-hover:scale-110 transition-all duration-500" />
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 text-slate-400 group-hover:text-accent group-hover:bg-accent/10 transition-colors duration-500">
                <PhoneCall size={26} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-black text-primary tracking-tight mb-3">Direct Line</h3>
              <p className="text-slate-600 font-bold text-lg mb-1">
                {siteConfig.contact.phone}
              </p>
              <div className="inline-flex items-center gap-2 mt-2 px-3 py-1 bg-slate-50 rounded-full border border-slate-100">
                <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                <span className="text-slate-400 text-[9px] uppercase font-black tracking-widest">Available Now</span>
              </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="group relative bg-[#004f86] p-8 md:p-10 rounded-[40px] shadow-lg overflow-hidden">
              {/* Decorative elements for dark card */}
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent opacity-50 pointer-events-none" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
              
              <div className="w-14 h-14 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl flex items-center justify-center mb-8 text-white">
                <MessageCircle size={26} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-black text-white tracking-tight mb-3">WhatsApp Sales</h3>
              <p className="text-white/70 font-medium leading-relaxed text-sm mb-8">
                Instant market rates, bulk order estimates, and quick support. Usually replies in 5 minutes.
              </p>
              <button 
                className="w-full relative flex items-center justify-between bg-success hover:bg-[#16a34a] text-white rounded-2xl p-4 transition-all shadow-lg hover:shadow-success/30 group/btn"
                onClick={() => window.open(`https://wa.me/${siteConfig.contact.whatsappRaw}`, '_blank')}
                  type="button"
              >
                <span className="font-black tracking-widest text-xs uppercase pl-2">Start Chat</span>
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover/btn:translate-x-1 transition-transform">
                  <ArrowRight size={16} />
                </div>
              </button>
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* Right Side: Clean Form */}
          <FadeIn delay={0.2} className="lg:w-2/3 w-full bg-white p-8 md:p-12 lg:p-16 rounded-[40px] shadow-elite border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-brand-gradient" />
            
            <div className="mb-10 lg:mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-primary tracking-tighter mb-4">
                Send an <span className="text-accent">Inquiry</span>
              </h2>
              <p className="text-slate-500 font-medium">
                Fill out the form below and our sales team will get back to you with a detailed quotation.
              </p>
            </div>

            {submitted ? (
              <div className="py-16 flex flex-col items-center justify-center text-center space-y-8 bg-slate-50 rounded-[30px] border border-slate-100">
                <div className="relative">
                  <div className="absolute inset-0 bg-success/20 rounded-full blur-xl animate-pulse" />
                  <div className="w-24 h-24 bg-success/10 text-success rounded-full flex items-center justify-center relative z-10">
                    <CheckCircle2 size={48} />
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-black text-primary tracking-tight">Inquiry Received!</h3>
                  <p className="text-slate-500 font-medium max-w-sm mx-auto text-sm">
                    Thank you for reaching out. A dedicated account manager will review your request and contact you shortly.
                  </p>
                </div>
                <button 
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', message: '' });
                  }} 
                  className="px-8 py-4 bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-600 rounded-full font-black text-xs uppercase tracking-widest transition-all"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                  {error && (
                    <div className="p-4 bg-red-50 border border-red-100 text-red-600 rounded-2xl text-sm font-medium">
                      {error}
                    </div>
                  )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2 relative group">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2 group-focus-within:text-accent transition-colors">
                      Full Name
                    </label>
                    <input 
                      type="text" 
                        name="name"
                      required
                        value={formData.name}
                        onChange={handleChange}
                      placeholder="e.g. Ali Ahmed"
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-accent/10 focus:border-accent focus:bg-white transition-all font-medium text-slate-900 placeholder:text-slate-300"
                    />
                  </div>
                  <div className="space-y-2 relative group">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2 group-focus-within:text-accent transition-colors">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                        name="email"
                      required
                        value={formData.email}
                        onChange={handleChange}
                      placeholder="ali@example.com"
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-accent/10 focus:border-accent focus:bg-white transition-all font-medium text-slate-900 placeholder:text-slate-300"
                    />
                  </div>
                </div>
                
                <div className="space-y-2 relative group">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2 group-focus-within:text-accent transition-colors">
                    Phone Number (Optional)
                  </label>
                  <input 
                    type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    placeholder="0300 1234567"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-accent/10 focus:border-accent focus:bg-white transition-all font-medium text-slate-900 placeholder:text-slate-300"
                  />
                </div>

                <div className="space-y-2 relative group">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2 group-focus-within:text-accent transition-colors">
                    Message / Requirements
                  </label>
                  <textarea 
                    rows={5} 
                      name="message"
                    required
                      value={formData.message}
                      onChange={handleChange}
                    placeholder="Tell us about your project or the materials you need..."
                    className="w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-[20px] outline-none focus:ring-4 focus:ring-accent/10 focus:border-accent focus:bg-white transition-all font-medium text-slate-900 placeholder:text-slate-300 resize-none"
                  />
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <p className="text-xs text-slate-400 font-medium">
                    Your data is secure. We reply within 2 hours.
                  </p>
                  <button 
                    type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto px-10 py-5 bg-primary hover:bg-black text-white rounded-full font-black text-sm tracking-widest transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 relative overflow-hidden group/submit disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                      <span className="relative z-10">{loading ? 'SENDING...' : 'SUBMIT INQUIRY'}</span>
                      {!loading && <div className="absolute inset-0 bg-accent translate-y-full group-hover/submit:translate-y-0 transition-transform duration-300 z-0" />}
                  </button>
                </div>
              </form>
            )}
          </FadeIn>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative z-30 -mb-28 px-4 md:px-6 container mx-auto">
        <ScaleIn>
        <div className="bg-[#004f86] flex flex-col items-center p-6 md:p-8 rounded-[40px] shadow-elite border border-white/5 relative overflow-hidden max-w-6xl mx-auto">
          {/* Header for Map inside container */}
          <div className="text-center mb-6 relative z-10 w-full flex flex-col items-center">
             <div className="inline-flex items-center justify-center gap-3 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">VISIT US TODAY</span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
             </div>
             <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter">
                Find Us on <span className="text-accent underline decoration-white/20 underline-offset-4">Google Maps</span>
             </h2>
          </div>

          <div className="relative w-full rounded-[20px] overflow-hidden border border-white/10 shadow-lg z-10 bg-white/5">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3476.5086619216045!2d71.74467267478131!3d29.38467244953011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b910026de34e5%3A0x5417f9d0ff5a0800!2sHafiz%20Iron%20%26%20Building%20Materials%20Store%20-%20Gulshan%20E%20Iqbal%202%2C%20Bahawalpur!5e0!3m2!1sen!2s!4v1773041042822!5m2!1sen!2s" 
              width="100%" 
              height="300" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full grayscale-0 hover:grayscale-0 transition-all duration-700 max-h-[300px]"
            />
          </div>
        </div>
        </ScaleIn>
      </section>
    </main>
  );
}
