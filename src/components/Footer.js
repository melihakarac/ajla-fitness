import React from 'react';
import './Footer.css';
import { useLanguage } from '../contexts/LanguageContext';
import { SECTION_IDS } from '../constants/sections';
import Container from './common/Container';

const Footer = () => {
  const { translations } = useLanguage();
  const { footer } = translations || {};

  return (
    <footer className="footer">
      <Container>
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-brand">{footer?.brandName}</h3>
            <p className="footer-tagline">{footer?.tagline}</p>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">{footer?.sections?.quickLinks?.title}</h4>
            <ul className="footer-links">
              <li><a href={`#${SECTION_IDS.HOME}`}>{footer?.sections?.quickLinks?.links?.home}</a></li>
              <li><a href={`#${SECTION_IDS.ABOUT}`}>{footer?.sections?.quickLinks?.links?.about}</a></li>
              <li><a href={`#${SECTION_IDS.PROGRAMS}`}>{footer?.sections?.quickLinks?.links?.programs}</a></li>
              <li><a href={`#${SECTION_IDS.TESTIMONIALS}`}>{footer?.sections?.quickLinks?.links?.testimonials}</a></li>
              <li><a href={`#${SECTION_IDS.CONTACT}`}>{footer?.sections?.quickLinks?.links?.contact}</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">{footer?.sections?.socialMedia?.title}</h4>
            <div className="social-media">
              {footer?.sections?.socialMedia?.links?.map((link, index) => (
                <a 
                  key={index}
                  href={`https://${link.name.toLowerCase()}.com`}
                  className="social-link" 
                  aria-label={link.ariaLabel}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon} {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {footer?.copyright}</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

