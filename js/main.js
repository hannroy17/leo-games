// =========================
// 📦 IMPORTS
// =========================
import { setLanguage, updateLanguage, texts } from './language.js';

document.addEventListener("DOMContentLoaded", () => {
  const onHome = !document.getElementById("home").classList.contains("hidden");
  const backBtn = document.getElementById("backBtn");
  if (onHome && backBtn) {
    backBtn.classList.add("hidden");
  }
});

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
  const mainGame = document.getElementById('mainGame');
  const speedGame = document.getElementById('speedGame');
  const gameSelection = document.getElementById('gameSelection');
  const gameSelectionChiffres = document.getElementById("gameSelectionChiffres");
  const numberGame = document.getElementById("numberGame");

  if (!mainGame.classList.contains('hidden')) {
    mainGame.classList.add('hidden');
    gameSelection.classList.remove('hidden');
  } else if (!speedGame.classList.contains('hidden')) {
    speedGame.classList.add('hidden');
    gameSelection.classList.remove('hidden');
  } else if (!gameSelection.classList.contains('hidden')) {
    gameSelection.classList.add('hidden');
    document.getElementById('home').classList.remove('hidden');
  } else if (!gameSelectionChiffres.classList.contains("hidden")) {
    gameSelectionChiffres.classList.add('hidden');
    document.getElementById('home').classList.remove('hidden');
  } else if (!numberGame.classList.contains("hidden")) {
    numberGame.classList.add('hidden');
    gameSelectionChiffres.classList.remove('hidden');
  }

  // 👉 cacher le bouton retour si on est sur la home
  if (!document.getElementById("home").classList.contains("hidden")) {
    document.getElementById("backBtn").classList.add("hidden");
  } else {
    updateBackButton(); // sinon on met à jour
  }
}

export function goHome() {
  hideAllScreens();
  document.getElementById('home').classList.remove('hidden');

  // Cacher le bouton retour
  const backBtn = document.getElementById("backBtn");
  if (backBtn) backBtn.classList.add("hidden");
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
    navigator.serviceWorker.register('service-worker.js')
      .then(reg => console.log('✅ Service Worker enregistré :', reg.scope))
      .catch(err => console.log('❌ Échec SW :', err));
  });
}