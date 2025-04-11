// animal-speedGame.js
const correctSound = new Audio('assets/sounds/correct.mp3');
const wrongSound = new Audio('assets/sounds/wrong.mp3');

import { speedAnimals } from './animals-data.js';
import { texts, currentLang } from './language.js';
import { updateBackButton, hideAllScreens } from './main.js';
import { incrementScore } from './score.js';
import { checkBadge } from './badges.js';
import { showToast } from './toast.js';

export function startSpeedGame() {
  document.getElementById('gameSelection').classList.add('hidden');
  document.getElementById('speedGame').classList.remove('hidden');
  showSpeedQuestion();
  updateBackButton();
}

export function showSpeedQuestion() {
  document.getElementById('speedQuestion').textContent = texts.speedQuestion[currentLang];

  const a = speedAnimals[Math.floor(Math.random() * speedAnimals.length)];
  let b;
  do {
    b = speedAnimals[Math.floor(Math.random() * speedAnimals.length)];
  } while (b.id === a.id);

  const fastest = a.vitesse > b.vitesse ? a : b;
  const choices = [a, b].sort(() => Math.random() - 0.5);

  const container = document.getElementById('speedChoices');
  container.innerHTML = '';

  choices.forEach(animal => {
    const wrapper = document.createElement('div');
    wrapper.className = 'card';

    const img = document.createElement('img');
    img.src = animal.image;
    img.alt = animal[currentLang].nom;

    const label = document.createElement('div');
    label.className = 'label';

    img.onclick = () => {
      const isCorrect = animal.id === fastest.id;
      img.classList.add(isCorrect ? 'correct' : 'wrong');
      label.textContent = `${animal[currentLang].nom} - ${animal.vitesse} km/h`;

      if (isCorrect) {
        correctSound.play();  // 🔊 bonne réponse

        // 🎯 Ajout du score
        const score = incrementScore('animal-speed');

        // 🏅 Vérifie si un badge est débloqué
        const badge = checkBadge('animal-speed', score);
        if (badge) {
          showToast({
            title: currentLang === 'fr' ? 'Nouveau badge !' : 'Neues Abzeichen!',
            description: badge[currentLang].description,
            icon: badge.icon,
            lang: currentLang
          });
        }

        setTimeout(showSpeedQuestion, 1000);
      } else {
        wrongSound.play(); // 🔊 mauvaise réponse
      }
    };

    wrapper.appendChild(img);
    wrapper.appendChild(label);
    container.appendChild(wrapper);
  });
}