import React, { useState, useEffect } from "react";
import {
  allData,
  newbornData,
  automotiveData,
  wildlifedata,
} from "../assets/photosDatajson.js/Allphotos";
import "../styles/gallerystyles.css";

const Gallery = (props) => {
  const [data, setData] = useState(props.dataPassed);

  return (
    <div className="gallery-main-container">
      <div className="album-lists-container">
        <ul className="album-lists">
          <li>
            <button>Events</button>
          </li>
          <li>
            <button onClick={() => setData(automotiveData)}>Automotive</button>
          </li>
          <li>
            <button>People</button>
          </li>
          <li>
            <button>Portraits</button>
          </li>
          <li>
            <button onClick={() => setData(newbornData)}>Newborn</button>
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
            <button onClick={() => setData(wildlifedata)}>Wildlife</button>
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
            <button>Newborn</button>
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
