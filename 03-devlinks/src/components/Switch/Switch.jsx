import React from "react";
import styles from "./Switch.module.css";

const Switch = ({troca, islight}) => {
  return (
    <div className={islight ? styles.light : ""}>
      <div id={styles.Switch}>
        <button></button>
        <span></span>
      </div>
    </div>
  );
};

export default Switch