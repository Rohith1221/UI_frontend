import React from "react";
import "./PageSeven.css";
import box from "../../assets/box.png";
import { IoIosArrowForward } from "react-icons/io";

function PageSeven(props) {
  return (
    <div className="pageseven_cont">
      <h1 className="p7_title">Get your personalized period box</h1>
      <img src={box} className="p7_img"></img>
      <p className="p7_desc">
        Tailor your monthly box of organic period products without the organic
        price tag (no pink taxing here). Get it delivered to your doorstep in
        sustainable packaging and track your subscription on our app.{" "}
      </p>
      <button className="p7_btn">
        Create your box on the app <IoIosArrowForward />
      </button>
    </div>
  );
}

export default PageSeven;
