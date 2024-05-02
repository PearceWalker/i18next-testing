// Require i18next library
const i18next = require('i18next');

// Initialize i18next
i18next.init({
  lng: 'en', // default language
  resources: {
    en: {
      translation: {
        prompts: {
          kindnessChallenge1: "Compliment a stranger.",
          kindnessChallenge2: "Write a heartfelt letter to someone you care about.",
          kindnessChallenge3: "Help someone carry their groceries.",
        },
        twists: {
          kindnessChallenge1: "But you must compliment them in their native language.",
          kindnessChallenge2: "But you must write it without using the letter 'e'.",
          kindnessChallenge3: "But you must do it without being asked.",
        }
      }
    },
    es: {
      translation: {
        prompts: {
          kindnessChallenge1: "Dar un cumplido a un desconocido.",
          kindnessChallenge2: "Escribir una carta sincera a alguien que te importe.",
          kindnessChallenge3: "Ayudar a alguien a llevar sus compras.",
        },
        twists: {
          kindnessChallenge1: "Pero debes hacer el cumplido en su idioma nativo.",
          kindnessChallenge2: "Pero debes escribirlo sin usar la letra 'e'.",
          kindnessChallenge3: "Pero debes hacerlo sin que te lo pidan.",
        }
      }
    },
  },
});

// Function to get a kindness challenge prompt
function getKindnessChallengePrompt(challengeNumber, language) {
  const prompt = i18next.t(`prompts.kindnessChallenge${challengeNumber}`, { lng: language });
  const twist = i18next.t(`twists.kindnessChallenge${challengeNumber}`, { lng: language });
  return `${prompt} ${twist}`;
}

// Function to set the language
function setLanguage(language) {
  i18next.changeLanguage(language, (err, t) => {
    if (err) return console.error('Something went wrong loading language:', err);
    console.log('Language switched to', language);
    // Re-render the prompts with the new language
    renderPrompts();
  });
}

// Function to render prompts in the current language
function renderPrompts() {
  const challengeNumber = 2; // You can change this to get different prompts
  const language = i18next.language; // Get the current language
  const kindnessChallenge = getKindnessChallengePrompt(challengeNumber, language);
  console.log(kindnessChallenge);
}

// Example usage to switch language to Spanish
setLanguage('en');
