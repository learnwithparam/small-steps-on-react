import React from "react";
import "../assets/css-in-react.css";
import cardImage from "../assets/card.jpg";

const Card = ({ name }) => {
  return (
    <section className="card">
      <img className="card-image" alt="card" src={cardImage} />
      <h5 className="card-title">{name}</h5>
    </section>
  );
};

const CSSinReact = () => {
  return (
    <section>
      <h1>Card component using CSS in React</h1>
      <Card name={"Stays"} />
      <Card name={"Destination"} />
    </section>
  );
};

export default CSSinReact;
