import { Link } from 'react-router-dom';

const Menu = () => 
    <div>
        <p>MENU</p>
        <ul>
        <Link to='/'><li>Home</li></Link>
        <Link to='/favorites'><li>Favorites</li></Link>
        <Link to='/history'><li>History</li></Link>
        </ul>
    </div>
;

export default Menu;