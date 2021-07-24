import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "antd";
import { DeleteOutlined, FileSyncOutlined } from "@ant-design/icons";

function ApIRest() {
  const [contrato, setContrato] = useState([]);

  //let jsonStr = "";
  //let formData = new FormData();
  const getContract5 = async () => {
    try {
      const response = await axios({
        url: "https://60f96cb0ee56ef0017975dce.mockapi.io/contracts",
        method: "GET",
      });
      //  jsonStr = JSON.stringify(response.data);
      setContrato([...response.data]);
    } catch (e) {
      console.log(e);
    }
  };

  const handleDeleteButton = (id) => {
    // Simple DELETE request with axios

    try {
      axios
        .delete("https://60f96cb0ee56ef0017975dce.mockapi.io/contracts/" + id)
        .then(() => alert("ID " + id + "eliminado con exito"));
    } catch (e) {
      console.log("");
    }
    getContract5();
  };

  useEffect(() => {
    const response = getContract5();
    //  console.log(response.data);
  });

  return (
    <div>
      <table>
        <tr>
          <th>Id</th>
          <th>Open</th>
          <th>Name</th>
          <th>Detail</th>
        </tr>
        {contrato &&
          contrato.map((i, index) => {
            return (
              <tr>
                <td>{i.id}</td> <td>{i.name}</td>
                <td>{i.detail}</td>
                <tr>
                  <td>
                    {" "}
                    <Button
                      type="primary"
                      size="small"
                      icon={<FileSyncOutlined />}
                      htmlType="submit"
                    >
                      {" "}
                    </Button>{" "}
                  </td>
                  <td>
                    {" "}
                    <Button
                      type="danger"
                      size="small"
                      icon={<DeleteOutlined />}
                      onClick={() => handleDeleteButton(i.id)}
                    >
                      {" "}
                    </Button>{" "}
                  </td>
                </tr>
              </tr>
            );
          })}
      </table>
    </div>
  );
}

export default ApIRest;
