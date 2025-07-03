import { Routes, Route } from 'react-router-dom';
import Nav from './Nav/Nav';
import Home from './Home/Home';
import About from './About/About';
import Menu from './Menu/Menu';
import Reservations from './Reservations/Reservations';
import OrderOnline from './Orderonline/OrderOnline';
import Login from './Login/Login';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
