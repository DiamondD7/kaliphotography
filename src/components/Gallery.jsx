import React, { useState, useEffect } from "react";
import {
  allData,
  newbornData,
  automotiveData,
  wildlifedata,
  birthdayData,
  erinwayneData,
  emmajonoData,
  laryjackData,
} from "../assets/photosDatajson.js/Allphotos";
import comingSoon from "../images/comingSoon.png";

import "../styles/gallerystyles.css";

const Gallery = (props) => {
  const [data, setData] = useState(props.dataPassed);
  const [coupleAlbumClicked, setCoupleAlbumClicked] = useState(
    props.coupleCLicked
  );
  const [inCoupleAlbum, setInCoupleAlbum] = useState(false);

  console.log(data);
  return (
    <div className="gallery-main-container">
      <div className="album-lists-container">
        <ul className="album-lists">
          <li>
            <button
              onClick={() => {
                setCoupleAlbumClicked(true);
                setInCoupleAlbum(false);
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
                setInCoupleAlbum(false);
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
                setInCoupleAlbum(false);
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
                setInCoupleAlbum(false);
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
                setInCoupleAlbum(false);
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
                setInCoupleAlbum(false);
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
                setInCoupleAlbum(false);
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
                setInCoupleAlbum(false);
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
                setInCoupleAlbum(false);
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
                setInCoupleAlbum(false);
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
                setInCoupleAlbum(false);
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
                setInCoupleAlbum(false);
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
                setInCoupleAlbum(false);
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
                setInCoupleAlbum(false);
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
                <button
                  onClick={() => {
                    setData(erinwayneData);
                    setCoupleAlbumClicked(false);
                    setInCoupleAlbum(true);
                  }}
                >
                  Erin & Wayne
                </button>
              </div>
            </div>

            <div className="erinwayne__wrapper">
              <div className="contents">
                <button>Banisha & Thomas</button>
              </div>
            </div>

            <div className="emmajono__wrapper">
              <div className="contents">
                <button
                  onClick={() => {
                    setData(emmajonoData);
                    setCoupleAlbumClicked(false);
                    setInCoupleAlbum(true);
                  }}
                >
                  Emma & Jono
                </button>
              </div>
            </div>

            <div className="laryjack__wrapper">
              <div className="contents">
                <button
                  onClick={() => {
                    setData(laryjackData);
                    setCoupleAlbumClicked(false);
                    setInCoupleAlbum(true);
                  }}
                >
                  Lary & Jack
                </button>
              </div>
            </div>

            <div className="sheenaben__wrapper">
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
              {inCoupleAlbum === true ? (
                <button
                  className="backbtncouplealbum"
                  onClick={() => setCoupleAlbumClicked(true)}
                >
                  Back
                </button>
              ) : (
                ""
              )}
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
