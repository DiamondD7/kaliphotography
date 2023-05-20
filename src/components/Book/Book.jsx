import React, { useState, useRef } from "react";
import LetsWorkTogether from "../../images/contactmeimages/letsworktogether.png";
import Together from "../../images/contactmeimages/together.png";
import ContactMe from "../../images/contactmeimages/contactme.png";
import emailjs from "@emailjs/browser";

import "../../styles/bookstyles.css";
const Book = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kl7syml",
        "template_rkuo2kj",
        form.current,
        "sj_Awg-xHrhcoDxHN"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

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
            <form ref={form} onSubmit={sendEmail} className="form__wrapper">
              <label htmlFor="fullname">Full name</label>
              <br />
              <input id="fullname" type="text" name="from_name" />
              <br />
              <label htmlFor="emailadd">Email address</label>
              <br />
              <input
                id="emailadd"
                type="text"
                placeholder="eg. cust@gmail.com"
                name="user_email"
              />
              <br />
              <label htmlFor="subjectEmail">Subject</label>
              <br />
              <input
                id="subjectEmail"
                type="text"
                placeholder="eg. Maternity Shoot"
                name="subject"
              />
              <br />
              <label htmlFor="messageEmail">Message</label>
              <br />
              <textarea
                id="messageEmail"
                className="messsagetextarea"
                name="message"
              ></textarea>
              <br />
              <button className="submit-btn" type="submit">
                Submit
              </button>
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
