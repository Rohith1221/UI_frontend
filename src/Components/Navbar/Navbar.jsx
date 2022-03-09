import React from "react";
import sc from "../../assets/shopping-cart.png";
import bell from "../../assets/bell.png";
import menu from "../../assets/menu.png";
import wifi from "../../assets/wifi.png";
import statusbar from "../../assets/statusbar.png";
import battery from "../../assets/battery.png";
import "./Navbar.css";
function Navbar(props) {
  return (
    <div className="top_cont">
      <div className="navbar_cont">
        <div className="navbar_left">
          <img src={menu} className="menu_img"></img>
        </div>
        <div className="navbar_right">
          <img src={sc} className="sc_img"></img>
          <img src={bell} className="bell_img"></img>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

//  <div className="safearea_cont">       REMOVED SAFEAREA CURRENTLY (COMES AFTER top_content and above navbar_content)
//    <div className="sa_left">
//      <span>9:41</span>
//    </div>
//    <div className="sa_right">
//      <img src={statusbar} className="sb_img"></img>
//      <img src={wifi} className="wifi_img"></img>
//      <img src={battery}></img>
//    </div>
//  </div>;
