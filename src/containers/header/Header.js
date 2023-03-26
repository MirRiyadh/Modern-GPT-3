import React from "react";
import "./Header.css";
import people from "../../assets/Group 81.png";
import ai from "../../assets/Illustration.png";

const Header = () => {
  return (
    <div className="gpt3_header section_padding" id="home">
      <div className="gpt3_header_content">
        <h1 className="gradient_text">
          Let's Build Something amazing with GPT-3 OpenAl
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="gpt3_header_content_input">
          <input type="email" placeholder="your email address" />
          <button type="button">Get started</button>
        </div>

        <div className="gpt3_header_content_people">
          <img src={people} alt="peoples" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>

        <div className="gpt3_header_image">
          <img src={ai} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
