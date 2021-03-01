import { Link } from 'react-router-dom';
import { MenuDiv } from './Menu.styles';
import { FaHome, FaHeart, FaClock } from 'react-icons/fa';

const Menu = () => 
    <MenuDiv>
        <ul>
        <Link to='/'><li>
            <div><FaHome /> <h5>Home</h5></div></li></Link>
        <Link to='/favorites'><li>
            <div><FaHeart /><h5>Favorites</h5></div></li></Link>
        <Link to='/history'><li>
            <div><FaClock /><h5>History</h5></div></li></Link>
        </ul>
    </MenuDiv>
;

export default Menu;