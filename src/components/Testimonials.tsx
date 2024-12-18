import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "João Silva",
    role: "Gerente de Segurança",
    company: "Construtora ABC",
    image: "https://media.istockphoto.com/id/1399565382/pt/foto/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=iTFUbmjvse1XVGTclaZb-3bc0Up9p5VBpkWLzb_XLJA=",
    content: "A Atest transformou completamente nossa abordagem em segurança do trabalho. Os treinamentos e consultorias foram fundamentais para reduzir nossos índices de acidentes em 85%.",
    rating: 5
  },
  {
    name: "Rebeca Yeuj",
    role: "Diretora de RH",
    company: "YAMAHA",
    image: "https://static.vecteezy.com/ti/fotos-gratis/t1/23907401-jovem-sorridente-empresaria-em-pe-dentro-borrao-fundo-do-escritorio-generativo-ai-foto.jpg",
    content: "Excelente parceria em medicina ocupacional. A equipe é altamente profissional e os laudos técnicos são sempre entregues com rapidez e qualidade.",
    rating: 5
  },
  {
    name: "Carlos Oliveira",
    role: "Coordenador de SESMT",
    company: "Grupo Industrial Beta",
    image: "https://img.freepik.com/fotos-premium/estas-hablando-ceo-foto-apuesto-hombre-negocios-maduro-sentado-solo-su-oficina_590464-58156.jpg",
    content: "Os programas de prevenção implementados pela Atest nos ajudaram a manter a conformidade com todas as normas regulamentadoras. Recomendo fortemente!",
    rating: 5
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <div className="bg-white rounded-xl shadow-lg p-8 relative">
    <Quote className="absolute top-4 right-4 text-green-100" size={40} />
    <div className="flex items-center gap-4 mb-6">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-16 h-16 rounded-full object-cover"
      />
      <div>
        <h4 className="font-semibold text-lg text-gray-900">{testimonial.name}</h4>
        <p className="text-gray-600">{testimonial.role}</p>
        <p className="text-green-600 text-sm">{testimonial.company}</p>
      </div>
    </div>
    <div className="flex mb-4">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star key={i} className="text-yellow-400 fill-current" size={20} />
      ))}
    </div>
    <p className="text-gray-700 leading-relaxed relative z-10">
      "{testimonial.content}"
    </p>
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça as experiências de empresas que transformaram sua gestão de segurança do trabalho com nossa parceria
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;