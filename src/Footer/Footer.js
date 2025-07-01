import logo from '../icons_assets/logo2.png';
import './Footer.css';
function Footer(){
        return (
        <>
            <ul id='main-list'>
                <li className = 'second-list'><img src={logo} alt='little lemon logo'/></li>
                <li className = 'second-list'>
                    <li className='header'>Doormat Navigation</li>
                    <li className='items'><a>Home</a></li>
                    <li className='items'><a>About</a></li>
                    <li className='items'><a>Menu</a></li>
                    <li className='items'><a>Reservations</a></li>
                    <li className='items'><a>Order online</a></li>
                    <li className='items'><a>Login</a></li>
                </li>
                <li className = 'second-list'>
                    <li className='header'>Contact</li>
                    <li className='items'><a>Address</a></li>
                    <li className='items'><a>Phone Number</a></li>
                    <li className='items'><a>Email</a></li>
                </li>
                <li className = 'second-list'>
                    <li className='header'>Social media links</li>
                    <li className='items'><a>Facebook</a></li>
                    <li className='items'><a>Instagram</a></li>
                    <li className='items'><a>X</a></li>
                </li>
            </ul>
        </>
    )
}

export default Footer;