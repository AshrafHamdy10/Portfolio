import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./Header.css";

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
          <div>
            <h1>
              I
              <span>
                {" "}
                {text}
                <Cursor />
              </span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
