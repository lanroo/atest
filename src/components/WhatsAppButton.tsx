import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '5591996346265';
  const message = 'Olá! Gostaria de saber mais sobre seus serviços.';
  
  const handleClick = () => {
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50 flex items-center gap-2"
    >
      <MessageCircle size={24} />
      <span className="hidden md:inline">Fale Conosco</span>
    </button>
  );
};

export default WhatsAppButton;