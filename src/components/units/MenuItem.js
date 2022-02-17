import { Link } from "react-router-dom";
import { MenuListItem, MenuInnerContainer, MenuHeading } from "./MenuItem.styles";

function MenuItem({ path, children, text }) {
  return (
    <Link to={path}>
      <MenuListItem>
        <MenuInnerContainer>
          {children}
          <MenuHeading>{text}</MenuHeading>
        </MenuInnerContainer>
      </MenuListItem>
    </Link>
  );
}

export default MenuItem;
