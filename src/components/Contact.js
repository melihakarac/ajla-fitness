import React, { useState } from 'react';
import './Contact.css';
import { useLanguage } from '../contexts/LanguageContext';
import { SECTION_IDS } from '../constants/sections';
import Container from './common/Container';
import Button from './common/Button';
import FormInput from './common/FormInput';

const Contact = () => {
  const { translations } = useLanguage();
  const { contact } = translations || {};
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement form submission to backend/email service
    // For now, just show success message
    alert(contact?.form?.successMessage);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id={SECTION_IDS.CONTACT} className="contact">
      <Container>
        <div className="contact-content">
          <div className="contact-text">
            <h2 className="section-title">{contact?.title}</h2>
            <p className="contact-motivation">
              {contact?.motivation}
            </p>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <FormInput
              label={contact?.form?.name?.label}
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder={contact?.form?.name?.placeholder}
              required
            />
            <FormInput
              label={contact?.form?.email?.label}
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={contact?.form?.email?.placeholder}
              required
            />
            <FormInput
              label={contact?.form?.message?.label}
              name="message"
              type="textarea"
              value={formData.message}
              onChange={handleChange}
              placeholder={contact?.form?.message?.placeholder}
              rows="5"
              required
            />
            <Button type="submit" variant="primary" className="btn-submit">
              {contact?.form?.submitButton}
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Contact;

