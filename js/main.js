// =========================
// 📦 IMPORTS
// =========================
import { setLanguage, updateLanguage, texts } from './language.js';



// =========================
// 🧭 NAVIGATION
// =========================
export function goToCategory(cat) {
  hideAllScreens();

  if (cat === 'animals') {
    document.getElementById('gameSelection').classList.remove('hidden');
  } else if (cat === 'chiffres') {
    document.getElementById('gameSelectionChiffres').classList.remove('hidden');
  }

  document.getElementById('backBtn').classList.remove('hidden');
  updateBackButton();
}

export function goBack() {
  const screens = {
    mainGame: 'gameSelection',
    speedGame: 'gameSelection',
    numberGame: 'gameSelectionChiffres'
  };

  for (let screen in screens) {
    if (!document.getElementById(screen).classList.contains('hidden')) {
      document.getElementById(screen).classList.add('hidden');
      document.getElementById(screens[screen]).classList.remove('hidden');
      updateBackButton();
      return;
    }
  }

  hideAllScreens();
  document.getElementById('home').classList.remove('hidden');
  updateBackButton();
}

export function goHome() {
  hideAllScreens();
  document.getElementById('home').classList.remove('hidden');
  document.getElementById('backBtn').classList.add('hidden');
  resetNumberGame();
}

// =========================
// 🧼 UTILITAIRES
// =========================
export function hideAllScreens() {
  const screens = [
    'home',
    'gameSelection',
    'gameSelectionChiffres',
    'mainGame',
    'speedGame',
    'numberGame'
  ];

  screens.forEach(id => document.getElementById(id).classList.add('hidden'));

  const success = document.getElementById('numberSuccess');
  if (success) success.classList.add('hidden');

  const backBtn = document.getElementById("backBtn");
  if (!document.getElementById("home").classList.contains("hidden")) {
    backBtn.classList.add("hidden");
  } else {
    backBtn.classList.remove("hidden");
  }
}

export function resetNumberGame() {
  const numberSuccess = document.getElementById('numberSuccess');
  const numberChoices = document.getElementById('numberChoices');
  if (numberSuccess) numberSuccess.classList.add('hidden');
  if (numberChoices) {
    numberChoices.classList.remove('hidden');
    numberChoices.innerHTML = '';
  }
}

export function updateBackButton() {
  const backBtn = document.getElementById('backBtn');
  if (backBtn) backBtn.textContent = texts.backBtn[currentLang];
}

// =========================
// 🚀 INITIALISATION
// =========================
window.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('lang') || 'fr';
  setLanguage(savedLang);
  updateLanguage();
  updateBackButton();

  const backBtn = document.getElementById('backBtn');
  const homePage = document.getElementById('home');
  if (!homePage.classList.contains('hidden')) {
    backBtn.classList.add('hidden');
  }
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(reg => console.log('✅ Service Worker enregistré :', reg.scope))
      .catch(err => console.log('❌ Échec SW :', err));
  });
}
