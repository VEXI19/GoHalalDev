import React from "react";
import "./TrustAndSafety.css";
import HalalCertificate from "../../icons/Trusted Halal Shop 1.png";
import TrustPilotLogo from "../../icons/image 203.png";
import SecurePayment from "../../icons/Group (6).svg";
import { getTranslation } from "../../Utils/getLanguage";

function TrustAndSafety(props) {
  const tabs = [
    { icon: HalalCertificate, text: "Halal Certificate" },
    {
      icon: TrustPilotLogo,
      text: "Reviews",
    },
    {
      icon: SecurePayment,
      text: "Secure Payment",
    },
  ];

  const [windowWidth, setWindowWidth] = React.useState(null);

  window.addEventListener("resize", () => setWindowWidth(window.innerWidth));

  React.useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  return (
    <div className="TrustAndSafety">
      <span>{getTranslation("Trust & Safety")}</span>
      <div
        className="TrustAndSafetyContainer"
        style={
          windowWidth <= 950
            ? { flexDirection: "column" }
            : { flexDirection: "row" }
        }
      >
        {tabs.map((elem, index) => (
          <div
            key={index}
            style={
              windowWidth <= 950 && index !== tabs.length - 1
                ? { marginBottom: "50px" }
                : { marginBottom: "0" }
            }
          >
            <img src={elem.icon} alt="" />
            <span>{elem.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrustAndSafety;
