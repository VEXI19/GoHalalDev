import React from "react";
import "./TopBar.css";
import FreeShippingIcon from "../../icons/Vector.svg";
import AboutUs from "../../icons/AboutUs.svg";
import Authenticity from "../../icons/Authenticity.svg";
import FAQ from "../../icons/FAQ.svg";
import Career from "../../icons/Career.svg";
import Account from "../../icons/Account.svg";
import Language from "../../icons/Language.svg";
import Menu from "../../icons/icons8-menu.svg";
import AboutUs2 from "../../icons/user 1AboutUs2.svg";
import OurStory from "../../icons/Group 4460OurStory.svg";
import Mission from "../../icons/Group 4461Mission&Vision.svg";
import CoreValues from "../../icons/GroupCoreValues.svg";
import OurFounders from "../../icons/GroupOurFounders.svg";
import MenuObject from "../MenuObject/MenuObject";

function TopBar(props) {
  const BarList = [
    {
      text: "About Us",
      icon: AboutUs,
      dropDownList: [
        {
          text: "About Us",
          icon: AboutUs2,
        },
        {
          text: "Our Story",
          icon: OurStory,
        },
        {
          text: "Mission & Vision",
          icon: Mission,
        },
        {
          text: "Core Values",
          icon: CoreValues,
        },
        {
          text: "Our Founders",
          icon: OurFounders,
        },
      ],
    },

    {
      text: "Authenticity",
      icon: Authenticity,
      dropDownList: [
        {
          text: "adsfasfd",
          icon: Account,
        },
        {
          text: "adsfasfd",
          icon: Account,
        },
      ],
    },

    {
      text: "FAQ",
      icon: FAQ,
      dropDownList: [
        {
          text: "adsfasfd",
          icon: Account,
        },
        {
          text: "adsfasfd",
          icon: Account,
        },
      ],
    },

    {
      text: "Career",
      icon: Career,
      dropDownList: [
        {
          text: "adsfasfd",
          icon: Account,
        },
        {
          text: "adsfasfd",
          icon: Account,
        },
      ],
    },

    {
      text: "Language",
      icon: Language,
      dropDownList: [
        {
          text: "adsfasfd",
          icon: Account,
        },
        {
          text: "adsfasfdasdfasfdasfafasfd",
          icon: Account,
        },
      ],
    },

    {
      text: "Account",
      icon: Account,
      dropDownList: [
        {
          text: "adsfasfd",
          icon: Account,
        },
        {
          text: "adsfadsfasfsafasfasfd",
          icon: Account,
        },
      ],
    },
  ];

  const [shortVersion, setShortVersion] = React.useState(
    window.innerWidth <= 1100
  );
  const [menuDropDown, setMenuDropDown] = React.useState(false);

  window.addEventListener("resize", () => {
    var width = window.innerWidth;
    const container = document.getElementById("TopBarContainer2");
    if (width <= 1200) {
      setShortVersion(true);
      container.style.minWidth = "95%";
    } else {
      setShortVersion(false);
      setMenuDropDown(false);
      container.style.minWidth = "80%";
    }
  });

  return (
    <>
      <div className="TopBarContainer">
        <div id="TopBarContainer2" className="TopBarContainer2">
          <div className="TopBarLeftSide">
            <MenuObject
              text="Free shipping from 45€"
              icon={FreeShippingIcon}
              isVerticalLine={false}
              clickable={false}
            />
          </div>
          <div id="TopBarRightSide" className="TopBarRightSide">
            {BarList.map((elem, index) => {
              return (
                <div key={index}>
                  {!shortVersion && (
                    <MenuObject
                      id={index}
                      icon={elem.icon}
                      text={elem.text}
                      isVerticalLine={index !== BarList.length - 1}
                      dropDownList={elem.dropDownList}
                      showDropDownList={!menuDropDown}
                      shortVersion
                    />
                  )}
                </div>
              );
            })}

            {shortVersion && (
              <img
                id="dropDownMenuIcon"
                onClick={() => setMenuDropDown(!menuDropDown)}
                src={Menu}
                alt=""
              />
            )}
          </div>
        </div>
      </div>
      {menuDropDown && (
        <div className="TopBarDropDownMenu">
          {BarList.map((elem, index) => {
            return (
              <div key={index}>
                <MenuObject
                  id={index}
                  icon={elem.icon}
                  text={elem.text}
                  isVerticalLine={false}
                  dropDownList={elem.dropDownList}
                  shortVersion
                />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default TopBar;
