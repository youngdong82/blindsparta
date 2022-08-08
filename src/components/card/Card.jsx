import React from "react";
import "./style.css";

const Card = (props) => {
  const { onclick } = props;

  return (
    <div className="card"  onClick={onclick}>
      <p>{props.children}</p>
    </div> 
  );
};


export default Card;
