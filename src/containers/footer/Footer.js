import React from "react";
import gpt3Logo from "../../logo.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="gpt3_footer section_padding">
      <div className="gpt3_footer_heading">
        <h1 className="gradient_text">
          Do you want to step in to the future before others
        </h1>
      </div>

      <div className="gpt3_footer_btn">
        <p>Request Early Access</p>
      </div>

      <div className="gpt3_footer_links">
        <div className="gpt3_footer_links_logo">
          <img src={gpt3Logo} alt="gpt3_logo" />
          <p>
            Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved
          </p>
        </div>
        <div className="gpt3_footer_links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3_footer_links_div">
          <h4>Company</h4>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3_footer_links_div">
          <h4>Get in touch</h4>
          <p>Contact us</p>
          <p>085-132567</p>
          <p>info@gpt3.net</p>
        </div>
      </div>

      <div className="gpt3_footer_copyright">
        <p>@2023 GPT-2. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
