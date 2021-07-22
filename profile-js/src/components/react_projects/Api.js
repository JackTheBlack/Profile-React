import react, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Tag, Space } from "antd";
import {
  SendOutlined,
  DeleteOutlined,
  FileSyncOutlined,
} from "@ant-design/icons";

function ApIRest() {
  const { Column, ColumnGroup } = Table;

  const [contrato, setContrato] = useState([]);
  const [stringContrato, setStringContrato] = useState("");
  const BaseUrl = "http://acs.e-nigma.online//contracts";
  let jsonStr = "";
  let formData = new FormData();
  const getContract5 = async () => {
    try {
      const response = await axios({
        url: BaseUrl + "/5",
        method: "GET",
      });
      jsonStr = JSON.stringify(response.data.data);
      setStringContrato(jsonStr);
      setContrato([...JSON.parse(jsonStr)]);
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
      <Table className="Table" dataSource={contrato}>
        <Column title="Id" dataIndex="id" key="id" />

        <Column title="Open" dataIndex="open" key="open" />
        <Column title="Close" dataIndex="close" key="close" />
        <Column
          title="Action"
          key="action"
          render={(text, record) => (
            <Space size="middle">
              <a>
                <FileSyncOutlined />{" "}
              </a>
              <a>
                <DeleteOutlined />
              </a>
            </Space>
          )}
        />
      </Table>
    </div>
  );
}

export default ApIRest;
