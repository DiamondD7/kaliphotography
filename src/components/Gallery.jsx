import React, { useState, useEffect } from "react";
import {
  allData,
  newbornData,
  automotiveData,
  wildlifedata,
  birthdayData,
} from "../assets/photosDatajson.js/Allphotos";
import comingSoon from "../images/comingSoon.png";

import "../styles/gallerystyles.css";

const Gallery = (props) => {
  const [data, setData] = useState(props.dataPassed);

  return (
    <div className="gallery-main-container">
      <div className="album-lists-container">
        <ul className="album-lists">
          <li>
            <button>Couple</button>
          </li>
          <li>
            <button onClick={() => setData(null)}>Traditional</button>
          </li>
          <li>
            <button onClick={() => setData(null)}>Family</button>
          </li>
          <li>
            <button onClick={() => setData(null)}>Lifestyle</button>
          </li>
          <li>
            <button onClick={() => setData(null)}>Maternity</button>
          </li>
          <li>
            <button onClick={() => setData(newbornData)}>Newborn</button>
          </li>
          <li>
            <button onClick={() => setData(birthdayData)}>Birthdays</button>
          </li>
          <li>
            <button onClick={() => setData(null)}>Engagement</button>
          </li>
          <li>
            <button onClick={() => setData(null)}>Pets</button>
          </li>
          <li>
            <button onClick={() => setData(wildlifedata)}>Wildlife</button>
          </li>
          <li>
            <button onClick={() => setData(null)}>Landscape</button>
          </li>
          <li>
            <button onClick={() => setData(null)}>Travel</button>
          </li>
          <li>
            <button onClick={() => setData(null)}>Street</button>
          </li>
          <li>
            <button onClick={() => setData(null)}>Sports</button>
          </li>
          <li>
            <button onClick={() => setData(automotiveData)}>Automotive</button>
          </li>
        </ul>
      </div>

      <div className="gallery">
        {data === null ? (
          <div className="comingsoon__wrapper">
            <img src={comingSoon} />
          </div>
        ) : (
          <div>
            {data.map((items) => (
              <div key={items.id}>
                <img src={items.imgSrc} style={{ width: "100%" }} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
