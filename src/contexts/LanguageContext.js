import React, { createContext, useContext, useState, useEffect } from 'react';
import { initLanguage, setLanguage as setLang, getCurrentLanguage } from '../utils/language';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [translations, setTranslations] = useState(null);
  const [currentLang, setCurrentLang] = useState('bs');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initialize = async () => {
      try {
        const trans = await initLanguage();
        setTranslations(trans);
        setCurrentLang(getCurrentLanguage());
      } catch (error) {
        console.error('Failed to initialize language:', error);
      } finally {
        setLoading(false);
      }
    };

    initialize();
  }, []);

  const changeLanguage = (lang) => {
    try {
      // This is now synchronous/instant since all languages are preloaded
      const trans = setLang(lang);
      setTranslations(trans);
      setCurrentLang(getCurrentLanguage());
    } catch (error) {
      console.error('Failed to change language:', error);
    }
  };

  const value = {
    translations,
    currentLanguage: currentLang,
    changeLanguage,
    loading
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

