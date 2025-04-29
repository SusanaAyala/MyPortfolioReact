import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Andrew from '../assets/andrew.ferguson.png';
import Apple from '../assets/apple-touch-icon.png';
import Autosleek from '../assets/autosleekproduct.png';
import Congility from '../assets/congilityportal.png';
import Design from '../assets/designproject.png';
import Dark from '../assets/emaildark.png';
import Light from '../assets/emaillight.png';
import Githubdark from '../assets/githubdark.png';
import Githublight from '../assets/githublight.png';
import Linkedindark from '../assets/linkedindark.png';
import Linkedinlight from '../assets/linkedinlight.png';
import Oginitive from '../assets/ognitivej.png';
import Seraphina from '../assets/seraphina.project.png';
import Stuart from '../assets/stuart.png';
import Superwlad from '../assets/superwlad.png';
import Susie from '../assets/susieprofile.png';
import Themelight from '../assets/themelight.png';
import Themedark from '../assets/themedark.png';
import Porfi from '../assets/porfi.png';

function Hero() {
  // State for managing the active section
  const [activeSection, setActiveSection] = useState('portfolio'); // Default to 'portfolio'

  // State for managing the theme (light or dark)
  const [isDark, setIsDark] = useState(false);

  // Load theme from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('isDark') === 'true';
    setIsDark(savedTheme);
    document.body.classList.toggle('dark-theme', savedTheme);
  }, []);

  // Update theme in localStorage and DOM when `isDark` changes
  useEffect(() => {
    localStorage.setItem('isDark', isDark);
    document.body.classList.toggle('dark-theme', isDark);
  }, [isDark]);

  // Toggle theme handler
  const toggleTheme = () => {
    setIsDark((prevTheme) => !prevTheme);
  };

  return (
    <div>
      <section className="hero">
        <div className="cursor-default items-center gap-4 md:flex md:w-3/12">
          <div className="notification-mark">
            <span></span></div>
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
            <img
              src={Susie}
              alt="Susie Ayala"
            />
          </div>
          <div className="hero-info">
            <h1>Susana Nohemi Ayala</h1>
            <h2>Frontend Developer, 🇬🇧🇪🇨</h2>
            <div className="logo-container">
              <a href="https://github.com/SusanaAyala">
                <img src={isDark ? Githubdark: Githublight} alt="github logo" />
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
      <section className="experience">
        <p>
          Hello! I’m Susie, a passionate front-end developer specializing in React, WordPress, CSS, JavaScript, and Shopify Theme Development. I thrive on crafting engaging, responsive, and seamless designs, working closely with clients to bring their visions to life. Check out my work here👇
        </p>
      </section>

    {/* Section Navigation */}
      <section className="cta">
        <div className="reference-btn">
          <button
           className={`btn-2 reference-btn ${activeSection === 'testimonials' ? 'active-btn' : ''}`}
           onClick={() => setActiveSection('testimonials')}
           >References
           </button>
        </div>
        <div className="mail">
          <a href="mailto:s.ayala@hotmail.co.uk">
            <button className="btn-2 contact-btn">Contact Me</button>
          </a>
        </div>
      </section>

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
           onClick={() => {
            console.log('Skills button clicked');
            setActiveSection('skills')
          }}
           >
          Skills
          </button>
        </div>
      </section>

      {/* Testimonials Section */}
      {activeSection === 'testimonials' && (
      <section className="testimonials" id="testimonials">
        <Swiper
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination, Autoplay]}
          className="testimonial-carousel"
        >
          <SwiperSlide className="testimonial-slide">
            <img src={Superwlad} alt="Wladimir Singer" className="testimonial-img" />
            <p style={{ fontFamily: "'Playpen Sans', cursive" }}>"Outstanding Professional! I had the pleasure of working with Susie and the experience was exceptional. She delivered top-quality results with perfect timing and demonstrated remarkable expertise in her field. Her professionalism, attention to detail, and clear communication set her apart. I highly recommend her to anyone seeking reliable, high-caliber work. Thank you for an amazing collaboration!."</p>
            <h4>- Wladimir Singer 🇺🇸</h4>
          </SwiperSlide>
          <SwiperSlide className="testimonial-slide">
            <img src={Stuart} alt="Stuart Miller" className="testimonial-img" />
            <p style={{ fontFamily: "'Playpen Sans', cursive" }}>"Susie has been an absolute pleasure to work with! She exceeded expectations, from designing to building my Shopify store. Even after the project was completed, she continued to provide support beyond the original scope. Although my unforeseen circumstances paused further work, I truly appreciate her dedication and expertise and look forward to collaborating again in the future."
            </p>
            <h4>- Stuart Miller 🇬🇧</h4>
          </SwiperSlide>
          <SwiperSlide className="testimonial-slide">
            <img src={Andrew} alt="Andrew Ferguson" className="testimonial-img" />
            <p style={{ fontFamily: "'Playpen Sans', cursive" }}>"Susie is an exceptional colleague to work with, she has demonstrated that she is consistent and diligent in completing work set out before her while under pressure and adhering to complex specifications. I was impressed by her attention to detail and positive attitude within a team environment."
            </p>
            <h4>- Andrew Ferguson 🇬🇧</h4>
          </SwiperSlide>
          <SwiperSlide className="testimonial-slide">
            <img src={Apple} alt="Oliver Garas" className="testimonial-img" />
            <p style={{ fontFamily: "'Playpen Sans', cursive" }}>
              "Susie is a great person to work with. She has a fantastic attitude, a strong sense of professionalism, and an excellent eye for detail. I truly appreciate her dedication and work ethic. She will be a valuable asset to any organization she joins."
            </p>
            <h4>- Oliver Garas 🇦🇺</h4>
          </SwiperSlide>
        </Swiper>
      </section>

      )}

      {/* Portfolio Section */}
      {activeSection === 'portfolio' && (
      <section className="portfolio" id="portfolio">
        <div className="wrapper project-wrapper">
          <a href="https://github.com/SusanaAyala/AutoSleek">
            <img src={Autosleek} alt="AutoSleek" />
            <div className="overlay">
              <h3>AutoSleek</h3>
              <p className="subtitle">Shopify Custom Liquid, HTML5, CSS, JavaScript</p>
              <p style={{ fontFamily: "'Playpen Sans', cursive" }}>A full-featured car detailing e-commerce website, designed in Figma and built on Shopify using Liquid for theme customization. Compatible with all mobile devices, it features a beautiful and pleasant user interface. The goal was to create a modern, responsive, and easy-to-use online shopping platform for car detailing enthusiasts.</p>
            </div>
          </a>
        </div>
        <div className="wrapper project-wrapper">
          <a href="https://www.ognitive.io/">
            <img src={Oginitive} alt="Oginitive" />
            <div className="overlay">
              <h3>Ognitive.io</h3>
              <p className="subtitle">Next.js, Tailwind CSS, TypeScript, Firebase</p>
              <p style={{ fontFamily: "'Playpen Sans', cursive" }}>Ognitive.io is a full-stack website built using modern web technologies, including Next.js with Firebase, TypeScript, and Tailwind CSS. The project delivers a smooth, dynamic user experience with integrations like Google Analytics and Facebook, providing real-time insights, automated reports, and data-driven recommendations to improve campaign performance and ROI.</p>
            </div>
          </a>
        </div>
        <div className="wrapper project-wrapper">
          <a href="https://www.figma.com/proto/aMwc2HfjfhKTVrw0nzEQT5/Portfolio?node-id=2-426&p=f&t=ThKD4ZXc5e0dT7Zg-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1">
            <img src={Design} alt="Design" />
            <div className="overlay">
              <h3>UI/UX Designs</h3>
              <p className="subtitle"> Design thinking, Figma, Miro</p>
              <p style={{ fontFamily: "'Playpen Sans', cursive" }}>Leveraging the latest technologies and tools to craft visually appealing, user-centric designs that enhance engagement and usability. My design process includes wireframing, prototyping, and storyboarding, along with the necessary research to understand goals, target audience, and unique requirements ensuring a tailored, thoughtful experience that aligns with both user needs and brand vision.</p>
            </div>
          </a>
        </div>
        <div className="wrapper project-wrapper">
          <a href="https://seraphinababyshop.com/">
            <img src={Seraphina} alt="Seraphina" />
            <div className="overlay">
              <h3>Seraphina</h3>
              <p className="subtitle">Shopify Custom Liquid, HTML5, CSS, JavaScript</p>
              <p style={{ fontFamily: "'Playpen Sans', cursive" }}>A custom-designed Shopify store for parents and families, built with Liquid for theme customization, featuring premium baby essentials. Fully responsive, it offers a beautiful, user-friendly interface across mobile and desktop devices. The goal was to create an elegant, responsive and easy-to-use online shopping platform.</p>
            </div>
          </a>
        </div>
        <div className="wrapper project-wrapper">
          <a href="https://github.com/SusanaAyala/MyPortfolioReact">
            <img src={Porfi} alt="Portfolio" />
            <div className="overlay">
              <h3>Portfolio</h3>
              <p className="subtitle">React.js, JavaScript, HTML5, CSS</p>
              <p style={{ fontFamily: "'Playpen Sans', cursive" }}>Simple and classic modern portfolio for someone who wants to present themselves as a front-end developer/designer. This is a single-page, responsive portfolio, built with React.js, showcasing work projects, social icons, expertise, and contact information. It is a constantly evolving project that reflects growth and emerging skills.</p>
            </div>
          </a>
        </div>

        <div className="wrapper project-wrapper">
          <a href="https://congility.com/">
            <img src={Congility} alt="Congility"/>
            <div className="overlay">
              <h3>Congility</h3>
              <p className="subtitle">Problem Solving, WordPress, Express.js, Redux, React</p>
              <p style={{ fontFamily: "'Playpen Sans', cursive" }}>During my role as a web developer, I gained valuable hands-on experience in software engineering, collaborating closely with the product team to design, build, and maintain scalable web applications. Highlights include refactoring reusable ReactJS components, documenting requirements, managing tasks with JIRA, resolving cross-browser issues, and improving overall code quality and efficiency.</p>
            </div>
          </a>
        </div>
      </section>
      )}

      {/* Skills Section */}
      {activeSection === 'skills' && (
      <section className="skills"
      id="skills">
        {console.log('Rendering Skills Section')}
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
      )}


      <footer>
        <p>Susana Ayala &copy; 2025. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Hero;


