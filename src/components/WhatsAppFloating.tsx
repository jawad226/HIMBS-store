import React from 'react';
import { MessageCircle } from 'lucide-react';
import siteConfig from '@/data/siteConfig.json';

const WhatsAppFloating = () => {
  return (
    <a
      href={`https://wa.me/${siteConfig.contact.whatsappRaw}`}
      className="fixed bottom-6 right-6 z-50 bg-success text-white p-5 rounded-full shadow-elite hover:bg-success-hover transition-all hover:scale-110 active:scale-95 flex items-center justify-center group"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={32} className="group-hover:rotate-12 transition-transform" />
    </a>
  );
};

export default WhatsAppFloating;
