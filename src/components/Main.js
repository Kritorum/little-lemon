import React, { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage from './BookingPage';

// Step 2: Reducer-Funktion zum Aktualisieren der Zeiten basierend auf dem gewählten Datum
export function updateTimes(state, action) {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // Aktuell geben wir ungeachtet des Datums dasselbe Zeiten-Array zurück
      return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    default:
      return state;
  }
}

// Step 2: Initialen State für availableTimes erstellen
export function initializeTimes() {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
}

function Main() {
  // Step 2: useReducer für availableTimes verwenden
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route 
          path="/booking" 
          element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />} 
        />
      </Routes>
    </main>
  );
}

export default Main;