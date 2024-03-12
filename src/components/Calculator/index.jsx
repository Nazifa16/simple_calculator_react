import React, { useState } from "react";
import styles from "./Calculator.module.css";
function Calculator() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");

  const [operator, setOperator] = useState(false);
  const [result, setResult] = useState("");

  const handleOperator = (op) => {
    if (result) {
      // If there is a result, use it as the firstNumber for the next operation
      setFirstNumber(result.toString());
      setSecondNumber("");
      setResult("");
    }
    setOperator(op);
  };

  const handleNumber = (number) => {
    if (!operator) {
      setFirstNumber((prev) => prev + number);
    } else {
      setSecondNumber((prev) => prev + number);
    }
  };

  const handleResult = () => {
    if (operator == "/") {
      const total = parseFloat(firstNumber) / parseFloat(secondNumber);
      setResult(total);
    } else if (operator == "*") {
      const total = parseFloat(firstNumber) * parseFloat(secondNumber);
      setResult(total);
    } else if (operator == "-") {
      const total = parseFloat(firstNumber) - parseFloat(secondNumber);
      setResult(total);
    } else if (operator == "+") {
      const total = parseFloat(firstNumber) + parseFloat(secondNumber);
      setResult(total);
    }
  };

  const handleDel = () => {
    if (secondNumber) {
      // Remove the last character from the secondNumber
      setSecondNumber((prev) => prev.slice(0, -1));
    } else if (operator) {
      // Clear the operator if it exists
      setOperator("");
    } else if (firstNumber) {
      // Remove the last character from the firstNumber
      setFirstNumber((prev) => prev.slice(0, -1));
    }
  };

  const handleClear = () => {
    setFirstNumber("");
    setOperator("");
    setSecondNumber("");
    setResult("");
  };

  const display = () => {
    if (result) {
      return result;
    } else if (secondNumber) {
      return secondNumber;
    } else if (operator) {
      return operator;
    } else {
      return firstNumber;
    }
  };

  return (
    <div>
      <div className={styles.screen}>
        <div style={{ overflowY: "auto" }}>{display()}</div>
      </div>
      <div className={styles.buttonBox}>
        <button
          onClick={() => handleNumber("9")}
          className={`${styles.button} ${styles.number}`}
        >
          9
        </button>
        <button
          onClick={() => handleNumber("8")}
          className={`${styles.button} ${styles.number}`}
        >
          8
        </button>
        <button
          onClick={() => handleOperator("/")}
          className={`${styles.button} ${styles.operator}`}
        >
          /
        </button>

        <button
          onClick={() => handleNumber("7")}
          className={`${styles.button} ${styles.number}`}
        >
          7
        </button>
        <button
          onClick={() => handleNumber("6")}
          className={`${styles.button} ${styles.number}`}
        >
          6
        </button>
        <button
          onClick={() => handleOperator("*")}
          className={`${styles.button} ${styles.operator}`}
        >
          *
        </button>

        <button
          onClick={() => handleNumber("5")}
          className={`${styles.button} ${styles.number}`}
        >
          5
        </button>
        <button
          onClick={() => handleNumber("4")}
          className={`${styles.button} ${styles.number}`}
        >
          4
        </button>
        <button
          onClick={() => handleOperator("-")}
          className={`${styles.button} ${styles.operator}`}
        >
          -
        </button>

        <button
          onClick={() => handleNumber("3")}
          className={`${styles.button} ${styles.number}`}
        >
          3
        </button>
        <button
          onClick={() => handleNumber("2")}
          className={`${styles.button} ${styles.number}`}
        >
          2
        </button>
        <button
          onClick={() => handleOperator("+")}
          className={`${styles.button} ${styles.operator}`}
        >
          +
        </button>

        <button
          onClick={() => handleNumber("1")}
          className={`${styles.button} ${styles.number}`}
        >
          1
        </button>
        <button
          onClick={() => handleNumber("0")}
          className={`${styles.button} ${styles.number}`}
        >
          0
        </button>
        <button
          onClick={() => handleNumber(".")}
          className={`${styles.button} ${styles.operator}`}
        >
          .
        </button>

        <button
          onClick={handleClear}
          className={`${styles.button} ${styles.c}`}
        >
          C
        </button>

        <button
          onClick={handleDel}
          className={`${styles.button} ${styles.operatordel}`}
        >
          del
        </button>

        <button
          onClick={handleResult}
          className={`${styles.button} ${styles.operator2}`}
        >
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
