import { Button } from "antd";
import { SendOutlined } from "@ant-design/icons";
import emailjs from "emailjs-com";
import React from "react";

function ContactForm() {
  function sendEmail(e) {
    e.preventDefault();
    console.log("Apretado");
    emailjs
      .sendForm(
        "service_efrjbdt",
        "template_rtlpgao",
        e.target,
        "user_Wct77fFHl947KdENU084x"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    return 0;
  }

  /*  const layout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 12,
    },
  }; */

  return (
    <div className="container">
      <form onSubmit={sendEmail}>
        <div>
          <div className="col-25">
            <label>Name: </label>
          </div>
          <div className="col-75">
            <input type="text" name="user_name" /> <br />
          </div>
        </div>
        <div className="col-25">
          <label>*Email:</label>
        </div>

        <div className="col-75">
          <input
            required="true"
            type="email"
            name="user_email"
            placeholder="name@example.com"
          />
          <br />
        </div>
        <div className="col-25">
          <label>Message:</label>
        </div>
        <div className="col-75">
          <textarea
            class="form-control"
            id="message"
            rows="3"
            name="message"
          ></textarea>
        </div>
        <div className="buttonSubmit">
          <Button
            type="danger"
            shape="round"
            size="small"
            icon={<SendOutlined />}
            htmlType="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
