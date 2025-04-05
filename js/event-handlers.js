import { goToCategory, goHome, goBack } from './main.js';
import { startAnimalGame } from './animal-letterGame.js';
import { startSpeedGame } from './animal-speedGame.js';
import { startNumberGame, restartNumberGame, goToNumberGameSelection } from './number-findnumbersgame.js';
import { setLanguage } from './language.js';

window.addEventListener('DOMContentLoaded', () => {
  // Catégories
  document.querySelectorAll('.category-card[data-category]').forEach(card => {
    card.addEventListener('click', () => {
      const category = card.dataset.category;
      goToCategory(category);
    });
  });

  // Jeux animaux
  document.getElementById('startLetterGame')?.addEventListener('click', startAnimalGame);
  document.getElementById('startSpeedGame')?.addEventListener('click', startSpeedGame);

  // Jeu chiffres
  document.getElementById('startNumberGame')?.addEventListener('click', startNumberGame);

  // Boutons de fin de jeu chiffres
  document.getElementById('restartNumberBtn')?.addEventListener('click', restartNumberGame);
  document.getElementById('nextGameBtn')?.addEventListener('click', goToNumberGameSelection);

  // Bouton retour
  document.getElementById('backBtn')?.addEventListener('click', goBack);

  // Logo (accueil)
  document.getElementById('logoImage')?.addEventListener('click', goHome);

  // Drapeaux
  document.querySelectorAll('.flags img').forEach(img => {
    img.addEventListener('click', () => {
      const lang = img.src.includes('/fr') ? 'fr' : 'de';
      setLanguage(lang);
    });
  });
});