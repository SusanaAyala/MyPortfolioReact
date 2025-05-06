import React from 'react';

function CTASection({ activeSection, setActiveSection, ctaData }) {
  return (
    <section className="cta">
      <div className="reference-btn">
        <button
          className={`btn-2 reference-btn ${
            activeSection === ctaData.buttons[0].section ? 'active-btn' : ''
          }`}
          onClick={() => setActiveSection(ctaData.buttons[0].section)}
        >
          {ctaData.buttons[0].label}
        </button>
      </div>
      <div className="mail">
        <a href={ctaData.buttons[1].link}>
          <button className="btn-2 contact-btn">{ctaData.buttons[1].label}</button>
        </a>
      </div>
    </section>
  );
}

export default CTASection;