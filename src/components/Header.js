import logo from '../assets/logo.png'; // Stelle sicher, dass du ein Logo-Bild im Ordner src/assets/ hast

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Little Lemon Logo" className="logo" />
    </header>
  );
}

export default Header;