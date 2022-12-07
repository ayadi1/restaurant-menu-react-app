import React from "react";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div
    className="app__Footer"
    style={{ backgroundImage: "url(" + images.bg + ")" }}
  >
    <div className="app__Footer-Subscribe">
      <h3>Newsletter</h3>
      <img src={images.spoon} alt="spoon" />
      <h2>Subscribe to Our Newsletter</h2>
      <p>And never miss latest Updates!</p>
      <div className="app__Footer-Subscribe__inputs">
        <input type="text" placeholder="Email Address" />
        <button>Subscribe</button>
      </div>
    </div>
    <div className="app__Footer-container">
      <div className="app__Footer-container__infos">
        <div className="app__Footer-container__infos-data">
          <h3>Contact Us</h3>
          <p>9 W 53rd St, New York, NY 10019, USA</p>
          <p>+1 212-344-1230</p>
          <p>+1 212-555-1230</p>
        </div>
        <div className="app__Footer-container__infos-logo">
          <h2>Gerícht</h2>
          <p>
            "The best way to find yourself is to lose yourself in the service of
            others.”
          </p>
          <img src={images.spoon} alt="spoon" />
          <div className="app__Footer-container__infos-logo__icons">
            <BsInstagram color="#ffffff" />
            <BsFacebook color="#ffffff" />
            <BsTwitter color="#ffffff" />
          </div>
        </div>
        <div className="app__Footer-container__infos-data">
          <h3>Working Hours</h3>
          <p>Monday-Friday:</p>
          <p>08:00 am -12:00 am</p>
          <p>Saturday-Sunday:</p>
          <p>07:00am -11:00 pm</p>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
