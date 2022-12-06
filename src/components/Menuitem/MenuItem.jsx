import React from "react";

import "./MenuItem.css";

const MenuItem = ({ title, price, tags }) => (
  <div className="app__MenuItem">
    <div className="app__MenuItem-title-price">
      <div className="app__MenuItem-title">{title}</div>

      <div className="app__MenuItem-price">
        <div className="line"></div>
        <p>{price}</p>
      </div>
    </div>
    <div className="app__MenuItem-tags">{tags}</div>
  </div>
);

export default MenuItem;
