import React from "react";
import Bottom from "../../components/Bottom/Bottom";
import BottomMenu from "../../components/BottomMenu/BottomMenu";
import CategoriesBar from "../../components/CategoriesBar/CategoriesBar";
import CertifiedHalal from "../../components/CertifiedHalal/CertifiedHalal";
import ComingSoon from "../../components/ComingSoonBar/ComingSoon";
import ContactUs from "../../components/ContactUs/ContactUs";
import DeliveryPartners from "../../components/DeliveryPartners/DeliveryPartners";
import DiscountBar from "../../components/DiscountBar/DiscountBar";
import FAQ from "../../components/FAQ/FAQ";
import Founders from "../../components/Founders/Founders";
import HeyMunchen from "../../components/HeyMunchen/HeyMunchen";
import LongDevider from "../../components/LongDevider/LongDevider";
import MadeBetter from "../../components/MadeBetter/MadeBetter";
import MainControlBar from "../../components/MainControlBar/MainControlBar";
import Newsletter from "../../components/Newsteller/Newsteller";
import PaymentMethods from "../../components/PaymentMethods/PaymentMethods";
import Pros from "../../components/Pros/Pros";
import RegisterForUpdates from "../../components/RegisterForUpdates/RegisterForUpdates";
import TopBar from "../../components/TopBar/TopBar";
import TrustAndSafety from "../../components/TrustAndSafety/TrustAndSafety";
import WhyGoHalal from "../../components/WhyGoHalal/WhyGoHalal";
import "./MainPage.css";
// import { Link } from "react-router-dom";

function MainPage(props) {
  return (
    <div className="MainPage">
      <TopBar />
      <MainControlBar />
      <DiscountBar />
      <LongDevider />
      <CategoriesBar />
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
      <RegisterForUpdates />
      <BottomMenu />
      <LongDevider />
      <TrustAndSafety />
      <LongDevider />
      <DeliveryPartners />
      <LongDevider />
      <PaymentMethods />
      <LongDevider />
      <Bottom />
    </div>
  );
}

export default MainPage;
