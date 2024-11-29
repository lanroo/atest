import React from 'react';
import { Building2 } from 'lucide-react';

const partners = [
  {
    name: "Petrobras",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=300",
    description: "Consultoria em segurança industrial"
  },
  {
    name: "Vale",
    logo: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80&w=300",
    description: "Laudos técnicos e treinamentos"
  },
  {
    name: "Gerdau",
    logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=300",
    description: "Gestão de segurança ocupacional"
  },
  {
    name: "Volkswagen",
    logo: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=300",
    description: "Programas de prevenção"
  },
  {
    name: "Ambev",
    logo: "https://images.unsplash.com/photo-1561489413-985b06da5bee?auto=format&fit=crop&q=80&w=300",
    description: "Medicina do trabalho"
  },
  {
    name: "CSN",
    logo: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=300",
    description: "Análise de riscos ambientais"
  }
];

const TrustedPartners = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Building2 className="text-green-600" size={32} />
            <h2 className="text-4xl font-bold text-gray-900">
              Empresas que Confiam em Nós
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Há mais de duas décadas prestando serviços para as maiores empresas do Brasil
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {partner.name}
                </h3>
                <p className="text-gray-600">
                  {partner.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;