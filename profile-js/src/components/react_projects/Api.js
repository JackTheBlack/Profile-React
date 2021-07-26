import { useEffect, useState } from "react";
import axios from "axios";
import { Form, Input, Button, Modal } from "antd";
import { DeleteOutlined, FileSyncOutlined } from "@ant-design/icons";
import FormAdd from "./AddApiForm.js";

function ApIRest() {
  ////////////////////////////////////////////////////////////////
  const [id, setId] = useState("");
  const [contrato, setContrato] = useState([]);
  const [modalUpdate, setModalUpdate] = useState(false);
  const { Item } = Form;
  const [client, setClient] = useState({
    nombre: "",
    dni: "",
  });

  ///////////////////////////////////////////////////////////////
  //let jsonStr = "";
  //let formData = new FormData();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClient({ ...client, [name]: value });
    console.log(client);
  };

  const layout = {
    labelCol: {
      span: 5,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const handleUpdateButton = (id) => {
    setModalUpdate(true);
    setId(id);
  };

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
      <FormAdd />
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
                <td>{i.id}</td> <td>{i.nombre}</td>
                <td>{i.dni}</td>
                <tr>
                  <td>
                    {" "}
                    <Button
                      type="primary"
                      size="small"
                      icon={<FileSyncOutlined />}
                      onClick={() => handleUpdateButton(i.id)}
                    >
                      {" "}
                    </Button>{" "}
                  </td>
                  <tbody>
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
                  </tbody>
                </tr>
              </tr>
            );
          })}
      </table>

      <div>
        <Modal
          title={"Client " + id}
          visible={modalUpdate}
          footer={[
            <Button onClick={() => setModalUpdate(false)}>Close</Button>,
            <Button type="primary">Update</Button>,
          ]}
        >
          <Form {...layout}>
            <Item onChange={handleChange} label="Id">
              <Input readOnly name="id" value={id}></Input>
            </Item>
            <Item label="Nombre">
              <Input onChange={handleChange} name="nombre"></Input>
            </Item>
            <Item
              onChange={handleChange}
              rules={[
                {
                  type: "number",
                },
              ]}
              label="DNI"
            >
              <Input name="dni"></Input>
            </Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
}

export default ApIRest;
