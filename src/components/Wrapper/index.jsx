import React from "react";
import Calculator from "../Calculator";
import styles from "./Wrapper.module.css";

function Wrapper() {
  return (
    <div className={styles.wrapper}>
      <Calculator />
    </div>
  );
}

export default Wrapper;
