import React from "react";
import { images } from "../../constants";
import './findUs.css';
const FindUs = () => (
  <div
    className="app__FindUs"
    style={{ backgroundImage: "url(" + images.bg + ")" }}
    >
    <div className="app__FindUs-content__headlines">
      <h3>Contact</h3>
      <img src={images.spoon} alt="spoon" />
      <h2>Find Us</h2>
      <p>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
      <div className="app__FindUs-location">
        <h4>Opening Hours</h4>
        <p>Mon - Fri: 10:00 am - 02:00 am</p>
        <p>Sat - Sun: 10:00 am - 03:00 am</p>
      </div>

      <button>Explore Menu</button>
    </div>
    <div className="app__FindUs-content__image">
      <img src={images.findus} alt="welcome" />
    </div>
  </div>
);

export default FindUs;
