import React, { useEffect, useState } from 'react';
import HeroSection from '../HeroSection/HeroSection';
import ExperienceSection from '../ExperienceSection/ExperienceSection';
import CTASection from '../CTASection/CTASection';
import PortfolioSkillsSection from '../PortfolioSkillsSection/PortfolioSkillsSection';
import TestimonialsSection from '../TestimonialsSection/TestimonialsSection';
import PortfolioSection from '../PortfolioSection/PortfolioSection';
import SkillsSection from '../SkillsSection/SkillsSection';
import FooterSection from '../FooterSection/FooterSection';
import projects from '../../data/projects';
import testimonials from '../../data/testimonials';
import skills from '../../data/skills';
import experienceData from '../../data/experience';
import heroData from '../../data/hero';
import ctaData from '../../data/cta';
import portfolioSkillsData from '../../data/portfolioSkills';
import footerData from '../../data/footer';


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
      <HeroSection isDark={isDark} toggleTheme={toggleTheme} heroData={heroData} />
      <ExperienceSection description={experienceData.description}/>
      <CTASection
      activeSection={activeSection}
      setActiveSection={setActiveSection}
      ctaData={ctaData}
      />
      <PortfolioSkillsSection
      activeSection={activeSection}
      setActiveSection={setActiveSection}
      portfolioSkillsData={portfolioSkillsData}
       />
      {activeSection === 'testimonials' && <TestimonialsSection testimonials={testimonials} />}
      {activeSection === 'portfolio' && <PortfolioSection projects={projects} />}
      {activeSection === 'skills' && <SkillsSection skills={skills} />}
      <FooterSection footerData={footerData} />
    </div>
  );
}

export default Hero;