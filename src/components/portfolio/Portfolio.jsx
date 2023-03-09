import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/IMG4.webp"
import IMG5 from "../../assets/IMG5.jpg";
import IMG7 from "../../assets/IMG6.jpg";
import IMG6 from "../../assets/IMG7.jpg";


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
            <img src={IMG4} alt="" />
          </div>
          <h3>GPT-3 Blog Writter</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/ItsDarker/gpt3-writer-starter"
              className="btn"
              target="_blank"
            >
              Github
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>AI Rapper</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/ItsDarker/ai-rapper"
              className="btn"
              target="_blank"
            >
              Github
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>AI Avatar Generator</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/ItsDarker/ai-avatar-generator"
              className="btn"
              target="_blank"
            >
              Github
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG7} alt="" />
          </div>
          <h3>Eye controlled mouse</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/ItsDarker/eye_controlled_mouse"
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
