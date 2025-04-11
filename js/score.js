// 🎯 Étape 1: score.js
// Gère le score pour chaque jeu

const scores = JSON.parse(localStorage.getItem('scores')) || {};

// 👉 Fonction principale
export function incrementScore(gameId) {
  scores[gameId] = (scores[gameId] || 0) + 1;
  localStorage.setItem('scores', JSON.stringify(scores));
  return scores[gameId]; // ✅ on retourne le score mis à jour
}

// 👉 Fonction secondaire (lecture)
export function getScore(gameId) {
  return scores[gameId] || 0;
}
