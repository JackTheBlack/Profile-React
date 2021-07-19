import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { SendOutlined } from "@ant-design/icons";
import emailjs from "emailjs-com";

function ContactMe() {
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
            <form className="contact-form" onSubmit={sendEmail}>
              <input type="hidden" name="contact_number" />
              <label>Name: </label>
              <input type="text" name="user_name" /> <br />
              <div class="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input
                  type="email"
                  name="user_name"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <br />
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Message :</label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <label>Message:</label>
              <textarea name="message" />
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
        </div>
      </div>
    </div>
  );
}
export default ContactMe;
