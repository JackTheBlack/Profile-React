import { useState } from "react";
import { Button, Modal, Form, Input } from "antd";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseCounter,
  resetCounter,
} from "../../redux/actions/counterActions.js";

function FormAdd() {
  /////////////////////////////////////////////////////////////////

  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [client, setClient] = useState({
    name: "",
    dni: "",
  });

  /////////////////////////////////////////////////////////////
  const handleChange = (e) => {
    const { name, value } = e.target;
    setClient({ ...client, [name]: value });
    console.log(client);
  };

  const hadleNewClient = () => {
    setModal(true);
  };

  const handleOkButton = () => {
    console.log(client);
    axios
      .post(`https://60f96cb0ee56ef0017975dce.mockapi.io/contracts`, client)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
    dispatch(resetCounter());
    setModal(false);
  };

  const layout = {
    labelCol: {
      span: 5,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const { Item } = Form;
  return (
    <div>
      <Button type="primary" onClick={hadleNewClient}>
        {"New Client"}{" "}
      </Button>
      <Modal
        title="New Client"
        visible={modal}
        footer={[
          <Button onClick={() => setModal(false)}>Cerrar</Button>,
          <Button type="primary" onClick={handleOkButton}>
            Crear
          </Button>,
        ]}
      >
        <Form {...layout}>
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
  );
}
export default FormAdd;
