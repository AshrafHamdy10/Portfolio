import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Skills.css";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import es6 from "../assets/es6.jpg";
import bootstrap from "../assets/bootstrap.png";
import reactjs from "../assets/reactjs.png";
import seo from "../assets/seo.png";
import MUI from "../assets/MUI.png";

const Skills = () => {
  return (
    <>
      <section className="slider" id="skills">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <h2>Skills</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <Carousel data-bs-theme="dark" className="item">
                <Carousel.Item>
                  <img src={html} alt="HTML" />
                  <Carousel.Caption>
                    <h5>HTML5</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={css} alt="CSS" />
                  <Carousel.Caption>
                    <h5>CSS3</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={js} alt="JavaScript" />
                  <Carousel.Caption>
                    <h5>JavaScript</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={es6} alt="ES6" />
                  <Carousel.Caption>
                    <h5>Modern JavaScript(ES6) </h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={bootstrap} alt="Bootstrap" />
                  <Carousel.Caption>
                    <h5>Bootstrap</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={reactjs} alt="React.js" />
                  <Carousel.Caption>
                    <h5>React.js</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={MUI} alt="Material UI" />
                  <Carousel.Caption>
                    <h5>Material UI</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={seo} alt="SEO" />
                  <Carousel.Caption>
                    <h5>Search Engine Optimization</h5>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
