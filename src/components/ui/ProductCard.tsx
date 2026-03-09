'use client';

import React from 'react';
import Image from 'next/image';
import { Phone, MessageCircle, CheckCircle2 } from 'lucide-react';
import Button from './Button';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  category: string;
  title: string;
  description: string;
  image?: string;
  stockStatus?: string;
  className?: string;
}

import siteConfig from '@/data/siteConfig.json';

const ProductCard: React.FC<ProductCardProps> = ({
  category,
  title,
  description,
  image,
  stockStatus = "Available in Stock",
  className
}) => {
  const phoneNumber = siteConfig.contact.phoneRaw;
  const whatsappNumber = siteConfig.contact.whatsappRaw;

  return (
    <div className={cn(
      "group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full",
      className
    )}>
      {image && (
        <div className="relative h-40 w-full overflow-hidden">
          <Image 
            src={image} 
            alt={title} 
            fill 
            className="object-cover group-hover:scale-110 transition-transform duration-700" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      )}
      
      <div className="p-6 flex flex-col flex-grow space-y-3">
        <div className="inline-block px-2.5 py-0.5 rounded-md bg-slate-100 text-[10px] font-bold uppercase tracking-widest text-slate-500">
          {category}
        </div>
        
        <h3 className="text-lg font-extrabold text-primary tracking-tight leading-tight">
          {title}
        </h3>
        
        <p className="text-slate-500 text-xs leading-relaxed flex-grow line-clamp-2">
          {description}
        </p>
        
        <div className="flex items-center gap-2 text-success font-semibold text-xs">
          <CheckCircle2 size={14} />
          {stockStatus}
        </div>
        
        <div className="pt-3 flex flex-col gap-2">
          <Button 
            variant="accent" 
            className="w-full justify-center gap-2 py-2.5 rounded-xl text-xs font-bold"
            onClick={() => window.location.href = `tel:${phoneNumber}`}
          >
            <Phone size={14} />
            CALL TODAY'S RATE
          </Button>
          
          <Button 
            variant="success" 
            className="w-full justify-center gap-2 py-2.5 rounded-xl text-xs font-bold transition-all"
            onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=I'm interested in ${title}. Please provide today's rate.`, '_blank')}
          >
            <MessageCircle size={14} />
            WHATSAPP INQUIRY
          </Button>
        </div>
      </div>
      
      <div className="px-6 pb-4 h-1 w-full bg-slate-50 flex gap-1">
        <div className="h-full flex-grow bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full bg-accent/20 w-1/3" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
