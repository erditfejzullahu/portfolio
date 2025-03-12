import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative flex p-6 font-normal text-sm items-center justify-center shadow-[0_-5px_5px_rgba(0,0,0,0.1)]" style={{background: "rgba(0,0,0,0.07)"}}>
      Erdit Fejzullahu © {currentYear} Copyright
    </footer>
  );
};

export default Footer;
