import React from "react";
import styles from "../assets/card.module.css";
import cardImage from "../assets/card.jpg";

const Card = ({ name }) => {
  return (
    <section className={styles.card}>
      <img className={styles.cardImage} alt="card" src={cardImage} />
      <h5 className={styles.cardTitle}>{name}</h5>
    </section>
  );
};

const CSSModulesinReact = () => {
  return (
    <section>
      <h1>Card component using CSS Modules in React</h1>
      <Card name={"Stays"} />
    </section>
  );
};

export default CSSModulesinReact;
