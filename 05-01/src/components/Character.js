import React from "react";

export default function Character(props) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" alt="..." />
      <div className="card-body">
        <h4 className="card-title">{props.characterName}</h4>
        <p className="fst-italic">a.k.a. <span className="">{props.nickname}</span></p>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        
      </div>
    </div>
  );
}
