// src/App.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import './i18n'; // Initialize i18next

function App() {
  const { t, i18n } = useTranslation();

  function toggleLanguage() {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
  }

  return (
    <div className="App">
      <h1>{t('greeting')}</h1>
      <button onClick={() => toggleLanguage()}>
        {i18n.language === 'en' ? 'Switch to Spanish' : 'Cambiar a inglés'}
      </button>
      <hr />
      <h2>{t('commonPhrases')}</h2>
      <ul>
        <li>{t('commonPhrases_hello')}</li>
        <li>{t('commonPhrases_howAreYou')}</li>
        <li>{t('commonPhrases_goodbye')}</li>
        <li>{t('commonPhrases_thankYou')}</li>
        
      </ul>
    </div>
  );
}

export default App;




