import React from "react";
//STYLES
import "./card.styles.scss";

const Card = ({ first_name, last_name, email, element, deleteButton }) => {
  return (
    <div className="card">
      <h3>{first_name}</h3>
      <h3>{last_name}</h3>
      <h3>{email}</h3>
      <button onClick={() => deleteButton(element)}>X</button>
    </div>
  );
};

export default Card;
