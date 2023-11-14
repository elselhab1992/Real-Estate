import "./NavBar.css";
import logo from "/logo.png";
import { BiMenuAltRight } from "react-icons/bi";
import { useState } from "react";
// import OutsideClickHandler from "react-outside-click-handler";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const getMenuOpen = (menuOpen) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpen && "-100%" };
    }
  };

  return (
    <header>
      <img src={logo} alt={logo} />
      {/* <OutsideClickHandler
        onOutsideClick={() => {
          setMenuOpen(false);
        }}
      > */}
      <nav style={getMenuOpen(menuOpen)}>
        <a href="#">Residences</a>
        <a href="#">Our Value</a>
        <a href="#">Contact Us</a>
        <a href="#">Get Started</a>
        <button className="btn">
          <a href="#">Contact</a>
        </button>
      </nav>
      {/* </OutsideClickHandler> */}
      <BiMenuAltRight
        className="mobile-icon"
        onClick={() => setMenuOpen((prev) => !prev)}
      />
    </header>
  );
};

export default NavBar;
