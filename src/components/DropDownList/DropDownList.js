import React from "react";
import "./DropDownList.css";
import rightArrow from "../../icons/rightArrow.svg";

function DropDownList({ list, show, translateDown }) {
  const [hover, setHover] = React.useState(show);
  React.useEffect(() => {
    setHover(show);
  }, [show]);

  const style = {
    transform: `translateY(calc(50% + ${translateDown}))`,
  };

  return (
    <div className="DropDownList" style={style}>
      {hover && list && (
        <div
          className="DropDownListContainer"
          id="DropDownListContainer"
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(show);
          }}
        >
          {list.map((elem, index) => {
            return (
              <div onClick={() => console.log(elem.text)} key={index}>
                <div>
                  <div>
                    <img src={elem.icon} alt="" />
                    <span>{elem.text}</span>
                  </div>
                  <img id="rightArrow" src={rightArrow} alt="" />
                </div>
                {/* <div>
                  <div className="DropDownListDevider"></div>
                </div> */}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default DropDownList;
