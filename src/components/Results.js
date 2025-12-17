import React from 'react';
import './Results.css';
import { useLanguage } from '../contexts/LanguageContext';
import { SECTION_IDS } from '../constants/sections';
import Container from './common/Container';
import Section from './common/Section';
import ImagePlaceholder from './common/ImagePlaceholder';
import useCarousel from '../hooks/useCarousel';

const Results = () => {
  const { translations } = useLanguage();
  const { results } = translations || {};
  const items = results?.items || [];
  const labels = results?.labels || {};
  const beforeLabel = labels.before || 'Before';
  const afterLabel = labels.after || 'After';

  const {
    currentIndex,
    goTo,
    goPrevious,
    goNext,
    pause,
    resume,
  } = useCarousel({
    length: items.length,
    autoInterval: 5000,
    resumeDelay: 10000,
  });

  const goToSlide = (index) => goTo(index);

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <Section id={SECTION_IDS.RESULTS} className="results" title={results?.title} subtitle={results?.subtitle}>
      <Container>
        <div 
          className="results-carousel"
          onMouseEnter={pause}
          onMouseLeave={resume}
        >
          <div className="carousel-wrapper">
            <button 
              className="carousel-button carousel-button-prev" 
              onClick={goPrevious}
              aria-label="Previous slide"
            >
              ‹
            </button>

            <div className="carousel-container" aria-live="polite">
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
                >
                  <div className="before-after-card">
                    <div className="before-after-images">
                      <div className="before-after-image">
                        <div className="image-label before-label">{beforeLabel}</div>
                        <ImagePlaceholder 
                          text={item.beforeImage || 'Before Image'} 
                          size="large"
                        />
                      </div>
                      <div className="before-after-image">
                        <div className="image-label after-label">{afterLabel}</div>
                        <ImagePlaceholder 
                          text={item.afterImage || 'After Image'} 
                          size="large"
                        />
                      </div>
                    </div>
                    <div className="slide-info">
                      <h3 className="slide-name">{item.name}</h3>
                      <div className="slide-details">
                        {item.result && (
                          <span className="slide-result">{item.result}</span>
                        )}
                        {item.timeframe && (
                          <span className="slide-timeframe">{item.timeframe}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button 
              className="carousel-button carousel-button-next" 
              onClick={goNext}
              aria-label="Next slide"
            >
              ›
            </button>
          </div>

          <div className="carousel-indicators">
            {items.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-pressed={index === currentIndex}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Results;
