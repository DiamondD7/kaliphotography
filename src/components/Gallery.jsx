import React, { useState, useEffect } from "react";
import {
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
  banishathomasData,
  tiaraaaronData,
  megansamData,
} from "../assets/photosDatajson.js/Allphotos";
import { Aperture } from "phosphor-react";
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

  const [engagementAlbumClicked, setEngagementAlbumClicked] = useState(
    props.engagementClicked
  );
  const [inEngagementAlbum, setInEngagementAlbum] = useState(false);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, [loading]);
  return (
    <>
      {loading === true ? (
        <div className="loading__wrapper">
          <Aperture className={"loading-icon"} size={25} color="#454545" />
        </div>
      ) : (
        ""
      )}

      <div className="gallery-main-container">
        <div className="album-lists-container">
          <ul className="album-lists">
            <li>
              <button
                onClick={() => {
                  setCoupleAlbumClicked(true);
                  setEventAlbumClicked(false);
                  setEngagementAlbumClicked(false);
                  setFamilyAlbumClicked(false);
                  setInCoupleAlbum(false);
                  setInFamilyAlbum(false);
                  setLoading(true);
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
                  setEngagementAlbumClicked(false);
                  setEventAlbumClicked(false);
                  setFamilyAlbumClicked(false);
                  setInCoupleAlbum(false);
                  setLoading(true);
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
                  setEngagementAlbumClicked(false);
                  setEventAlbumClicked(false);
                  setInEventAlbum(false);
                  setInCoupleAlbum(false);
                  setLoading(true);
                }}
              >
                Family
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setEngagementAlbumClicked(true);
                  setCoupleAlbumClicked(false);
                  setEventAlbumClicked(false);
                  setFamilyAlbumClicked(false);
                  setInCoupleAlbum(false);
                  setLoading(true);
                }}
              >
                Engagement
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setData(null);
                  setEngagementAlbumClicked(false);
                  setCoupleAlbumClicked(false);
                  setFamilyAlbumClicked(false);
                  setEventAlbumClicked(false);
                  setInCoupleAlbum(false);
                  setLoading(true);
                }}
              >
                Maternity
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setData(newbornData);
                  setEngagementAlbumClicked(false);
                  setCoupleAlbumClicked(false);
                  setFamilyAlbumClicked(false);
                  setEventAlbumClicked(false);
                  setInCoupleAlbum(false);
                  setLoading(true);
                }}
              >
                Newborn
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setEventAlbumClicked(true);
                  setEngagementAlbumClicked(false);
                  setCoupleAlbumClicked(false);
                  setInEventAlbum(false);
                  setLoading(true);
                }}
              >
                Event
              </button>
            </li>

            <li>
              <button
                onClick={() => {
                  setData(null);
                  setEngagementAlbumClicked(false);
                  setCoupleAlbumClicked(false);
                  setEventAlbumClicked(false);
                  setFamilyAlbumClicked(false);
                  setInCoupleAlbum(false);
                  setLoading(true);
                }}
              >
                Pets
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setData(wildlifedata);
                  setEngagementAlbumClicked(false);
                  setCoupleAlbumClicked(false);
                  setFamilyAlbumClicked(false);
                  setEventAlbumClicked(false);
                  setInCoupleAlbum(false);
                  setLoading(true);
                }}
              >
                Wildlife
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setData(null);
                  setEngagementAlbumClicked(false);
                  setCoupleAlbumClicked(false);
                  setFamilyAlbumClicked(false);
                  setEventAlbumClicked(false);
                  setInCoupleAlbum(false);
                  setLoading(true);
                }}
              >
                Landscape
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setData(null);
                  setEngagementAlbumClicked(false);
                  setCoupleAlbumClicked(false);
                  setFamilyAlbumClicked(false);
                  setEventAlbumClicked(false);
                  setInCoupleAlbum(false);
                  setLoading(true);
                }}
              >
                Travel
              </button>
            </li>

            <li>
              <button
                onClick={() => {
                  setData(automotiveData);
                  setEngagementAlbumClicked(false);
                  setCoupleAlbumClicked(false);
                  setFamilyAlbumClicked(false);
                  setEventAlbumClicked(false);
                  setInCoupleAlbum(false);
                  setLoading(true);
                }}
              >
                Automotive
              </button>
            </li>
          </ul>
        </div>

        <>
          {coupleAlbumClicked === true ? (
            <div>
              <div className="couple-albums__wrapper">
                <div className="erinwayne__wrapper">
                  <div className="contents">
                    <button
                      className="couple-album__btn"
                      onClick={() => {
                        setData(erinwayneData);
                        setCoupleAlbumClicked(false);
                        setEventAlbumClicked(false);
                        setFamilyAlbumClicked(false);
                        setInCoupleAlbum(true);
                        setLoading(true);
                      }}
                    >
                      Erin & Wayne
                    </button>
                  </div>
                </div>

                <div className="emmajono__wrapper">
                  <div className="contents">
                    <button
                      className="couple-album__btn"
                      onClick={() => {
                        setData(emmajonoData);
                        setCoupleAlbumClicked(false);
                        setEventAlbumClicked(false);
                        setFamilyAlbumClicked(false);
                        setInCoupleAlbum(true);
                        setLoading(true);
                      }}
                    >
                      Emma & Jono
                    </button>
                  </div>
                </div>

                <div className="banishathomas__wrapper">
                  <div className="contents">
                    <button
                      className="couple-album__btn"
                      onClick={() => {
                        setData(banishathomasData);
                        setCoupleAlbumClicked(false);
                        setEventAlbumClicked(false);
                        setFamilyAlbumClicked(false);
                        setInCoupleAlbum(true);
                        setLoading(true);
                      }}
                    >
                      Banisha & Thomas
                    </button>
                  </div>
                </div>

                <div className="laryjack__wrapper">
                  <div className="contents">
                    <button
                      className="couple-album__btn"
                      onClick={() => {
                        setData(laryjackData);
                        setCoupleAlbumClicked(false);
                        setEventAlbumClicked(false);
                        setFamilyAlbumClicked(false);
                        setInCoupleAlbum(true);
                        setLoading(true);
                      }}
                    >
                      Lary & Jack
                    </button>
                  </div>
                </div>

                <div className="tiaraaaron__wrapper">
                  <div className="contents">
                    <button
                      className="couple-album__btn"
                      onClick={() => {
                        setData(tiaraaaronData);
                        setCoupleAlbumClicked(false);
                        setEventAlbumClicked(false);
                        setFamilyAlbumClicked(false);
                        setInCoupleAlbum(true);
                        setLoading(true);
                      }}
                    >
                      Tiara & Aaron
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : eventAlbumClicked === true ? (
            <div className="event-albums__wrapper">
              <div className="mariabday__wrapper">
                <div className="contents">
                  <button
                    className="couple-album__btn"
                    onClick={() => {
                      setData(birthdayData);
                      setEventAlbumClicked(false);
                      setCoupleAlbumClicked(false);
                      setFamilyAlbumClicked(false);
                      setInEventAlbum(true);
                      setLoading(true);
                    }}
                  >
                    Maria's 30th
                  </button>
                </div>
              </div>

              <div className="aidens__wrapper">
                <div className="contents">
                  <button
                    className="couple-album__btn"
                    onClick={() => {
                      setData(aidenData);
                      setEventAlbumClicked(false);
                      setCoupleAlbumClicked(false);
                      setFamilyAlbumClicked(false);
                      setInEventAlbum(true);
                      setLoading(true);
                    }}
                  >
                    Aiden's 1st
                  </button>
                </div>
              </div>

              <div className="aidens__wrapper">
                <div className="contents">
                  <button
                    className="couple-album__btn"
                    onClick={() => {
                      setData(aidenData);
                      setEventAlbumClicked(false);
                      setCoupleAlbumClicked(false);
                      setFamilyAlbumClicked(false);
                      setInEventAlbum(true);
                      setLoading(true);
                    }}
                  >
                    Aiden's 1st
                  </button>
                </div>
              </div>

              <div className="aidens__wrapper">
                <div className="contents">
                  <button
                    className="couple-album__btn"
                    onClick={() => {
                      setData(aidenData);
                      setEventAlbumClicked(false);
                      setCoupleAlbumClicked(false);
                      setFamilyAlbumClicked(false);
                      setInEventAlbum(true);
                      setLoading(true);
                    }}
                  >
                    Aiden's 1st
                  </button>
                </div>
              </div>
            </div>
          ) : familyAlbumClicked === true ? (
            <div className="family-albums__wrapper">
              <div className="kaire-taiwhanga__wrapper">
                <div className="contents">
                  <button
                    className="couple-album__btn"
                    onClick={() => {
                      setData(ktData);
                      setEventAlbumClicked(false);
                      setCoupleAlbumClicked(false);
                      setFamilyAlbumClicked(false);
                      setInEventAlbum(false);
                      setInFamilyAlbum(true);
                      setLoading(true);
                    }}
                  >
                    Kaire-Taiwhanga
                  </button>
                </div>
              </div>
            </div>
          ) : engagementAlbumClicked === true ? (
            <div className="engagement-albums__wrapper">
              <div className="sheenaben__wrapper">
                <div className="contents">
                  <button
                    className="couple-album__btn"
                    onClick={() => {
                      setData(sheenabenData);
                      setCoupleAlbumClicked(false);
                      setEventAlbumClicked(false);
                      setInEventAlbum(false);
                      setFamilyAlbumClicked(false);
                      setEngagementAlbumClicked(false);
                      setInEngagementAlbum(true);
                      setLoading(true);
                    }}
                  >
                    Sheena & Ben
                  </button>
                </div>
              </div>

              <div className="megansam__wrapper">
                <div className="contents">
                  <button
                    className="couple-album__btn"
                    onClick={() => {
                      setData(megansamData);
                      setCoupleAlbumClicked(false);
                      setEventAlbumClicked(false);
                      setInEventAlbum(false);
                      setFamilyAlbumClicked(false);
                      setEngagementAlbumClicked(false);
                      setInEngagementAlbum(true);
                      setLoading(true);
                    }}
                  >
                    Megan & Sam
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="gallery">
              {data === null ? (
                <div className="comingsoon__wrapper">
                  <img className="comingsoon-image" src={comingSoon} />
                </div>
              ) : (
                <div>
                  {inCoupleAlbum === true ||
                  inEventAlbum === true ||
                  inFamilyAlbum === true ||
                  inEngagementAlbum === true ? (
                    <button
                      className="backbtncouplealbum"
                      onClick={() => {
                        if (inCoupleAlbum === true) {
                          setCoupleAlbumClicked(true);
                        } else if (inEventAlbum === true) {
                          setEventAlbumClicked(true);
                        } else if (inFamilyAlbum === true) {
                          setFamilyAlbumClicked(true);
                        } else {
                          setEngagementAlbumClicked(true);
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
                        <img
                          alt="picture-data"
                          src={items.imgSrc}
                          style={{ width: "100%" }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </>
      </div>
    </>
  );
};

export default Gallery;
