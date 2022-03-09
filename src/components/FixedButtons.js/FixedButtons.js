import React from "react";
import "./FixedButtons.css";
import arrowUp from "../../icons/up-arrow-svgrepo-com.svg";
import MessageIcon from "../../icons/message-svgrepo-com.svg";
import { getTranslation } from "../../Utils/getLanguage";
import CloseIcon from "../../icons/icons8-close.svg";
import HomeButton from "../../icons/Vector (13).svg";
import SearchButton from "../../icons/search-svgrepo-com.svg";
import MyCartButton from "../../icons/MyCart.svg";
import FavouritesIcon from "../../icons/Vector (15).svg";
import AccountIcon from "../../icons/Account.svg";
import SearchBar from "../SearchBar/SearchBar";

function FixedButtons(props) {
  const [windowWitdth, setWindowWitdth] = React.useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setWindowWitdth(window.innerWidth);
  });

  if (windowWitdth <= 700) {
    window.addEventListener("scroll", (ev) => {
      const topBar = document.getElementById("TopBarMobile");
      if (topBar) {
        const rect = topBar.getBoundingClientRect();
        var height = 0;
        try {
          height = document.getElementById("TopBarSearchBar").offsetHeight;
        } finally {
        }
        if (window.pageYOffset - rect.height <= -height) {
          setTopSearchBar(false);
        }
      }
    });
  }

  const [topSearchBar, setTopSearchBar] = React.useState(false);
  const [messagesShow, setMessagesShow] = React.useState(false);
  const [messages, setMessages] = React.useState([
    {
      timeStamp: 0,
      text: "What's on your mind?",
      author: "GoHalal",
    },
    {
      timeStamp: 0,
      text: "Is everything ok?",
      author: "GoHalal",
    },
    {
      timeStamp: 0,
      text: "sda fhas dj sj",
      author: "user",
    },
  ]);
  return (
    <div className="FixedButtons">
      {messagesShow && (
        <div className="FixedButtonsMessageBox">
          <div className="FixedButtonsMessageBoxTopBar">
            <span>{getTranslation("GoHalal Help")}</span>
            <img
              onClick={() => setMessagesShow(false)}
              src={CloseIcon}
              alt=""
            />
          </div>
          <div className="FixedButtonsMessageBoxBottom">
            <div className="InputDiv">
              <input
                id="InputMessages"
                placeholder={getTranslation("Write...")}
              />
              <span
                onClick={() => {
                  const input = document.getElementById("InputMessages");
                  if (input.value !== "") {
                    setMessages([
                      ...messages,
                      {
                        timeStamp: Date.now(),
                        text: input.value,
                        author: "user",
                      },
                    ]);
                  }
                  input.value = "";
                }}
              >
                {getTranslation("Send")}
              </span>
            </div>
            <div className="FixedButtonsMessageBoxBottomMessages">
              {messages.map((elem, index) => {
                return (
                  <div
                    style={
                      elem.author === "GoHalal"
                        ? { alignSelf: "flex-start" }
                        : { alignSelf: "flex-end" }
                    }
                    key={index}
                  >
                    <span>{elem.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
      <div
        onClick={() => setMessagesShow(!messagesShow)}
        className="FixedButtonsButton"
      >
        <img src={MessageIcon} alt="" />
      </div>
      <div
        onClick={() => window.scrollTo(0, 0)}
        className="FixedButtonsButton marginBottom"
      >
        <img src={arrowUp} alt="" />
      </div>
      {topSearchBar && (
        <div
          className="TopBarMobileSearchBarContainer"
          id="TopBarMobileSearchBarContainer"
        >
          <SearchBar
            buttonLeft={true}
            size="clamp(20px, 10vw, 45px)"
            placeholder="I'm searching for"
            isCategories={false}
            buttonTransparent={true}
          />
          <div className="WhiteLine"></div>
        </div>
      )}
      {windowWitdth <= 700 && (
        <div className="BottomMenuMobile">
          <img src={HomeButton} alt="" />
          <img
            onClick={() => {
              const topBar = document.getElementById("TopBarMobile");
              const rect = topBar.getBoundingClientRect();
              if (rect.top + rect.height > 0) {
                document.getElementById("header-search").focus();
              } else {
                const promise = new Promise((resolve) => {
                  setTopSearchBar(!topSearchBar);
                  resolve();
                });

                promise
                  .then(() => {
                    const topBar = document.getElementById(
                      "TopBarMobileSearchBarContainer"
                    );
                    topBar.children[0].children[0].children[0].focus();
                  })
                  .catch((err) => {});
              }

              window.scrollTo();
            }}
            src={SearchButton}
            alt=""
          />
          <img src={MyCartButton} alt="" />
          <img src={FavouritesIcon} alt="" />
          <img src={AccountIcon} alt="" />
        </div>
      )}
    </div>
  );
}

export default FixedButtons;
