import { render, screen } from "@testing-library/react";
import BookingForm from './components/BookingForm';
import { initializeTimes, updateTimes } from './bookingAPI';

test('Renders the BookingForm label', () => {
  const mockAvailableTimes = ['17:00', '18:00'];
  const mockDispatch = jest.fn();

  render(
    <BookingForm 
      availableTimes={mockAvailableTimes} 
      dispatch={mockDispatch} 
    />
  );

  const labelElement = screen.getByText("Choose date");
  expect(labelElement).toBeInTheDocument();
});

test('initializeTimes returns the correct initial array of times', () => {
  const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const initialTimes = initializeTimes();
  expect(initialTimes).toEqual(expectedTimes);
});

test('updateTimes returns the expected times array based on state', () => {
  const currentState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const action = { type: 'UPDATE_TIMES', date: '2026-10-10' };
  
  const updatedState = updateTimes(currentState, action);
  expect(updatedState).toEqual(currentState);
});