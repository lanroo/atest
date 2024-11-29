import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Clock } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
            <Logo />
            <p className="text-sm leading-relaxed">
              Há mais de 20 anos oferecendo soluções completas em segurança do trabalho, 
              com compromisso, qualidade e excelência em nossos serviços.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-green-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-green-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-white font-semibold text-lg mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <MapPin size={20} className="text-green-500 flex-shrink-0" />
                <span>Av. Guilherme Cotching, 1080 Vila Maria - São Paulo - SP</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-green-500 flex-shrink-0" />
                <span>+55 (91) 99634-6265</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-green-500 flex-shrink-0" />
                <a href="mailto:contato@atest.com.br" className="hover:text-green-500 transition-colors">
                  contato@atest.com.br
                </a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-white font-semibold text-lg mb-6">Horário de Atendimento</h3>
            <ul className="space-y-4 w-full">
              <li className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <Clock size={20} className="text-green-500 flex-shrink-0" />
                <div className="text-center md:text-left">
                  <p className="font-semibold text-white">Segunda à Sexta</p>
                  <p>08:00 - 18:00</p>
                </div>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <Clock size={20} className="text-green-500 flex-shrink-0" />
                <div className="text-center md:text-left">
                  <p className="font-semibold text-white">Sábado</p>
                  <p>08:00 - 12:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col items-center space-y-2">
            <p className="text-sm text-center">
              &copy; {currentYear} Atest. Todos os direitos reservados.
            </p>
            <p className="text-sm text-center">
              Desenvolvido por <a href="https://github.com/lanroo" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-400">Deevoy Technology</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;