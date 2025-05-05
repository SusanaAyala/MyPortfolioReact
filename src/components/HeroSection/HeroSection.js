import React from 'react';
import Susie from '../../assets/susieprofile.png';
import Themelight from '../../assets/themelight.png';
import Themedark from '../../assets/themedark.png';
import Githubdark from '../../assets/githubdark.png';
import Githublight from '../../assets/githublight.png';
import Linkedindark from '../../assets/linkedindark.png';
import Linkedinlight from '../../assets/linkedinlight.png';
import Dark from '../../assets/emaildark.png';
import Light from '../../assets/emaillight.png';

function HeroSection({ isDark, toggleTheme }) {
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
        src={isDark ? Themedark : Themelight}
        onClick={toggleTheme}
        alt="theme icon"
      />
      <div className="hero-pic">
        <div className="inner-circle"></div>
        <img src={Susie} alt="Susie Ayala" />
      </div>
      <div className="hero-info">
        <h1>Susana Nohemi Ayala</h1>
        <h2>Frontend Developer, 🇬🇧🇪🇨</h2>
        <div className="logo-container">
          <a href="https://github.com/SusanaAyala">
            <img src={isDark ? Githubdark : Githublight} alt="github logo" />
          </a>
          <a href="https://www.linkedin.com/in/susana-ayala-490692220/">
            <img src={isDark ? Linkedindark : Linkedinlight} alt="linkedin logo" />
          </a>
          <a href="mailto:s.ayala@hotmail.co.uk">
            <img src={isDark ? Dark : Light} alt="email logo" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;