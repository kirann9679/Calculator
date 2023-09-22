import "./App.css";
import { useState } from "react";
function App() {
  const [currentOperand, setCurrentOperand] = useState("0");
  const [previousOperand, setPreviousOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const operatorHandler = (op) => {
    if (operator !== null) {
      calculateResult();
    }
    setOperator(op);
    setPreviousOperand(currentOperand);
    setCurrentOperand("0");
  };
  const numHandler = (number) => {
    if (operator === null) {
      if (currentOperand.toString().includes(".")) {
        const [integerPart, decimalPart] = currentOperand.toString().split(".");
        const updatedOperand = parseFloat(
          integerPart + "." + decimalPart + number
        );
        setCurrentOperand(updatedOperand);
      } else {
        setCurrentOperand(currentOperand * 10 + number);
      }
    } else {
      if (currentOperand.toString().includes(".")) {
        const [integerPart, decimalPart] = currentOperand.toString().split(".");
        const updatedOperand = parseFloat(
          integerPart + "." + decimalPart + number
        );
        setCurrentOperand(updatedOperand);
      } else {
        setCurrentOperand(currentOperand * 10 + number);
      }
    }
  };

  const calculateResult = () => {
    if (
      previousOperand !== null &&
      currentOperand !== null &&
      operator !== null
    ) {
      let result;
      switch (operator) {
        case "+":
          result = previousOperand + currentOperand;
          break;
        case "-":
          result = previousOperand - currentOperand;
          break;
        case "*":
          result = previousOperand * currentOperand;
          break;
        case "/":
          result = previousOperand / currentOperand;
          break;
        default:
          break;
      }
      setCurrentOperand(result);
      setPreviousOperand(null);
      setOperator(null);
    }
  };
  const decHandler = () => {
    if (!currentOperand.toString().includes(".")) {
      setCurrentOperand(currentOperand + ".");
    }
  };
  const clearHandler = () => {
    setCurrentOperand("0");
    setPreviousOperand(null);
    setOperator(null);
  };
  const delHandler = () => {
    setCurrentOperand(Math.floor(currentOperand / 10));
  };
  const equalsHandler = () => {
    calculateResult();
  };
  return (
    <div className="calci-grid">
      <div className="output">
        <div className="previous-operand">{previousOperand}</div>
        <div className="current-operand">{currentOperand}</div>
      </div>
      <button className="span-two" onClick={clearHandler}>
        AC
      </button>
      <button onClick={delHandler}>DEL</button>
      <button onClick={() => operatorHandler("/")}>/</button>
      <button onClick={() => numHandler(1)}>1</button>
      <button onClick={() => numHandler(2)}>2</button>
      <button onClick={() => numHandler(3)}>3</button>
      <button onClick={() => operatorHandler("*")}>*</button>
      <button onClick={() => numHandler(4)}>4</button>
      <button onClick={() => numHandler(5)}>5</button>
      <button onClick={() => numHandler(6)}>6</button>
      <button onClick={() => operatorHandler("+")}>+</button>
      <button onClick={() => numHandler(7)}>7</button>
      <button onClick={() => numHandler(8)}>8</button>
      <button onClick={() => numHandler(9)}>9</button>
      <button onClick={() => operatorHandler("-")}>-</button>
      <button onClick={decHandler}>.</button>
      <button onClick={() => numHandler(0)}>0</button>
      <button className="span-two" onClick={equalsHandler}>
        =
      </button>
    </div>
  );
}
export default App;
