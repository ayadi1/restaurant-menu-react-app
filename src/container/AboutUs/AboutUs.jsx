import React from "react";
import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div
      className="app__about app__padding"
      style={{ backgroundImage: "url(" + images.bg + ")" }}
    >
      <div className="app__about-content js-end">
        <h2>About Us</h2>
        <img src={images.spoon} alt="spoon" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <button>Know More</button>
      </div>
      <div className="app__about-image">
        <img src={images.knife} alt="knife" />
      </div>
      <div className="app__about-content js-start">
        <h2>Our History</h2>
        <img src={images.spoon} alt="spoon" />

        <p>
          Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
          Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
          odio nec aliquet.
        </p>
        <button>Know More</button>
      </div>
    </div>
  );
};

export default AboutUs;
