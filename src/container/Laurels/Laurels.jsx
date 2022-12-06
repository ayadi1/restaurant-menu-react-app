import React from "react";
import { images } from "../../constants";
import { data } from "../../constants";
import { Award } from "../../components";
import "./Laurels.css";

const Laurels = () => (
  <div
    className="app__laurels"
    style={{ backgroundImage: "url(" + images.bg + ")" }}
   >
    <div className="app__laurels-container">
      <div className="app__laurels-container__logo">
        <img src={images.logo} alt="" />
      </div>
      <div className="app__laurels-container__content">
        <div className="app__laurels-container__content-laurels">
          <div className="app__laurels-container__content-laurels__headlines">
            <h3>Awards & recognition</h3>
            <img src={images.spoon} alt="spoon" />
            <h2>Our Laurels</h2>
          </div>
          <div className="app__laurels-container__content-laurels__awards">
            {data.awards.map((award) => (
              <Award
                key={award.title}
                imgUrl={award.imgUrl}
                title={award.title}
                subtitle={award.subtitle}
              />
            ))}
          </div>
        </div>
        <div className="app__laurels-container__content-image">
          <img src={images.laurels} alt="laurels" />
        </div>
      </div>
    </div>
  </div>
);

export default Laurels;
