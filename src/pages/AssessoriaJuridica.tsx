import React from 'react';
import { Scale, CheckCircle, MessageCircle, AlertTriangle, FileText, Shield } from 'lucide-react';

const AssessoriaJuridica = () => {
  const handleConsultClick = () => {
    const message = "Olá, gostaria de marcar uma consultoria sobre Acessoria Jurídica.";
    window.open(
      `https://wa.me/5591996346265?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold mb-6">Assessoria Jurídica Especializada em Segurança do Trabalho</h1>
              <p className="text-xl mb-8">Proteja sua empresa com orientação jurídica especializada em normas trabalhistas e segurança ocupacional.</p>
              <button
                onClick={handleConsultClick}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2"
              >
                <MessageCircle size={20} />
                Agende uma Consultoria
              </button>
            </div>
            <div className="hidden lg:block">
              <Scale size={200} className="text-white/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Áreas de Atuação</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Direito Criminal",
                icon: Shield,
                description: "Proteção contra responsabilidades criminais relacionadas à segurança do trabalho e cumprimento de normas regulamentadoras."
              },
              {
                title: "Direito Civil",
                icon: Scale,
                description: "Prevenção e defesa em casos de indenizações por danos morais, materiais e acidentes de trabalho."
              },
              {
                title: "Direito Trabalhista",
                icon: FileText,
                description: "Orientação sobre normas de segurança, prevenção de multas e gestão de processos trabalhistas."
              },
              {
                title: "Direito Tributário",
                icon: AlertTriangle,
                description: "Consultoria especializada em tributos relacionados à segurança do trabalho e documentação legal."
              }
            ].map((area, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 text-blue-600 mb-4">
                  <area.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Gestão de Conformidade Legal</h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Nossa equipe jurídica especializada garante que sua empresa esteja em total conformidade com as exigências legais, incluindo:
                </p>
                <ul className="space-y-3">
                  {[
                    "Elaboração e validação de programas de segurança (PPRA, LTCAT, PPP, PCMSO)",
                    "Acompanhamento de fiscalizações da Receita Federal e Previdência Social",
                    "Verificação de documentação e registros obrigatórios",
                    "Orientação sobre medidas de proteção coletiva e individual",
                    "Prevenção de autuações e penalidades"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800"
                alt="Compliance Legal"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Risk Prevention */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Prevenção de Riscos Legais</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Documentação Legal",
                items: [
                  "Análise de conformidade documental",
                  "Validação de programas de segurança",
                  "Gestão de registros obrigatórios"
                ]
              },
              {
                title: "Proteção Empresarial",
                items: [
                  "Prevenção de processos trabalhistas",
                  "Redução de riscos tributários",
                  "Defesa em fiscalizações"
                ]
              },
              {
                title: "Consultoria Preventiva",
                items: [
                  "Orientação jurídica especializada",
                  "Atualização normativa constante",
                  "Suporte em auditorias"
                ]
              }
            ].map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-3">
                      <CheckCircle className="text-green-500 flex-shrink-0" size={18} />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Proteja Sua Empresa Agora</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Não espere por problemas jurídicos. Conte com nossa assessoria especializada para proteger sua empresa.
          </p>
          <button
            onClick={handleConsultClick}
            className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center gap-2"
          >
            <MessageCircle size={20} />
            Marque uma Consultoria
          </button>
        </div>
      </section>
    </div>
  );
};

export default AssessoriaJuridica;