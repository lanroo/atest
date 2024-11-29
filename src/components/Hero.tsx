import React from 'react';
import { Shield, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="mb-8 lg:mb-0">
            <div className="flex items-center gap-2 text-blue-700 mb-4">
              <Shield size={24} />
              <span className="font-semibold">Segurança do Trabalho</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Protegendo o que é mais valioso: seus colaboradores
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Soluções completas em engenharia de segurança do trabalho para sua empresa.
              Laudos técnicos, treinamentos e consultoria especializada.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={20} />
                <span>Profissionais altamente qualificados</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={20} />
                <span>Atendimento em todo território nacional</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={20} />
                <span>Conformidade com normas regulamentadoras</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80"
              alt="Engenheiro de segurança do trabalho"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;