import React from "react";
import { Button } from "antd";
import { SendOutlined } from "@ant-design/icons";
import emailjs from "emailjs-com";
import "./style.css";
import ContactForm from "./contactForm.js";

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
    <div className="Contact">
      <h2>Contact</h2>
      <div>
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
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContactMe;
