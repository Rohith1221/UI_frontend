import React from "react";
import "./PageThree.css";
import liquid from "../../assets/liquid.png";

function PageThree(props) {
  return (
    <div className="pagethree_cont">
      <h1 className="p3_title">Liberate your everyday wellness</h1>
      <p className="p3_subtitle">
        Shop our self-care <br></br>products
      </p>

      <p className="p3_desc">
        Gentle formulations thoughtfully engineered by specialist researchers
        and doctors to simplify your self-care and get results fast. And, we
        always list our ingredients - so what you see is what you get.
      </p>
      <button className="p3_btn">Upgrade your self-care</button>
      <p className="p3_tagline">#NoNasties, we promise!</p>
      <img src={liquid} className="p3_img"></img>
    </div>
  );
}

export default PageThree;

// <div className="p3_last"></div>
