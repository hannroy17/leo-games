const CACHE_NAME = 'leo-games-cache-v3';
const urlsToCache = [
  'index.html',
'style.css',
'manifest.json',
'js/main.js',
'js/animals-data.js',
'js/language.js',
'js/number-findnumbersgame.js',
'js/event-handlers.js',
'js/animal-speedGame.js',
'js/animal-letterGame.js',
'assets/fonts/fredoka-v16-latin-regular.woff2',
'assets/icons/coupe.avif',
'assets/flags/fr.svg',
'assets/flags/de.svg',
'assets/categories-pics/animaux-categorie-carte-crop.jpg',
'assets/categories-pics/chiffres-categorie-large.jpg',
'assets/games-pics/jeu-lettres-animaux-sans-question.jpg',
'assets/games-pics/jeu-vitesse-animaux-carte.jpg',
'assets/games-pics/jeu-chiffres.avif',
'assets/logo/logo-leo-games.png',
'assets/logo/logo-leo-games-app.avif',
'assets/animals-pics/abeille.jpg',
'assets/animals-pics/aigle.jpg',
'assets/animals-pics/araignee.jpg',
'assets/animals-pics/autruche.jpg',
'assets/animals-pics/baleine.jpg',
'assets/animals-pics/buffle.jpg',
'assets/animals-pics/canard.jpg',
'assets/animals-pics/chameau.jpg',
'assets/animals-pics/chat.jpg',
'assets/animals-pics/cheval.jpg',
'assets/animals-pics/chevre.jpg',
'assets/animals-pics/chien.jpg',
'assets/animals-pics/cochon.jpg',
'assets/animals-pics/coccinelle.jpg',
'assets/animals-pics/crocodile.jpg',
'assets/animals-pics/dauphin.jpg',
'assets/animals-pics/dinde.jpg',
'assets/animals-pics/ecureuil.jpg',
'assets/animals-pics/elephant.jpg',
'assets/animals-pics/escargot.jpg',
'assets/animals-pics/flamant.jpg',
'assets/animals-pics/fourmi.jpg',
'assets/animals-pics/furet.jpg',
'assets/animals-pics/girafe.jpg',
'assets/animals-pics/gorille.jpg',
'assets/animals-pics/guepard.jpg',
'assets/animals-pics/herisson.jpg',
'assets/animals-pics/hibou.jpg',
'assets/animals-pics/hippopotame.jpg',
'assets/animals-pics/humain.jpg',
'assets/animals-pics/iguane.jpg',
'assets/animals-pics/kangourou.jpg',
'assets/animals-pics/koala.jpg',
'assets/animals-pics/lapin.jpg',
'assets/animals-pics/lievre.jpg',
'assets/animals-pics/lion.jpg',
'assets/animals-pics/manchot.jpg',
'assets/animals-pics/morse.jpg',
'assets/animals-pics/mouton.jpg',
'assets/animals-pics/ours.jpg',
'assets/animals-pics/paon.jpg',
'assets/animals-pics/panthere.jpg',
'assets/animals-pics/paresseux.jpg',
'assets/animals-pics/perroquet.jpg',
'assets/animals-pics/pigeon.jpg',
'assets/animals-pics/poule.jpg',
'assets/animals-pics/renard.jpg',
'assets/animals-pics/sanglier.jpg',
'assets/animals-pics/serpent.jpg',
'assets/animals-pics/singe.jpg',
'assets/animals-pics/tapir.jpg',
'assets/animals-pics/tigre.jpg',
'assets/animals-pics/tortue.jpg',
'assets/animals-pics/vache.jpg',
'assets/animals-pics/ver.jpg',
'assets/animals-pics/zebre.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});