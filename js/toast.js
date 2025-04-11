export function hideToast() {
  const toast = document.getElementById("badge-toast");
  if (toast) toast.remove();
}

export function showToast({ title, description, icon, lang = 'fr', sound = 'assets/sounds/badges.mp3' }) {
  // Supprime un éventuel toast existant
  hideToast();

  // Crée le conteneur principal
  const toast = document.createElement("div");
  toast.id = "badge-toast";
  toast.className = "toast-container";

  // Structure HTML
  toast.innerHTML = `
    <button id="toast-close">✕</button>
    <div class="toast-content">
      <img src="${icon}" alt="Badge" class="toast-icon-large" />
      <div class="toast-texts">
        <h4>${title}</h4>
        <p>${description}</p>
      </div>
    </div>
    <button id="toast-cta">${lang === 'fr' ? 'Voir mes badges' : 'Meine Abzeichen ansehen'}</button>
  `;

  // Lecture du son
  try {
    const audio = new Audio(sound);
    audio.play();
  } catch (e) {
    console.warn("Son du toast non lu :", e);
  }

  // Ajout à la page
  document.body.appendChild(toast);

  // Fermeture auto après 8 secondes
  setTimeout(() => toast.remove(), 8000);

  // 🔁 Ajout des comportements une fois le toast inséré
  document.getElementById("toast-close").onclick = () => toast.remove();
  document.getElementById("toast-cta").onclick = () => {
    toast.remove();
    window.location.hash = "#badges";
  };
}