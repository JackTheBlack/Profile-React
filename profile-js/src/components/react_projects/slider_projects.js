import React, { useState } from "react";
import { Button } from "antd";
import "antd/dist/antd.css";
import Calculadora from "./calculadora";
import SORT from "./sort.js";
import ApiRest from "./Api.js";
import "./components.css";

function Slider() {
  const [showCalculadora, setShowCalculadora] = useState(true);
  const [showSort, setShowSort] = useState(false);
  const [disableCalculator, setDisableCalculator] = useState(true);
  const [disableSort, setDisableSort] = useState(false);
  const [disableShowApi, setDisableShowApi] = useState(false);
  const [showApi, setShowApi] = useState(false);

  const ApiR = () => {
    setShowApi(!showApi);
    setDisableShowApi(!disableShowApi);
    setShowSort(false);
    setShowCalculadora(false);
    setDisableCalculator(false);
    setDisableSort(false);
  };

  const calculadora = () => {
    setShowSort(false);
    setShowCalculadora(true);
    setDisableCalculator(true);
    setDisableSort(false);
    setShowApi(false);
    setDisableShowApi(true);
  };

  const sort = () => {
    setShowSort(true);
    setShowCalculadora(false);
    setDisableCalculator(false);
    setDisableSort(true);
    setShowApi(false);
    setDisableShowApi(false);
  };

  return (
    <div className="component">
      <legend>App React Examples</legend>

      <Button type="Primary" disabled={disableShowApi} onClick={ApiR}>
        Api Rest
      </Button>

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
        {showApi ? <ApiRest /> : null}
        {}
      </div>
    </div>
  );
}
export default Slider;
