import { useEffect, useState } from "react";
import axios from "axios";
import { Form, Button, Input, Modal } from "antd";
import { DeleteOutlined, FileSyncOutlined } from "@ant-design/icons";
import FormAdd from "./AddApiForm.js";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseCounter,
  resetCounter,
} from "../../redux/actions/counterActions.js";

import "./components.css";

function ApIRest() {
  ////////////////////////////////////////////////////////////////
  const count = useSelector((store) => store.counterReducer.count);
  const dispatch = useDispatch();

  const [contrato, setContrato] = useState([]);
  const [modalUpdate, setModalUpdate] = useState(false);
  const { Item } = Form;
  const [cliente, setCliente] = useState({
    nombre: "",
    dni: "",
  });
  const [auxClient, setAuxClient] = useState({
    id: "",
    nombre: "",
    dni: "",
  });

  ///////////////////////////////////////////////////////////////
  //let jsonStr = "";
  //let formData = new FormData();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCliente({ ...cliente, [name]: value });
    console.log(cliente);
  };

  const layout = {
    labelCol: {
      span: 5,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const handleUpdateButton = (cliente) => {
    setCliente(cliente);
    console.log("el cliente seleccionado es " + cliente.nombre);
    setModalUpdate(true);
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
        .then(() => alert("el cliente " + id + " eliminado con exito"));
    } catch (e) {
      console.log("");
    }
    dispatch(resetCounter());
  };

  const handleUpdate = () => {
    try {
      axios
        .put(
          "https://60f96cb0ee56ef0017975dce.mockapi.io/contracts/" + cliente.id,
          cliente
        )
        .then(() => alert("ID " + cliente.id + " actualizado con exito"));
    } catch (e) {
      console.log("");
    }
    dispatch(resetCounter());
    setModalUpdate(false);
  };

  useEffect(() => {
    if (!modalUpdate && count < 3) {
      const algo = getContract5();
      console.log("el cunter esta en " + count);
      dispatch(increaseCounter(1));
    }

    //  console.log(response.data);
  });

  return (
    <div className="component">
      <FormAdd />
      <table className="Table">
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Document</th>
          <th>Action</th>
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
                      onClick={() => handleUpdateButton(i)}
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
          title={"Client " + auxClient.id}
          visible={modalUpdate}
          footer={[
            <Button onClick={() => setModalUpdate(false)}>Close</Button>,
            <Button type="primary" onClick={handleUpdate}>
              Update
            </Button>,
          ]}
        >
          <Form {...layout}>
            <Item onChange={handleChange} label="Id">
              <Input readOnly name="id" value={cliente.id}></Input>
            </Item>
            <Item onChange={handleChange} label="nombre">
              <Input value={cliente && cliente.nombre} name="nombre"></Input>
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
              <Input value={cliente && cliente.dni} name="dni"></Input>
            </Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
}

export default ApIRest;
