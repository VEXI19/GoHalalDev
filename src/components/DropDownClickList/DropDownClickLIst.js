import React from "react";
import "./DropDownClickList.css";
import upArrow from "../../icons/up-arrow.png";
import downArrow from "../../icons/down-arrow.png";

function DropDownClickList({ categories, placeholder }) {
  const [open, setOpen] = React.useState(false);

  const AllCategories = React.useRef(null);

  return (
    <div className="DropDownClickList">
      <div
        onBlur={() => {
          setOpen(false);
        }}
        onClick={() => setOpen(!open)}
        className="DropDownClickListHeader"
      >
        <span ref={AllCategories} id="AllCategories">
          {placeholder}
        </span>
        <div>
          <img id="arrow" src={!open ? downArrow : upArrow} alt="" />
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
                key={index}
              >
                <span key={index}>{elem}</span>
                {index !== categories.length - 1 && (
                  <div className="divider"></div>
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
