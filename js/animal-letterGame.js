// animal-letterGame.js (module version)

const correctSound = new Audio('assets/sounds/correct.mp3');
const wrongSound = new Audio('assets/sounds/wrong.mp3');

import { animals } from './animals-data.js';
import { texts, currentLang } from './language.js';
import { updateBackButton, hideAllScreens } from './main.js';

let currentLetter = 'A';

export function startAnimalGame() {
  hideAllScreens();
  document.getElementById('mainGame').classList.remove('hidden');
  nextRound();
  updateBackButton();
}

export function nextRound() {
  const allLetters = [...new Set(animals
    .filter(a => countByInitial(a[currentLang].initiale) >= 2)
    .map(a => a[currentLang].initiale))];

  currentLetter = allLetters[Math.floor(Math.random() * allLetters.length)];
  showQuestion();
}

export function countByInitial(letter) {
  return animals.filter(a => a[currentLang].initiale === letter).length;
}

export function showQuestion() {
  const questionText = currentLang === 'fr'
    ? `Quel animal commence par la lettre ${currentLetter} ?`
    : `Welches Tier beginnt mit dem Buchstaben ${currentLetter}?`;

  document.getElementById('question').textContent = questionText;

  const correctAnimals = animals.filter(a => a[currentLang].initiale === currentLetter);
  const wrongAnimals = animals.filter(a => a[currentLang].initiale !== currentLetter);

  const correct = correctAnimals[Math.floor(Math.random() * correctAnimals.length)];
  const wrong = wrongAnimals[Math.floor(Math.random() * wrongAnimals.length)];

  const options = [correct, wrong].sort(() => Math.random() - 0.5);

  const grid = document.getElementById('imageGrid');
  grid.innerHTML = '';

  options.forEach(animal => {
    const wrapper = document.createElement('div');
    wrapper.className = 'card';

    const img = document.createElement('img');
    img.src = animal.image;
    img.alt = animal[currentLang].nom;

    const label = document.createElement('div');
    label.className = 'label';

    img.onclick = () => {
      const isCorrect = animal[currentLang].initiale === currentLetter;
      img.classList.add(isCorrect ? 'correct' : 'wrong');
      label.textContent = `${animal[currentLang].nom}`;
      if (isCorrect) {
        correctSound.play();  // 🔊 son bonne réponse
        setTimeout(nextRound, 1000);
      } else {
        wrongSound.play(); // 🔊 son mauvaise réponse
      }
    };

    wrapper.appendChild(img);
    wrapper.appendChild(label);
    grid.appendChild(wrapper);
  });
}
