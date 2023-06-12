import React from "react";
import Header from "../Header";
import AssetsCard from "./AssetsCard";
import "../../css/assets.css";
import laptop from "../../images/laptop1.jpeg";
import keyboard from "../../images/keyboard.webp";
import laptopCharger from "../../images/laptopCharger.jpg";
import mouse from "../../images/mouse.jpg";
import notepad from "../../images/notepad.jpeg";
import headphone from "../../images/headphone.jpeg";
function AssetsDash() {
  return (
    <div>
      <Header/>
      <div
        className="container-fluid"
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          padding: "20px",
        }}>
        <div className="col-4">
          <AssetsCard image={laptop} />
        </div>
        <div className="col-4">
          <AssetsCard image={headphone} />
        </div>
        <div className="col-4">
          <AssetsCard image={mouse} />
        </div>
        <div className="col-4">
          <AssetsCard image={keyboard} />
        </div>
        <div className="col-4">
          <AssetsCard image={laptopCharger} />
        </div>
        <div className="col-4">
          <AssetsCard image={notepad} />
        </div>
      </div>
    </div>
  );
}

export default AssetsDash;










