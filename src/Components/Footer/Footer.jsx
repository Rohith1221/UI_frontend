import React from "react";
import "./Footer.css";

import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";

function Footer(props) {
  return (
    <div className="footer_cont">
      <div className="icons">
        <FiFacebook className="icon_fb" />
        <FiTwitter className="icon_tw" />
      </div>
      <div className="categories">
        <p className="cat_item">
          Products <IoIosArrowForward />
        </p>
        <p className="cat_item">
          Our Science <IoIosArrowForward />
        </p>
        <p className="cat_item">
          Vision & Mission <IoIosArrowForward />
        </p>
        <p className="cat_item">
          About Us <IoIosArrowForward />
        </p>
      </div>
      <hr className="footer_hr"></hr>
      <p className="subscribe">Subscribe to our Newsletter</p>
      <div className="email_cont">
        <input
          type="text"
          placeholder="Enter your email..."
          className="ec_email"
        ></input>
        <button className="ec_btn">
          <AiOutlineMail /> Activate
        </button>
      </div>
    </div>
  );
}

export default Footer;
