import React from 'react';

function HeroSection({ isDark, toggleTheme, heroData }) {
  return (
    <section className="hero">
      <div className="cursor-default items-center gap-4 md:flex md:w-3/12">
        <div className="notification-mark">
          <span></span>
        </div>
        Available
      </div>
      <img
        id="toggleTheme"
        className="theme-btn"
        src={isDark ? heroData.themeIcons.dark : heroData.themeIcons.light}
        onClick={toggleTheme}
        alt="theme icon"
      />
      <div className="hero-pic">
        <div className="inner-circle"></div>
        <img src={heroData.profileImage} alt={heroData.name} />
      </div>
      <div className="hero-info">
        <h1>{heroData.name}</h1>
        <h2>{heroData.title}</h2>
        <div className="logo-container">
          {heroData.socialLinks.map((social, index) => (
            <a key={index} href={social.link}>
              <img
                src={isDark ? social.icons.dark : social.icons.light}
                alt={`${social.platform} logo`}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;