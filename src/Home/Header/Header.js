import { Link } from 'react-router-dom';

import restaurantfood from '../../icons_assets/restaurantfood.jpg';
import './Header.css'


function Header () {
    return (
        <>
            <div id="header">
                <div id="text">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p> We are a family owned Mediterranean <br/>
                        restaurant , focused on traditional recipes <br/>
                        with a modern twist.</p>
                    <Link to="/reservations">
                        <button>Reserve a Table</button>
                    </Link>

                </div>
                <div id="image">
                    <img src={restaurantfood} alt='man holding tray of food'></img>
                </div>
            </div>
        </>
    )
}

export default Header