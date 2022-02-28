import React from "react";
import "./ComingSoon.css";
import SearchBar from "../SearchBar/SearchBar";
import { getTranslation } from "../../Utils/getLanguage";
import CommingSoonIcon from "../../icons/svg (2).svg";

function ComingSoon(props) {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  window.addEventListener("resize", () => setWindowWidth(window.innerWidth));

  return (
    <div
      // style={
      //   windowWidth <= 1500
      //     ? { justifyContent: "flex-start" }
      //     : { justifyContent: "center" }
      // }
      className="ComingSoon"
    >
      <div
        style={
          windowWidth >= 1500
            ? {
                display: "grid",
                width: "95%",
                aspectRatio: "2038/794",
                marginTop: "0px",
                marginBottom: "0px",
              }
            : {
                backgroundImage: "none",
                display: "flex",
                minWidth: "0",
                width: "60%",
                marginTop: "30px",
                marginBottom: "30px",
              }
        }
        className="CommingSoonContainer"
      >
        {windowWidth <= 1500 && <img src={CommingSoonIcon} alt="" />}
        <div
          style={windowWidth <= 1500 ? { alignItems: "center" } : {}}
          className="ComingSoonContent"
        >
          <span
            style={windowWidth <= 1500 ? { textAlign: "center" } : {}}
            className="ComingSoonHeader"
          >
            {getTranslation("Get notified when Go Halal goes live")}
          </span>
          <span
            style={windowWidth <= 1500 ? { textAlign: "center" } : {}}
            className="ComingSoonText"
          >
            {getTranslation(
              "Enter your email to receive exclusive promotions, special offers, and updates on our upcoming services. In the meantime, please take a moment to read our story and discover the differences that make Go Halal better than other grocery stores."
            )}
          </span>
          <div className="SearchBarContainer2">
            <SearchBar
              isCategories={false}
              placeholder="Email adress"
              button="Subscribe now"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;
