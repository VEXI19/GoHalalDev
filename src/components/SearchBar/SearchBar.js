import React from "react";
import DropDownClickList from "../DropDownClickList/DropDownClickLIst";
import "./SearchBar.css";
import searchButton from "../../icons/GroupsearchButton.svg";

function SearchBar({ isCategories = true, placeholder, button = "" }) {
  const Categories = ["All Categories", "Meat", "Vegies", "Fruits", "Milk"];

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
          <button>
            {button && <span style={{ padding: "0.5em 1em" }}>{button}</span>}

            {!button && (
              <img
                style={{ width: "min(4vw, 25px)", padding: "1vw" }}
                src={searchButton}
                alt=""
              />
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
