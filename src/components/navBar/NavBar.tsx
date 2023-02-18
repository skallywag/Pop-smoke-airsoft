import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgCloseO } from "react-icons/cg";
import "./NavBar.scss";
import suns from "../../assets/smoke.jpeg";
import logo from "../../assets/target.png";
import NavMenu from "./navMenu/NavMenu";
import Avatar from "../avatar/Avatar";
import Button from "../../shared/button/Button";
import { router } from "../../router";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = (props) => {
  const [showNavMenu, setShowNavMenu] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <div className="navWrapper">
      <div className="navBar">
        {showNavMenu ? (
          <CgCloseO
            size={34}
            color={"whitesmoke"}
            onClick={() => setShowNavMenu(!showNavMenu)}
          />
        ) : (
          <RxHamburgerMenu
            size={34}
            className="hamburger"
            onClick={() => setShowNavMenu(!showNavMenu)}
          />
        )}

        <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
          <img src={logo} height="30px" width={"30px"} className="logo" />
          <div style={{ fontSize: "20px", color: "whitesmoke" }}>Pop Smoke</div>

          <div className="linkContainer">
            <div className="navLink">About</div>
            <div className="navLink">Black Market</div>
            <div className="navLink">Games</div>
          </div>
        </div>
        <div>
          {isLoggedIn ? (
            <Avatar height="40px" width="40px" imageUrl={suns} />
          ) : (
            <Button
              key={1}
              variant={"buttonDefault"}
              onClick={() => router.navigate("/login")}
              text={"Login"}
              type={"button"}
            />
          )}
        </div>
        {showNavMenu ? <NavMenu setShowNavMenu={setShowNavMenu} /> : null}
      </div>
    </div>
  );
};
export default NavBar;
