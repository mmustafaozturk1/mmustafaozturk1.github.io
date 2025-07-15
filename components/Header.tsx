
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkClass = "px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 text-slate hover:text-green";
  const activeLinkClass = "text-green";

  const getLinkClassName = ({ isActive }: { isActive: boolean }) => `${linkClass} ${isActive ? activeLinkClass : ''}`;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-light-navy/80 shadow-lg backdrop-blur-sm' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-2xl font-bold font-mono text-green hover:text-green/80 transition-colors">
            M.O.
          </Link>
          <div className="hidden md:flex items-center space-x-2">
            <NavLink to="/" className={getLinkClassName} end>Home</NavLink>
            <NavLink to="/about" className={getLinkClassName}>My Resume</NavLink>
            <NavLink to="/projects" className={getLinkClassName}>Projects</NavLink>
            <a href="mailto:muhammetmustafaozturk@gmail.com" className="ml-4 px-4 py-2 border border-green rounded-md text-green hover:bg-green/10 transition-colors text-sm">
              Contact
            </a>
          </div>
           <div className="md:hidden">
              {/* Mobile Menu Button can be added here */}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;