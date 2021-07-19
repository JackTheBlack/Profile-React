import React, { useState } from "react";
import { Button } from "antd";
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
            <form>
              <legend>Contact Form</legend>
              <label>Name *</label>
              <input
                type="text"
                class="form-control"
                placeholder
                id="name"
                required
                aria-invalid="false"
              />
              <p className="help-block"></p>
              <label>Phone *</label>
              <input
                type="text"
                class="form-control"
                placeholder
                id="telefono"
                required
              />
              <p className="help-block"></p>
              <label>E-Mail *</label>
              <input
                type="text"
                class="form-control"
                placeholder
                id="email"
                required
              />
              <p className="help-block"></p>
              <label>Message *</label>
              <textarea
                rows="4"
                col="100"
                class="form-control"
                placeholder
                id="message"
                required
              ></textarea>
              <p className="help-block"></p>
              <Button
                type="danger"
                shape="round"
                size="small"
                icon={<SendOutlined />}
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
