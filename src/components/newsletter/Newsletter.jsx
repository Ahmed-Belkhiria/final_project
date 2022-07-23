import React from "react";
import "./newsletter.css";
import SendIcon from "@mui/icons-material/Send";
const Newsletter = () => {
  return (
    <div className="newsletterContainer">
      <h1 className="newsletterTitle">Join our News Letter</h1>
      <div className="newsletterDescription">
        Get timely updates for your favourite products
      </div>
      <div className="newsletterInputContainer">
        <input
          type="text"
          placeholder="Your email"
          className="newsletterInput"
        />
        <button className="newsletterButton">
          <SendIcon />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
