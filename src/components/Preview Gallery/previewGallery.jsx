import React, { useState } from "react";
import Gallery from "../Gallery";
import {
  newbornData,
  automotiveData,
} from "../../assets/photosDatajson.js/Allphotos";

import "../../styles/previewgallery.css";
const PreviewGallery = () => {
  const [dataClicked, setDataClicked] = useState([]);
  const [isAlbumClicked, setIsAlbumClicked] = useState(false);

  const albumClicked = () => {
    setDataClicked(newbornData);
    setIsAlbumClicked(true);
  };
  return (
    <div>
      {isAlbumClicked === false ? (
        <div className="main-container">
          <div className="preview-container" id="nbpreview">
            <div className="album-title">
              <p>Newborn Photography</p>
            </div>
            <div className="content">
              <button
                onClick={() => {
                  setDataClicked(newbornData);
                  setIsAlbumClicked(true);
                }}
              >
                Select
              </button>
            </div>
          </div>

          <div className="preview-container-automotive">
            <div className="album-title">
              <p>Automotive Photography</p>
            </div>
            <div className="content">
              <button
                onClick={() => {
                  setDataClicked(automotiveData);
                  setIsAlbumClicked(true);
                }}
              >
                Select
              </button>
            </div>
          </div>
          <div className="preview-container">
            <div className="album-title">
              <p>Wedding Photography</p>
            </div>
          </div>
          <div className="preview-container">
            <div className="album-title">
              <p>Wildlife Photography</p>
            </div>
          </div>
        </div>
      ) : (
        <Gallery dataPassed={dataClicked} />
      )}
    </div>
  );
};

export default PreviewGallery;
