import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [btnText, setBtnText] = useState("Send Message");
  const [btnClass, setBtnClass] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7d1n7li", // replace with EmailJS service ID
        "template_ou8uews", // replace with EmailJS template ID
        form.current,
        "aQ8mmNmEkYPIAf8_P" // replace with EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);

          // ✅ Change button state
          setBtnText("Message Sent!");
          setBtnClass("sent");

          form.current.reset();

          // ⏳ Reset after 2s
          setTimeout(() => {
            setBtnText("Send Message");
            setBtnClass("");
          }, 2000);
        },
        (error) => {
          console.log(error.text);

          // ❌ Error handling (optional: keep the button same but can flash red)
          setBtnText("Failed! Try Again");
          setBtnClass("error");

          setTimeout(() => {
            setBtnText("Send Message");
            setBtnClass("");
          }, 2000);
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <div className="box-container">
        <div className="box">
          <div>
            <h3>Contact Info</h3>
            <p>
              <i className="fas fa-phone"></i> +91 6393414419
            </p>
            <p>
              <i className="fas fa-envelope"></i> ehtishamofficial23@gmail.com
            </p>
            <p>
              <i className="fas fa-map-marked-alt"></i> New Delhi, India - 110025
            </p>
            <div className="share">
              <a
                href="https://www.linkedin.com/in/ehtisham-ali-4a19831a0"
                className="fab fa-linkedin"
                target="_blank"
                rel="noreferrer"
              ></a>
              <a
                href="https://github.com/ehtisham-ali6393"
                className="fab fa-github"
                target="_blank"
                rel="noreferrer"
              ></a>
              <a
                href="mailto:ehtishamofficial23@gmail.com"
                className="fas fa-envelope"
                target="_blank"
                rel="noreferrer"
              ></a>
              <a
                href="https://twitter.com/Ehtisha73084186"
                className="fab fa-twitter"
                target="_blank"
                rel="noreferrer"
              ></a>
            </div>
          </div>
        </div>

        <div className="box">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <input type="text" name="user_name" placeholder="Name" required />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              required
            />
            <textarea name="message" placeholder="Message" required></textarea>
            <button type="submit" className={btnClass}>
              {btnText}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
