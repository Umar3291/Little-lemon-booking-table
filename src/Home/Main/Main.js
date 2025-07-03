import { Link } from 'react-router-dom';
import './Main.css'
import GreekSalad from '../../icons_assets/greek salad.jpg';
import Bruchetta from '../../icons_assets/bruchetta.svg';
import LemmonDessert from '../../icons_assets/lemon dessert.jpg';



function Main(){
        return (
        <>
            <div id='main'>
                <div id='top'>
                    <Link to="/menu">
                        <button>Online Menu</button>
                    </Link>
                    <h1>Specials</h1>

                </div>
                <div id='specials'>
                    <div className='container'>
                        <div><img src={GreekSalad} alt='image of greek salad'/></div>
                        <div className='info'>
                            <div>
                                <h1>Greek salad</h1>
                                <h2>$12.99</h2>
                            </div>
                            <div><p>The famous Greek salad of crispy lettuce, peppers and olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p></div>
                        </div>
                    </div>
                    <div className='container'>
                        <div><img src={Bruchetta} alt='image of bruchetta'/></div>
                        <div className='info'>
                            <div>
                                <h1>Bruschetta</h1>
                                <h2>$5.99</h2>
                            </div>
                            <div><p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p></div>
                        </div>
                    </div>
                    <div className='container'>
                        <div><img src={LemmonDessert} alt='image of lemon dessert'/></div>
                        <div className='info'>
                            <div>
                                <h1>Lemon Dessert</h1>
                                <h2>$5.00</h2>
                            </div>
                            <div><p>This comes straight from Grandma’s recipe book, every last ingredient has been sourced and is authentic as can be imagined</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main;