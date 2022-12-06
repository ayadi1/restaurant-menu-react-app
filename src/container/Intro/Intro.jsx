import React from "react";
import { meal } from "../../constants";
import "./Intro.css";

const Intro = () => (
  <div className="app__Intro">
    <video controls autostart autoPlay src={meal} type="video/mp4">
      <button type="button" id="playVideo">
        +
      </button>
    </video>
  </div>
);

export default Intro;
