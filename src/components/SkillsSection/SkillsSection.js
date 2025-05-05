import React from 'react';

function SkillsSection() {
  return (
    <section className="skills" id="skills">
      <div className="wrapper">
        <h3>Frontend</h3>
        <article className="frontend-skills">
          <p>HTML5</p>
          <p>CSS</p>
          <p>SASS</p>
          <p>REACT</p>
          <p>JavaScript</p>
          <p>TypeScript</p>
          <p>Next.js</p>
          <p>Shopify Liquid</p>
          <p>WordPress</p>
        </article>
      </div>
      <div className="wrapper">
        <h3>Backend</h3>
        <article className="backend-skills">
          <p>Node.js</p>
          <p>Firebase</p>
          <p>APIs</p>
          <p>GitLab CI/CD</p>
          <p>MySQL</p>
          <p>Redux</p>
          <p>PostgreSQL</p>
        </article>
      </div>
    </section>
  );
}

export default SkillsSection;