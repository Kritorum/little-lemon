/* global fetchAPI */

export function initializeTimes() {
  const today = new Date();
  // Nutzt fetchAPI für das heutige Datum, falls verfügbar, sonst Fallback
  if (typeof fetchAPI !== 'undefined') {
    return fetchAPI(today);
  }
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
}

export function updateTimes(state, action) {
  switch (action.type) {
    case 'UPDATE_TIMES':
      if (typeof fetchAPI !== 'undefined' && action.date) {
        const selectedDate = new Date(action.date);
        return fetchAPI(selectedDate);
      }
      return state;
    default:
      return state;
  }
}