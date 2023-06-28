import React from "react";

import "../../css/assets.css";
import { Link } from "react-router-dom";
function AssetsCard({ title,desc,link,total }) {
  return (
    <div className="assetCard">
      <div className="card c" style={{ width: "30rem",height:'14rem' }}>
        <div className="card-body" style={{color:"black"}}>
          <h5 className="card-title">{title}</h5>
            <hr/>
          <p className="card-text">
            {desc}
          </p>
          <h6 className="card-subtitle mb-2 ">
           {total}
          </h6>
          <Link to={link} className="card-link lk" style={{textDecoration:"none",color:'blue',}}>
            {title}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AssetsCard;
// {laptop,laptopCharger,headphone,mouse,notepad,keyboard}
