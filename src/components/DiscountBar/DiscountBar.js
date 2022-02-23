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
  const tabs = [
    { text: "Discounts & Offers", icon: Discounts },
    { text: "Bio Products", icon: Bio },
    { text: "New Products", icon: Products },
    { text: "Recipes", icon: Recipes },
    { text: "Go Halal Family", icon: GoHalalFamily },
    { text: "Gift Cards", icon: GiftCards },
    { text: "Zakat", icon: Zakat },
    { text: "Blog", icon: Blog },
  ];

  return (
    <div className="DiscountBar">
      <div className="DiscbountBarContainer">
        {tabs.map((elem, index) => {
          return (
            <div onClick={() => console.log(elem.text)} key={index}>
              <img src={elem.icon} alt="" />
              {index !== 0 && <span id={"discount" + index}>{elem.text}</span>}

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
    </div>
  );
}

export default DiscountBar;
