import React from "react";
import Card from "@material-ui/core/Card";
import ContactForm from "../components/ContactForm";
import SocialMedia from "../components/SocialMedia";

const Contact = () => (
  <div id="contact" className="offset contact">
    <h1 className="constact__title text-center text-uppercase text-hight-leg">
      Contact
    </h1>
    <hr className="contact__hr" />
    <div className="social-media d-flex justify-content-center mb-3">
      <SocialMedia />
    </div>
    <div className="contact-form">
      <Card className="contact-form__card px-2 py-3 my-5 d-flex flex-column flex-md-row">
        <div className="contact-form__header d-flex flex-column justify-content-center text-center text-off-white p-2 p-md-4 mb-5 mb-md-0 mr-md-5">
          <h2 className="contact-form__title mb-2">Get in touch</h2>
          <p className="contact-form__subtitle">
            I am currently open for the new job oportunities, please contact me
            if you are interested.
          </p>
        </div>
        <ContactForm />
      </Card>
    </div>

    <div className="text-center">
      <hr className="socket" />
      <p>&copy; Patrycja Adamczyk, 2019</p>
    </div>
  </div>
);

export default Contact;
