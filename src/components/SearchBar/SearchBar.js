import React from "react";
import DropDownClickList from "../DropDownClickList/DropDownClickLIst";
import "./SearchBar.css";
import searchButton from "../../icons/GroupsearchButton.svg";

function SearchBar({ isCategories = true, placeholder, button = "" }) {
  const Categories = ["All Categories", "Meat", "Vegies", "Fruits", "Milk"];

  var buttonWidth = "60px";

  if (button !== "") {
    buttonWidth = "max-content";
  }

  return (
    <div className="SearchBar">
      <form action="/" method="get">
        <input type="text" id="header-search" placeholder={placeholder} />
        <div>
          {isCategories && (
            <>
              <div className="devider" />
              <DropDownClickList
                placeholder="All Categories"
                categories={Categories}
                marginBottom="70px"
              />
            </>
          )}
          <button style={{ width: buttonWidth }}>
            {button && (
              <span
                style={{
                  fontFamily: '"Maven Pro", sans-serif',
                  color: "white",
                  fontSize: "15px",
                  padding: "10px",
                }}
              >
                {button}
              </span>
            )}
            {!button && <img src={searchButton} alt="" />}
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
