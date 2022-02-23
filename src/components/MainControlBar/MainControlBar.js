import React from "react";
import "./MainControlBar.css";
import logo from "../../icons/GroupLogo.svg";
import FollowUs from "../../icons/FollowUs.svg";
import Adress from "../../icons/Adress.svg";
import MyRecipies from "../../icons/MyRecipies.svg";
import MyItems from "../../icons/MyItems.svg";
import MyCart from "../../icons/MyCart.svg";
import Facebook from "../../icons/facebookfacebook.svg";
import Instagram from "../../icons/Groupinstagram.svg";
import YouTube from "../../icons/Groupyoutube.svg";
import Linkedin from "../../icons/Grouplinkedin.svg";
import Twitter from "../../icons/Vectortwitter.svg";
import ShoppingList from "../../icons/Group 3065shoppingList.svg";
import Favourites from "../../icons/Vectorfavourites.svg";
import SaveForLater from "../../icons/Group 3907saveForLater.svg";
import SearchBar from "../SearchBar/SearchBar";
import ButtonWithDropDown from "../ButtonWIthDropDown/ButtonWithDropDown";

function MainControlBar(props) {
  const Countries = [
    "Turkey",
    "Middle East",
    "Africa",
    "Afghanistan",
    "Pakistan",
    "India",
    "European",
    "Asian",
  ];

  const Buttons = [
    {
      text: "Follow Us",
      icon: FollowUs,
      dropDowns: [
        {
          text: "Facebook",
          icon: Facebook,
        },
        {
          text: "Instagram",
          icon: Instagram,
        },
        {
          text: "You Tube",
          icon: YouTube,
        },
        {
          text: "Linkedin",
          icon: Linkedin,
        },
        {
          text: "Twitter",
          icon: Twitter,
        },
      ],
    },
    { text: "Address", icon: Adress },
    { text: "My Recipies", icon: MyRecipies },
    {
      text: "My Items",
      icon: MyItems,
      dropDowns: [
        {
          text: "Shopping list",
          icon: ShoppingList,
        },
        {
          text: "Favourites",
          icon: Favourites,
        },
        {
          text: "Save for later",
          icon: SaveForLater,
        },
      ],
    },
    { text: "My Cart", icon: MyCart },
  ];

  const [shortLayout, setShortLayout] = React.useState(
    window.innerWidth <= 1200
  );

  window.addEventListener("resize", () => {
    if (window.innerWidth <= 1200) {
      setShortLayout(true);
    } else {
      setShortLayout(false);
    }
  });

  React.useEffect(() => {
    const MainControlBarContainer = document.getElementById(
      "MainControlBarContainer"
    );
    const Buttons = document.getElementById("Buttons");
    // console.log(MainControlBarContainer);
    // console.log(shortLayout);
    MainControlBarContainer.style.flexDirection = shortLayout
      ? "column"
      : "row";

    Buttons.style.maxWidth = shortLayout ? "700px" : "500px";
    Buttons.style.marginTop = shortLayout ? "20px" : "0px";
  }, [shortLayout]);

  return (
    <div className="MainControlBar">
      <div id="MainControlBarContainer" className="MainControlBarContainer">
        <div>
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="SearchBarContainer">
            <SearchBar placeholder="I'm searching for" />
            <div className="Regional">
              <span>Regional:</span>
              {Countries.map((elem, index) => {
                return (
                  <div key={index} onClick={() => console.log(elem)}>
                    <span>{elem}</span>

                    {index !== Countries.length - 1 && (
                      <div className="devider2"></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div id="Buttons" className="Buttons">
          {Buttons.map((elem, index) => (
            <ButtonWithDropDown key={index} elem={elem} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainControlBar;
