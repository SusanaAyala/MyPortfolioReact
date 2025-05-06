import React from 'react';

function PortfolioSkillsSection({ activeSection, setActiveSection, portfolioSkillsData }) {
  return (
    <section className="portfolio-skills">
      <div className="btn-bg">
        {portfolioSkillsData.sections.map((section, index) => (
          <button
            key={index}
            className={`btn-2 ${section.section}-btn ${
              activeSection === section.section ? 'active-btn' : ''
            }`}
            onClick={() => setActiveSection(section.section)}
          >
            {section.label}
          </button>
        ))}
      </div>
    </section>
  );
}

export default PortfolioSkillsSection;