import React from 'react';

function CTASection({ activeSection, setActiveSection }) {
  return (
    <section className="cta">
      <div className="reference-btn">
        <button
          className={`btn-2 reference-btn ${activeSection === 'testimonials' ? 'active-btn' : ''}`}
          onClick={() => setActiveSection('testimonials')}
        >
          References
        </button>
      </div>
      <div className="mail">
        <a href="mailto:s.ayala@hotmail.co.uk">
          <button className="btn-2 contact-btn">Contact Me</button>
        </a>
      </div>
    </section>
  );
}

export default CTASection;