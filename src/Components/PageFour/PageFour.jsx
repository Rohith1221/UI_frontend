import React from "react";
import "./PageFour.css";
import r1 from "../../assets/r1.png";
import r2 from "../../assets/r2.png";
import r3 from "../../assets/r3.png";
import r4 from "../../assets/r4.png";

function PageFour(props) {
  return (
    <div className="pagefour_cont">
      <h1 className="p4_title">Track your mood</h1>
      <p className="p4_desc">
        All days and all moods are not made equal. But we can only improve what
        we measure. Track your mood and vitals (including skin and hair health)
        so you can take better care of yourself every day.
      </p>
      <button className="p4_btn">Track you mood on the app</button>
      <div className="p4_imgcont">
        <img src={r1} className="img img_one"></img>
        <img src={r2} className="img img_two"></img>
        <img src={r3} className="img img_three"></img>
        <img src={r4} className="img img_four"></img>
      </div>
    </div>
  );
}

export default PageFour;
