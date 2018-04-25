import React from "react";
import "./CharacterCard.css";

const CharacterCard = props => (
  <div className="card">
     
        <div className="img-container">
            <img 
            alt="click me!"
            src={props.image}
            onClick={() => props.clickCC(props.id)} />
        </div>
    
  </div>
);

export default CharacterCard;
