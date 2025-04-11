// progress.js

export function getScore(gameId) {
  const data = JSON.parse(localStorage.getItem('leoGamesProgress')) || {};
  return data[gameId]?.score || 0;
}

export function incrementScore(gameId) {
  const data = JSON.parse(localStorage.getItem('leoGamesProgress')) || {};
  if (!data[gameId]) data[gameId] = { score: 0, badges: [] };
  data[gameId].score++;
  localStorage.setItem('leoGamesProgress', JSON.stringify(data));
}

export function hasBadge(gameId, badgeId) {
  const data = JSON.parse(localStorage.getItem('leoGamesProgress')) || {};
  return data[gameId]?.badges?.includes(badgeId);
}

export function unlockBadge(gameId, badgeId) {
  const data = JSON.parse(localStorage.getItem('leoGamesProgress')) || {};
  if (!data[gameId]) data[gameId] = { score: 0, badges: [] };
  if (!data[gameId].badges.includes(badgeId)) {
    data[gameId].badges.push(badgeId);
    localStorage.setItem('leoGamesProgress', JSON.stringify(data));
    return true;
  }
  return false;
}