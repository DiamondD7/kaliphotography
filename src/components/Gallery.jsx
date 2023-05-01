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
  const [coupleAlbumClicked, setCoupleAlbumClicked] = useState(
    props.coupleCLicked
  );

  return (
    <div className="gallery-main-container">
      <div className="album-lists-container">
        <ul className="album-lists">
          <li>
            <button
              onClick={() => {
                setCoupleAlbumClicked(true);
              }}
            >
              Couple
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setData(null);
                setCoupleAlbumClicked(false);
              }}
            >
              Traditional
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setData(null);
                setCoupleAlbumClicked(false);
              }}
            >
              Family
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setData(null);
                setCoupleAlbumClicked(false);
              }}
            >
              Engagement
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setData(null);
                setCoupleAlbumClicked(false);
              }}
            >
              Maternity
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setData(newbornData);
                setCoupleAlbumClicked(false);
              }}
            >
              Newborn
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setData(birthdayData);
                setCoupleAlbumClicked(false);
              }}
            >
              Birthdays
            </button>
          </li>

          <li>
            <button
              onClick={() => {
                setData(null);
                setCoupleAlbumClicked(false);
              }}
            >
              Pets
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setData(wildlifedata);
                setCoupleAlbumClicked(false);
              }}
            >
              Wildlife
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setData(null);
                setCoupleAlbumClicked(false);
              }}
            >
              Landscape
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setData(null);
                setCoupleAlbumClicked(false);
              }}
            >
              Travel
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setData(null);
                setCoupleAlbumClicked(false);
              }}
            >
              Street
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setData(null);
                setCoupleAlbumClicked(false);
              }}
            >
              Sports
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setData(automotiveData);
                setCoupleAlbumClicked(false);
              }}
            >
              Automotive
            </button>
          </li>
        </ul>
      </div>

      {coupleAlbumClicked === true ? (
        <div>
          <div className="couple-albums__wrapper">
            <div className="erinwayne__wrapper">
              <div className="contents">
                {/* setData(newbornData); */}
                <button>Erin & Wayne</button>
              </div>
            </div>

            <div className="erinwayne__wrapper">
              <div className="contents">
                {/* setData(newbornData); */}
                <button>Banisha & Thomas</button>
              </div>
            </div>

            <div className="erinwayne__wrapper">
              <div className="contents">
                {/* setData(newbornData); */}
                <button>Emma & Jono</button>
              </div>
            </div>

            <div className="erinwayne__wrapper">
              <div className="contents">
                {/* setData(newbornData); */}
                <button>Lary & Jack</button>
              </div>
            </div>

            <div className="erinwayne__wrapper">
              <div className="contents">
                {/* setData(newbornData); */}
                <button>Sheena & Ben</button>
              </div>
            </div>

            <div className="erinwayne__wrapper">
              <div className="contents">
                {/* setData(newbornData); */}
                <button>Tiara & Aaron</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="gallery">
          {data === null ? (
            <div className="comingsoon__wrapper">
              <img src={comingSoon} />
            </div>
          ) : (
            <div>
              <div>
                {data.map((items) => (
                  <div key={items.id}>
                    <img src={items.imgSrc} style={{ width: "100%" }} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Gallery;
