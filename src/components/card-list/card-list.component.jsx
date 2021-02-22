import React from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";

export default function CardList(props) {
  return (
    <div className="card-list">
      {props.data.map((monster) => (
        <Card key={monster.id} monsters={monster} />
      ))}
    </div>
  );
}
