import React, { useState, useEffect } from "react";
import { CaretRight, CaretLeft } from "phosphor-react";

const ImageSlider = ({ imgs }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const picArr = ["img-one", "img-two", "img-three", "img-four"];
  const interval = 5000;

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

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === picArr.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => {
      clearInterval(sliderInterval);
    };
  }, [currentIndex, picArr.length, interval]);

  return (
    <div>
      <button className="arr-right" onClick={clickNext}>
        <CaretRight size={60} color={"#e2e2e2"} />
      </button>
      <button className="arr-left" onClick={clickPrev}>
        <CaretLeft size={60} color={"#e2e2e2"} />
      </button>

      <div className="slide">
        <div className={picArr[currentIndex]}></div>
      </div>
    </div>
  );
};

export default ImageSlider;
