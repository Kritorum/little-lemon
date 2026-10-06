import React from 'react';
import { Link } from 'react-router-dom';

function ConfirmedBooking() {
  return (
    <section className="confirmed-booking" style={{ textAlign: 'center', padding: '60px 20px' }}>
      <h2>Booking Confirmed!</h2>
      <p style={{ margin: '20px 0', fontSize: '1.2rem' }}>
        Thank you for choosing Little Lemon! Your table reservation has been successfully confirmed.
      </p>
      <p>We look forward to welcoming you!</p>
      <Link to="/" className="button-primary" style={{ marginTop: '30px', display: 'inline-block' }}>
        Back to Home
      </Link>
    </section>
  );
}

export default ConfirmedBooking;