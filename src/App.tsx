import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import ImageCarousel from './components/ImageCarousel';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import TrustedPartners from './components/TrustedPartners';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import AssessoriaJuridica from './pages/AssessoriaJuridica';
import Ppra from './pages/Ppra';
import Contato from './pages/Contato';

const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return null;
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <ScrollToSection />
        <Routes>
          <Route path="/" element={
            <>
              <ImageCarousel />
              <main>
                <Hero />
                <About />
                <Services />
                <TrustedPartners />
                <Testimonials />
              </main>
            </>
          } />
          <Route path="/assessoria-juridica" element={<AssessoriaJuridica />} />
          <Route path="/ppra" element={<Ppra />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;