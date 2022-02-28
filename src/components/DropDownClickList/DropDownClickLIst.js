import React from "react";
import "./DropDownClickList.css";
import upArrow from "../../icons/up-arrow.png";
import downArrow from "../../icons/down-arrow.png";

function DropDownClickList({ categories, placeholder }) {
  const [open, setOpen] = React.useState(false);

  const AllCategories = React.useRef(null);
  window.addEventListener("click", (event) => {
    if (
      event.target.className !== "DropDownClickListHeader" &&
      event.target.className !== "CategoriesElement"
    ) {
      setOpen(false);
    }
  });

  return (
    <div className="DropDownClickList">
      <div
        onBlur={() => {
          setOpen(false);
        }}
        onClick={() => setOpen(!open)}
        className="DropDownClickListHeader"
      >
        <span
          style={{ pointerEvents: "none" }}
          ref={AllCategories}
          id="AllCategories"
        >
          {placeholder}
        </span>
        <div style={{ pointerEvents: "none" }}>
          <img
            style={{ pointerEvents: "none" }}
            id="arrow"
            src={!open ? downArrow : upArrow}
            alt=""
          />
        </div>
      </div>
      {open && (
        <div id="Categories" className="Categories">
          {categories.map((elem, index) => {
            return (
              <div
                onClick={() => {
                  console.log(elem);
                  AllCategories.current.innerHTML = elem;
                  setOpen(false);
                }}
                className="CategoriesElement"
                key={index}
              >
                <span style={{ pointerEvents: "none" }} key={index}>
                  {elem}
                </span>
                {index !== categories.length - 1 && (
                  <div
                    style={{ pointerEvents: "none" }}
                    className="divider"
                  ></div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default DropDownClickList;
