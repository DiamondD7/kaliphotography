import React from "react";

import "../../styles/bookstyles.css";
const Book = () => {
  return (
    <div>
      <div className="book-container__wrapper">
        <h1 className="contact-title__text">Contact Me</h1>
        <form className="form__wrapper">
          <label htmlFor="fullname">Full name</label>
          <br />
          <input id="fullname" type="text" />
          <br />
          <label htmlFor="emailadd">Email address</label>
          <br />
          <input id="emailadd" type="text" />
          <br />
          <label htmlFor="subjectEmail">Subject</label>
          <br />
          <input id="subjectEmail" type="text" />
          <br />
          <label htmlFor="messageEmail">Message</label>
          <br />
          <textarea id="messageEmail" className="messsagetextarea"></textarea>
          <br />
          <br />
        </form>
      </div>
    </div>
  );
};

export default Book;
