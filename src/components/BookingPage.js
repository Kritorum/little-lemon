import BookingForm from './BookingForm';

function BookingPage({ availableTimes, dispatch, submitForm }) {
  return (
    <div className="booking-page" style={{ padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>Table Reservation</h2>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
    </div>
  );
}

export default BookingPage;