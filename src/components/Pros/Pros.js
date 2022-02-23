import React from "react";
import "./Pros.css";
import AuthenticityCheck from "../../icons/Group (1).svg";
import ReturnPolicy from "../../icons/Group 5064.svg";
import SecurePayment from "../../icons/Group 3159.svg";
import DedicatedCustomerSupport from "../../icons/Group 5056.svg";
import WeeklyOffers from "../../icons/Group (4).svg";
import { getTranslation } from "../../Utils/getLanguage";

function Pros(props) {
  const tabs = [
    {
      icon: AuthenticityCheck,
      header: "Authenticity Check",
      text: "Halal and quality check for all products",
    },
    {
      icon: ReturnPolicy,
      header: "Return Policy",
      text: "Return & refund policy available",
    },
    {
      icon: SecurePayment,
      header: "100% Secure Payment",
      text: "Guranteed highly secure payments",
    },
    {
      icon: DedicatedCustomerSupport,
      header: "Dedicated Customer Support",
      text: "Monday - Staurday (10-20Hrs)",
    },
    {
      icon: WeeklyOffers,
      header: "Weekly Offers",
      text: "Register for discounts & offers",
    },
  ];

  const [windowWidth, setWindowWidth] = React.useState(null);

  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
    if (window.innerWidth <= 920) {
      document.getElementById("ProsContainer").style.flexDirection = "column";
      //   document.getElementById("SinglePro").style.paddingTop = "60px";
      //   document.getElementById("SinglePro").style.paddingBottom = "60px";
    } else {
      document.getElementById("ProsContainer").style.flexDirection = "row";
      //   document.getElementById("SinglePro").style.paddingTop = "80px";
      //   document.getElementById("SinglePro").style.paddingBottom = "80px";
    }
  });

  return (
    <div className="Pros">
      <div className="ProsContainer" id="ProsContainer">
        {tabs.map((elem, index) => (
          <div
            key={index}
            className="SinglePro"
            style={
              windowWidth <= 920
                ? { paddingTop: "40px", paddingBottom: "40px" }
                : { paddingTop: "80px", paddingBottom: "80px" }
            }
          >
            <img src={elem.icon} alt="" />
            <span className="ProsHeader">{getTranslation(elem.header)}</span>
            <span className="ProsText">{getTranslation(elem.text)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pros;
