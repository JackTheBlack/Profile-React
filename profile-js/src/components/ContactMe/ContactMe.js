import "./style.css";
import ContactForm from "./contactForm.js";

function ContactMe() {
  return (
    <div className="Contact">
      <h2>Contact Card</h2>
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
