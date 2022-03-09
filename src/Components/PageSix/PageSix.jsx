import React from "react";
import "./PageSix.css";
import man from "../../assets/man.png";

function PageSix(props) {
  return (
    <div className="pagesix_cont">
      <h1 className="p6_title">Consult with wellness experts</h1>
      <p className="p6_desc">
        Set up health consultations with experienced doctors and therapists on
        our app. Simply select a service, answer a few questions, and we’ll
        connect you to someone who is the right-fit for you.
      </p>
      <button className="p6_btn">Get a consultation</button>
      <img src={man} className="p6_img"></img>
    </div>
  );
}

export default PageSix;
