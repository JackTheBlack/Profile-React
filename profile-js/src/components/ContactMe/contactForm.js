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
    <div className="-form">
      <form onSubmit={sendEmail}>
        <label className="col-25">Name: </label>
        <input className="col-75" type="text" name="user_name" /> <br />
        <label className="col-25">*Email:</label>
        <input
          className="col-75"
          required="true"
          type="email"
          name="user_email"
          placeholder="name@example.com"
        />
        <br />
        <label className="col-25">Message:</label>
        <textarea
          className="col-75"
          class="form-control"
          id="message"
          rows="3"
          name="message"
        ></textarea>
        <br />
        <Button
          type="danger"
          shape="round"
          size="small"
          icon={<SendOutlined />}
          htmlType="submit"
        >
          Send
        </Button>
      </form>
    </div>
  );
}

export default ContactForm;
