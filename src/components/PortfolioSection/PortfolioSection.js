import React from 'react';

function PortfolioSection({projects}) {
  return (
    <section className="portfolio" id="portfolio">
      {projects.map((project, index) => (
        <div key={index} className="wrapper project-wrapper">
          <a href={project.link}>
            <img src={project.image} alt={project.title} />
            <div className="overlay">
              <h3>{project.title}</h3>
              <p className="subtitle">{project.subtitle}</p>
              <p style={{ fontFamily: "'Playpen Sans', cursive" }}>{project.description}</p>
            </div>
          </a>
        </div>
      ))}
    </section>
  );
}

export default PortfolioSection;