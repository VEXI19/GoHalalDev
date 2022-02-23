import React from "react";
import "./ComingSoon.css";
import SearchBar from "../SearchBar/SearchBar";
import { getTranslation } from "../../Utils/getLanguage";

function ComingSoon(props) {
  var padding_top = 0;

  window.addEventListener("resize", () => {
    padding_top = (823 / 1929) * window.innerWidth + "%";
  });

  return (
    <div className="ComingSoon" style={{ paddingTop: padding_top }}>
      <div className="ComingSoonContent">
        <div>
          <span className="ComingSoonHeader">
            {getTranslation("Get notified when Go Halal goes live")}
          </span>
          <span className="ComingSoonText">
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
