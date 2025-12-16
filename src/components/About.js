import React from 'react';
import './About.css';
import { useLanguage } from '../contexts/LanguageContext';
import { SECTION_IDS } from '../constants/sections';
import Container from './common/Container';
import Button from './common/Button';
import ImagePlaceholder from './common/ImagePlaceholder';

const About = () => {
  const { translations } = useLanguage();
  const { about } = translations || {};

  return (
    <section id={SECTION_IDS.ABOUT} className="about">
      <Container>
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">{about?.title}</h2>
            {about?.bio?.map((paragraph, index) => (
              <p key={index} className="about-bio">
                {paragraph}
              </p>
            ))}
            <Button href={`#${SECTION_IDS.CONTACT}`} variant="primary">
              {about?.ctaButton}
            </Button>
          </div>
          <div className="about-image">
            <ImagePlaceholder text={about?.imagePlaceholder} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;

