// animal-speedGame.js
import { speedAnimals } from './animals-data.js';
import { texts, currentLang } from './language.js';
import { updateBackButton, hideAllScreens } from './main.js';

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
    img.onclick = () => {
      const isCorrect = animal.id === fastest.id;
      img.classList.add(isCorrect ? 'correct' : 'wrong');
      label.textContent = `${animal[currentLang].nom} - ${animal.vitesse} km/h`;
      if (isCorrect) setTimeout(showSpeedQuestion, 1000);
    };

    const label = document.createElement('div');
    label.className = 'label';

    wrapper.appendChild(img);
    wrapper.appendChild(label);
    container.appendChild(wrapper);
  });
}