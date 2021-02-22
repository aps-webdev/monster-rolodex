import React from "react";
import "./card.styles.css";

export default function Card(props) {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${props.monsters.id}?set=set3&size=180x180`}
        alt="monster"
      />
      <h3>{props.monsters.name}</h3>
      <p>{props.monsters.email}</p>
    </div>
  );
}
