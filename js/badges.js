// Liste des badges disponibles (exemples)
export const badges = [
  {
    id: "10-animaux-lettres",
    game: "animal-letter",
    fr: {
      title: "Maître des lettres",
      description: "Tu as trouvé 10 bonnes réponses !",
    },
    de: {
      title: "Buchstabenmeister",
      description: "Du hast 10 richtige Antworten gefunden!",
    },
    icon: "assets/icons/badge-letter-10.avif"
  },
  {
    id: "10-animaux-vitesse",
    game: "animal-speed",
    fr: {
      title: "Champion de vitesse",
      description: "Tu as trouvé 10 bonnes réponses !",
    },
    de: {
      title: "Geschwindigkeitsmeister",
      description: "Du hast 10 richtige Antworten gefunden!",
    },
    icon: "assets/icons/badge-speed-10.avif"
  }
];

// Vérifie si un badge est déjà débloqué
export function isBadgeUnlocked(badgeId) {
  const unlocked = JSON.parse(localStorage.getItem("unlockedBadges") || "[]");
  return unlocked.includes(badgeId);
}

// Débloque un badge
export function unlockBadge(badgeId) {
  const unlocked = JSON.parse(localStorage.getItem("unlockedBadges") || "[]");
  if (!unlocked.includes(badgeId)) {
    unlocked.push(badgeId);
    localStorage.setItem("unlockedBadges", JSON.stringify(unlocked));
    return true; // Nouveau badge débloqué
  }
  return false; // Déjà débloqué
}

// Récupère tous les badges débloqués
export function getUnlockedBadges() {
  return JSON.parse(localStorage.getItem("unlockedBadges") || "[]");
}

// check badges
export function checkBadge(gameId, score) {
  const badge = badges.find(b => b.game === gameId && score === 10); // 🎯 Ex : 10 bonnes réponses

  if (badge && !isBadgeUnlocked(badge.id)) {
    unlockBadge(badge.id);
    return badge; // ✅ On retourne les infos du badge à afficher dans le toast
  }

  return null; // Aucun badge débloqué à ce moment
}