import React from "react";
import "./award.css";
export default function Award({ title, imgUrl, subtitle }) {
  return (
    <div className="app__Award">
      <div className="app__Award-image">
        <img src={imgUrl} alt={title} />
      </div>
      <div className="app__Award-content">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}
