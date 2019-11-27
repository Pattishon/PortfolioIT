import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const LandingPage = () => {
  const { t } = useTranslation();
  return (
    <div
      id="home"
      className="offset landing-page"
      style={{
        backgroundImage: "url(img/bg.png)"
      }}
    >
      <div className="text-center caption">
        <h1 className="caption__title text-off-white">Patti Adams</h1>
        <h2 className="caption__subtitle text-off-white">
          Front-end Developer
        </h2>

        <Button variant="contained" color="secondary">
          <Link to="/about" className="text-accent button-light">
            {t("home.actionBtn")}
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;
