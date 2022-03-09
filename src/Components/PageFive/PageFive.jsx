import React from "react";
import "./PageFive.css";
import calender from "../../assets/calender.png";

function PageFive(props) {
  return (
    <div className="pagefive_cont">
      <h1 className="p5_title">Track your period</h1>
      <p className="p5_desc">
        Stay in the know with reliable AI-based and science-backed period,
        ovulation, and PMS predictions. The intuitive design makes tracking your
        cycle effortless and helps you stay on top of your monthly data.
      </p>
      <button className="p_btn">Track you period on the app</button>
      <img src={calender} className="p5_img"></img>
    </div>
  );
}

export default PageFive;
