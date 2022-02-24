import React from "react";
import "./DiscountBar.css";
import Discounts from "../../icons/GroupDiscounts.svg";
import Bio from "../../icons/GroupBio.svg";
import Products from "../../icons/GroupNewProducts.svg";
import Recipes from "../../icons/GroupRecipies.svg";
import GoHalalFamily from "../../icons/VectorGoHalalFamily.svg";
import GiftCards from "../../icons/GroupGiftcards.svg";
import Zakat from "../../icons/GroupZakat.svg";
import Blog from "../../icons/GroupBlog.svg";

function DiscountBar(props) {
  const tabs = {
    row1: [
      { text: "Discounts & Offers", icon: Discounts },
      { text: "Bio Products", icon: Bio },
      { text: "New Products", icon: Products },
      { text: "Recipes", icon: Recipes },
    ],

    row2: [
      { text: "Go Halal Family", icon: GoHalalFamily },
      { text: "Gift Cards", icon: GiftCards },
      { text: "Zakat", icon: Zakat },
      { text: "Blog", icon: Blog },
    ],
    row3: [
      { text: "Discounts & Offers", icon: Discounts },
      { text: "Bio Products", icon: Bio },
    ],
    row4: [
      { text: "New Products", icon: Products },
      { text: "Recipes", icon: Recipes },
    ],
    row5: [
      { text: "Go Halal Family", icon: GoHalalFamily },
      { text: "Gift Cards", icon: GiftCards },
    ],
    row6: [
      { text: "Zakat", icon: Zakat },
      { text: "Blog", icon: Blog },
    ],

    allRows: [
      { text: "Discounts & Offers", icon: Discounts },
      { text: "Bio Products", icon: Bio },
      { text: "New Products", icon: Products },
      { text: "Recipes", icon: Recipes },
      { text: "Go Halal Family", icon: GoHalalFamily },
      { text: "Gift Cards", icon: GiftCards },
      { text: "Zakat", icon: Zakat },
      { text: "Blog", icon: Blog },
    ],
  };

  const [windowWitdth, setWindowWitdth] = React.useState(window.innerWidth);

  window.addEventListener("resize", () => setWindowWitdth(window.innerWidth));

  return (
    <div className="DiscountBar">
      <div
        className="DiscbountBarContainer"
        style={
          windowWitdth <= 1250
            ? { marginBottom: "20px", marginTop: "10px" }
            : { marginBottom: "0", marginTop: "0" }
        }
      >
        {windowWitdth > 1250 && (
          <div className="DiscountBarRow">
            {tabs.allRows.map((elem, index) => {
              return (
                <div onClick={() => console.log(elem.text)} key={index}>
                  <img src={elem.icon} alt="" />
                  {index !== 0 && (
                    <span id={"discount" + index}>{elem.text}</span>
                  )}

                  {index === 0 && (
                    <div>
                      <span id={"discount" + index}>{elem.text}</span>
                      <div />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
        {windowWitdth <= 1250 && windowWitdth > 750 && (
          <div className="DiscountBarRowsContainer">
            <div className="DiscountBarRow">
              {tabs.row1.map((elem, index) => {
                return (
                  <div onClick={() => console.log(elem.text)} key={index}>
                    <img src={elem.icon} alt="" />
                    {index !== 0 && (
                      <span id={"discount" + index}>{elem.text}</span>
                    )}

                    {index === 0 && (
                      <div>
                        <span id={"discount" + index}>{elem.text}</span>
                        <div />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="DiscountBarRow">
              {tabs.row2.map((elem, index) => {
                return (
                  <div onClick={() => console.log(elem.text)} key={index}>
                    <img src={elem.icon} alt="" />
                    <span id={"discount" + index}>{elem.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {windowWitdth <= 750 && (
          <div className="DiscountBarRowsContainer">
            <div className="DiscountBarRow spaceAround">
              {tabs.row3.map((elem, index) => {
                return (
                  <div onClick={() => console.log(elem.text)} key={index}>
                    <img src={elem.icon} alt="" />
                    {index !== 0 && (
                      <span id={"discount" + index}>{elem.text}</span>
                    )}

                    {index === 0 && (
                      <div>
                        <span id={"discount" + index}>{elem.text}</span>
                        <div />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="DiscountBarRow spaceAround">
              {tabs.row4.map((elem, index) => {
                return (
                  <div onClick={() => console.log(elem.text)} key={index}>
                    <img src={elem.icon} alt="" />
                    <span id={"discount" + index}>{elem.text}</span>
                  </div>
                );
              })}
            </div>
            <div className="DiscountBarRow spaceAround">
              {tabs.row5.map((elem, index) => {
                return (
                  <div onClick={() => console.log(elem.text)} key={index}>
                    <img src={elem.icon} alt="" />
                    <span id={"discount" + index}>{elem.text}</span>
                  </div>
                );
              })}
            </div>
            <div className="DiscountBarRow spaceAround">
              {tabs.row6.map((elem, index) => {
                return (
                  <div onClick={() => console.log(elem.text)} key={index}>
                    <img src={elem.icon} alt="" />
                    <span id={"discount" + index}>{elem.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DiscountBar;
