import React from "react";
import "./ButtonWithDropDown.css";
import DropDownList from "../DropDownList/DropDownList";

function ButtonWithDropDown({ elem }) {
  const [showDropDown, setShowDropDown] = React.useState(false);
  return (
    <div
      className="ButtonWithDropDown"
      onMouseEnter={() => {
        setShowDropDown(true);
      }}
      onMouseLeave={() => {
        setShowDropDown(false);
      }}
      onClick={() => console.log(elem.text)}
    >
      <img src={elem.icon} alt=""></img>
      <span>{elem.text}</span>
      <DropDownList
        translateDown="70px"
        show={showDropDown}
        list={elem.dropDowns}
      />
    </div>
  );
}

export default ButtonWithDropDown;
