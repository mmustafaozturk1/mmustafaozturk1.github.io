
import React from 'react';
import SocialLinks from './SocialLinks';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 text-center text-slate">
      <div className="container mx-auto px-6">
        <div className="md:hidden flex justify-center mb-6">
          <SocialLinks />
        </div>
        <p className="font-mono text-sm text-light-slate">
          Designed & Built by Mustafa Ozturk
        </p>
      </div>
    </footer>
  );
};

export default Footer;
