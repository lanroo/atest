import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const Contato = () => {
  const handleWhatsAppClick = () => {
    const message = "Olá, gostaria de agendar uma visita.";
    window.open(
      `https://wa.me/5591996346265?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">Entre em Contato</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Estamos prontos para atender suas necessidades em segurança do trabalho
          </p>
        </div>
      </section>

      {/* Contact Info & Map Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold">Endereço</h3>
                      <p className="text-gray-600">Av. Pedro Miranda, 1035 - Pedreira</p>
                      <p className="text-gray-600">Belém - PA, 66085-005</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Phone className="text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold">Telefone</h3>
                      <p className="text-gray-600">+55 (91) 99634-6265</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Mail className="text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold">E-mail</h3>
                      <p className="text-gray-600">contato@atest.com.br</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Clock className="text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold">Horário de Funcionamento</h3>
                      <p className="text-gray-600">Segunda à Sexta: 08:00 - 18:00</p>
                      <p className="text-gray-600">Sábado: 08:00 - 12:00</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Agende uma Visita</h2>
                <button
                  onClick={handleWhatsAppClick}
                  className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center gap-2"
                >
                  <MessageCircle size={20} />
                  Falar via WhatsApp
                </button>
              </div>
            </div>

            {/* Map */}
            <div className="h-[400px] rounded-lg overflow-hidden shadow-lg relative">
              <img
                src="https://developers.google.com/static/maps/images/landing/react-codelab-thumbnail.png?hl=pt-br"
                alt="Mapa da localização"
                className="w-full h-full object-cover brightness-95"
              />
              <div className="absolute inset-0 bg-black/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <a
                  href="https://www.google.com/maps/place/Av.+Pedro+Miranda,+1010+-+Pedreira,+Belém+-+PA,+66085-005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-blue-50 text-blue-600 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2 shadow-lg"
                >
                  <MapPin size={20} />
                  Ver no Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;