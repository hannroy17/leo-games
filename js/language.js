// language.js (module)

export let currentLang = 'fr';

export const texts = {
  welcome: { fr: 'Bienvenue !', de: 'Willkommen!' },
  selectCategory: { fr: 'Choisis une catégorie', de: 'Wähle eine Kategorie' },
  animalsLabel: { fr: 'Animaux', de: 'Tiere' },
  chooseGame: { fr: 'Choisis ton jeu', de: 'Wähle dein Spiel' },
  chooseNumberGame: { fr: "Choisis ton jeu", de: "Wähle dein Spiel" },
  guessLetterGame: { fr: 'Quel animal commence par une lettre ?', de: 'Welches Tier beginnt mit einem Buchstaben?' },
  backBtn: { fr: '← Retour', de: '← Zurück' },
  speedGameBtn: { fr: 'Qui court le plus vite ?', de: 'Wer läuft am schnellsten?' },
  speedQuestion: { fr: 'Qui court le plus vite ?', de: 'Welches Tier läuft am schnellsten?' },
  chiffresLabel: { fr: 'Chiffres', de: 'Zahlen' },
  numberQuestionBase: { fr: 'Trouve le chiffre ', de: 'Finde die Zahl ' },
  numberSuccessTitle: { fr: '🎉 Bravo !', de: '🎉 Gut gemacht!' },
  restartBtn: { fr: '🔁 Recommencer', de: '🔁 Neu starten' },
  nextGameBtn: { fr: '🎮 Jeu suivant', de: '🎮 Nächstes Spiel' },
  numberGameLabel: { fr: 'Trouve le chiffre', de: 'Finde die Zahl' }
};

export function setLanguage(lang) {
  currentLang = lang;
  updateLanguage();
}

export function updateLanguage() {
  for (const key in texts) {
    const el = document.getElementById(key);
    if (el) el.textContent = texts[key][currentLang];
  }

  const numberQuestion = document.getElementById("numberQuestion");
  if (
    numberQuestion &&
    !document.getElementById("numberGame").classList.contains("hidden") &&
    window.currentNumber <= 10
  ) {
    numberQuestion.textContent = texts.numberQuestionBase[currentLang] + window.currentNumber;
  }
}
