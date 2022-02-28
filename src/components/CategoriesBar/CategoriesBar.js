import React from "react";
import "./CategoriesBar.css";
import Menu from "../../icons/Group 4463menu.svg";
import Fruits from "../../icons/Group 3410Fruits.svg";
import Meat from "../../icons/Group 3411Meat.svg";
import Milk from "../../icons/Group 3412Milk.svg";
import Frozen from "../../icons/Group 3413FrozenProducts.svg";
import Bread from "../../icons/Group 3414Bread.svg";
import RightArrow from "../../icons/VectorarrowRight.svg";
import DownArrow from "../../icons/down-arrow-svgrepo-com.svg";
import UpArrow from "../../icons/up-arrow-svgrepo-com.svg";
import { getTranslation } from "../../Utils/getLanguage";
import AllCategories from "../AllCategories/AllCategories";

import Discounts from "../../icons/GroupDiscounts.svg";
import Bio from "../../icons/GroupBio.svg";
import Products from "../../icons/GroupNewProducts.svg";
import GiftCards from "../../icons/GroupGiftcards.svg";
import FruitsAndVegetables from "../../icons/Fruits and vegetables.svg";
import MeatsFishAndPoultry from "../../icons/Meats, fish & poultry.svg";
import Sausages from "../../icons/Sausages.svg";
import Fish from "../../icons/Fish.svg";
import BreadAndBakedProducts from "../../icons/Bread and baked products.svg";
import FrozenProducts from "../../icons/Frozen Products.svg";
import DairyProducts from "../../icons/Dairy products.svg";
import FruitsIcon2 from "../../icons/Fruits.svg";
import Vegetables from "../../icons/Vegetables.svg";
import Vegan from "../../icons/Vegan.svg";
import Beverages from "../../icons/Beverages.svg";
import TeaAndCoffee from "../../icons/Tea and Coffee.svg";
import SweetsAndChoclates from "../../icons/Sweets & Choclates.svg";
import Staples from "../../icons/Staples.svg";
import CannedProducts from "../../icons/Canned products.svg";
import SpicesAndCondiments from "../../icons/Spices & condiments.svg";
import NoodlesAndPasta from "../../icons/Noodles & pasta.svg";
import SaltyAndChips from "../../icons/Salty & Chips.svg";
import BabyAndKids from "../../icons/Baby & kids.svg";
import CookingOils from "../../icons/Cooking Oils.svg";
import RamadhanSpecial from "../../icons/Ramadhan special.svg";
import Cosmetic from "../../icons/Cosmetic.svg";
import HouseholdHygiene from "../../icons/Household Hygiene.svg";
import Books from "../../icons/Books.svg";
import LongDevider from "../LongDevider/LongDevider";

function CategoriesBar(props) {
  const tabs = [
    { text: "Fruits & Vegetables", icon: Fruits },
    { text: "Meat & Poultry", icon: Meat },
    { text: "Milk & Dairy", icon: Milk },
    { text: "Frozen Products", icon: Frozen },
    { text: "Bread", icon: Bread },
  ];

  const AllCategoriesTabs = [
    { text: "Discounts & Offers", icon: Discounts, colorChangeOnHover: true },
    { text: "New Products", icon: Products, colorChangeOnHover: true },
    { text: "Bio Products", icon: Bio, colorChangeOnHover: true },
    {
      text: "Fruits and vegetables",
      icon: FruitsAndVegetables,
      colorChangeOnHover: true,
    },
    {
      text: "Meats, fish & poultry",
      icon: MeatsFishAndPoultry,
      colorChangeOnHover: true,
    },
    { text: "Sausages", icon: Sausages, colorChangeOnHover: true },
    { text: "Fish", icon: Fish, colorChangeOnHover: true },
    {
      text: "Bread and baked products",
      icon: BreadAndBakedProducts,
      colorChangeOnHover: true,
    },
    {
      text: "Frozen Products",
      icon: FrozenProducts,
      colorChangeOnHover: false,
    },
    { text: "Dairy Products", icon: DairyProducts, colorChangeOnHover: true },
    { text: "Friuts", icon: FruitsIcon2, colorChangeOnHover: true },
    { text: "Vegetables", icon: Vegetables, colorChangeOnHover: true },
    { text: "Vegan", icon: Vegan, colorChangeOnHover: true },
    { text: "Beverages", icon: Beverages, colorChangeOnHover: true },
    { text: "Tea and coffee", icon: TeaAndCoffee, colorChangeOnHover: true },
    {
      text: "Sweets & Choclates",
      icon: SweetsAndChoclates,
      colorChangeOnHover: true,
    },
    { text: "Staples", icon: Staples, colorChangeOnHover: true },
    { text: "Canned Products", icon: CannedProducts, colorChangeOnHover: true },
    {
      text: "Spices & condiments",
      icon: SpicesAndCondiments,
      colorChangeOnHover: true,
    },
    {
      text: "Noodles & pasta",
      icon: NoodlesAndPasta,
      colorChangeOnHover: true,
    },
    { text: "Salty & Chips", icon: SaltyAndChips, colorChangeOnHover: true },
    { text: "Baby & kids", icon: BabyAndKids, colorChangeOnHover: true },
    { text: "Cooking Oils", icon: CookingOils, colorChangeOnHover: true },
    {
      text: "Ramadhan Special",
      icon: RamadhanSpecial,
      colorChangeOnHover: true,
    },
    { text: "Cosmetic", icon: Cosmetic, colorChangeOnHover: false },
    {
      text: "Household Hygiene",
      icon: HouseholdHygiene,
      colorChangeOnHover: true,
    },
    { text: "Gift Cards", icon: GiftCards, colorChangeOnHover: true },
    { text: "Books", icon: Books, colorChangeOnHover: true },
  ];

  const [windowWitdth, setWindowWitdth] = React.useState(window.innerWidth);

  const [showAllCategories, setShowAllCategories] = React.useState(false);

  window.addEventListener("resize", () => setWindowWitdth(window.innerWidth));

  return (
    <div className="CategoriesBar">
      <div
        className="CategoriesBarContainer"
        style={
          windowWitdth <= 700
            ? { justifyContent: "center" }
            : { justifyContent: "flex-start" }
        }
      >
        <div onClick={() => setShowAllCategories(!showAllCategories)}>
          <img src={Menu} alt="" />
          <span>{getTranslation("All Categories")}</span>
          <img
            style={{
              paddingRight: "20px",
              width: "min(4vw, 15px)",
            }}
            src={showAllCategories ? UpArrow : DownArrow}
            alt=""
          />
        </div>

        {windowWitdth >= 700 && (
          <>
            {tabs.map((elem, index) => {
              return (
                <div key={index}>
                  {windowWitdth / index > 400 && (
                    <>
                      <div onClick={() => console.log(elem.text)}>
                        <img src={elem.icon} alt="" />
                        <span>{elem.text}</span>
                      </div>
                      <div
                        style={{
                          width: "1px",
                          marginRight: "15px",
                          height: "20px",
                          backgroundColor: "rgb(224, 224, 224)",
                        }}
                      ></div>
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
      {showAllCategories && (
        <>
          <LongDevider />
          <AllCategories tabs={AllCategoriesTabs} />
        </>
      )}
    </div>
  );
}

export default CategoriesBar;
