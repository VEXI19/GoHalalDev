import React from "react";
import "./ZipCode.css";

const ZipCodeInput = ({ focusable, focused, handleChange, value, elem }) => {
  const input = React.useRef();

  React.useEffect(() => {
    if (focused) {
      console.log("done");
      input.current.focus();
    }
  }, [focused]);

  console.log("test", focusable, focused, elem);

  return (
    <div className="ZipCodeInput">
      <input
        onInput={(obj) => {
          console.log(obj.currentTarget.value);

          handleChange(obj);
        }}
        maxLength={1}
        type="number"
        disabled={!focusable}
        ref={input}
      />
    </div>
  );
};

function ZipCode(props) {
  const [code, setCode] = React.useState("");
  const [putInFocus, setPutInFocus] = React.useState(false);

  const arrayLength = (array) => {
    var count = 0;
    array.forEach((elem) => {
      if (elem !== null) count++;
    });
    return count;
  };

  return (
    <div
      className="ZipCode"
      onClick={() => {
        setPutInFocus(!putInFocus);
      }}
    >
      {[0, 1, 2, 3, 4].map((elem) => {
        // console.log(arrayLength(code), elem, code);
        // console.log(
        //   elem,
        //   elem === arrayLength(code) || putInFocus,
        //   elem <= arrayLength(code)
        // );

        return (
          <ZipCodeInput
            key={elem}
            elem={elem}
            focusable={elem <= code.length}
            focused={elem === code.length || putInFocus}
            value={code[elem]}
            handleChange={(obj) => {
              //   var temp = code;
              //   code[elem] = obj.currentTarget.value;
              //   console.log(temp, code);
              setCode(code + obj.currentTarget.value);
            }}
          />
        );
      })}
    </div>
  );
}

export default ZipCode;
