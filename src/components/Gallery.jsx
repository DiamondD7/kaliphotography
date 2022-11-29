import React from "react";
import one from "../images/sliderImages/one.jpg";
import two from "../images/sliderImages/two.jpg";
import three from "../images/sliderImages/three.jpg";
import four from "../images/sliderImages/four.jpg";
import hero from "../images/hero.jpg";
import hero2 from "../images/hero2.jpg";

import "../styles/gallerystyles.css";

const Gallery = () => {
  let data = [
    {
      id: 1,
      imgSrc: one,
    },
    {
      id: 2,
      imgSrc: two,
    },
    {
      id: 3,
      imgSrc: three,
    },
    {
      id: 4,
      imgSrc: four,
    },
    {
      id: 5,
      imgSrc: hero,
    },
    {
      id: 6,
      imgSrc: hero2,
    },
    {
      id: 7,
      imgSrc: one,
    },
    {
      id: 8,
      imgSrc: two,
    },
    {
      id: 9,
      imgSrc: three,
    },
    {
      id: 10,
      imgSrc: four,
    },
    {
      id: 11,
      imgSrc: hero,
    },
    {
      id: 12,
      imgSrc: hero2,
    },
    {
      id: 13,
      imgSrc: one,
    },
    {
      id: 14,
      imgSrc: two,
    },
    {
      id: 15,
      imgSrc: three,
    },
    {
      id: 16,
      imgSrc: four,
    },
    {
      id: 17,
      imgSrc: hero,
    },
  ];
  return (
    <div className="gallery-main-container">
      <div className="album-lists-container">
        <ul className="album-lists">
          <li>
            <button>Wildlife</button>
          </li>
          <li>
            <button>Automotive</button>
          </li>
          <li>
            <button>People</button>
          </li>
          <li>
            <button>Portraits</button>
          </li>
          <li>
            <button>Environment</button>
          </li>
          <li>
            <button>Weddings</button>
          </li>
          <li>
            <button>Birthdays</button>
          </li>
          <li>
            <button>Sports</button>
          </li>
          <li>
            <button>Wildlife</button>
          </li>
          <li>
            <button>Automotive</button>
          </li>
          <li>
            <button>People</button>
          </li>
          <li>
            <button>Portraits</button>
          </li>
          <li>
            <button>Environment</button>
          </li>
          <li>
            <button>Weddings</button>
          </li>
          <li>
            <button>Birthdays</button>
          </li>
          <li>
            <button>Sports</button>
          </li>
        </ul>
      </div>
      <div className="gallery">
        {data.map((items) => (
          <div key={items.id}>
            <img src={items.imgSrc} style={{ width: "100%" }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
