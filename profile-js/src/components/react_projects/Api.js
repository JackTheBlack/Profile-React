import react, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Button } from "antd";

function ApIRest() {
  const [contrato, setContrato] = useState("");
  const BaseUrl = "http://acs.e-nigma.online//contracts";
  let jsonStr = "";
  let rest;
  let formData = new FormData();
  const getContract5 = async () => {
    try {
      const response = await axios({
        url: BaseUrl + "/5",
        method: "GET",
      });
      jsonStr = JSON.stringify(response.data.msg);
      setContrato(jsonStr);
    } catch (e) {
      console.log(e);
    }
  };

  const getContract = () => {
    const url = "http://acs.e-nigma.online//contracts/5";
    axios
      .get(url)
      .then((response) => {
        formData.append("text", response.data);
        jsonStr = JSON.stringify(response.data.msg);
        setContrato(jsonStr);
        //  fs.writeFile('consignas.JSON', response.data,finished());
      })
      .catch((error) => {
        console.log("error");
      });
  };

  useEffect(() => {
    const response = getContract5();
    //  console.log(response.data);
  });

  return (
    <div>
      <p> {contrato}</p>
    </div>
  );
}

export default ApIRest;
