import React from "react";
import { images } from "../../constants";
import "./Gallery.css";
import { BsInstagram } from "react-icons/bs";

const Gallery = () => (
  <div className="app__Gallery">
    <div className="app__Gallery-headlines">
      <h3>Instagram</h3>
      <img src={images.spoon} alt="spoon" />
      <h2>Photo Gallery</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis
        ipsum turpis elit elit scelerisque egestas mu.
      </p>
      <button>View More</button>
    </div>
    <div className="app__Gallery-images">
      <div className="image">
        <img src={images.gallery01} alt="gallery01" />
        <div className="instagram">
          <BsInstagram color="#ffffff" />
        </div>
      </div>
      <div className="image">
        <img src={images.gallery02} alt="gallery01" />
        <div className="instagram">
          <BsInstagram color="#ffffff" />
        </div>
      </div>
      <div className="image">
        <img src={images.gallery03} alt="gallery01" />
        <div className="instagram">
          <BsInstagram color="#ffffff" />
        </div>
      </div>
      <div className="image">
        <img src={images.gallery04} alt="gallery01" />
        <div className="instagram">
          <BsInstagram color="#ffffff" />
        </div>
      </div>
    </div>
  </div>
);

export default Gallery;
