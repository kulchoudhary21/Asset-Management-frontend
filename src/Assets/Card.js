import React from "react";
import laptop from "../../images/laptop1.jpeg"
function Card({image}) {
  return (
    <div>
      <div className="card" style={{width: "18rem"}}>
        <img src={image} className="card-img-top" style={{width:"250px",height:'250px',textAlign:'center'}}/>
        <div className="card-body">
          <h5 className="card-title">laptop</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">item 10</li>
          <li className="list-group-item">category hp</li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
// {laptop,laptopCharger,headphone,mouse,notepad,keyboard}