import React, { useEffect, useState } from 'react';
import HeroSection from '../HeroSection/HeroSection';
import ExperienceSection from '../ExperienceSection/ExperienceSection';
import CTASection from '../CTASection/CTASection';
import PortfolioSkillsSection from '../PortfolioSkillsSection/PortfolioSkillsSection';
import TestimonialsSection from '../TestimonialsSection/TestimonialsSection';
import PortfolioSection from '../PortfolioSection/PortfolioSection';
import SkillsSection from '../SkillsSection/SkillsSection';
import FooterSection from '../FooterSection/FooterSection';

function Hero() {
  const [activeSection, setActiveSection] = useState('portfolio');
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('isDark') === 'true';
    setIsDark(savedTheme);
    document.body.classList.toggle('dark-theme', savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem('isDark', isDark);
    document.body.classList.toggle('dark-theme', isDark);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prevTheme) => !prevTheme);
  };

  return (
    <div>
      <HeroSection isDark={isDark} toggleTheme={toggleTheme} />
      <ExperienceSection />
      <CTASection activeSection={activeSection} setActiveSection={setActiveSection} />
      <PortfolioSkillsSection activeSection={activeSection} setActiveSection={setActiveSection} />
      {activeSection === 'testimonials' && <TestimonialsSection />}
      {activeSection === 'portfolio' && <PortfolioSection />}
      {activeSection === 'skills' && <SkillsSection />}
      <FooterSection />
    </div>
  );
}

export default Hero;