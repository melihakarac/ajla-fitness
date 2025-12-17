import React, { useState } from 'react';
import './Header.css';
import { useLanguage } from '../contexts/LanguageContext';
import { SECTION_IDS } from '../constants/sections';
import Button from './common/Button';
import LanguageSwitcher from './common/LanguageSwitcher';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { translations } = useLanguage();
  const { header } = translations || {};

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <a href={`#${SECTION_IDS.HOME}`}>{header?.brandName}</a>
          </div>
          
          <button 
            className="menu-toggle" 
            onClick={toggleMenu}
            aria-label={header?.menuToggle}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><a href={`#${SECTION_IDS.HOME}`} onClick={handleNavClick}>{header?.navLinks?.home}</a></li>
            <li><a href={`#${SECTION_IDS.PROGRAMS}`} onClick={handleNavClick}>{header?.navLinks?.programs}</a></li>
            <li><a href={`#${SECTION_IDS.ABOUT}`} onClick={handleNavClick}>{header?.navLinks?.about}</a></li>
            <li><a href={`#${SECTION_IDS.TESTIMONIALS}`} onClick={handleNavClick}>{header?.navLinks?.testimonials}</a></li>
            <li><a href={`#${SECTION_IDS.RESULTS}`} onClick={handleNavClick}>{header?.navLinks?.results}</a></li>
            <li><a href={`#${SECTION_IDS.CONTACT}`} onClick={handleNavClick}>{header?.navLinks?.contact}</a></li>
            <li className="mobile-language-switcher">
              <LanguageSwitcher />
            </li>
          </ul>

          <div className="header-actions">
            <LanguageSwitcher />
            <Button href={`#${SECTION_IDS.CONTACT}`} variant="primary" className="cta-button">
              {header?.ctaButton}
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

