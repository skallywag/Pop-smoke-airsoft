import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgCloseO } from "react-icons/cg";
import "./NavBar.scss";
interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = (props) => {
  const [showNavMenu, setShowNavMenu] = useState<boolean>(false);

  return (
    <div className="navBar">
      {showNavMenu ? (
        <CgCloseO size={34} onClick={() => setShowNavMenu(!showNavMenu)} />
      ) : (
        <GiHamburgerMenu
          size={34}
          onClick={() => setShowNavMenu(!showNavMenu)}
        />
      )}
      {showNavMenu ? (
        <div className="navMenu">
          <div>Home</div>
          <div>About</div>
          <div>Contact</div>
          <div>Black Market</div>
          <div>Games</div>
        </div>
      ) : null}
    </div>
  );
};
export default NavBar;
