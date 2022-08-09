import React from "react";
import styles from "./style.module.css";

const Card = (props) => {
  return (
    <div className={styles.card}>
      <p>{props.children}</p>
    </div>
  );
};

export default Card;
