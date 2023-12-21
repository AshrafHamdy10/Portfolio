import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Certs.css";
import htmlcss from "../assets/html-css.png";
import es6 from "../assets/es6.jpg";
import reactjs from "../assets/reactjs.png";
import seo from "../assets/seo.png";
import iti from "../assets/ITI-logo.png";
import itsharks from "../assets/it-sharks.png";

const Certs = () => {
  return (
    <>
      <section className="certs" id="certs">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <h2>Certificates</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <Carousel data-bs-theme="dark" className="item">
                <Carousel.Item>
                  <img src={htmlcss} alt="HTML&CSS" />
                  <Carousel.Caption>
                    <h5>HTML5 & CSS3</h5>
                    <button>
                      <a href="https://drive.google.com/file/d/17Wpotd2SuBm0x1cRv-xlVezqR-7Z4xTU/view?usp=sharing">
                        View Certificate
                      </a>
                    </button>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={es6} alt="ES6" />
                  <Carousel.Caption>
                    <h5>Modern JavaScript(ES6) </h5>
                    <button>
                      <a href="https://drive.google.com/file/d/1nYnyqHX_do1cfpTXfKelOuXNei4sAsk2/view?usp=sharing">
                        View Certificate
                      </a>
                    </button>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={reactjs} alt="React.js" />
                  <Carousel.Caption>
                    <h5>React.js</h5>
                    <button>
                      <a href="https://drive.google.com/file/d/1hrL8rRGiYSI8R0nsWAfStezd2JhYG_EB/view?usp=sharing">
                        View Certificate
                      </a>
                    </button>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={seo} alt="SEO" />
                  <Carousel.Caption>
                    <h5>Search Engine Optimization</h5>
                    <button>
                      <a href="https://drive.google.com/file/d/1Np8kiCm06IIXRgKLw42cVJbyuUaXT0qz/view?usp=drive_link">
                        View Certificate
                      </a>
                    </button>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={iti} alt="ITI Logo" />
                  <Carousel.Caption>
                    <h5>ITI Summer Intern</h5>
                    <button>
                      <a href="https://drive.google.com/file/d/1bX7oAFA0ygh6szdXhFIxBh9ubqHd2BZi/view?usp=sharing">
                        View Certificate
                      </a>
                    </button>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={itsharks} alt="IT Sharks" />
                  <Carousel.Caption>
                    <h5>Graphic Design Principles</h5>
                    <button>
                      <a href="https://it-sharks.com/certificate/C-113018">
                        View Certificate
                      </a>
                    </button>
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

export default Certs;
