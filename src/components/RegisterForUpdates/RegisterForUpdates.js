import React from "react";
import { getTranslation } from "../../Utils/getLanguage";
import "./RegisterForUpdates.css";
import Mail from "../../icons/Vector (4).svg";
import Facebook from "../../icons/Vector (5).svg";
import Twitter from "../../icons/Vector (6).svg";
import Linkdin from "../../icons/Vector (7).svg";
import YouTube from "../../icons/Vector (8).svg";

function RegisterForUpdates(props) {
  const [windowWidth, setWindowWidth] = React.useState(null);

  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  const handleSubmit = () => {
    const email = document.getElementById("RegisterEmail").value;
    console.log(email);
  };

  return (
    <div className="RegisterForUpdates">
      <div
        className="RegisterForUpdatesContainer"
        style={
          windowWidth <= 750
            ? {
                flexDirection: "column",
              }
            : {
                flexDirection: "row",
              }
        }
      >
        <div className="RegisterForUpdatesHeader">
          <img src={Mail} alt="" />
          <span>{getTranslation("Register for Updates")}</span>
        </div>
        <div
          className="InputContainer"
          style={
            windowWidth <= 750
              ? {
                  marginTop: "30px",
                  marginBottom: "10px",
                }
              : {
                  marginTop: "0",
                  marginBottom: "0",
                }
          }
        >
          <input id="RegisterEmail" placeholder="Your E-Mail Adress..." />
          <button onClick={() => handleSubmit()}>
            {getTranslation("Register Now")}
          </button>
        </div>
        {windowWidth >= 1050 && (
          <div className="Icons">
            <img src={Facebook} alt="" />
            <img src={Twitter} alt="" />
            <img src={Linkdin} alt="" />
            <img src={YouTube} alt="" />
          </div>
        )}
      </div>
    </div>
  );
}

export default RegisterForUpdates;
