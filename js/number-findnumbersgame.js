// number-findnumbersgame.js

import { texts, currentLang, updateLanguage } from './language.js';
import { hideAllScreens } from './main.js';

let currentNumber = 1;

export function startNumberGame() {
  hideAllScreens();
  document.getElementById('numberGame').classList.remove('hidden');
  document.getElementById('numberSuccess').classList.add('hidden');
  document.getElementById('numberChoices').classList.remove('hidden');
  currentNumber = 1;
  showNumberQuestion();
}

export function showNumberQuestion() {
  const questionElem = document.getElementById("numberQuestion");

  if (currentNumber > 10) {
    document.getElementById("numberChoices").classList.add("hidden");
    document.getElementById("numberSuccess").classList.remove("hidden");
    questionElem.textContent = "";
    return;
  }

  questionElem.textContent = texts.numberQuestionBase[currentLang] + currentNumber;

  const choices = [currentNumber];
  while (choices.length < 4) {
    const rand = Math.floor(Math.random() * 10) + 1;
    if (!choices.includes(rand)) choices.push(rand);
  }

  choices.sort(() => Math.random() - 0.5);

  const container = document.getElementById("numberChoices");
  container.innerHTML = "";
  document.getElementById("numberSuccess").classList.add("hidden");
  container.classList.remove("hidden");

  choices.forEach(num => {
    const btn = document.createElement("button");
    btn.textContent = num;
    btn.className = "button";

    btn.onclick = () => {
      if (num === currentNumber) {
        btn.classList.add("success");
        setTimeout(() => {
          btn.classList.remove("success");
          currentNumber++;
          showNumberQuestion();
        }, 700);
      } else {
        btn.style.backgroundColor = "#f44336";
        setTimeout(() => (btn.style.backgroundColor = ""), 600);
      }
    };

    container.appendChild(btn);
  });
}

export function restartNumberGame() {
  currentNumber = 1;
  document.getElementById("numberSuccess").classList.add("hidden");
  showNumberQuestion();
}

export function goToNumberGameSelection() {
  hideAllScreens();
  document.getElementById("gameSelectionChiffres").classList.remove("hidden");
  updateLanguage();
}