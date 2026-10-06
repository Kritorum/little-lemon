/* global submitAPI */
import React, { useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';
import { initializeTimes, updateTimes } from '../bookingAPI';

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  // Step 2: submitForm Funktion zum Übermitteln an die API und Weiterleitung
  const submitForm = (formData) => {
    if (typeof submitAPI !== 'undefined') {
      const success = submitAPI(formData);
      if (success) {
        navigate('/booking-confirmed');
      }
    } else {
      // Fallback für Tests oder Offline-Umgebung
      navigate('/booking-confirmed');
    }
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route 
          path="/booking" 
          element={
            <BookingPage 
              availableTimes={availableTimes} 
              dispatch={dispatch} 
              submitForm={submitForm} 
            />
          } 
        />
        <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
}

export default Main;