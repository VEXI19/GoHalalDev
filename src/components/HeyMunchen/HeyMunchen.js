import React from "react";
import "./HeyMunchen.css";
import Van from "../../icons/van.jpg";
import HeyMunchenText from "../../icons/Group 3212 (1).svg";
import HeyMunchenHeader from "../../icons/HEY MÜNCHEN.svg";
import { getTranslation } from "../../Utils/getLanguage";

function HeyMunchen(props) {
  return (
    <div className="HeyMunchen">
      <div className="HeyMunchenContainer">
        <img id="HeyMunchenHeader" src={HeyMunchenHeader} alt="" />
        <img id="Van" src={Van} alt="" />
        <img id="HeyMunchenText" src={HeyMunchenText} alt="" />
        <span>
          {getTranslation(
            "We are staring in München, let us know where you'd like us to be!"
          )}
        </span>
      </div>
    </div>
  );
}

export default HeyMunchen;
