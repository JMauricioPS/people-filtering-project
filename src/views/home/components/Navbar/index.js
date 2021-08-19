export default function Navbar({ isAtTop }) {
  return (
    <header>
      <nav className={`navbar fixed-top ${isAtTop && "visibility"}`}>
        <p className="navbar-title">React App - Buscador de Personal</p>
      </nav>
    </header>
  );
}
