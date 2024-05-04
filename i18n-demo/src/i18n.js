// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      greeting: 'Hello, World!',
      commonPhrases_hello: 'Hello',
      commonPhrases_howAreYou: 'How are you?',
      commonPhrases_goodbye: 'Goodbye',
      commonPhrases_thankYou: 'Thank you',
      commonPhrases: 'Common Phrases'
    }
  },
  es: {
    translation: {
      greeting: '¡Hola, Mundo!',
      commonPhrases_hello: 'Hola',
      commonPhrases_howAreYou: '¿Cómo estás?',
      commonPhrases_goodbye: 'Adiós',
      commonPhrases_thankYou: 'Gracias',
      commonPhrases: 'Frases Comunes'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
