import BookingForm from './BookingForm';

function BookingPage() {
  return (
    <div className="booking-page" style={{ padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>Table Reservation</h2>
      <BookingForm />
    </div>
  );
}

export default BookingPage;