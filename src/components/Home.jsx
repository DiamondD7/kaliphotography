import React from "react";
import logo from "../images/kaliLogo.png";
import ImageSlider from "./ImageSlider";
import one from "../images/sliderImages/one.jpg";
import two from "../images/sliderImages/two.jpg";
import three from "../images/sliderImages/three.jpg";
import four from "../images/sliderImages/four.jpg";
import { MapPin, Phone, InstagramLogo, EnvelopeOpen } from "phosphor-react";
const Home = () => {
  const picArray = [{ url: one }, { url: two }, { url: three }, { url: four }];
  return (
    <div>
      <div>
        <img src={logo} className="logo" />
        <ImageSlider imgs={picArray} />
      </div>
    </div>
  );
};

export default Home;
