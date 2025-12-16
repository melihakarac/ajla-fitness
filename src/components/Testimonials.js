import React from 'react';
import './Testimonials.css';
import { useLanguage } from '../contexts/LanguageContext';
import { SECTION_IDS } from '../constants/sections';
import Container from './common/Container';
import Section from './common/Section';
import Grid from './common/Grid';
import Card from './common/Card';
import ImagePlaceholder from './common/ImagePlaceholder';

const Testimonials = () => {
  const { translations } = useLanguage();
  const { testimonials } = translations || {};

  return (
    <Section id={SECTION_IDS.TESTIMONIALS} className="testimonials" title={testimonials?.title} subtitle={testimonials?.subtitle}>
      <Container>
        <Grid className="testimonials-grid">
          {testimonials?.items?.map((testimonial, index) => (
            <Card key={index} className="testimonial-card">
              <div className="testimonial-image">
                <ImagePlaceholder text={testimonial.imagePlaceholder} size="small" shape="circle" />
              </div>
              <div className="testimonial-content">
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <strong>{testimonial.name}</strong>
                  <span className="testimonial-result">{testimonial.result}</span>
                </div>
              </div>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Testimonials;

