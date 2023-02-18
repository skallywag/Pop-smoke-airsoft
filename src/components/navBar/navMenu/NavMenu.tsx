import { Link } from "react-router-dom";
import { router } from "../../../router";
import "./NavMenu.scss";

interface NavMenuProps {
  setShowNavMenu: (showNavMenu: boolean) => void;
}

const NavMenu: React.FC<NavMenuProps> = (props) => {
  return (
    <div className="navMenu">
      <div
        className="navLink"
        onClick={() => {
          router.navigate("/");
          props.setShowNavMenu(false);
        }}
      >
        Home
      </div>

      <div
        className="navLink"
        onClick={() => {
          router.navigate("/about");
          props.setShowNavMenu(false);
        }}
      >
        About
      </div>

      <div
        className="navLink"
        onClick={() => {
          router.navigate("/forums");
          props.setShowNavMenu(false);
        }}
      >
        Forums
      </div>

      <div
        className="navLink"
        onClick={() => {
          router.navigate("/blackMarket");
          props.setShowNavMenu(false);
        }}
      >
        Black Market
      </div>

      <div
        className="navLink"
        onClick={() => {
          router.navigate("/operations");
          props.setShowNavMenu(false);
        }}
      >
        Operations
      </div>

      <div
        className="navLink"
        onClick={() => {
          router.navigate("/contact");
          props.setShowNavMenu(false);
        }}
      >
        Contact
      </div>
    </div>
  );
};
export default NavMenu;
