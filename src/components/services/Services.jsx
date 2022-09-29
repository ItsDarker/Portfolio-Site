import React from "react";
import "./services.css";
import { FcCheckmark } from "react-icons/fc";

const Services = () => {
  return (
    <section id="services">
      <h5> What i offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <FcCheckmark className="service__list-icon" />
              <p>Good at designing a simple UI</p>
            </li>
            <li>
              <FcCheckmark className="service__list-icon" />
              <p>Design superior user experience.</p>
            </li>
            <li>
              <FcCheckmark className="service__list-icon" />
              <p>Wrap UX recommendations into a beautiful interface design.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX*/}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <FcCheckmark className="service__list-icon" />
              <p>Modern High-Performance Technologies.</p>
            </li>
            <li>
              <FcCheckmark className="service__list-icon" />
              <p>Build Apps For Effecient Management Of Different Activities.</p>
            </li>
            <li>
              <FcCheckmark className="service__list-icon" />
              <p>Smart Automation To Streamline Workflows and Integrate Corporate Systems Together.</p>
            </li>
          </ul>
        </article>
        {/*END OF WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <FcCheckmark className="service__list-icon" />
              <p>Blog Writing Services</p>
            </li>
            <li>
              <FcCheckmark className="service__list-icon" />
              <p>Graphic Design Services</p>
            </li>
            <li>
              <FcCheckmark className="service__list-icon" />
              <p>eBook Marketing Services</p>
            </li>
          </ul>
        </article>
        {/**END OF  CONTENT CREATION*/}
      </div>
    </section>
  );
};

export default Services;
