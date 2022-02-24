import React from "react";
import "./MenuObject.css";
import VerticalLine from "../../icons/Line 164Line.svg";
import { getTranslation } from "../../Utils/getLanguage";
import DropDownList from "../DropDownList/DropDownList";

function MenuObject({
  icon,
  text,
  isVerticalLine,
  dropDownList,
  id,
  clickable = true,
  showDropDownList,
  shortVersion,
}) {
  const [hover, setHover] = React.useState(false);

  React.useEffect(() => {
    const menu = document.getElementById("menuObjectContainer" + id);

    if (shortVersion) {
      menu.style.padding = "5px";
    } else {
      menu.style.padding = "0px";
    }
  }, [shortVersion, id]);

  return (
    <div
      className="MenuObject"
      onClick={() => console.log(text)}
      onMouseEnter={() => {
        setHover(true);

        if (clickable) {
          const img = document.getElementById("icon" + id);
          const text = document.getElementById("text" + id);
          const menu = document.getElementById("menuObjectContainer" + id);
          img.style.color = "grey";
          text.style.color = "grey";
          menu.style.cursor = "pointer";
        }
      }}
      onMouseLeave={() => {
        setHover(false);
        const img = document.getElementById("icon" + id);
        const text = document.getElementById("text" + id);
        img.style.color = "white";
        text.style.color = "white";
      }}
    >
      <div className="MenuObjectContainer" id={"menuObjectContainer" + id}>
        <div>
          <img id={"icon" + id} src={icon} alt="" />
          <span
            style={
              isVerticalLine ? { paddingRight: "10px" } : { paddingRight: "0" }
            }
            id={"text" + id}
          >
            {getTranslation(text)}
          </span>
        </div>
        {isVerticalLine && <img src={VerticalLine} alt="" />}
      </div>
      {dropDownList && showDropDownList && (
        <DropDownList translateDown="38px" show={hover} list={dropDownList} />
      )}
    </div>
  );
}

export default MenuObject;
