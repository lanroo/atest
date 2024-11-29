import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import NavDropdown from './NavDropdown';
import Logo from './Logo';
import { servicesItems, reportsItems, coursesItems } from '../data/navigationData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const baseMenuItems = [
    { title: 'Home', href: '/' },
    { title: 'Sobre', href: '/#sobre' },
    { title: 'Contato', href: '/contato' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href.startsWith('/#')) {
      const element = document.getElementById(href.substring(2));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      navigate(href);
    } else {
      navigate(href);
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          
          {/* Desktop Menu - Moved slightly to the left */}
          <div className="hidden md:flex md:items-center md:space-x-6 -mr-32">
            {baseMenuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-gray-700 hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {item.title}
              </a>
            ))}
            <NavDropdown title="Serviços" items={servicesItems} />
            <NavDropdown title="Laudos" items={reportsItems} />
            <NavDropdown title="Cursos" items={coursesItems} />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {baseMenuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-700 hover:bg-green-50"
              >
                {item.title}
              </a>
            ))}
            
            {/* Mobile Dropdowns */}
            <div className="space-y-2">
              <div className="px-3 py-2 font-medium text-gray-700">Serviços</div>
              {servicesItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.href}
                  className="block px-3 py-2 pl-6 text-sm text-gray-600 hover:text-green-700 hover:bg-green-50"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              
              <div className="px-3 py-2 font-medium text-gray-700">Laudos</div>
              {reportsItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.href}
                  className="block px-3 py-2 pl-6 text-sm text-gray-600 hover:text-green-700 hover:bg-green-50"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              
              <div className="px-3 py-2 font-medium text-gray-700">Cursos</div>
              {coursesItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.href}
                  className="block px-3 py-2 pl-6 text-sm text-gray-600 hover:text-green-700 hover:bg-green-50"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;