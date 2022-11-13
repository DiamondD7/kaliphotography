import React, { useState } from "react";
import { CaretRight, CaretLeft } from "phosphor-react";
import one from "../images/sliderImages/one.jpg";
import two from "../images/sliderImages/two.jpg";
import three from "../images/sliderImages/three.jpg";
import four from "../images/sliderImages/four.jpg";

const ImageSlider = ({ imgs }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const picArr = [
    <img className="img-one" src={one} />,
    <img className="img-two" src={two} />,
    <img className="img-three" src={three} />,
    <img className="img-four" src={four} />,
  ];
  const sliderStyle = {
    position: "relative",
    height: "100%",
  };

  //width: "100vw",
  //height: "980px",
  const slideStyle = {
    width: "100vw",
    height: "980px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "0% 30%",
    backgroundImage: `url(${imgs[currentIndex].url})`,
    zIndex: "2",
  };

  const clickNext = () => {
    const isLastSlide = currentIndex === picArr.length - 1;
    const newInd = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newInd);
  };

  const clickPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newInd = isFirstSlide ? picArr.length - 1 : currentIndex - 1;
    setCurrentIndex(newInd);
  };

  const dotsClicked = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div>
      <button className="arr-right" onClick={clickNext}>
        <CaretRight size={60} color={"#e2e2e2"} />
      </button>
      <button className="arr-left" onClick={clickPrev}>
        <CaretLeft size={60} color={"#e2e2e2"} />
      </button>

      <div className="slide">
        <div>{picArr[currentIndex]}</div>
      </div>
      {/* <div className="slide" style={slideStyle}>
      </div> */}
    </div>
  );
};

export default ImageSlider;
