import React from "react";
import { images, data } from "../../constants";
import { MenuItem } from "../../components";
import "./SpecialMenu.css";

const SpecialMenu = () => {
  return (
    <div className="app__SpecialMenu app__padding">
      <div className="app__SpecialMenu-container">
        <div className="app__SpecialMenu-container__headlines">
          <h3>Menu that fits you palatte</h3>
          <img src={images.spoon} alt="spoon" />
          <h2>Today’s Special</h2>
        </div>
        <div className="app__SpecialMenu-container__menu">
          <div className="app__SpecialMenu-container__menu-items">
            <h4>Wine & Beer</h4>
            {data.wines.map((win) => (
              <MenuItem
                title={win.title}
                key={win.title}
                price={win.price}
                tags={win.tags}
              />
            ))}
          </div>
          <div className="app__SpecialMenu-container__menu-image">
            <img src={images.menu} alt="menu" />
          </div>
          <div className="app__SpecialMenu-container__menu-items">
            <h4>Cocktails</h4>
            {data.cocktails.map((cocktail) => (
              <MenuItem
                title={cocktail.title}
                key={cocktail.title}
                price={cocktail.price}
                tags={cocktail.tags}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialMenu;
