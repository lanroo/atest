import React from 'react';
import { 
  Briefcase, 
  Stethoscope, 
  HardHat, 
  Scale,
  BookOpen,
  Shield,
  FileText,
  Users
} from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, delay }: any) => (
  <div 
    className="group p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
    style={{ animation: `fadeInUp ${delay}ms ease-out` }}
  >
    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-green-50 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const Services = () => {
  const mainServices = [
    {
      icon: HardHat,
      title: "Segurança do Trabalho",
      description: "Implementação de medidas preventivas e análise de riscos para garantir um ambiente seguro.",
      delay: 100
    },
    {
      icon: Stethoscope,
      title: "Medicina do Trabalho",
      description: "Acompanhamento médico ocupacional e prevenção de doenças relacionadas ao trabalho.",
      delay: 200
    },
    {
      icon: Briefcase,
      title: "Engenharia do Trabalho",
      description: "Avaliação e adequação dos ambientes de trabalho seguindo normas técnicas.",
      delay: 300
    },
    {
      icon: Scale,
      title: "Assessoria Jurídica",
      description: "Suporte legal especializado em legislação trabalhista e segurança do trabalho.",
      delay: 400
    }
  ];

  const additionalServices = [
    {
      icon: Shield,
      title: "NR5 - CIPA",
      description: "Formação e acompanhamento da Comissão Interna de Prevenção de Acidentes.",
      delay: 500
    },
    {
      icon: FileText,
      title: "NR7 - PCMSO",
      description: "Programa de Controle Médico de Saúde Ocupacional completo.",
      delay: 600
    },
    {
      icon: BookOpen,
      title: "NR9 - PPRA",
      description: "Programa de Prevenção de Riscos Ambientais com análises detalhadas.",
      delay: 700
    },
    {
      icon: Users,
      title: "Treinamentos",
      description: "Capacitação especializada em normas regulamentadoras e segurança.",
      delay: 800
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Soluções Integradas em Segurança
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos um conjunto completo de serviços para garantir a segurança e o bem-estar no ambiente de trabalho
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {mainServices.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {additionalServices.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;