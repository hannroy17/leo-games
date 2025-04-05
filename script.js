let currentLang = 'fr';
let currentLetter = 'A';

const texts = {
welcome: { fr: 'Bienvenue Leo!', de: 'Willkommen Leo!' },
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

function setLanguage(lang) {
  currentLang = lang;
  document.getElementById('welcome').textContent = texts.welcome[lang];
  document.getElementById('selectCategory').textContent = texts.selectCategory[lang];
  document.getElementById('animalsLabel').textContent = texts.animalsLabel[lang];
  document.getElementById('chooseGame').textContent = texts.chooseGame[lang];
  document.getElementById('guessLetterGame').textContent = texts.guessLetterGame[lang];
document.getElementById('backBtn').textContent = texts.backBtn[lang];
document.getElementById('speedGameBtn').textContent = texts.speedGameBtn[lang];
document.getElementById('chiffresLabel').textContent = texts.chiffresLabel[lang];
updateLanguage();

}

function goBack() {
if (!document.getElementById('mainGame').classList.contains('hidden')) {
  // Retour du jeu des lettres vers sélection
  document.getElementById('mainGame').classList.add('hidden');
  document.getElementById('gameSelection').classList.remove('hidden');
} else if (!document.getElementById('speedGame').classList.contains('hidden')) {
  // Retour du jeu de vitesse vers sélection
  document.getElementById('speedGame').classList.add('hidden');
  document.getElementById('gameSelection').classList.remove('hidden');
} else if (!document.getElementById('gameSelection').classList.contains('hidden')) {
  // Retour de la sélection vers l'accueil
  document.getElementById('gameSelection').classList.add('hidden');
  document.getElementById('home').classList.remove('hidden');
  document.getElementById('backBtn').classList.add('hidden'); // on cache le bouton retour
}
if (!document.getElementById("home").classList.contains("hidden")) return;

if (!document.getElementById("gameSelectionChiffres").classList.contains("hidden")) {
hideAllScreens();
document.getElementById("home").classList.remove("hidden");
} else if (!document.getElementById("numberGame").classList.contains("hidden")) {
hideAllScreens();
document.getElementById("gameSelectionChiffres").classList.remove("hidden");
}
updateBackButton(); // mettre à jour le texte selon la langue
}

function goToCategory(cat) {
hideAllScreens();

if (cat === 'animals') {
document.getElementById('gameSelection').classList.remove('hidden');
} else if (cat === 'chiffres') {
document.getElementById('gameSelectionChiffres').classList.remove('hidden');
}

document.getElementById('backBtn').classList.remove('hidden');
updateBackButton();
}

function startAnimalGame() {
  document.getElementById('gameSelection').classList.add('hidden');
  document.getElementById('mainGame').classList.remove('hidden');
  nextRound();
}

const animals = [
{
id: 'abeille',
fr: { nom: 'Abeille', initiale: 'A' },
de: { nom: 'Biene', initiale: 'B' },
image: 'assets/animals-pics/abeille.jpg'
},
{
id: 'aigle',
fr: { nom: 'Aigle', initiale: 'A' },
de: { nom: 'Adler', initiale: 'A' },
image: 'assets/animals-pics/aigle.jpg'
},
{
id: 'araignee',
fr: { nom: 'Araignée', initiale: 'A' },
de: { nom: 'Spinne', initiale: 'S' },
image: 'assets/animals-pics/araignee.jpg'
},
{
id: 'autruche',
fr: { nom: 'Autruche', initiale: 'A' },
de: { nom: 'Strauß', initiale: 'S' },
image: 'assets/animals-pics/autruche.jpg'
},
{
id: 'baleine',
fr: { nom: 'Baleine', initiale: 'B' },
de: { nom: 'Wal', initiale: 'W' },
image: 'assets/animals-pics/baleine.jpg'
},
{
id: 'buffle',
fr: { nom: 'Buffle', initiale: 'B' },
de: { nom: 'Büffel', initiale: 'B' },
image: 'assets/animals-pics/buffle.jpg'
},
{
id: 'canard',
fr: { nom: 'Canard', initiale: 'C' },
de: { nom: 'Ente', initiale: 'E' },
image: 'assets/animals-pics/canard.jpg'
},
{
id: 'chameau',
fr: { nom: 'Chameau', initiale: 'C' },
de: { nom: 'Kamel', initiale: 'K' },
image: 'assets/animals-pics/chameau.jpg'
},
{
id: 'chat',
fr: { nom: 'Chat', initiale: 'C' },
de: { nom: 'Katze', initiale: 'K' },
image: 'assets/animals-pics/chat.jpg'
},
{
id: 'cheval',
fr: { nom: 'Cheval', initiale: 'C' },
de: { nom: 'Pferd', initiale: 'P' },
image: 'assets/animals-pics/cheval.jpg'
},
{
id: 'cochon',
fr: { nom: 'Cochon', initiale: 'C' },
de: { nom: 'Schwein', initiale: 'S' },
image: 'assets/animals-pics/cochon.jpg'
},
{
id: 'coccinelle',
fr: { nom: 'Coccinelle', initiale: 'C' },
de: { nom: 'Marienkäfer', initiale: 'M' },
image: 'assets/animals-pics/coccinelle.jpg'
},
{
id: 'crocodile',
fr: { nom: 'Crocodile', initiale: 'C' },
de: { nom: 'Krokodil', initiale: 'K' },
image: 'assets/animals-pics/crocodile.jpg'
},
{
id: 'dauphin',
fr: { nom: 'Dauphin', initiale: 'D' },
de: { nom: 'Delfin', initiale: 'D' },
image: 'assets/animals-pics/dauphin.jpg'
},
{
id: 'dinde',
fr: { nom: 'Dinde', initiale: 'D' },
de: { nom: 'Truthahn', initiale: 'T' },
image: 'assets/animals-pics/dinde.jpg'
},
{
id: 'elephant',
fr: { nom: 'Éléphant', initiale: 'E' },
de: { nom: 'Elefant', initiale: 'E' },
image: 'assets/animals-pics/elephant.jpg'
},
{
id: 'ecureuil',
fr: { nom: 'Écureuil', initiale: 'E' },
de: { nom: 'Eichhörnchen', initiale: 'E' },
image: 'assets/animals-pics/ecureuil.jpg'
},
{
id: 'flamant',
fr: { nom: 'Flamant', initiale: 'F' },
de: { nom: 'Flamingo', initiale: 'F' },
image: 'assets/animals-pics/flamant.jpg'
},
{
id: 'fourmi',
fr: { nom: 'Fourmi', initiale: 'F' },
de: { nom: 'Ameise', initiale: 'A' },
image: 'assets/animals-pics/fourmi.jpg'
},
{
id: 'furet',
fr: { nom: 'Furet', initiale: 'F' },
de: { nom: 'Frettchen', initiale: 'F' },
image: 'assets/animals-pics/furet.jpg'
},
{
id: 'girafe',
fr: { nom: 'Girafe', initiale: 'G' },
de: { nom: 'Giraffe', initiale: 'G' },
image: 'assets/animals-pics/girafe.jpg'
},
{
id: 'gorille',
fr: { nom: 'Gorille', initiale: 'G' },
de: { nom: 'Gorilla', initiale: 'G' },
image: 'assets/animals-pics/gorille.jpg'
},
{
id: 'guepard',
fr: { nom: 'Guépard', initiale: 'G' },
de: { nom: 'Gepard', initiale: 'G' },
image: 'assets/animals-pics/guepard.jpg'
},
{
id: 'herisson',
fr: { nom: 'Hérisson', initiale: 'H' },
de: { nom: 'Igel', initiale: 'I' },
image: 'assets/animals-pics/herisson.jpg'
},
{
id: 'hibou',
fr: { nom: 'Hibou', initiale: 'H' },
de: { nom: 'Eule', initiale: 'E' },
image: 'assets/animals-pics/hibou.jpg'
},
{
id: 'hippopotame',
fr: { nom: 'Hippopotame', initiale: 'H' },
de: { nom: 'Nilpferd', initiale: 'N' },
image: 'assets/animals-pics/hippopotame.jpg'
},
{
id: 'iguane',
fr: { nom: 'Iguane', initiale: 'I' },
de: { nom: 'Leguan', initiale: 'L' },
image: 'assets/animals-pics/iguane.jpg'
},
{
id: 'kangourou',
fr: { nom: 'Kangourou', initiale: 'K' },
de: { nom: 'Känguru', initiale: 'K' },
image: 'assets/animals-pics/kangourou.jpg'
},
{
id: 'koala',
fr: { nom: 'Koala', initiale: 'K' },
de: { nom: 'Koala', initiale: 'K' },
image: 'assets/animals-pics/koala.jpg'
},
{
id: 'lapin',
fr: { nom: 'Lapin', initiale: 'L' },
de: { nom: 'Kaninchen', initiale: 'K' },
image: 'assets/animals-pics/lapin.jpg'
},
{
id: 'lion',
fr: { nom: 'Lion', initiale: 'L' },
de: { nom: 'Löwe', initiale: 'L' },
image: 'assets/animals-pics/lion.jpg'
},
{
id: 'manchot',
fr: { nom: 'Manchot', initiale: 'M' },
de: { nom: 'Pinguin', initiale: 'P' },
image: 'assets/animals-pics/manchot.jpg'
},
{
id: 'morse',
fr: { nom: 'Morse', initiale: 'M' },
de: { nom: 'Walross', initiale: 'W' },
image: 'assets/animals-pics/morse.jpg'
},
{
id: 'ours',
fr: { nom: 'Ours', initiale: 'O' },
de: { nom: 'Bär', initiale: 'B' },
image: 'assets/animals-pics/ours.jpg'
},
{
id: 'paon',
fr: { nom: 'Paon', initiale: 'P' },
de: { nom: 'Pfau', initiale: 'P' },
image: 'assets/animals-pics/paon.jpg'
},
{
id: 'panthere',
fr: { nom: 'Panthère', initiale: 'P' },
de: { nom: 'Panther', initiale: 'P' },
image: 'assets/animals-pics/panthere.jpg'
},
{
id: 'paresseux',
fr: { nom: 'Paresseux', initiale: 'P' },
de: { nom: 'Faultier', initiale: 'F' },
image: 'assets/animals-pics/paresseux.jpg'
},
{
id: 'perroquet',
fr: { nom: 'Perroquet', initiale: 'P' },
de: { nom: 'Papagei', initiale: 'P' },
image: 'assets/animals-pics/perroquet.jpg'
},
{
id: 'pigeon',
fr: { nom: 'Pigeon', initiale: 'P' },
de: { nom: 'Taube', initiale: 'T' },
image: 'assets/animals-pics/pigeon.jpg'
},
{
id: 'poule',
fr: { nom: 'Poule', initiale: 'P' },
de: { nom: 'Huhn', initiale: 'H' },
image: 'assets/animals-pics/poule.jpg'
},
{
id: 'renard',
fr: { nom: 'Renard', initiale: 'R' },
de: { nom: 'Fuchs', initiale: 'F' },
image: 'assets/animals-pics/renard.jpg'
},
{
id: 'sanglier',
fr: { nom: 'Sanglier', initiale: 'S' },
de: { nom: 'Wildschwein', initiale: 'W' },
image: 'assets/animals-pics/sanglier.jpg'
},
{
id: 'serpent',
fr: { nom: 'Serpent', initiale: 'S' },
de: { nom: 'Schlange', initiale: 'S' },
image: 'assets/animals-pics/serpent.jpg'
},
{
id: 'singe',
fr: { nom: 'Singe', initiale: 'S' },
de: { nom: 'Affe', initiale: 'A' },
image: 'assets/animals-pics/singe.jpg'
},
{
id: 'tapir',
fr: { nom: 'Tapir', initiale: 'T' },
de: { nom: 'Tapir', initiale: 'T' },
image: 'assets/animals-pics/tapir.jpg'
},
{
id: 'tigre',
fr: { nom: 'Tigre', initiale: 'T' },
de: { nom: 'Tiger', initiale: 'T' },
image: 'assets/animals-pics/tigre.jpg'
},
{
id: 'vache',
fr: { nom: 'Vache', initiale: 'V' },
de: { nom: 'Kuh', initiale: 'K' },
image: 'assets/animals-pics/vache.jpg'
},
{
id: 'ver',
fr: { nom: 'Ver de terre', initiale: 'V' },
de: { nom: 'Wurm', initiale: 'W' },
image: 'assets/animals-pics/ver.jpg'
},
{
id: 'zebre',
fr: { nom: 'Zèbre', initiale: 'Z' },
de: { nom: 'Zebra', initiale: 'Z' },
image: 'assets/animals-pics/zebre.jpg'
}
];

const speedAnimals = [
{ id: 'guepard', fr: { nom: 'Guépard' }, de: { nom: 'Gepard' }, vitesse: 110, image: 'assets/animals-pics/guepard.jpg' },
{ id: 'cheval', fr: { nom: 'Cheval' }, de: { nom: 'Pferd' }, vitesse: 70, image: 'assets/animals-pics/cheval.jpg' },
{ id: 'escargot', fr: { nom: 'Escargot' }, de: { nom: 'Schnecke' }, vitesse: 0.05, image: 'assets/animals-pics/escargot.jpg' },
{ id: 'tortue', fr: { nom: 'Tortue' }, de: { nom: 'Schildkröte' }, vitesse: 0.3, image: 'assets/animals-pics/tortue.jpg' },
{ id: 'autruche', fr: { nom: 'Autruche' }, de: { nom: 'Strauß' }, vitesse: 70, image: 'assets/animals-pics/autruche.jpg' },
{ id: 'humain', fr: { nom: 'Humain' }, de: { nom: 'Mensch' }, vitesse: 45, image: 'assets/animals-pics/humain.jpg' },
{ id: 'chat', fr: { nom: 'Chat' }, de: { nom: 'Katze' }, vitesse: 48, image: 'assets/animals-pics/chat.jpg' },
{ id: 'chien', fr: { nom: 'Chien' }, de: { nom: 'Hund' }, vitesse: 45, image: 'assets/animals-pics/chien.jpg' },
{ id: 'lièvre', fr: { nom: 'Lièvre' }, de: { nom: 'Hase' }, vitesse: 80, image: 'assets/animals-pics/lievre.jpg' },
{ id: 'vache', fr: { nom: 'Vache' }, de: { nom: 'Kuh' }, vitesse: 30, image: 'assets/animals-pics/vache.jpg' },
{ id: 'cochon', fr: { nom: 'Cochon' }, de: { nom: 'Schwein' }, vitesse: 20, image: 'assets/animals-pics/cochon.jpg' },
{ id: 'poule', fr: { nom: 'Poule' }, de: { nom: 'Huhn' }, vitesse: 14, image: 'assets/animals-pics/poule.jpg' },
{ id: 'canard', fr: { nom: 'Canard' }, de: { nom: 'Ente' }, vitesse: 10, image: 'assets/animals-pics/canard.jpg' },
{ id: 'mouton', fr: { nom: 'Mouton' }, de: { nom: 'Schaf' }, vitesse: 25, image: 'assets/animals-pics/mouton.jpg' },
{ id: 'chèvre', fr: { nom: 'Chèvre' }, de: { nom: 'Ziege' }, vitesse: 25, image: 'assets/animals-pics/chevre.jpg' },
{ id: 'singe', fr: { nom: 'Singe' }, de: { nom: 'Affe' }, vitesse: 55, image: 'assets/animals-pics/singe.jpg' },
{ id: 'kangourou', fr: { nom: 'Kangourou' }, de: { nom: 'Känguru' }, vitesse: 71, image: 'assets/animals-pics/kangourou.jpg' },
{ id: 'dinde', fr: { nom: 'Dinde' }, de: { nom: 'Truthahn' }, vitesse: 15, image: 'assets/animals-pics/dinde.jpg' }
];

function startSpeedGame() {
document.getElementById('gameSelection').classList.add('hidden');
document.getElementById('speedGame').classList.remove('hidden');
showSpeedQuestion();
updateBackButton();
}

function showSpeedQuestion() {
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

function nextRound() {
const allLetters = [...new Set(animals
  .filter(a => countByInitial(a[currentLang].initiale) >= 2)
  .map(a => a[currentLang].initiale))];

currentLetter = allLetters[Math.floor(Math.random() * allLetters.length)];
showQuestion();
}
function countByInitial(letter) {
return animals.filter(a => a[currentLang].initiale === letter).length;
}

function showQuestion() {
const questionText = currentLang === 'fr'
  ? `Quel animal commence par la lettre ${currentLetter} ?`
  : `Welches Tier beginnt mit dem Buchstaben ${currentLetter}?`;
document.getElementById('question').textContent = questionText;

const correctAnimals = animals.filter(a => a[currentLang].initiale === currentLetter);
const wrongAnimals = animals.filter(a => a[currentLang].initiale !== currentLetter);

// Sélectionne 1 bonne réponse
const correct = correctAnimals[Math.floor(Math.random() * correctAnimals.length)];

// Sélectionne 1 mauvaise réponse
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
    if (isCorrect) setTimeout(nextRound, 1000);
  };

  wrapper.appendChild(img);
  wrapper.appendChild(label);
  grid.appendChild(wrapper);
});
}


const numberGameContainer = document.getElementById("numberGame");
const numberChoices = document.getElementById("numberChoices");
const numberQuestion = document.getElementById("numberQuestion");
const numberSuccess = document.getElementById("numberSuccess");

let currentNumber = 1;

function startNumberGame() {
hideAllScreens();
document.getElementById('numberGame').classList.remove('hidden');

document.getElementById('numberSuccess').classList.add('hidden'); // ligne importante ici
document.getElementById('numberChoices').classList.remove('hidden'); // au cas où

currentNumber = 1;
showNumberQuestion();
}

function showNumberQuestion() {
const questionElem = document.getElementById("numberQuestion");

if (currentNumber > 10) {
document.getElementById("numberChoices").classList.add("hidden");
document.getElementById("numberSuccess").classList.remove("hidden");
questionElem.textContent = ""; // Cache la question
return;
}

questionElem.textContent =
(currentLang === "fr" ? "Trouve le chiffre " : "Finde die Zahl ") + currentNumber;

const choices = [];
choices.push(currentNumber);
while (choices.length < 4) {
const rand = Math.floor(Math.random() * 10) + 1;
if (!choices.includes(rand)) choices.push(rand);
}

choices.sort(() => Math.random() - 0.5); // Mélange les chiffres

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

function restartNumberGame() {
currentNumber = 1;
document.getElementById("numberSuccess").classList.add("hidden");
showNumberQuestion();
}

function goToNumberGameSelection() {
hideAllScreens();
document.getElementById("gameSelectionChiffres").classList.remove("hidden");
updateLanguage();
}
function hideAllScreens() {
const screens = [
'home',
'gameSelection',
'gameSelectionChiffres',
'mainGame',
'speedGame',
'numberGame'
];

screens.forEach(id => document.getElementById(id).classList.add('hidden'));

// Masquer l'écran de succès du jeu des chiffres
const success = document.getElementById('numberSuccess');
if (success) success.classList.add('hidden');

const backBtn = document.getElementById("backBtn");
if (!document.getElementById("home").classList.contains("hidden")) {
backBtn.classList.add("hidden");
} else {
backBtn.classList.remove("hidden");
}
}

function updateBackButton() {
document.getElementById('backBtn').textContent = texts.backBtn[currentLang];
const backBtn = document.getElementById('backBtn');
backBtn.textContent = texts.backBtn[currentLang];
}


function goHome() {
hideAllScreens();
document.getElementById('home').classList.remove('hidden');
document.getElementById('backBtn').classList.add('hidden');

// 🔁 Réinitialiser le jeu des chiffres s’il a été lancé
const numberSuccess = document.getElementById('numberSuccess');
const numberChoices = document.getElementById('numberChoices');

if (numberSuccess) numberSuccess.classList.add('hidden');
if (numberChoices) {
numberChoices.classList.remove('hidden');
numberChoices.innerHTML = ''; // vider les boutons affichés
}
}
// Initialisation
setLanguage('fr');

window.addEventListener('load', () => {
const backBtn = document.getElementById('backBtn');
const homePage = document.getElementById('home');

// Vérifie si on est bien sur la page d’accueil
if (!homePage.classList.contains('hidden')) {
  backBtn.classList.add('hidden');
}
});

if ('serviceWorker' in navigator) {
window.addEventListener('load', () => {
  navigator.serviceWorker.register('/service-worker.js')
    .then(registration => {
      console.log('Service Worker enregistré avec succès :', registration.scope);
    })
    .catch(error => {
      console.log('Échec de l’enregistrement du Service Worker :', error);
    });
});
}
function updateLanguage() {
for (const key in texts) {
const el = document.getElementById(key);
if (el) {
  el.textContent = texts[key][currentLang];
}
}

// Si tu veux aussi changer la question du jeu des chiffres en dynamique :
if (!document.getElementById("numberGame").classList.contains("hidden") && currentNumber <= 10) {
document.getElementById("numberQuestion").textContent =
texts.numberQuestionBase[currentLang] + currentNumber;
}
}