import React, { useState, useRef, useEffect } from "react";
// import { Link } from "react-router-dom";
import InstructionsContent from "./InstructionsContent";
// import MultiStepProgressBar from "./MultiStepProgressBar";


const Instructions = () => {
  useEffect(() => {
    // code to run after render goes here
    document.title = "LUOXtech: Instructions";
  });

  return (<>
    <main id="main" className="upload-main">
      <section className="portfolio">
        <div className="container">
          <div className="section-title">
            <h2>Instructions</h2>
          </div>
        </div>
      </section>
      <section className="why-us pt-2 upload-section">
        <div className="container p-4 text-center upload-div">
          <div className="row justify-content-center">
              <InstructionsContent/>
          </div>
        </div>
      </section>
    </main>
  </>);
};

export default Instructions;
