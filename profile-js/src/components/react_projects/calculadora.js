import React, { useState } from "react";
import "antd/dist/antd.css";
import { Button } from "antd";
import "./components.css";

function Calculadora() {
  const [count, setCount] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operacion, setOperacion] = useState("+");
  const [mostrar, setMostrar] = useState(0);

  const action = (operation) => {
    const n1 = parseInt(num1);
    const n2 = parseInt(num2);
    setOperacion(operation);
    switch (operation) {
      case "+":
        setResultado(n1 + n2);
        setCount(count + 1);
        setMostrar(1);
        break;
      case "-":
        setResultado(num1 - num2);
        setCount(count + 1);
        setMostrar(1);
        break;
      case "*":
        setResultado(num1 * num2);
        setCount(count + 1);
        setMostrar(1);
        break;
      case "/":
        setResultado(num1 / num2);
        setCount(count + 1);
        setMostrar(1);
        break;
    }
  };

  const reset = () => {
    setOperacion("+");
    setNum1("");
    setNum2("");
    setResultado(0);
    setMostrar(0);
  };

  return (
    <div className="component">
      <section className="card-text">
        <div data-testid="total-operations">
          Total operations performed: {count}
        </div>
        <div className="layout-row justify-content-around align-items-center mt-40">
          <input
            data-testid="app-input1"
            id="num1"
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            placeholder="EG:1"
          />

          <label data-testid="selected-operator" for="operacion">
            {operacion}
          </label>

          <input
            data-testid="app-input2"
            id="num2"
            type="number"
            onChange={(e) => setNum2(e.target.value)}
            value={num2}
            placeholder="EG:2"
          />
          <br />

          <div className="layout-row justify-content-around mt-30">
            <Button
              data-testid="addButton"
              id="suma"
              type="primary"
              onClick={() => action("+")}
            >
              +
            </Button>
            <a> </a>
            <Button
              data-testid="subtractButton"
              className="operationFont"
              id="resta"
              type="danger"
              onClick={() => action("-")}
            >
              -
            </Button>
            <a> </a>
            <Button
              border="1px"
              data-testid="multiplyButton"
              id="multiplicasion"
              type="primary"
              onClick={() => action("*")}
            >
              *
            </Button>
            <a> </a>
            <Button
              data-testid="divideButton"
              id="deivision"
              type="danger"
              onClick={() => action("/")}
            >
              /
            </Button>

            <br />
          </div>
          <button
            class="button"
            data-testid="resetButton"
            id="reset"
            size="large"
            type="submit"
            onClick={reset}
          >
            Reset
          </button>
          <br />
          <div className="layout-row justify-content-center align-items-center result-container">
            {mostrar === 1 && (
              <div data-testid="result">Result: {resultado}</div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Calculadora;
