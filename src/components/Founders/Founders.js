import React from "react";
import "./Founders.css";
import Founder1 from "../../icons/Group 5052founder1.svg";
import Founder2 from "../../icons/Group 2330founder2.svg";
import Founder3 from "../../icons/Group 2331founder.svg";
import { getTranslation } from "../../Utils/getLanguage";

function Founders(props) {
  window.addEventListener("resize", () => {
    if (window.innerWidth <= 1060) {
      document.getElementById("FoundersPhotos").style.flexDirection = "column";
      document.getElementById("founder1").style.marginBottom = "20px";
      document.getElementById("founder1").style.maxWidth = "350px";
      document.getElementById("founder2").style.marginBottom = "20px";
      document.getElementById("founder2").style.maxWidth = "350px";
      document.getElementById("founder3").style.marginBottom = "20px";
      document.getElementById("founder3").style.maxWidth = "350px";
    } else {
      document.getElementById("FoundersPhotos").style.flexDirection = "row";
      document.getElementById("founder1").style.marginBottom = "0px";
      document.getElementById("founder2").style.marginBottom = "0px";
      document.getElementById("founder3").style.marginBottom = "0px";
      document.getElementById("founder1").style.maxWidth = "280px";
      document.getElementById("founder2").style.maxWidth = "280px";
      document.getElementById("founder3").style.maxWidth = "280px";
    }
  });

  return (
    <div className="Founders">
      <div className="FoundersContainer">
        <span>{getTranslation("OUR FOUNDERS")}</span>
        <div id="FoundersPhotos" className="FoundersPhotos">
          <img
            onClick={() => console.log("founder3")}
            id="founder3"
            src={Founder3}
            alt=""
          />
          <img
            onClick={() => console.log("founder2")}
            id="founder2"
            src={Founder2}
            alt=""
          />
          <img
            onClick={() => console.log("founder1")}
            id="founder1"
            src={Founder1}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Founders;
