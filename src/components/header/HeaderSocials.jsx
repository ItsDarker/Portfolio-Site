import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/ItsDarker" target="_blank">
        <FaGithub />
      </a>
      <a
        href="https://dribbble.com/fino_franklin?onboarding=true"
        target="_blank"
      >
        <FiDribbble />
      </a>
    </div>
  );
};

export default HeaderSocials;
