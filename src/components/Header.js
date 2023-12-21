import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./Header.css";
import me from "../assets/Me.jpg";

const Header = () => {
  const [text] = useTypewriter({
    words: [
      "am Ashraf Hamdy",
      "am Front End Developer",
      "graduated from the Faculty of Computers and Information from Mansoura University, Information Technology Department",
    ],
    loop: {},
    typeSpeed: 90,
    deleteSpeed: 60,
    delaySpeed: 1000,
  });
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>
                I
                <span>
                  {" "}
                  {text}
                  <Cursor />
                </span>
              </h1>
            </div>
            <div className="col-md-6">
              <img src={me} alt="Ashraf Hamdy" title="Ashraf Hamdy" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
