import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from './components/BookingForm';
import { initializeTimes, updateTimes } from './bookingAPI';

beforeEach(() => {
  global.fetchAPI = jest.fn((date) => ['17:00', '18:00', '19:00', '20:00', '21:00']);
});

afterEach(() => {
  delete global.fetchAPI;
});

// --- STEP 1: HTML5 Validation Attribute Tests ---
test('Renders HTML5 validation attributes on inputs correctly', () => {
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

  // Date Field Attributes
  const dateInput = screen.getByLabelText(/Choose date/i);
  expect(dateInput).toHaveAttribute('type', 'date');
  expect(dateInput).toHaveAttribute('required');

  // Guests Field Attributes
  const guestsInput = screen.getByLabelText(/Number of guests/i);
  expect(guestsInput).toHaveAttribute('type', 'number');
  expect(guestsInput).toHaveAttribute('min', '1');
  expect(guestsInput).toHaveAttribute('max', '10');
  expect(guestsInput).toHaveAttribute('required');

  // Occasion Field Attributes
  const occasionSelect = screen.getByLabelText(/Occasion/i);
  expect(occasionSelect).toHaveAttribute('required');
});

// --- STEP 2: JavaScript / React Validation State Tests ---
test('Submit button is disabled when form is invalid (date is empty)', () => {
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

  const submitButton = screen.getByRole('button', { name: /On Click|Make Your reservation/i });
  expect(submitButton).toBeDisabled();
});

test('Submit button is enabled when form input fields are valid', () => {
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

  const dateInput = screen.getByLabelText(/Choose date/i);
  const submitButton = screen.getByRole('button', { name: /On Click|Make Your reservation/i });

  // Gültiges Datum eingeben
  fireEvent.change(dateInput, { target: { value: '2026-10-15' } });

  expect(submitButton).not.toBeDisabled();
});

// --- API Reducer Tests ---
test('initializeTimes calls fetchAPI and returns non-empty array of available times', () => {
  const times = initializeTimes();
  expect(global.fetchAPI).toHaveBeenCalled();
  expect(Array.isArray(times)).toBe(true);
  expect(times.length).toBeGreaterThan(0);
});

test('updateTimes calls fetchAPI with selected date and updates available times', () => {
  const currentState = ['17:00', '18:00'];
  const selectedDate = '2026-10-10';
  const action = { type: 'UPDATE_TIMES', date: selectedDate };

  const updatedTimes = updateTimes(currentState, action);

  expect(global.fetchAPI).toHaveBeenCalledWith(new Date(selectedDate));
  expect(Array.isArray(updatedTimes)).toBe(true);
  expect(updatedTimes.length).toBeGreaterThan(0);
});