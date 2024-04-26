const i18next = require('i18next');

i18next.init({
  lng: 'en', 
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


function getKindnessChallengePrompt(challengeNumber, language) {
  const prompt = i18next.t(`prompts.kindnessChallenge${challengeNumber}`, { lng: language });
  const twist = i18next.t(`twists.kindnessChallenge${challengeNumber}`, { lng: language });
  return `${prompt} ${twist}`;
}

function setLanguage(language) {
  i18next.changeLanguage(language, (err, t) => {
    if (err) return console.error('Something went wrong loading language:', err);
    console.log('Language switched to', language);
    renderPrompts();
  });
}


function renderPrompts() {
  const challengeNumber = 1; 
  const language = i18next.language; 
  const kindnessChallenge = getKindnessChallengePrompt(challengeNumber, language);
  console.log(kindnessChallenge);
}

setLanguage('en');
