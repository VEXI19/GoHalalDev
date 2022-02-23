import React from "react";
import "./CertifiedHalal.css";
import CertifiedHalalIcon from "../../icons/Group 3206certifiedHalal.svg";
import { getTranslation } from "../../Utils/getLanguage";

function CertifiedHalal(props) {
  window.addEventListener("resize", () => {
    if (window.innerWidth <= 960) {
      document.getElementById("CertifiedHalalContainer").style.flexDirection =
        "column";
      document.getElementById("CertifiedHalalContainer").style.width = "80%";

      document.getElementById("CertifiedHalalIcon").style.marginTop = "40px";
      document.getElementById("CertifiedHalalContainer").style.textAlign =
        "center";
    } else {
      document.getElementById("CertifiedHalalContainer").style.flexDirection =
        "row";
      document.getElementById("CertifiedHalalIcon").style.marginTop = "0px";
      document.getElementById("CertifiedHalalContainer").style.width = "90%";
      document.getElementById("CertifiedHalalContainer").style.textAlign =
        "left";
    }
  });

  React.useEffect(() => {
    if (window.innerWidth <= 960) {
      document.getElementById("CertifiedHalalContainer").style.flexDirection =
        "column";
      document.getElementById("CertifiedHalalContainer").style.width = "80%";

      document.getElementById("CertifiedHalalIcon").style.marginTop = "40px";
      document.getElementById("CertifiedHalalContainer").style.textAlign =
        "center";
    } else {
      document.getElementById("CertifiedHalalContainer").style.flexDirection =
        "row";
      document.getElementById("CertifiedHalalIcon").style.marginTop = "0px";
      document.getElementById("CertifiedHalalContainer").style.width = "90%";
      document.getElementById("CertifiedHalalContainer").style.textAlign =
        "left";
    }
  }, []);

  return (
    <div className="CertifiedHalal">
      <div id="CertifiedHalalContainer" className="CertifiedHalalContainer">
        <div>
          <span id="textAlignCenter" className="greenBigText">
            {getTranslation("100% Certified Authentic Halal")}
          </span>
          <span id="textAlignCenter" className="whiteBigText">
            {getTranslation("Always honest, nutritious & Tasty")}
          </span>
          <div id="textAlignCenter">
            <span className="smallText">
              {getTranslation("Enjoy the Taste - ")}
            </span>
            <span className="whiteBackgroundText">
              {getTranslation("Today, Tommorow and Everyday")}
            </span>
          </div>
        </div>
        <img id="CertifiedHalalIcon" src={CertifiedHalalIcon} alt="" />
      </div>
    </div>
  );
}

export default CertifiedHalal;
