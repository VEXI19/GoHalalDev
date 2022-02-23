import React from "react";
import "./ContactUsForm.css";
import { getTranslation } from "../../Utils/getLanguage";
import DropDownClickList from "../DropDownClickList/DropDownClickLIst";

function ContactUsForm(props) {
  const [checkBox, setCheckBox] = React.useState(false);
  const submitForm = () => {
    const firstName = document.getElementById("First name").value;
    const lastName = document.getElementById("Last name").value;
    const email = document.getElementById("Email").value;
    const message = document.getElementById("Message").value;

    const data = {
      firstName,
      lastName,
      email,
      message,
      checkBox,
    };
    console.log(data);
  };

  return (
    <div className="ContactUsForm">
      <div className="ContactUsRow">
        <select className="DropDown">
          {["Mr", "Miss", "Other"].map((elem, index) => {
            return <option key={index}>{elem}</option>;
          })}
        </select>
        {/* <DropDownClickList
          placeholder="Mr"
          border={true}
          marginBottom="50px"
          background="white"
          equalWidth={true}
          buttonColor="#A5CC25"
          categories={["Mr", "Miss", "Other"]}
        /> */}
        <input
          className="ContactFormInput extraMargin"
          id="First name"
          placeholder="First Name"
        />
        <input
          className="ContactFormInput extraMargin"
          id="Last name"
          placeholder="Last Name"
        />
      </div>
      <div className="ContactUsRow">
        <input
          className="ContactFormInput"
          id="Email"
          type="email"
          onError={(err) => console.log(err)}
          placeholder="E-mail Address"
        />
      </div>
      <div className="ContactUsRow">
        <DropDownClickList
          placeholder="Your Inquiry"
          marginBottom="50px"
          background="white"
          border={true}
          equalWidth={true}
          buttonColor="#A5CC25"
          categories={["sdf adf", "sadffffff", "Other"]}
          fullWidth={true}
        />
      </div>
      <div className="HighRow ContactUsRow">
        <textarea
          className="ContactFormInput"
          id="Message"
          placeholder="Message"
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
      <button onClick={() => submitForm()}>{getTranslation("Send Now")}</button>
    </div>
  );
}

export default ContactUsForm;
