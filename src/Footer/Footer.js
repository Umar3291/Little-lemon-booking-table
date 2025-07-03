import { Link } from 'react-router-dom';
import logo from '../icons_assets/logo2.png';
import './Footer.css';
function Footer(){
        return (
        <>
            <ul id='main-list'>
                <li className = 'second-list'><img src={logo} alt='little lemon logo'/></li>
                <li className = 'second-list'>
                    <li className='header'>Doormat Navigation</li>
                    <li className='items'><Link to="/">Home</Link></li>
                    <li className='items'><Link to="/about">About</Link></li>
                    <li className='items'><Link to="/menu">Menu</Link></li>
                    <li className='items'><Link to="/reservations">Reservations</Link></li>
                    <li className='items'><Link to="/order-online">Order online</Link></li>
                    <li className='items'><Link to="/login">Login</Link></li>
                </li>
                <li className = 'second-list'>
                    <li className='header'>Contact</li>
                    <li className='items'><a href='#'>Address</a></li>
                    <li className='items'><a href='#'>Phone Number</a></li>
                    <li className='items'><a href='#'>Email</a></li>
                </li>
                <li className = 'second-list'>
                    <li className='header'>Social media links</li>
                    <li className='items'><a href='#'>Facebook</a></li>
                    <li className='items'><a href='#'>Instagram</a></li>
                    <li className='items'><a href='#'>X</a></li>
                </li>
            </ul>
        </>
    )
}

export default Footer;