import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      {/* LEFT */}
      <div className="nav-left">
        <div className="logo-icon">★</div>
        <span className="logo-text">iNhaka</span>
      </div>

      {/* CENTER */}
      <ul className="nav-center">
        <li><a href="#">Programs</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Events</a></li>
      </ul>

      {/* RIGHT */}
      <div className="nav-right">
        <button className="donate-btn">Donate ❤️</button>
      </div>
    </nav>
  );
}

export default Navbar;
