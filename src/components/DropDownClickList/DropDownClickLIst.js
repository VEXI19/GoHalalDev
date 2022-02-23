import React from "react";
import "./DropDownClickList.css";
import upArrow from "../../icons/up-arrow.png";
import downArrow from "../../icons/down-arrow.png";

function DropDownClickList({
  categories,
  placeholder,
  marginBottom,
  background = "transparent",
  buttonColor = "transparent",
  border = false,
  fullWidth = false,
}) {
  const [open, setOpen] = React.useState(false);

  const AllCategories = React.useRef(null);

  return (
    <div
      style={border ? { border: "1px solid rgb(223, 223, 223)" } : {}}
      className="DropDownClickList"
    >
      <div
        onBlur={() => {
          setOpen(false);
        }}
        onClick={() => setOpen(!open)}
        className="DropDownClickListHeader"
        style={
          fullWidth
            ? { backgroundColor: background, width: "100%" }
            : { backgroundColor: background, width: "fit-content" }
        }
      >
        <span
          style={buttonColor !== "transparent" ? { paddingRight: "20px" } : {}}
          ref={AllCategories}
          id="AllCategories"
        >
          {placeholder}
        </span>
        <div style={{ backgroundColor: buttonColor }}>
          <img id="arrow" src={!open ? downArrow : upArrow} alt="" />
        </div>
      </div>
      {open && (
        <div
          style={{ marginTop: marginBottom }}
          id="Categories"
          className="Categories"
        >
          {categories.map((elem, index) => {
            return (
              <div
                onClick={() => {
                  console.log(elem);
                  AllCategories.current.innerHTML = elem;
                  console.log(AllCategories);
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
