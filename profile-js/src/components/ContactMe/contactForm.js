import { Button } from "antd";
import { SendOutlined } from "@ant-design/icons";
import emailjs from "emailjs-com";

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

  return (
    <div>
      <form className="contact-form" onSubmit={sendEmail}>
        <label>Name: </label>
        <input type="text" name="user_name" /> <br />
        <div class="form-group">
          <label for="exampleFormControlInput1">Email address</label>
          <input
            type="email"
            name="user_email"
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
            id="message"
            rows="3"
            name="message"
          ></textarea>
        </div>
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
