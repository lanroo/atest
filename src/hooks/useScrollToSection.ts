import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const useScrollToSection = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = useCallback((sectionId: string) => {
    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
      return;
    }

    // Remove the '#' from the section ID
    const elementId = sectionId.replace('#', '');
    const element = document.getElementById(elementId);
    
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [location.pathname, navigate]);

  return scrollToSection;
};