import { Link } from "react-router-dom";
import { MenuDiv } from "./Menu.styles";
import { HiOutlineHome, HiOutlineHeart, HiOutlineClock } from "react-icons/hi";

const Menu = () => (
  <MenuDiv>
    <ul>
      <Link to="/">
        <li>
          <div>
            <HiOutlineHome />
            <h5>Home</h5>
          </div>
        </li>
      </Link>
      <Link to="/favorites">
        <li>
          <div>
            <HiOutlineHeart />
            <h5>Favorites</h5>
          </div>
        </li>
      </Link>
      <Link to="/history">
        <li>
          <div>
            <HiOutlineClock />
            <h5>History</h5>
          </div>
        </li>
      </Link>
    </ul>
  </MenuDiv>
);
export default Menu;
