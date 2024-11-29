import React from 'react';
import { History, Users, Award, Building } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossa História</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Desde 2000, construindo um legado de excelência em segurança do trabalho
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Há mais de duas décadas, a Atest tem se dedicado a transformar ambientes de trabalho em lugares mais seguros e produtivos. Nossa jornada começou em 2000, com uma visão clara de proporcionar soluções inovadoras em segurança do trabalho.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Ao longo destes anos, desenvolvemos uma abordagem única que combina expertise técnica com um profundo entendimento das necessidades de nossos clientes, sempre buscando a excelência em cada projeto realizado.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Users className="text-green-600" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">+50 mil</h3>
              </div>
              <p className="text-gray-600">Clientes atendidos em todo o Brasil</p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <History className="text-green-600" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">23 anos</h3>
              </div>
              <p className="text-gray-600">De experiência no mercado</p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-green-600" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">100%</h3>
              </div>
              <p className="text-gray-600">Conformidade com normas técnicas</p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Building className="text-green-600" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">+1000</h3>
              </div>
              <p className="text-gray-600">Projetos concluídos por ano</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;