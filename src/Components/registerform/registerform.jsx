import React from "react";
import "./registerform.css";

const Registerform = () => {
  return (
    <div id="homediv">
      <div id="regformdiv">
        <h2 id="regtitle">Register Form</h2>
        <form id="regForm">
          <input
            type="text"
            placeholder="Enter Your Name"
            className="regInput"
          />
          <input
            type="text"
            placeholder="Enter Your Age"
            className="regInput"
          />
          <input
            type="text"
            placeholder="Enter Your 10th Mark"
            className="regInput"
          />
          <input
            type="text"
            placeholder="Enter Your 12th Mark"
            className="regInput"
          />
          <button id="regSubmit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Registerform;
