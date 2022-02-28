import React from "react";
import { getTranslation } from "../../Utils/getLanguage";
import "./PopUpThankYou.css";
import GoHalalLogo from "../../icons/GroupLogo (2).svg";
import Fireworks from "../../icons/fireworks.svg";
import MailIcon from "../../icons/Group (8).svg";
import copyIcon from "../../icons/Group (9).svg";
import ShareIcon from "../../icons/Group 4367.svg";
import ChatIcon from "../../icons/Vector (10).svg";
import TikTokIcon from "../../icons/Vector (9).svg";
import SomeSocialMediaIcon from "../../icons/Vector (10).svg";
import TwitterIcon from "../../icons/Vector (11).svg";
import YouTubeIcon from "../../icons/youtube.svg";
import FacebookIcon from "../../icons/Vector (12).svg";
import InstagramIcon from "../../icons/Group (11).svg";
import LinkedinIcon from "../../icons/Group (12).svg";
import CloseIcon from "../../icons/icons8-close.svg";

function PopUpThankYou({ headerText, link, isShown = true, handleClose }) {
  const Icons = [
    {
      function: function () {
        console.log("Chat");
      },
      icon: ChatIcon,
    },
    {
      function: function () {
        console.log("Tik Tok");
      },
      icon: TikTokIcon,
    },
    {
      function: function () {
        console.log("Some thing");
      },
      icon: SomeSocialMediaIcon,
    },
    {
      function: function () {
        console.log("Twitter");
      },
      icon: TwitterIcon,
    },
    {
      function: function () {
        console.log("YouTube");
      },
      icon: YouTubeIcon,
    },
    {
      function: function () {
        console.log("Facebook");
      },
      icon: FacebookIcon,
    },
    {
      function: function () {
        console.log("Instagram");
      },
      icon: InstagramIcon,
    },
    {
      function: function () {
        console.log("Linkedin");
      },
      icon: LinkedinIcon,
    },
  ];

  window.addEventListener("click", (event) => {
    if (event.target.className === "PopUpThankYouContainer") {
      handleClose();
    }
  });

  return (
    <div
      className="PopUpThankYouContainer"
      style={isShown ? { display: "flex" } : { display: "none" }}
    >
      <div className="PopUpThankYou">
        <div className="PopUpThankYouTopBar">
          <div className="PopUpThankYouClose">
            <div onClick={handleClose}>
              {/* <span onClick={() => (isShown = false)}>
                {getTranslation("Close")}
              </span> */}
              <img src={CloseIcon} alt="" />
            </div>
          </div>
          <img src={GoHalalLogo} alt="" />
        </div>
        <div className="PopUpThankYouMainContent">
          <img id="FireworksIcon" src={Fireworks} alt="" />
          <span className="PopUpThankYouHeaderText">
            {getTranslation(headerText)}
          </span>
          <img id="MailIcon" src={MailIcon} alt="" />
          <div className="PopUpThankYouLink">
            <span>{link}</span>
            <img
              onClick={() => navigator.clipboard.writeText(link)}
              src={copyIcon}
              alt=""
            />
          </div>
          <span className="PopUpThankYouShareText">
            {getTranslation("Share Go Halal with your loved ones")}
          </span>
          <div
            onClick={() => console.log("share")}
            className="PopUpThankYouButton"
          >
            <span>{getTranslation("Share or invite")}</span>
            <img src={ShareIcon} alt="" />
          </div>
          <span className="PopUpThankYouFollowText">
            {getTranslation("You can also follow us here for updates")}
          </span>
          <div className="PopUpThankYouIcons">
            {Icons.map((elem, index) => {
              return (
                <img
                  src={elem.icon}
                  key={index}
                  onClick={elem.function}
                  alt=""
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopUpThankYou;
