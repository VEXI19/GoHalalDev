import React from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import SiteTemplate from "../../components/SiteTemplate/SiteTemplate";
import CoreValues from "../../Utils/CoreValues";
import { getTranslation } from "../../Utils/getLanguage";
import "./AboutPage.css";
import MissionIcon from "../../icons/mission 1.svg";
import VisionIcon from "../../icons/vision 1.svg";
import founder1 from "../../icons/avatar1 2.png";
import founder2 from "../../icons/avatar1 2 (1).png";
import founder3 from "../../icons/avatar1 3.png";
import Founder from "../../components/Founder/Founder";
import Poster from "../../icons/Method Draw Image (2).png";

function AboutPage(props) {
  const [windowWitdth, setWindowWitdth] = React.useState(window.innerWidth);

  window.addEventListener("resize", () => setWindowWitdth(window.innerWidth));

  const [searchParams] = useSearchParams();
  const [tabSelected, setTabSelected] = React.useState(
    Object.keys(searchParams).length !== 0
      ? searchParams.get("section")
      : "ourstory"
  );
  const [lastTabSelected, setLastTabSelected] = React.useState(null);

  React.useEffect(() => {
    if (lastTabSelected)
      document.getElementById(lastTabSelected).className = "";
    setLastTabSelected(tabSelected);
    document.getElementById(tabSelected).className = "selected";
  }, [tabSelected]);

  const founders = [
    {
      name: "Dr. Ali Abas Wani",
      titles: "",
      photo: founder1,
      position: "(Founder & CEO)",
      linkedin: "https://www.linkedin.com/",
      twitter: "https://twitter.com/",
      mail: "domi19kub@gmail.com",
      biography: [
        "Dr Wani has earned  M.Sc. and Ph.D (Food Science & Technology) from India and MBA from ESSEC & Mannheim Business Schools. Having worked as Professor at Islamic University of Science & Technology, Awantipira, Kashmir (2006-2011) and subsequently as  principal scientist and innovation consulatant at Fraunhofer Institute for Process Engineering & Packaging IVV, Germany.",
        "Dr. Wani has what it takes a health & service-driven firm like Go halal. To him, the food quality, food safety, health and wellbeing and the customer always comes first. His association with European Hygienic Engineering Design Group will help the company and customers at large to get food products that have been produced with the highest level of hygiene standards.",
        "He is always striving to revolutionize the food services industry – one partner and expo at a time.",
        "On July 21, 2021, he was appointed as Chief Exceutive Officer (CEO) of Go Halal.",
      ],
    },
    {
      name: "Philipp Tomio, ",
      titles: "MA, MBA",
      photo: founder2,
      position: "(Co-Founder & COO)",
      linkedin: "https://www.linkedin.com/",
      twitter: "https://twitter.com/",
      mail: "domi19kub@gmail.com",
      biography: [
        "To Mr. Tomio, leadership is everything. Read his background. Executive level-director of a Saudi sovereign wealth fund. Master’s degree in security policy studies. Head of Strategy for a German arms manufacturer. Board of directors for aerospace and national defense firms. With a wealth of experience, Mr. Tomio has the skills required to run a wildly successful business. His vision and willingness to do thing differently has put Go Halal on an immense growth trajectory.",
        "On July 21, 2021, he was appointed as Chief Operating Officer (COO) of Go Halal.",
      ],
    },
    {
      name: "Ferhat Balyeli, ",
      titles: "MA, MBA",
      photo: founder3,
      position: "(Co-Founder & CFO)",
      linkedin: "https://www.linkedin.com/",
      twitter: "https://twitter.com/",
      mail: "domi19kub@gmail.com",
      biography: [
        "Financial expert with more than 19 years of experience in the banking industry in an international environment, in the areas of risk management, banking prudential regulatory standards and asset management.",
        "Facilitated by his dual Franco-Turkish background and with extensive experience in the private and public financial sectors, he has always attached great importance to cultural diversity in a professional context and to work in an international environment.",
        "Having worked for several of Europe’s premier banks, Ferhat Balyeli cut his teeth in the financial industry for years. His rapid rise up the corporate ladder gave him the motivation he needed to change the world. Mr. Balyeli has been an invaluable asset to Go Halal. His foresight has allowed us to scan the market and provide premier products to a wide audience.",
        "Ferhat Balyeli holds a double postgraduate degree in macroeconomics and econometrics from Paris School of Economics and an Executive MBA from ESSEC & Mannheim Business School.",
        "On July 21, 2021, he was appointed as Chief Financial Officer (CFO) of Go Halal.",
      ],
    },
  ];

  return (
    <div className="AboutUsContainer">
      <SiteTemplate>
        <div className="AboutUsContainer2">
          <div className="AboutUs">
            <div className="AboutUsPoster">
              <div className="Text">
                <span className="AboutUsHeader">
                  {getTranslation("About Go Halal")}
                </span>
                <span className="marginBottom2">
                  {getTranslation("Authentic high quality halal")}
                </span>
                {windowWitdth >= 750 && (
                  <span>
                    {getTranslation(
                      "Our mission is to make halal market transparent, affordable, easy, accessible and global."
                    )}
                  </span>
                )}
              </div>
              {windowWitdth >= 500 && (
                <img src={Poster} id="BigPoster" alt="" />
              )}
            </div>
          </div>
        </div>
        <div
          className="AboutUsContainer2"
          style={{ backgroundColor: "var(--dark-green)" }}
        >
          <div className="AboutUsTab" id="AboutUsTab">
            <div id="ourstory">
              <span
                onClick={() => {
                  setTabSelected("ourstory");
                }}
              >
                {getTranslation("Our Story")}
              </span>
            </div>
            <div id="missionvision">
              <span
                onClick={() => {
                  setTabSelected("missionvision");
                }}
              >
                {getTranslation("Mission & Vision")}
              </span>
            </div>
            <div id="corevalues">
              <span onClick={() => setTabSelected("corevalues")}>
                {getTranslation("Core Values")}
              </span>
            </div>
            <div id="ourfounders">
              <span onClick={() => setTabSelected("ourfounders")}>
                {getTranslation("Our Founders")}
              </span>
            </div>
          </div>
        </div>
        {tabSelected === "corevalues" && (
          <div
            className="AboutUsContainer2"
            style={{ backgroundColor: "white" }}
          >
            <div className="CoreValues">
              <span className="CoreValuesHeader">
                {getTranslation("Our core values")}
              </span>

              <span>
                {getTranslation(
                  "Our core values are halal centric and a driving force at Go Halal to offer the best products and services to our customers and partners. Our decisons, work culture and collaborations, thinking and leadership are based on our core values for creating value for our community, partners for a better and healthy life."
                )}
              </span>
              {windowWitdth > 750 && (
                <div className="Values">
                  {CoreValues().map((elem, index) => {
                    return (
                      <div className="SingleValue" key={index}>
                        <img src={elem.icon} alt="" />
                        <span>{getTranslation(elem.text)}</span>
                        <span>{getTranslation(elem.discription)}</span>
                      </div>
                    );
                  })}
                </div>
              )}
              {windowWitdth <= 750 &&
                CoreValues().map((elem, index) => {
                  return (
                    <div className="Values2" key={index}>
                      {elem.map((elem, index) => {
                        return (
                          <div className="SingleValue" key={index}>
                            <img src={elem.icon} alt="" />
                            <span>{getTranslation(elem.text)}</span>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
            </div>
          </div>
        )}
        {tabSelected === "missionvision" && (
          <div
            className="AboutUsContainer2"
            style={{ backgroundColor: "white" }}
          >
            <div className="MissionVision">
              <div>
                <img src={MissionIcon} alt="" />
                <span className="CoreValuesHeader">
                  {getTranslation("Mission")}
                </span>
                <span>
                  {getTranslation(
                    "To make halal market transparent, easy, accessible and global. Our affordable, high quality, authentic products create opportunities for growth, so you can enjoy the unique customer experience you deserve."
                  )}
                </span>
              </div>
              <div>
                <img src={VisionIcon} alt="" />
                <span className="CoreValuesHeader">
                  {getTranslation("Vision")}
                </span>
                <span>
                  {getTranslation(
                    "To be halal-centric omnichannel marketplace where you can easily purchase high-quality products and services."
                  )}
                </span>
              </div>
            </div>
          </div>
        )}
        {tabSelected === "ourstory" && (
          <div
            className="AboutUsContainer2"
            style={{ backgroundColor: "white" }}
          >
            <div className="OurStory">
              <span
                className="CoreValuesHeader"
                style={{ alignSelf: "flex-start" }}
              >
                {getTranslation("Our Story")}
              </span>
              <span>
                {getTranslation(
                  "When Dr. Ali Abas Wani, the founder and CEO of Go Halal came to Germany as an immigrant, he was thoroughly disappointed with the existing halal food shopping experience. Grocery stores, even specialty stores like Aldi and Lidl etc, offered little to no halal products, and the levels of hygiene and cleanliness at the exclusive halal supermarkets were not satisfactory whatsoever. As a Food Science Professor &  MBA graduate with 20 years of experience in food quality, hygenic design, halal traceability, packaging, and food safety principles, Dr. Wani knew that something had to be done. After quiting the job, Dr. Wani decided to step in. With his passion for halal, high quality food, and consumer service, he teamed up with Ferhat Balyeli and Philipp Tomio (Co-founders) at Mannheim and ESSEC business schools to establish a Go Halal market. Together, our combined 50 years of experience are helping reshape and revolutionize the halal shopping experience, providing our community with the highest quality authentic halal food for better health and a happier you.”"
                )}
              </span>
              <div className="wideo">video</div>
              <span>
                {getTranslation(
                  "Go Halal counts scientists and innovation experts amongst its ranks. Our halal supply chain is strictly monitored for quality, food safety and halal fraud to ensure that the fresh and high quality halal products are delivered to our custiomers.  Each of these processes is watched and audited by industry specialists – so you can sink your teeth into a home-delivered Halal meal at the end of it all."
                )}
              </span>
            </div>
          </div>
        )}
        {tabSelected === "ourfounders" && (
          <div
            className="AboutUsContainer2"
            style={{ backgroundColor: "white" }}
          >
            <div className="OurFounders">
              <span className="CoreValuesHeader">
                {getTranslation("Our Founders")}
              </span>
              {founders.map((elem, index) => {
                return <Founder elem={elem} key={index} />;
              })}
            </div>
          </div>
        )}
      </SiteTemplate>
    </div>
  );
}

export default AboutPage;
