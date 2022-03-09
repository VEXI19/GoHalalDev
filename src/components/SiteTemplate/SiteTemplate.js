import React from "react";
import Bottom from "../Bottom/Bottom";
import BottomMenu from "../BottomMenu/BottomMenu";
import CategoriesBar from "../CategoriesBar/CategoriesBar";
import DeliveryPartners from "../DeliveryPartners/DeliveryPartners";
import DiscountBar from "../DiscountBar/DiscountBar";
import FixedButtons from "../FixedButtons.js/FixedButtons";
import LongDevider from "../LongDevider/LongDevider";
import MainControlBar from "../MainControlBar/MainControlBar";
import PaymentMethods from "../PaymentMethods/PaymentMethods";
import RegisterForUpdates from "../RegisterForUpdates/RegisterForUpdates";
import TopBar from "../TopBar/TopBar";
import TopBarMobile from "../TopBarMobile/TopBarMobile";
import TrustAndSafety from "../TrustAndSafety/TrustAndSafety";

function SiteTemplate({ children }) {
  const [windowWitdth, setWindowWitdth] = React.useState(window.innerWidth);

  window.addEventListener("resize", () => setWindowWitdth(window.innerWidth));
  return (
    <div>
      {windowWitdth <= 700 && <TopBarMobile />}
      {windowWitdth > 700 && <TopBar />}
      {windowWitdth >= 700 && <MainControlBar />}
      <DiscountBar />
      {windowWitdth >= 700 && <LongDevider />}
      <CategoriesBar />
      <FixedButtons />
      {children}
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

export default SiteTemplate;
