import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>MY Resent Work</h5>
      <h2>Portfolio</h2>

      <div className="portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>AI Voice Assistant</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/ItsDarker/AI-VoiceAssitant-Online"
              className="btn"
              target="_blank"
            >
              Github
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>AI ChatBot</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/ItsDarker/AI-chatbox"
              className="btn"
              target="_blank"
            >
              Github
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Taxi Booking System</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/ItsDarker/Taxi_Booking"
              className="btn"
              target="_blank"
            >
              Github
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>AI Voice Assistant</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/ItsDarker/AI-VoiceAssitant-Online"
              className="btn"
              target="_blank"
            >
              Github
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>AI Voice Assistant</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/ItsDarker/AI-VoiceAssitant-Online"
              className="btn"
              target="_blank"
            >
              Github
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>AI Voice Assistant</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/ItsDarker/AI-VoiceAssitant-Online"
              className="btn"
              target="_blank"
            >
              Github
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
