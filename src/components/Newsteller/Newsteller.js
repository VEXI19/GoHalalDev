import React from "react";
import { getTranslation } from "../../Utils/getLanguage";
import "./Newsteller.css";
import ReCAPTCHA from "react-google-recaptcha";

function Newsletter(props) {
  const [checkBox, setCheckBox] = React.useState(false);
  const [recaptcha, setRecaptcha] = React.useState(false);

  const submitForm = () => {
    const firstName = document.getElementById("NewsLetterFirstName").value;
    const lastName = document.getElementById("NewsLetterLastName").value;
    const email = document.getElementById("NewsLetterEmail").value;

    const data = {
      firstName,
      lastName,
      email,
      checkBox,
      recaptcha,
    };

    console.log(data);
  };

  const [windowWidth, setWindowWidth] = React.useState(null);

  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  return (
    <div className="Newsletter">
      <div className="NewsletterContainer">
        <span className="NewsletterHeader">
          {getTranslation("Register for offers and updates")}
        </span>
        <div
          className="NewsLetterInputContainer"
          style={
            windowWidth <= 850
              ? { flexDirection: "column" }
              : { flexDirection: "row" }
          }
        >
          <input
            className="NewsLetterInput"
            placeholder={getTranslation("First Name")}
            id="NewsLetterFirstName"
            style={
              windowWidth <= 850
                ? { marginLeft: "0", maxWidth: "400px" }
                : { marginLeft: "20px", maxWidth: "1000px" }
            }
          ></input>
          <input
            className="NewsLetterInput"
            placeholder={getTranslation("Last Name")}
            id="NewsLetterLastName"
            style={
              windowWidth <= 850
                ? { marginLeft: "0", marginTop: "20px", maxWidth: "400px" }
                : { marginLeft: "20px", marginTop: "0", maxWidth: "1000px" }
            }
          ></input>
          <input
            className="NewsLetterInput"
            placeholder={getTranslation("Email Adress")}
            id="NewsLetterEmail"
            style={
              windowWidth <= 850
                ? { marginLeft: "0", marginTop: "20px", maxWidth: "400px" }
                : { marginLeft: "20px", marginTop: "0", maxWidth: "1000px" }
            }
          ></input>
        </div>
        <div className="DataProtectionPolicyCheck">
          <div
            className="CheckBox"
            onClick={() => setCheckBox(!checkBox)}
            style={
              checkBox
                ? {
                    backgroundColor: "rgb(65, 65, 65)",
                  }
                : {
                    backgroundColor: "transparent",
                  }
            }
          />
          <div className="AgreamentTextContainer">
            <span className="AgreamentText">
              {getTranslation(
                "I agree agree to the processing of my personal data in accordance with the Go Halal "
              )}
            </span>
            <span className="AgreamentText underline">
              {getTranslation("Data Protection Policy")}
            </span>
            <span className="AgreamentText">
              {getTranslation(". You can ")}
            </span>
            <span className="AgreamentText underline">
              {getTranslation("unsubscribe")}
            </span>
            <span className="AgreamentText">
              {getTranslation(
                " anytime you wish to not recieve any information about products and promotions of Go Halal."
              )}
            </span>
          </div>
        </div>
        <ReCAPTCHA
          sitekey="6Ldz35geAAAAAEE1lrF2kwe3tIhP-JmH4C8XEE_M"
          onChange={(value) => {
            if (value.length > 0) {
              setRecaptcha(true);
            }
          }}
        />

        <button disabled={!recaptcha} onClick={() => submitForm()}>
          {getTranslation("Subscribe")}
        </button>
      </div>
    </div>
  );
}

export default Newsletter;
