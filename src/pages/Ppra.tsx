import React from 'react';
import { FileText, CheckCircle, MessageCircle, AlertTriangle } from 'lucide-react';

const Ppra = () => {
  const handleConsultClick = () => {
    const message = "Olá, gostaria de saber mais sobre PPRA";
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
              <h1 className="text-4xl font-bold mb-6">PPRA - Programa de Prevenção de Riscos Ambientais</h1>
              <p className="text-xl mb-8">Avaliação completa dos riscos ambientais do seu ambiente de trabalho, garantindo a segurança dos seus colaboradores.</p>
              <button
                onClick={handleConsultClick}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2"
              >
                <MessageCircle size={20} />
                Solicite uma Avaliação
              </button>
            </div>
            <div className="hidden lg:block">
              <FileText size={200} className="text-white/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">O que inclui o PPRA?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Análise Preliminar",
                description: "Identificação dos riscos potenciais no ambiente de trabalho.",
                image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=500"
              },
              {
                title: "Avaliação Quantitativa",
                description: "Medições técnicas dos agentes de risco identificados.",
                image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=500"
              },
              {
                title: "Medidas de Controle",
                description: "Recomendações para eliminação ou controle dos riscos.",
                image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80&w=500"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={feature.image} alt={feature.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Categories */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Riscos Avaliados</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Riscos Físicos",
              "Riscos Químicos",
              "Riscos Biológicos",
              "Riscos Ergonômicos"
            ].map((risk, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-red-50 rounded-lg">
                <AlertTriangle className="text-red-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{risk}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Benefícios do PPRA</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Conformidade com NR-9",
              "Prevenção de acidentes",
              "Redução de custos com afastamentos",
              "Ambiente de trabalho mais seguro",
              "Maior produtividade",
              "Documentação legal completa"
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Garanta a Segurança do seu Ambiente de Trabalho</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Solicite agora mesmo uma avaliação completa dos riscos ambientais da sua empresa.
          </p>
          <button
            onClick={handleConsultClick}
            className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center gap-2"
          >
            <MessageCircle size={20} />
            Solicitar PPRA
          </button>
        </div>
      </section>
    </div>
  );
};

export default Ppra;