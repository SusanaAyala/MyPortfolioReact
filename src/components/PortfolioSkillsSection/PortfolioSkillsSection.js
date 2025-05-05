import React from 'react';

function PortfolioSkillsSection({ activeSection, setActiveSection }) {
  return (
    <section className="portfolio-skills">
      <div className="btn-bg">
        <button
          className={`btn-2 portfolio-btn ${activeSection === 'portfolio' ? 'active-btn' : ''}`}
          onClick={() => setActiveSection('portfolio')}
        >
          Portfolio
        </button>
        <button
          className={`btn-2 skills-btn ${activeSection === 'skills' ? 'active-btn' : ''}`}
          onClick={() => setActiveSection('skills')}
        >
          Skills
        </button>
      </div>
    </section>
  );
}

export default PortfolioSkillsSection;