import React, { useState, useRef } from "react";
import LetsWorkTogether from "../../images/contactmeimages/letsworktogether.png";
import Together from "../../images/contactmeimages/together.png";
import ContactMe from "../../images/contactmeimages/contactme.png";
import emailjs from "@emailjs/browser";

import "../../styles/bookstyles.css";
const Book = () => {
  const form = useRef();
  const [formOutcome, setFormOutcome] = useState(null);

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
          setTimeout(() => {
            setFormOutcome(true);
          }, 10);

          setTimeout(() => {
            setFormOutcome(null);
          }, 5000);
        },
        (error) => {
          console.log(error.text);
          setTimeout(() => {
            setFormOutcome(false);
          }, 500);

          setTimeout(() => {
            setFormOutcome(null);
          }, 4000);
        }
      );

    e.target.reset();
  };

  return (
    <div>
      <div
        className={
          formOutcome === true
            ? "sentmessage__wrapper"
            : formOutcome === false
            ? "failsendmessage_wrapper"
            : "messageHide"
        }
      >
        {formOutcome === true ? <p>SENT</p> : <p>Your message was not sent</p>}
      </div>
      <div className="book-container__wrapper">
        <div className="book-subcontainer__wrapper">
          <div>
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
            <p className="directmessageus__text">
              *If you don't hear back from me within 48 hours, please send me a
              direct email in case servers are down.
            </p>
          </div>

          <div className="letsworktogether__wrapper">
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
