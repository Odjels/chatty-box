import React from "react";
import "./LeftSidebar.css";
import assets from "../../assets/assets";

const LeftSidebar = () => {
  return (
    <div className="lls">
      <div className="lls-top">
        <div className="lls-nav">
          <img src={assets.logo} className="logo" alt="" />
          <h2>Chatty App</h2>
          <div className="menu">
            <img src={assets.menu_icon} alt="" />
          </div>
        </div>
        <div className="lls-search">
          <img src={assets.search_icon} alt="" />
          <input type="text" placeholder="Search Hear....." />
        </div>
      </div>
      <div className="lls-list">
        {Array(12)
          .fill("")
          .map((item, index) => (
            <div key={index} className="friends">
              <img src={assets.profile_img} alt="" />
              <div>
                <p>Odegua Jele</p>
                <span> Hello, How are you? </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default LeftSidebar;
