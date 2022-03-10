import React from "react";
import "./PageOne.css";
import phone from "../../assets/phone.png";
import connect from "../../assets/connect.png";
import eco from "../../assets/eco.png";
function PageOne(props) {
  return (
    <div className="Pageone_cont">
      <div className="pageone_about">
        <p className="about_title">About Diana</p>
        <h3 className="about_subtitle">A platform that looks out for you</h3>
        <p className="about_desc">
          Diana empowers you to understand how your body works so you can look
          and feel your best
        </p>

        <hr className="horizontal_line"></hr>
      </div>
      <div className="pageone_philosophy">
        <h1 className="philo_title">Our Philosophy</h1>
        <p className="philo_subtitle">
          Sustainable wellness is a big-picture, inside out approach
        </p>
        <p className="philo_desc">
          Diana is on a mission to create thoughtful, science-backed solutions
          for women who want to make informed decisions about their health and
          wellness.<br></br>
          <br></br> That’s why we’ve created an integrated ecosystem of:
        </p>
        <img src={eco}></img>
        <p className="p1_p">
          Consciously formulated products that deliver feel-good results fast
        </p>
        <img src={connect}></img>
        <p className="p1_p">
          In-app mood and period tracking options that help you cultivate a
          deeper connection with your mind and body
        </p>
        <img src={phone}></img>
        <p className="p1_p">
          In-app consultation portals that connect you with compassionate
          wellness experts
        </p>
        <p className="p1_p">
          Consider us your nerdy ally who spends their time perfecting products
          that work because they want you to feel your best everyday.
        </p>
      </div>
    </div>
  );
}

export default PageOne;
