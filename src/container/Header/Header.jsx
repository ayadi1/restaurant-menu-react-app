import React from "react";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__padding">
    <div className="app__header-content">
      <div className="app__header-content__small-text">
        <p>#Gericht</p>
        <p>#Bar</p>
      </div>
      <div className="app__header-content__headlines">
        <h3>Chase the new Flavour</h3>
        <img src={images.spoon} alt="spoon" />
        <h2>The key to Fine dining</h2>
        <p>
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus{" "}
        </p>
        <button>Explore Menu</button>
      </div>
      <div className="app__header-content__image">
        <img src={images.welcome} alt="welcome" />
      </div>
    </div>
    <div className="app__header-footer">
      <div className="app__header-footer__numbers">
        <p>01</p>
        <div className="line"></div>
        <p>02</p>
        <p>03</p>
        <p>04</p>
      </div>
      <div className="app__header-footer__scroll">
        <div className="line"></div>
        <p>Scroll</p>
      </div>
    </div>
  </div>
);

export default Header;
