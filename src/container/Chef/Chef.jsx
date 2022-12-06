import React from "react";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div
    className="app__Chef "
    style={{ backgroundImage: "url(" + images.bg + ")" }}
  >
    <div className="app__Chef-image">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app__Chef-content">
      <h3>Chef’s Word</h3>
      <img src={images.spoon} alt="spoon" />
      <h2>What we believe in</h2>
      <p>
        auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit.
        Nulla scelerisque scelerisque congue ac consequat, aliquam molestie
        lectus eu. Congue iaculis integer curabitur semper sit nunc.
      </p>
      <div className="app__Chef-content__signature">
        <p>Kevin Luo</p>
        <p>Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
