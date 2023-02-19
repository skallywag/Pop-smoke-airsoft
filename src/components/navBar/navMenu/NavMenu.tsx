import { router } from "../../../router";
import "./NavMenu.scss";

interface NavMenuProps {
  setShowNavMenu: (showNavMenu: boolean) => void;
  showNavMenu: boolean;
}

const NavMenu: React.FC<NavMenuProps> = (props) => {
  return (
    <div className={`navMenu ${props.showNavMenu ? "show" : "hide"}`}>
      <div
        className="menuItem"
        onClick={() => {
          router.navigate("/");
          props.setShowNavMenu(false);
        }}
      >
        Home
      </div>

      <div
        className="menuItem"
        onClick={() => {
          router.navigate("/about");
          props.setShowNavMenu(false);
        }}
      >
        About
      </div>

      <div
        className="menuItem"
        onClick={() => {
          router.navigate("/forums");
          props.setShowNavMenu(false);
        }}
      >
        Forums
      </div>

      <div
        className="menuItem"
        onClick={() => {
          router.navigate("/blackMarket");
          props.setShowNavMenu(false);
        }}
      >
        Black Market
      </div>

      <div
        className="menuItem"
        onClick={() => {
          router.navigate("/operations");
          props.setShowNavMenu(false);
        }}
      >
        Operations
      </div>

      <div
        className="menuItem"
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
