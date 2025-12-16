// Language utility for managing translations

const DEFAULT_LANGUAGE = 'bs'; // Set Bosnian as default
const SUPPORTED_LANGUAGES = ['en', 'bs'];

let currentLanguage = DEFAULT_LANGUAGE;
let translations = null;
let allTranslations = {}; // Store all loaded translations in memory

// Load translations for a specific language
const loadLanguageFile = async (lang) => {
  try {
    const content = await import(`../data/content.${lang}.json`);
    return content.default || content;
  } catch (error) {
    console.error(`Failed to load translations for language: ${lang}`, error);
    throw error;
  }
};

// Preload all languages for instant switching
export const preloadAllLanguages = async () => {
  try {
    // Load all languages in parallel
    const languagePromises = SUPPORTED_LANGUAGES.map(async (lang) => {
      const trans = await loadLanguageFile(lang);
      allTranslations[lang] = trans;
      return { lang, trans };
    });
    
    await Promise.all(languagePromises);
    return allTranslations;
  } catch (error) {
    console.error('Failed to preload languages:', error);
    throw error;
  }
};

// Get current translations
export const getTranslations = () => {
  return translations;
};

// Get current language
export const getCurrentLanguage = () => {
  return currentLanguage;
};

// Set language (instant - uses preloaded translations)
export const setLanguage = (lang) => {
  if (SUPPORTED_LANGUAGES.includes(lang)) {
    if (allTranslations[lang]) {
      // Use preloaded translation - instant!
      translations = allTranslations[lang];
      currentLanguage = lang;
      // Store preference in localStorage
      localStorage.setItem('preferredLanguage', lang);
      return translations;
    } else {
      // This shouldn't happen if preloadAllLanguages was called, but handle it just in case
      console.warn(`Language ${lang} not preloaded, loading on demand...`);
      // For now, throw an error to ensure preloading happens
      throw new Error(`Language ${lang} not preloaded. Call preloadAllLanguages() first.`);
    }
  }
  throw new Error(`Unsupported language: ${lang}`);
};

// Initialize language on load - preloads all languages
export const initLanguage = async () => {
  // Preload all languages for instant switching
  await preloadAllLanguages();
  
  // Check for saved preference
  const savedLang = localStorage.getItem('preferredLanguage');
  const lang = savedLang && SUPPORTED_LANGUAGES.includes(savedLang) 
    ? savedLang 
    : DEFAULT_LANGUAGE;
  
  // Set initial language from preloaded translations
  translations = allTranslations[lang];
  currentLanguage = lang;
  
  return translations;
};

// Get supported languages
export const getSupportedLanguages = () => {
  return SUPPORTED_LANGUAGES;
};

