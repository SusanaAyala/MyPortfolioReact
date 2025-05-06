import React from 'react';

function SkillsSection({ skills }) {
  return (
    <section className="skills" id="skills">
      <div className="wrapper">
        <h3>Frontend</h3>
        <article className="frontend-skills">
          {skills.frontend.map((skill, index) => (
            <p key={index}>{skill}</p>
          ))}
        </article>
      </div>
      <div className="wrapper">
        <h3>Backend</h3>
        <article className="backend-skills">
          {skills.backend.map((skill, index) => (
            <p key={index}>{skill}</p>
          ))}
        </article>
      </div>
    </section>
  );
}

export default SkillsSection;