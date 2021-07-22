import React, { useState } from "react";
import { Button } from "antd";
import "antd/dist/antd.css";
import Calculadora from "./calculadora";
import SORT from "./sort.js";
import "./components.css";

function Slider() {
  const [showCalculadora, setShowCalculadora] = useState(true);
  const [showSort, setShowSort] = useState(false);
  const [disableCalculator, setDisableCalculator] = useState(true);
  const [disableSort, setDisableSort] = useState(false);

  const calculadora = () => {
    setShowSort(!showSort);
    setShowCalculadora(!showCalculadora);
    setDisableCalculator(!disableCalculator);
    setDisableSort(!disableSort);
  };

  const sort = () => {
    setShowSort(!showSort);
    setShowCalculadora(!showCalculadora);
    setDisableCalculator(!disableCalculator);
    setDisableSort(!disableSort);
  };

  return (
    <div className="component">
      <legend>App React Examples</legend>
      <Button
        type="Primary"
        data-testid="button-prev"
        disabled={disableSort}
        onClick={sort}
      >
        Sort
      </Button>
      <Button
        type="Primary"
        data-testid="button-next"
        disabled={disableCalculator}
        onClick={calculadora}
      >
        Calculadora
      </Button>
      <div className="container">
        {showCalculadora ? <Calculadora className="calculator" /> : null}
        {showSort ? <SORT /> : null}
      </div>
    </div>
  );
}
export default Slider;
