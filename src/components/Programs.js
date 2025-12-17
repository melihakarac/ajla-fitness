import React from 'react';
import './Programs.css';
import { useLanguage } from '../contexts/LanguageContext';
import { SECTION_IDS } from '../constants/sections';
import Container from './common/Container';
import Section from './common/Section';
import Grid from './common/Grid';
import Card from './common/Card';

const Programs = () => {
  const { translations } = useLanguage();
  const { programs } = translations || {};

  return (
    <Section id={SECTION_IDS.PROGRAMS} className="programs" title={programs?.title} subtitle={programs?.subtitle}>
      <Container>
        <Grid className="programs-grid" minWidth="450px">
          {programs?.items?.map((program, index) => (
            <Card key={index} className="program-card card-lift">
              <div className="program-icon">{program.icon}</div>
              <h3 className="program-title">{program.title}</h3>
              <p className="program-description">{program.description}</p>
              <a href={`#${SECTION_IDS.CONTACT}`} className="program-link">{program.linkText}</a>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Programs;

