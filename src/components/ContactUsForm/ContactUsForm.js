import React from "react";
import "./ContactUsForm.css";
import { getTranslation } from "../../Utils/getLanguage";
import arrowDown from "../../icons/down-arrow.png";
import arrowUp from "../../icons/up-arrow.png";

function ContactUsForm(props) {
  const [checkBox, setCheckBox] = React.useState(false);
  const [genderShow, setGenderShow] = React.useState(false);
  const [inquiryShow, setInquiryShow] = React.useState(false);

  const [firstName, setFirstName] = React.useState(null);
  const [lastName, setLastName] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [message, setMessage] = React.useState(null);
  const [genderPick, setGenderPick] = React.useState(null);
  const [inquiryPick, setInquiryPick] = React.useState(null);

  const [buttonHover, setButtonHover] = React.useState(false);

  var buttonDisabled =
    genderPick &&
    firstName &&
    lastName &&
    email &&
    inquiryPick &&
    message &&
    checkBox;

  const submitForm = () => {
    const data = {
      firstName,
      lastName,
      email,
      message,
      checkBox,
      genderPick,
      inquiryPick,
    };
    console.log(data);
  };

  const genderArray = ["Mr", "Miss", "Other"];
  const inquiryArray = [
    "Technical Support",
    "Delivery Problems",
    "Quality of Products",
    "Technical Support",
    "Delivery Problems",
    "Quality of Products",
    "Technical Support",
    "Delivery Problems",
    "Quality of Products",
  ];
  const genderPickElem = document.getElementById("ContactUsGender");
  const inquiryPickElem = document.getElementById("ContactUsInquiry");

  const [windowWitdth, setWindowWitdth] = React.useState(window.innerWidth);

  window.addEventListener("resize", () => setWindowWitdth(window.innerWidth));

  return (
    <div className="ContactUsForm">
      <div
        className="ContactUsRow"
        style={
          windowWitdth <= 600
            ? { flexDirection: "column" }
            : { flexDirection: "row" }
        }
      >
        <div
          className={
            windowWitdth <= 600 ? "ContactUsDropDown2" : "ContactUsDropDown"
          }
        >
          <div
            className={
              windowWitdth <= 600
                ? "ContactUsDrowDownHeader2"
                : "ContactUsDrowDownHeader"
            }
            onClick={() => {
              setGenderShow(!genderShow);
            }}
          >
            <span id="ContactUsGender">{getTranslation("Gender")}</span>
            <div>
              <img src={genderShow ? arrowUp : arrowDown} alt="" />
            </div>
          </div>
          {genderShow && (
            <div
              className={
                windowWitdth <= 600
                  ? "ContactUsDrowDownOptions2"
                  : "ContactUsDrowDownOptions"
              }
            >
              {genderArray.map((elem, index) => {
                return (
                  <span
                    onClick={() => {
                      genderPickElem.innerHTML = elem;
                      genderPickElem.style.color = "black";
                      setGenderShow(false);
                      setGenderPick(elem);
                    }}
                    key={index}
                  >
                    {getTranslation(elem)}
                  </span>
                );
              })}
            </div>
          )}
        </div>
        <input
          className={
            windowWitdth <= 600
              ? "ContactFormInput"
              : "ContactFormInput extraMargin"
          }
          id="First name"
          style={
            windowWitdth <= 600
              ? { marginTop: "min(3vw, 20px)" }
              : { marginTop: "0", width: "100%" }
          }
          placeholder="First Name"
          onChange={(obj) => setFirstName(obj.currentTarget.value)}
        />
        <input
          className={
            windowWitdth <= 600
              ? "ContactFormInput"
              : "ContactFormInput extraMargin"
          }
          id="Last name"
          style={
            windowWitdth <= 600
              ? { marginTop: "min(3vw, 20px)" }
              : { marginTop: "0", width: "100%" }
          }
          placeholder="Last Name"
          onChange={(obj) => setLastName(obj.currentTarget.value)}
        />
      </div>
      <div className="ContactUsRow">
        <input
          className="ContactFormInput"
          id="Email"
          type="email"
          placeholder="E-mail Address"
          onChange={(obj) => setEmail(obj.currentTarget.value)}
        />
      </div>
      <div className="ContactUsRow">
        <div className="ContactUsDropDown2">
          <div
            className="ContactUsDrowDownHeader2"
            onClick={() => setInquiryShow(!inquiryShow)}
          >
            <span id="ContactUsInquiry">{getTranslation("Your Inquiry")}</span>
            <div>
              <img src={inquiryShow ? arrowUp : arrowDown} alt="" />
            </div>
          </div>
          {inquiryShow && (
            <div className="ContactUsDrowDownOptions2">
              {inquiryArray.map((elem, index) => {
                return (
                  <span
                    onClick={() => {
                      inquiryPickElem.innerHTML = elem;
                      inquiryPickElem.style.color = "black";
                      setInquiryShow(false);
                      setInquiryPick(elem);
                    }}
                    key={index}
                  >
                    {getTranslation(elem)}
                  </span>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div className="HighRow ContactUsRow">
        <textarea
          className="ContactFormInput"
          id="Message"
          placeholder="Message"
          onChange={(obj) => setMessage(obj.currentTarget.value)}
        ></textarea>
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
          <span className="AgreamentText">{getTranslation(". You can ")}</span>
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

      <button
        disabled={!buttonDisabled}
        onMouseEnter={() => setButtonHover(true)}
        onMouseLeave={() => setButtonHover(false)}
        style={
          !buttonDisabled
            ? { backgroundColor: "#556453", cursor: "auto" }
            : buttonHover
            ? { backgroundColor: "#0e3f07", cursor: "pointer" }
            : { backgroundColor: "#115c07", cursor: "pointer" }
        }
        onClick={() => submitForm()}
      >
        {getTranslation("Send Now")}
      </button>
    </div>
  );
}

export default ContactUsForm;
