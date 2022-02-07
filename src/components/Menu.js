import { Link } from 'react-router-dom';
import { MenuDiv } from './Menu.styles';
import { FaHome, FaHeart, FaClock } from 'react-icons/fa';
import { HiHome, HiHeart, HiClock } from 'react-icons/hi';

const Menu = () =>
    <MenuDiv>
        <ul>
            <Link to="/">
                <li>
                    <div>
                        <HiHome />
                        <h5>Home</h5>
                    </div>
                </li>
            </Link>
            <Link to="/favorites">
                <li>
                    <div>
                        <HiHeart />
                        <h5>Favorites</h5>
                    </div>
                </li>
            </Link>
            <Link to="/history">
                <li>
                    <div>
                        <HiClock />
                        <h5>History</h5>
                    </div>
                </li>
            </Link>
        </ul>
    </MenuDiv>
    ;

export default Menu;