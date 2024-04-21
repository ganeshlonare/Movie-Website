// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#212529] h-14 text-white flex items-center justify-center">
      <div className="container mx-auto">
        <p className="text-center pt-3">&copy; {new Date().getFullYear()} Movie Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
