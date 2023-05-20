import React from "react";
import LetsWorkTogether from "../../images/contactmeimages/letsworktogether.png";
import Together from "../../images/contactmeimages/together.png";
import ContactMe from "../../images/contactmeimages/contactme.png";

import "../../styles/bookstyles.css";
const Book = () => {
  return (
    <div>
      <div className="book-container__wrapper">
        <div className="book-subcontainer__wrapper">
          <div>
            {/* <h1 className="contact-title__text">Contact me</h1> */}
            <img
              alt="contactmeheader"
              src={ContactMe}
              className="contactme-image"
            />
            <form className="form__wrapper">
              <label htmlFor="fullname">Full name</label>
              <br />
              <input id="fullname" type="text" />
              <br />
              <label htmlFor="emailadd">Email address</label>
              <br />
              <input
                id="emailadd"
                type="text"
                placeholder="eg. cust@gmail.com"
              />
              <br />
              <label htmlFor="subjectEmail">Subject</label>
              <br />
              <input
                id="subjectEmail"
                type="text"
                placeholder="eg. Maternity Shoot"
              />
              <br />
              <label htmlFor="messageEmail">Message</label>
              <br />
              <textarea
                id="messageEmail"
                className="messsagetextarea"
              ></textarea>
              <br />
              <br />
            </form>
          </div>

          <div>
            <img
              alt="letsworktogetherpng"
              src={LetsWorkTogether}
              className="letswork-image"
            />
            <img alt="togetherpng" src={Together} className="together-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
