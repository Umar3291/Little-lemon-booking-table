import logo from '../icons_assets/Logo.svg';
import './Nav.css';
function Nav() {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li><img src={logo} alt='little lemon logo' /></li>
        <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a>Menu</a></li>
        <li><a>Reservations</a></li>
        <li><a>Order Online</a></li>
        <li><a>Login</a></li>
      </ul>
    </nav>
  );
}


export default Nav;