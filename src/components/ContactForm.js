import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();
  return (
    <form
      name="contact"
      method="post"
      className="contact-form__form p-3 d-flex flex-column flex-md-row justify-content-center justify-content-md-around align-items-center text-center flex-grow-1"
      onSubmit={() => console.log("submit")}
      action="/"
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
          label={t("contact.name")}
        />
        <TextField
          id="email"
          type="email"
          name="email"
          variant="outlined"
          required
          className="contact-form__input mb-3 d-block "
          label={t("contact.mail")}
        />

        <TextField
          id="message"
          label={t("contact.message")}
          name="message"
          multiline
          rows="6"
          margin="normal"
          variant="outlined"
          required
          className="contact-form__textarea"
        />
      </div>
      <p>
        <Button
          variant="contained"
          color="secondary"
          type="submit"
          className="button-light m-3"
        >
          {t("contact.send")}
        </Button>
      </p>
    </form>
  );
};

export default ContactForm;
