import React from "react";
import CertifiedHalal from "../../components/CertifiedHalal/CertifiedHalal";
import ComingSoon from "../../components/ComingSoonBar/ComingSoon";
import ContactUs from "../../components/ContactUs/ContactUs";
import FAQ from "../../components/FAQ/FAQ";
import Founders from "../../components/Founders/Founders";
import HeyMunchen from "../../components/HeyMunchen/HeyMunchen";
import MadeBetter from "../../components/MadeBetter/MadeBetter";
import Newsletter from "../../components/Newsteller/Newsteller";
import Pros from "../../components/Pros/Pros";
import SiteTemplate from "../../components/SiteTemplate/SiteTemplate";
import WhyGoHalal from "../../components/WhyGoHalal/WhyGoHalal";
import "./MainPage.css";
// import { Link } from "react-router-dom";

function MainPage(props) {
  // const [windowWitdth, setWindowWitdth] = React.useState(window.innerWidth);

  // window.addEventListener("resize", () => setWindowWitdth(window.innerWidth));

  return (
    <div className="MainPage">
      <SiteTemplate>
        <ComingSoon />
        <WhyGoHalal />
        <CertifiedHalal />
        <MadeBetter />
        <Founders />
        <HeyMunchen />
        <FAQ />
        <ContactUs />
        <Newsletter />
        <Pros />
      </SiteTemplate>
    </div>
  );
}

export default MainPage;
