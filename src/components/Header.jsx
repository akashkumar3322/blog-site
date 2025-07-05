import { useState } from 'react';
import '../styles/Header.css';
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className={`header ${menuOpen ? 'menu-open' : ''}`}>
        <div className="logo">
          <h1>
            <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>📰NewsBlog</Link>
          </h1>
        </div>
        <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {/* 🧭 Navigation + Profile for mobile menu */}
        <nav className={`nav-links ${menuOpen ? 'show' : ''}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </nav>
        
      </header>
      {/* {menuOpen && <div className="menu-overlay" onClick={() => setMenuOpen(false)}></div>} */}
    </>
  );
}
