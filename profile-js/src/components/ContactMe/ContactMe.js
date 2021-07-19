import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { SendOutlined } from "@ant-design/icons";

function ContactMe() {
  return (
    <div>
      <h2>Contact</h2>
      <div class="col-md-4 col-md-offset-2" className="Contact">
        "Mail: Ascona.Nicolas@gmail.com"
        <br></br>
        Phone:+54 011-15-69433706
        <br></br>
        Linked-In:{" "}
        <a href="http://www.linkedin.com/in/nicolás-ascona-0329b310b">
          Ascona Nicolas
        </a>
        <br />
        <br />
      </div>
      <div class="col-md-4">
        <div className="contact_form">
          <div id="contacts">
            <Form
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 6,
              }}
              initialValues={{
                remember: true,
              }}
            >
              <legend>Contact Form</legend>
              <Form.Item
                label="Name"
                name="Name"
                rules={[
                  {
                    required: true,
                    message: "Please input your name!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="E-mail"
                name="E-mail"
                rules={[
                  {
                    required: true,
                    message: "Please input your e-mail!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="Message"
                label="Message"
                rules={[
                  { required: true, message: "Please input your e-mail!" },
                ]}
              >
                <Input.TextArea />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 8,
                }}
              >
                <Button
                  shape="round"
                  icon={<SendOutlined />}
                  type="danger"
                  htmlType="submit"
                >
                  Send
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContactMe;
