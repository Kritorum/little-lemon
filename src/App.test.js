import { render, screen } from "@testing-library/react";
import BookingForm from './components/BookingForm';
import { initializeTimes, updateTimes } from './bookingAPI';

// Globales Mocking für fetchAPI einrichten
beforeEach(() => {
  global.fetchAPI = jest.fn((date) => ['17:00', '18:00', '19:00', '20:00', '21:00']);
});

afterEach(() => {
  delete global.fetchAPI;
});

test('Renders the BookingForm label', () => {
  const mockAvailableTimes = ['17:00', '18:00'];
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();

  render(
    <BookingForm 
      availableTimes={mockAvailableTimes} 
      dispatch={mockDispatch} 
      submitForm={mockSubmitForm}
    />
  );

  const labelElement = screen.getByText("Choose date");
  expect(labelElement).toBeInTheDocument();
});

// Step 1: Aktualisierter Test für initializeTimes mit fetchAPI
test('initializeTimes calls fetchAPI and returns non-empty array of available times', () => {
  const times = initializeTimes();
  
  expect(global.fetchAPI).toHaveBeenCalled();
  expect(Array.isArray(times)).toBe(true);
  expect(times.length).toBeGreaterThan(0);
});

// Step 2: Aktualisierter Test für updateTimes mit ausgewähltem Datum im dispatch
test('updateTimes calls fetchAPI with selected date and updates available times', () => {
  const currentState = ['17:00', '18:00'];
  const selectedDate = '2026-10-10';
  const action = { type: 'UPDATE_TIMES', date: selectedDate };

  const updatedTimes = updateTimes(currentState, action);

  expect(global.fetchAPI).toHaveBeenCalledWith(new Date(selectedDate));
  expect(Array.isArray(updatedTimes)).toBe(true);
  expect(updatedTimes.length).toBeGreaterThan(0);
});