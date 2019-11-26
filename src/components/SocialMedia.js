import React from "react";
import { Icon } from "@iconify/react";
import githubIcon from "@iconify/icons-simple-icons/github";
import facebookIcon from "@iconify/icons-simple-icons/facebook";
import instagramIcon from "@iconify/icons-simple-icons/instagram";
import twitterIcon from "@iconify/icons-simple-icons/twitter";
import linkedinIcon from "@iconify/icons-simple-icons/linkedin";

const SocialMedia = () => (
  <>
    <a
      href="https://github.com/Pattishon"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon icon={githubIcon} className="social-media__icon" />
    </a>
    <a
      href="https://www.facebook.com/PattiAdamsArt/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon icon={facebookIcon} className="social-media__icon" />
    </a>
    <a
      href="https://www.instagram.com/pattishon/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon icon={instagramIcon} className="social-media__icon" />
    </a>
    <a
      href="https://twitter.com/_partycjaA"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon icon={twitterIcon} className="social-media__icon" />
    </a>
    <a
      href="https://www.linkedin.com/in/patrycjaadamczyk"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon icon={linkedinIcon} className="social-media__icon" />
    </a>
  </>
);

export default SocialMedia;
