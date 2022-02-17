import MenuItem from "../units/MenuItem";
import { MenuDiv } from "./Menu.styles";
import { HiOutlineHome, HiOutlineHeart, HiOutlineClock } from "react-icons/hi";

function Menu() {
  const menuData = [
    {
      text: "Home",
      iconKey: 1,
      path: "/",
    },
    {
      text: "Favorites",
      iconKey: 2,
      path: "/favorites",
    },
    {
      text: "History",
      iconKey: 3,
      path: "/history",
    },
  ];
  const iconsMap = new Map([
    [1, HiOutlineHome],
    [2, HiOutlineHeart],
    [3, HiOutlineClock],
  ]);

  const menuItems = menuData.map(({ text, iconKey, path }, i) => {
    const icon = iconsMap.get(iconKey);
    return (
      <MenuItem key={i} text={text} path={path}>
        {icon()}
      </MenuItem>
    );
  });

  return (
    <MenuDiv>
      <ul>{menuItems}</ul>
    </MenuDiv>
  );
}
export default Menu;
