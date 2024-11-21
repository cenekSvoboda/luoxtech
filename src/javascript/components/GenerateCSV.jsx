import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import MultiStepProgressBar from "./MultiStepProgressBar";

const GenerateCSV = () => {
  useEffect(() => {
    document.title = "LUOXtech: Format instructions";
  });

  return (
    <>
      <main id="main">
        <section className="portfolio">
          <div className="container">
            <div className="section-title">
              <h2>Format Instructions</h2>
              <p>
                Generate a CSV file containing the spectral power distribution
                of all of the measurements taken during the experiment.
              </p>
              <MultiStepProgressBar
                page="format_instruction"
                // onPageNumberClick={nextPageNumber}
              />
            </div>
          </div>
        </section>

        <p className="mb-5 text-center">
          <Link to="/upload" className="btn btn-primary">
            Next
          </Link>
        </p>
      </main>
    </>

  );
};

export default GenerateCSV;
