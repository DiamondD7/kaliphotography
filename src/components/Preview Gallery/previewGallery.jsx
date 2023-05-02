import React, { useState } from "react";
import Gallery from "../Gallery";
import {
  newbornData,
  automotiveData,
  wildlifedata,
  birthdayData,
} from "../../assets/photosDatajson.js/Allphotos";

import "../../styles/previewgallery.css";
const PreviewGallery = () => {
  const [dataClicked, setDataClicked] = useState([]);
  const [isAlbumClicked, setIsAlbumClicked] = useState(false);
  const [coupleCLicked, setCoupleClicked] = useState(false);
  const [eventClicked, setEventClicked] = useState(false);
  const [familyClicked, setFamilyClicked] = useState(false);
  const [engagementClicked, setEngagementClicked] = useState(false);

  return (
    <div>
      {isAlbumClicked === false ? (
        <div className="main-container">
          <div className="preview-container-couples">
            <div className="content">
              <button
                onClick={() => {
                  setIsAlbumClicked(true);
                  setCoupleClicked(true);
                }}
              >
                Couple
              </button>
            </div>
          </div>

          <div className="preview-container-traditional" id="nbpreview">
            <div className="content">
              <button
                onClick={() => {
                  setDataClicked(newbornData);
                  setIsAlbumClicked(true);
                }}
              >
                Traditional
              </button>
            </div>
          </div>

          <div className="preview-container-families">
            <div className="content">
              <button
                onClick={() => {
                  setFamilyClicked(true);
                  setIsAlbumClicked(true);
                }}
              >
                Family
              </button>
            </div>
          </div>

          <div className="preview-container-wedding">
            <div className="content">
              <button
                onClick={() => {
                  setIsAlbumClicked(true);
                  setEngagementClicked(true);
                }}
              >
                Engagement
              </button>
            </div>
          </div>

          {/* <div className="preview-container-lifestyle">
            <div className="content">
              <button
                onClick={() => {
                  setDataClicked(automotiveData);
                  setIsAlbumClicked(true);
                }}
              >
                Lifestyle
              </button>
            </div>
          </div> */}

          <div className="preview-container-maternity" id="nbpreview">
            <div className="content">
              <button
                onClick={() => {
                  setDataClicked(null);
                  setIsAlbumClicked(true);
                }}
              >
                Maternity
              </button>
            </div>
          </div>

          <div className="preview-container" id="nbpreview">
            <div className="content">
              <button
                onClick={() => {
                  setDataClicked(newbornData);
                  setIsAlbumClicked(true);
                }}
              >
                Newborn
              </button>
            </div>
          </div>

          <div className="preview-container-birthday">
            <div className="content">
              <button
                onClick={() => {
                  // setDataClicked(birthdayData);
                  setIsAlbumClicked(true);
                  setEventClicked(true);
                }}
              >
                Event
              </button>
            </div>
          </div>

          <div className="preview-container-pets">
            <div className="content">
              <button
                onClick={() => {
                  setDataClicked(automotiveData);
                  setIsAlbumClicked(true);
                }}
              >
                Pets
              </button>
            </div>
          </div>

          <div className="preview-container-wildlife">
            <div className="content">
              <button
                onClick={() => {
                  setDataClicked(wildlifedata);
                  setIsAlbumClicked(true);
                }}
              >
                Wildlife
              </button>
            </div>
          </div>

          <div className="preview-container-landscape">
            <div className="content">
              <button
                onClick={() => {
                  setDataClicked(automotiveData);
                  setIsAlbumClicked(true);
                }}
              >
                Landscape
              </button>
            </div>
          </div>

          <div className="preview-container-travel">
            <div className="content">
              <button
                onClick={() => {
                  setDataClicked(automotiveData);
                  setIsAlbumClicked(true);
                }}
              >
                Travel
              </button>
            </div>
          </div>

          <div className="preview-container-street">
            <div className="content">
              <button
                onClick={() => {
                  setDataClicked(automotiveData);
                  setIsAlbumClicked(true);
                }}
              >
                Street
              </button>
            </div>
          </div>

          <div className="preview-container-sports">
            <div className="content">
              <button
                onClick={() => {
                  setDataClicked(automotiveData);
                  setIsAlbumClicked(true);
                }}
              >
                Sports
              </button>
            </div>
          </div>

          <div className="preview-container-automotive">
            <div className="content">
              <button
                onClick={() => {
                  setDataClicked(automotiveData);
                  setIsAlbumClicked(true);
                }}
              >
                Automotive
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Gallery
          dataPassed={dataClicked}
          coupleCLicked={coupleCLicked}
          eventClicked={eventClicked}
          familyClicked={familyClicked}
          engagementClicked={engagementClicked}
        />
      )}
    </div>
  );
};

export default PreviewGallery;
