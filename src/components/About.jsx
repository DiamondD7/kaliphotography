import React, { useState } from "react";
import AboutTitle from "../images/aboutimages/AboutTitle.png";
import KaliAbout from "../images/aboutimages/KaliPicAboutMe.jpg";

import "../styles/aboutmestyles.css";
const About = () => {
  return (
    <div>
      <img className="introduction-title" src={AboutTitle} />
      <img
        className="kali-pic-aboutme"
        src={KaliAbout}
        alt="kaliaboutmepicture"
      />
      <div className="border-line"></div>
      <p className="introduction-paragraph">
        Welcome to my photography realm, where I transform fleeting moments into
        everlasting memories. I take great pleasure in capturing and preserving
        your cherished memories in a tangible way. While moments may be
        short-lived, the memories they create last forever. Through my
        photography, I don't just snap pictures; I weave narratives — tales of
        love, laughter, and the individual magic that each moment holds. Join me
        on this adventure of turning the brief into the timeless, one click at a
        time.
      </p>
    </div>
  );
};

export default About;
