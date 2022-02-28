import React from "react";
import "./DiscountButton.css";

function DiscountButton({ elem, paddingLeft, paddingRight }) {
  const [hover, setHover] = React.useState(false);

  return (
    <div
      className="DiscountButton"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ paddingLeft, paddingRight }}
      onClick={() => console.log(elem.text)}
    >
      <img
        style={
          hover
            ? {
                filter:
                  "brightness(0) saturate(100%) invert(20%) sepia(68%) saturate(2052%) hue-rotate(83deg) brightness(97%) contrast(94%)",
              }
            : {}
        }
        src={elem.icon}
        alt=""
      />

      <div>
        <span style={hover ? { color: "#115c07" } : { color: "black" }}>
          {elem.text}
        </span>
        {hover && <div />}
      </div>
    </div>
  );
}

export default DiscountButton;
