import Nav from './Nav';

function Header() {
  return (
    <header>
      <img src="/logo.png" alt="Little Lemon Logo" className="logo" />
      <Nav />
    </header>
  );
}

export default Header;