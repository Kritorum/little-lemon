import { Link } from 'react-router-dom';

function CallToAction() {
  return (
    <section className="hero">
      <div>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <Link to="/booking" className="button-primary">Reserve a Table</Link>
      </div>
    </section>
  );
}

export default CallToAction;