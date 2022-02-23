import React from "react";
import "./CategoriesBar.css";
import Menu from "../../icons/Group 4463menu.svg";
import Fruits from "../../icons/Group 3410Fruits.svg";
import Meat from "../../icons/Group 3411Meat.svg";
import Milk from "../../icons/Group 3412Milk.svg";
import Frozen from "../../icons/Group 3413FrozenProducts.svg";
import Bread from "../../icons/Group 3414Bread.svg";
import RightArrow from "../../icons/VectorarrowRight.svg";
import DownArrow from "../../icons/VectorarrowDown.svg";
import { getTranslation } from "../../Utils/getLanguage";

function CategoriesBar(props) {
  const tabs = [
    { text: "Fruits & Vegetables", icon: Fruits },
    { text: "Meat & Poultry", icon: Meat },
    { text: "Milk & Dairy", icon: Milk },
    { text: "Frozen Products", icon: Frozen },
    { text: "Bread", icon: Bread },
  ];

  return (
    <div className="CategoriesBar">
      <div className="CategoriesBarContainer">
        <div onClick={() => console.log("All Categories")}>
          <img src={Menu} alt="" />
          <span>{getTranslation("All Categories")}</span>
          <img
            style={{
              paddingRight: "20px",
            }}
            src={DownArrow}
            alt=""
          />
        </div>
        {tabs.map((elem, index) => {
          return (
            <>
              <div onClick={() => console.log(elem.text)}>
                <img src={elem.icon} alt="" />
                <span>{elem.text}</span>
              </div>
              <div className="divider3" />
            </>
          );
        })}
        <div onClick={() => console.log("See more")}>
          <span>{getTranslation("See more")}</span>
          <img src={RightArrow} alt="" />
        </div>
      </div>
    </div>
  );
}

export default CategoriesBar;
