import React from "react";
import mylogo from "../assets/special2.png";
import portfolio from "../assets/Portfolio.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faGoogle,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer" id="contacts">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img src={portfolio} alt="Logo" />
            </div>
            <div className="col-md-4 icons">
              <a href="https://www.linkedin.com/in/ashraf-hamdy10/" id="linked">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://github.com/AshrafHamdy10" id="github">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://Ashrafhamdy383@gmail.com" id="google">
                <FontAwesomeIcon icon={faGoogle} />
              </a>
            </div>
            <div className="col-md-4">
              <img src={mylogo} alt="Logo" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
