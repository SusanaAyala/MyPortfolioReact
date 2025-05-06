import React from 'react';

function FooterSection({ footerData }) {
  return (
    <footer>
      <p>
        {footerData.text} &copy; {footerData.year}. {footerData.message}
      </p>
    </footer>
  );
}

export default FooterSection;