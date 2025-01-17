import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Toggle.css";

const Task1 = () => {
  const [myStyle, setMyStyle] = useState("yellow");
  const [buttonText, setButtonText] = useState("  Turn Off");

  const toggle = () => {
    if (myStyle === "yellow") {
      setMyStyle("red");
      setButtonText(" Turn On");
    } else {
      setMyStyle("yellow");
      setButtonText(" Turn Off");
    }
  };

  return (
    <>
      <Navbar />
      <main>
        <header className="header">
          <h1>Task 1 - Toggle Color</h1>
        </header>

        <div className="task1-btn">
          <button onClick={toggle}>
            {buttonText}
          </button>
        </div>

        <div className="container" style={{ backgroundColor: myStyle }}></div>
      </main>

      <Footer />
    </>
  );
};

export default Task1;





