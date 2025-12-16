import React from 'react';
import './Hero.css';
import { useLanguage } from '../contexts/LanguageContext';
import { SECTION_IDS } from '../constants/sections';
import Button from './common/Button';
import ImagePlaceholder from './common/ImagePlaceholder';

const Hero = () => {
  const { translations } = useLanguage();
  const { hero } = translations || {};

  return (
    <section id={SECTION_IDS.HOME} className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-headline">
            {hero?.headline} <span className="highlight">{hero?.headlineHighlight}</span>
          </h1>
          <p className="hero-text">
            {hero?.text}
          </p>
          <div className="hero-buttons">
            <Button href={`#${SECTION_IDS.CONTACT}`} variant="primary">
              {hero?.primaryButton}
            </Button>
            <Button href={`#${SECTION_IDS.PROGRAMS}`} variant="secondary">
              {hero?.secondaryButton}
            </Button>
          </div>
        </div>
        <div className="hero-image">
          <ImagePlaceholder text={hero?.imagePlaceholder} />
        </div>
      </div>
    </section>
  );
};

export default Hero;

