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
  sheenabenData,
  aidenData,
  ktData,
} from "../assets/photosDatajson.js/Allphotos";
import comingSoon from "../images/comingSoon.png";

import "../styles/gallerystyles.css";

const Gallery = (props) => {
  const [data, setData] = useState(props.dataPassed);
  const [coupleAlbumClicked, setCoupleAlbumClicked] = useState(
    props.coupleCLicked
  );
  const [inCoupleAlbum, setInCoupleAlbum] = useState(false);

  const [eventAlbumClicked, setEventAlbumClicked] = useState(
    props.eventClicked
  );
  const [inEventAlbum, setInEventAlbum] = useState(false);

  const [familyAlbumClicked, setFamilyAlbumClicked] = useState(
    props.familyClicked
  );
  const [inFamilyAlbum, setInFamilyAlbum] = useState(false);

  console.log(data);
  return (
    <div className="gallery-main-container">
      <div className="album-lists-container">
        <ul className="album-lists">
          <li>
            <button
              onClick={() => {
                setCoupleAlbumClicked(true);
                setEventAlbumClicked(false);
                setFamilyAlbumClicked(false);
                setInCoupleAlbum(false);
                setInFamilyAlbum(false);
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
                setEventAlbumClicked(false);
                setFamilyAlbumClicked(false);
                setInCoupleAlbum(false);
              }}
            >
              Traditional
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setFamilyAlbumClicked(true);
                setCoupleAlbumClicked(false);
                setEventAlbumClicked(false);
                setInEventAlbum(false);
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
                setEventAlbumClicked(false);
                setFamilyAlbumClicked(false);
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
                setFamilyAlbumClicked(false);
                setEventAlbumClicked(false);
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
                setFamilyAlbumClicked(false);
                setEventAlbumClicked(false);
                setInCoupleAlbum(false);
              }}
            >
              Newborn
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setEventAlbumClicked(true);
                setCoupleAlbumClicked(false);
                setInEventAlbum(false);
              }}
            >
              Event
            </button>
          </li>

          <li>
            <button
              onClick={() => {
                setData(null);
                setCoupleAlbumClicked(false);
                setEventAlbumClicked(false);
                setFamilyAlbumClicked(false);
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
                setFamilyAlbumClicked(false);
                setEventAlbumClicked(false);
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
                setFamilyAlbumClicked(false);
                setEventAlbumClicked(false);
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
                setFamilyAlbumClicked(false);
                setEventAlbumClicked(false);
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
                setFamilyAlbumClicked(false);
                setEventAlbumClicked(false);
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
                setFamilyAlbumClicked(false);
                setEventAlbumClicked(false);
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
                setFamilyAlbumClicked(false);
                setEventAlbumClicked(false);
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
                    setEventAlbumClicked(false);
                    setFamilyAlbumClicked(false);
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
                    setEventAlbumClicked(false);
                    setFamilyAlbumClicked(false);
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
                    setEventAlbumClicked(false);
                    setFamilyAlbumClicked(false);
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
                <button
                  onClick={() => {
                    setData(sheenabenData);
                    setCoupleAlbumClicked(false);
                    setEventAlbumClicked(false);
                    setInEventAlbum(false);
                    setFamilyAlbumClicked(false);
                    setInCoupleAlbum(true);
                  }}
                >
                  Sheena & Ben
                </button>
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
      ) : eventAlbumClicked === true ? (
        <div className="event-albums__wrapper">
          <div className="mariabday__wrapper">
            <div className="contents">
              {/* setData(newbornData); */}
              <button
                onClick={() => {
                  setData(birthdayData);
                  setEventAlbumClicked(false);
                  setCoupleAlbumClicked(false);
                  setFamilyAlbumClicked(false);
                  setInEventAlbum(true);
                }}
              >
                Maria's 30th
              </button>
            </div>
          </div>

          <div className="aidens__wrapper">
            <div className="contents">
              {/* setData(newbornData); */}
              <button
                onClick={() => {
                  setData(aidenData);
                  setEventAlbumClicked(false);
                  setCoupleAlbumClicked(false);
                  setFamilyAlbumClicked(false);
                  setInEventAlbum(true);
                }}
              >
                Aiden's 1st
              </button>
            </div>
          </div>
        </div>
      ) : familyAlbumClicked === true ? (
        <div className="event-albums__wrapper">
          <div className="kaire-taiwhanga__wrapper">
            <div className="contents">
              {/* setData(newbornData); */}
              <button
                onClick={() => {
                  setData(ktData);
                  setEventAlbumClicked(false);
                  setCoupleAlbumClicked(false);
                  setFamilyAlbumClicked(false);
                  setInEventAlbum(false);
                  setInFamilyAlbum(true);
                }}
              >
                Kaire-Taiwhanga
              </button>
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
              {inCoupleAlbum === true ||
              inEventAlbum === true ||
              inFamilyAlbum === true ? (
                <button
                  className="backbtncouplealbum"
                  onClick={() => {
                    if (inCoupleAlbum === true) {
                      setCoupleAlbumClicked(true);
                    } else if (inEventAlbum === true) {
                      setEventAlbumClicked(true);
                    } else {
                      setFamilyAlbumClicked(true);
                    }
                  }}
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
