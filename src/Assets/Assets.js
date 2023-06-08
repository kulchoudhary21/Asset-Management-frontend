import React from "react";
import Header from "../Header";
import Card from "./Card";
import "../../css/assets.css";
import laptop from "../../images/laptop1.jpeg";
import keyboard from "../../images/keyboard.webp";
import laptopCharger from "../../images/laptopCharger.jpg";
import mouse from "../../images/mouse.jpg";
import notepad from "../../images/notepad.jpeg";
import headphone from "../../images/headphone.jpeg";
function Assets() {
  return (
    <div>
      <Header />

      <div
        className="container-fluid"
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          padding: "20px",
        }}
      >
        <div className="col-4">
          <Card image={laptop} />
        </div>
        <div className="col-4">
          <Card image={headphone} />
        </div>
        <div className="col-4">
          <Card image={mouse} />
        </div>
        <div className="col-4">
          <Card image={keyboard} />
        </div>
        <div className="col-4">
          <Card image={laptopCharger} />
        </div>
        <div className="col-4">
          <Card image={notepad} />
        </div>
      </div>
    </div>
  );
}

export default Assets;
