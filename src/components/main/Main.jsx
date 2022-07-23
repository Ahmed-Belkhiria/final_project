import React from "react";
import "./main.css";

const Main = () => {
  return (
    <div className="mainContainer">
      <div className="mainLeft">
        <h2 className="mainTitle">Fairy girl's dream land</h2>
        <p className="mainParagraph">
        FairyGirl Jewlery proposes the most unique, trendy and original pieces of jewlery, handmade with love and devotion.
        Join our amazing community, find the best accessories for you and/or your partner, or send us your sketches for really original content creation.
        </p>
        <button className="mainButton">Check latest products</button>
        <img src="/butterflies2.png" className="mainButterflies2" alt="" />
      </div>
      <div className="mainRight">
        {/*<img src="/main.png" className="mainGirl" alt="" /> */}
        <img src="/butterflies.png" className="mainButterflies" alt="" />
      </div>
    </div>
  );
};

export default Main;
