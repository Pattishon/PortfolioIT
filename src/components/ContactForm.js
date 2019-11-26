import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const ContactForm = () => (
  <form
    name="contact"
    method="post"
    className="contact-form__form p-3 d-flex flex-column flex-md-row justify-content-center justify-content-md-around align-items-center text-center flex-grow-1"
    onSubmit={() => console.log("submit")}
  >
    <input type="hidden" name="form-name" value="contact" />
    <div>
      <TextField
        id="name"
        type="text"
        name="name"
        variant="outlined"
        required
        className="contact-form__input mb-3 d-block "
        label="Your Name: "
      />
      <TextField
        id="email"
        type="email"
        name="email"
        variant="outlined"
        required
        className="contact-form__input mb-3 d-block "
        label="Your Email: "
      />

      <TextField
        id="message"
        label="Message:"
        multiline
        rows="6"
        // defaultValue="Default Value"
        // className={classes.textField}
        margin="normal"
        variant="outlined"
        required
        className="contact-form__textarea"
      />
    </div>
    <p>
      <Button
        variant="contained"
        color="primary"
        type="submit"
        className="button-dark m-3"
      >
        Send
      </Button>
    </p>
  </form>
);

export default ContactForm;
