import Susie from '../assets/susieprofile.png';
import Themelight from '../assets/themelight.png';
import Themedark from '../assets/themedark.png';
import Githubdark from '../assets/githubdark.png';
import Githublight from '../assets/githublight.png';
import Linkedindark from '../assets/linkedindark.png';
import Linkedinlight from '../assets/linkedinlight.png';
import Dark from '../assets/emaildark.png'; // Keep Dark
import Light from '../assets/emaillight.png'; // Keep Light

const heroData = {
  name: 'Susana Nohemi Ayala',
  title: 'Frontend Developer, 🇬🇧🇪🇨',
  profileImage: Susie,
  themeIcons: {
    light: Themelight,
    dark: Themedark,
  },
  socialLinks: [
    {
      platform: 'GitHub',
      link: 'https://github.com/SusanaAyala',
      icons: {
        light: Githublight,
        dark: Githubdark,
      },
    },
    {
      platform: 'LinkedIn',
      link: 'https://www.linkedin.com/in/susana-ayala-490692220/',
      icons: {
        light: Linkedinlight,
        dark: Linkedindark,
      },
    },
    {
      platform: 'Email',
      link: 'mailto:s.ayala@hotmail.co.uk',
      icons: {
        light: Light, // Use Light
        dark: Dark,   // Use Dark
      },
    },
  ],
};

export default heroData;