import React from "react";
import Button from "react-bootstrap/Button";

import Carousel from "react-bootstrap/Carousel";
import "./Projects.css";
import foodia from "../assets/Foodia.png";
import matgar from "../assets/Matgari.png";
import mat3ami from "../assets/Mat3mi.png";
import imgeditor from "../assets/img-editor.jpeg";
import special from "../assets/special.jpeg";
import special2 from "../assets/special2.png";
import todolist from "../assets/ToDoList.jpeg";
import careu from "../assets/Careu-logo.png";

const Projects = () => {
  return (
    <>
      <div className="projects" id="projects">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <h2>Projects</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <Carousel data-bs-theme="dark" className="item">
                <Carousel.Item>
                  <img variant="top" src={foodia} alt="FOODIA" />
                  <Carousel.Caption>
                    <h5>FOODIA</h5>
                    <p>
                      E-commerce Restaurant Website using React.js,
                      React-Bootstrap and Css3.
                    </p>
                    <Button variant="primary">
                      <a href="https://e-commerce-foodia.netlify.app/">
                        View Project
                      </a>
                    </Button>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img variant="top" src={careu} alt="CareU" />
                  <Carousel.Caption>
                    <h5>CareU</h5>
                    <p>
                      Resposive Website for Selling, Buying and Renting cars ,
                      created with Material UI
                    </p>
                    <Button variant="primary">
                      <a href="https://careu.netlify.app/">View Project</a>
                    </Button>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img variant="top" src={matgar} alt="MatGari" />
                  <Carousel.Caption>
                    <h5>MatGari</h5>
                    <p>
                      Basic E-commerce website, technologies and libraries used:
                      React.js, React Router Dom, Bootstrap 5, React Dom.
                    </p>
                    <Button variant="primary">
                      <a href="https://github.com/AshrafHamdy10/MatGari">
                        View Project
                      </a>
                    </Button>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img variant="top" src={matgar} alt="Crud App" />
                  <Carousel.Caption>
                    <h5>MatGari Crud App</h5>
                    <p>
                      E-commerce Crud App , technologies and libraries used :
                      -React.js -CSS3 -Bootstrap 5 -sweetalert -React-Router-Dom
                      -Rest API -Json Server
                    </p>
                    <Button variant="primary">
                      <a href="https://github.com/AshrafHamdy10/Crud-App">
                        View Project
                      </a>
                    </Button>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img variant="top" src={mat3ami} alt="Mat3mi" />
                  <Carousel.Caption>
                    <h5>Mat3mi</h5>
                    <p>
                      Restaurants Administration System using Vue.js 3, Vuex,
                      Bootstrap, Json Server, HTML5, CSS3 and JavaScript.
                    </p>
                    <Button variant="primary">
                      <a href="https://github.com/AshrafHamdy10/Mat3mi">
                        View Project
                      </a>
                    </Button>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img variant="top" src={imgeditor} alt="Img-Editor" />
                  <Carousel.Caption>
                    <h5>Image Editor</h5>
                    <p>
                      Image Editor website created by using HTML5, CSS 3 and
                      JavaScript
                    </p>
                    <Button variant="primary">
                      <a href="https://ashrafhamdy10.github.io/Image-Editor/">
                        View Project
                      </a>
                    </Button>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img variant="top" src={special} alt="Special Design" />
                  <Carousel.Caption>
                    <h5>Special Design</h5>
                    <p>Simple design by using HTML5, CSS3 and JavaScript</p>
                    <Button variant="primary">
                      <a href="https://ashrafhamdy10.github.io/Special-Design/">
                        View Project
                      </a>
                    </Button>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img variant="top" src={special2} alt="Special Design 2" />
                  <Carousel.Caption>
                    <h5>Special Design 2</h5>
                    <p>
                      Template using HTML and CSS , responsive with all medias
                    </p>
                    <Button variant="primary">
                      <a href="https://ashrafhamdy10.github.io/Template-3-Using-HTML-CSS/">
                        View Project
                      </a>
                    </Button>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img variant="top" src={special2} alt="Simple Design" />
                  <Carousel.Caption>
                    <h5>Simple Design</h5>
                    <p>Simple design by using HTML5, CSS3 and Font Awesome</p>
                    <Button variant="primary">
                      <a href="https://ashrafhamdy10.github.io/Template_2/">
                        View Project
                      </a>
                    </Button>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img variant="top" src={todolist} alt="To Do List" />
                  <Carousel.Caption>
                    <h5>To Do List</h5>
                    <p>To do list webiste using HTML5, CSS3 and JavaScript</p>
                    <Button variant="primary">
                      <a href="https://ashrafhamdy10.github.io/To_Do_List/">
                        View Project
                      </a>
                    </Button>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
