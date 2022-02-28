import React from "react";
import "./AllCategories.css";

import AllCategoriesCategory from "../AllCategoriesCategory/AllCategoriesCategory";

function AllCategories({ tabs }) {
  const [windowWidth, setWindowWitdth] = React.useState(window.innerWidth);
  const [windowWidth1500, setWindowWitdth1500] = React.useState(1500);
  window.addEventListener("resize", () => setWindowWitdth(window.innerWidth));

  React.useEffect(() => {
    if (windowWidth <= 1500) setWindowWitdth1500(windowWidth * 0.9);
  }, [windowWidth]);

  return (
    <div className="AllCategories">
      <div>
        <div
          className="AllCategoriesConatiner"
          style={{
            gridTemplateColumns: `repeat(min(${Math.floor(
              windowWidth1500 / 140
            )}, 6), minmax(140px, 1fr))`,
          }}
        >
          {tabs.map((elem, index) => {
            return (
              <AllCategoriesCategory
                icon={elem.icon}
                text={elem.text}
                colorChangeOnHover={elem.colorChangeOnHover}
                key={index}
              />
            );
          })}
          <div
            style={{
              width: "1000%",
              backgroundColor: "white",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default AllCategories;
