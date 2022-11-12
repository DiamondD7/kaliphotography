import React from "react";
import logo from "../images/Kali Photographyy.png";
import ImageSlider from "./ImageSlider";
import one from "../images/sliderImages/one.jpg";
import two from "../images/sliderImages/two.jpg";
import three from "../images/sliderImages/three.jpg";
import four from "../images/sliderImages/four.jpg";
const Home = () => {
  const picArray = [{ url: one }, { url: two }, { url: three }, { url: four }];
  return (
    <div>
      <div className="hero">
        <img src={logo} className="logo" />
        <div className="logo-div"></div>
        <ImageSlider imgs={picArray} />
      </div>
    </div>
  );
};

export default Home;
