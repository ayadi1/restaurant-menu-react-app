import React, { useState } from "react";
import { BiAlignLeft } from "react-icons/bi";
import { BiX } from "react-icons/bi";

import "./Navbar.css";

const Links = () => (
  <>
    <a href="#home">Home</a>
    <a href="#home">Pages</a>
    <a href="#home">Contact Us</a>
    <a href="#home">Blog</a>
    <a href="#home">Landing</a>
  </>
);

const Buttons = () => (
  <>
    <div className="app__navBar-buttons__login">Log in / registration</div>
    <div className="line"></div>
    <div className="app__navBar-buttons__book-table">book table</div>
  </>
);

const Navbar = () => {
  const [isShowing, setIsShowing] = useState(false);
  const hideMenu = () => {
    setIsShowing((oldState) => !oldState);
  };
  const showMenu = () => {
    setIsShowing((oldState) => !oldState);
  };
  return (
    <div className="app__navBar app__padding">
      <div className="app__navBar-logo">Gerícht</div>
      <div className="app__navBar-links">
        <Links />
      </div>
      <div className="app__navBar-buttons">
        <Buttons />
      </div>
      <div className="app__navBar-nabMobile">
        <div className="app__navBar-nabMobile__icon">
          {isShowing ? (
            <BiX color="#fff" onClick={showMenu} />
          ) : (
            <BiAlignLeft onClick={hideMenu} color="#fff" />
          )}
        </div>
        <div className="app__navBar-nabMobile__links">
          {isShowing && (
            <div className="slide-bottom">
              <Links />
              <Buttons />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
