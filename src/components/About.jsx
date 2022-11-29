import React, { useState } from "react";
import AboutTitle from "../images/aboutimages/AboutTitle.png";
const About = () => {
  const [historyActive, setHistoryActive] = useState(true);
  const [passionActive, setPassionActive] = useState(false);
  const [careerActive, setCareerActive] = useState(false);
  const [gearsActive, setGearsActive] = useState(false);

  // const historyClicked = () => {
  //   setHistoryActive(true);
  //   setPassionActive(false);
  //   if (historyActive === true) {
  //     document.getElementById("history").classList.add("active");
  //     document.getElementById("passion").classList.remove("active");
  //   }
  // };

  // const passionClicked = () => {
  //   setPassionActive(true);
  //   setHistoryActive(false);

  //   if (passionActive === true) {
  //     document.getElementById("history").classList.remove("active");
  //     document.getElementById("passion").classList.add("active");
  //   }
  // };
  return (
    <div>
      {/* <h1 className="introduction-title">This is about me</h1> */}
      <img className="introduction-title" src={AboutTitle} />
      <div className="border-line"></div>
      {historyActive === true ? (
        <p className="introduction-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          necessitatibus similique, nam sunt, eaque nihil fugit dolore a cumque
          vitae ipsam sit reiciendis? Eius, impedit! Obcaecati veritatis
          praesentium sapiente aliquid? Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Id quae earum, dolorem quo voluptas reiciendis culpa
          a eaque et nobis, mollitia fugiat ipsa itaque, numquam neque dicta ex
          officiis? Architecto. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Atque exercitationem maxime tempore, nihil illo quas
          eaque nobis animi vel debitis itaque ipsam nam veniam provident
          voluptate repellat voluptatibus optio necessitatibus! Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Sed, veritatis veniam!
          Officiis illo neque voluptatibus ducimus amet animi voluptate
          reiciendis consequatur deserunt dolor, eius quibusdam, asperiores
          inventore quas? Molestias, quos.
        </p>
      ) : (
        ""
      )}

      {passionActive === true ? (
        <p className="introduction-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          necessitatibus similique, nam sunt, eaque nihil fugit dolore a cumque
          vitae ipsam sit reiciendis? Eius, impedit! Obcaecati veritatis
          praesentium sapiente aliquid? Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Id quae earum, dolorem quo voluptas reiciendis culpa
          a eaque et nobis, mollitia fugiat ipsa itaque, numquam neque dicta ex
          officiis? Architecto. Lorem ipsum dolor sit amet, consectetur
        </p>
      ) : (
        ""
      )}

      {careerActive === true ? (
        <p className="introduction-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          necessitatibus similique, nam sunt, eaque nihil fugit dolore a cumque
          vitae ipsam sit reiciendis? Eius, impedit! Obcaecati veritatis
        </p>
      ) : (
        ""
      )}

      {gearsActive === true ? (
        <p className="introduction-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      ) : (
        ""
      )}

      <div>
        <ul className="about-ul">
          <li>
            <button
              className={historyActive === true ? "active" : ""}
              id="history"
              onClick={() => {
                setPassionActive(false);
                setHistoryActive(true);
                setCareerActive(false);
                setGearsActive(false);
              }}
            >
              History
            </button>
          </li>
          <li>
            <button
              className={passionActive === true ? "active" : ""}
              id="passion"
              onClick={() => {
                setPassionActive(true);
                setHistoryActive(false);
                setCareerActive(false);
                setGearsActive(false);
              }}
            >
              Passion
            </button>
          </li>
          <li>
            <button
              className={careerActive === true ? "active" : ""}
              onClick={() => {
                setPassionActive(false);
                setHistoryActive(false);
                setCareerActive(true);
                setGearsActive(false);
              }}
            >
              Career
            </button>
          </li>
          <li>
            <button
              className={gearsActive === true ? "active" : ""}
              onClick={() => {
                setPassionActive(false);
                setHistoryActive(false);
                setCareerActive(false);
                setGearsActive(true);
              }}
            >
              Gears
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
