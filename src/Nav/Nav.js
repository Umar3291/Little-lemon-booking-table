import { Link } from 'react-router-dom';
import logo from '../icons_assets/Logo.svg';
import burger from '../icons_assets/icon _hamburger menu_.svg';
import './Nav.css';
import { useState } from 'react';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-header">
        <img src={logo} alt="Little Lemon logo" />
        <button className="burger" onClick={() => setIsOpen(!isOpen)}>
          <img src={burger} alt="hamburger icon" />
        </button>
      </div>

      <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
        <li><Link to="/menu" onClick={() => setIsOpen(false)}>Menu</Link></li>
        <li><Link to="/reservations" onClick={() => setIsOpen(false)}>Reservations</Link></li>
        <li><Link to="/order-online" onClick={() => setIsOpen(false)}>Order Online</Link></li>
        <li><Link to="/login" onClick={() => setIsOpen(false)}>Login</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
