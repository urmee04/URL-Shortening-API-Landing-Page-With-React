import { useState } from "react";
import logo from "../../assets/images/logo.svg";

function Header() {
  //state to track if the mobile menu is open
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="container">
        {/* Primary navigation bar */}
        <nav aria-label="Primary Navigation">
          {/* Logo section */}
          <div className="logo">
            <img src={logo} alt="Shortly logo" />
          </div>

          {/* Navigation links, conditionally add active when menuOpen is true */}
          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
          </ul>

          {/* Authentication links */}
          <ul className="nav-auth">
            <li>
              <a href="#" className="login-btn">
                Log In
              </a>
            </li>
            <li>
              <a href="#" className="signup-btn">
                Sign Up
              </a>
            </li>
          </ul>

          {/* Mobile menu toggle button */}
          <button
            className="menu-btn"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)} //toggle the menu open/close
          >
            <i className="ri-menu-line" aria-hidden="true"></i>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
