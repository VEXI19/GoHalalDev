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

  const [windowWitdth, setWindowWitdth] = React.useState(window.innerWidth);

  window.addEventListener("resize", () => setWindowWitdth(window.innerWidth));

  return (
    <div className="CategoriesBar">
      <div
        className="CategoriesBarContainer"
        style={
          windowWitdth <= 590
            ? { justifyContent: "center" }
            : { justifyContent: "space-between" }
        }
      >
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

        {windowWitdth >= 590 && (
          <>
            {tabs.map((elem, index) => {
              return (
                <div key={index}>
                  {windowWitdth / index > 300 && (
                    <>
                      <div onClick={() => console.log(elem.text)}>
                        <img src={elem.icon} alt="" />
                        <span>{elem.text}</span>
                        <div className="devider3"></div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
            <div onClick={() => console.log("See more")}>
              <span>{getTranslation("See more")}</span>
              <img src={RightArrow} alt="" />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CategoriesBar;
