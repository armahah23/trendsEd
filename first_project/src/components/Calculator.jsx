import { useState } from "react";
import "./calculator.css";

function Calculator() {
  const [result, setResult] = useState(0);
  const [calculation, setCalculation] = useState("");

  const key = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const operators = ["+", "-", "*", "/", "%", "()"];

  const handleCalculation = () => {                                                                                                                                                                                                                                                 
    setResult(eval(calculation));
  };

  const addNumber = (num) => {
    setCalculation(calculation + num);
  };

  const clear = () => {
    setCalculation("");
    setResult(0);
  };
  return (
    <>
      <div className="cal-container">
        <div className="calculator">
          <h1>Calcuator</h1>
          <div className="cal-system">
            <input
              type="text"
              placeholder="Enter the Calculation"
              value={calculation}
              onChange={(e) => setCalculation(e.target.value)}
            />
            <div className="btn">
              <div className="keys">
                {key.map((keyValue) => (
                  <button key={keyValue} onClick={() => addNumber(keyValue)}>
                    {keyValue}
                  </button>
                ))}
                {operators.map((keyValue) => (
                  <button
                    key={keyValue}
                    onClick={() => addNumber(keyValue)}
                    id="operator"
                  >
                    {keyValue}
                  </button>
                ))}
              </div>
              <div className="operation">
                <button onClick={handleCalculation}>Calculate</button>
                <button onClick={clear}>Clear</button>
              </div>
            </div>
            <h3>Result : {result} </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calculator;
