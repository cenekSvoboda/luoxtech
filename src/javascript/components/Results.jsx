import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import PropTypes from "prop-types";
import CalculationTable from "./CalculationTable";
import SpectraTable from "./SpectraTable";
import Chart from "./Chart";
import { rowsToURL } from "../sharing";

// export const t0 = performance.now();

const Results = ({
  selectedRows,
  selectedRowsSampleCount,
  radianceOrIrradiance,
  measurementLabels,
  powerMode,
  isLoaded,
  setLoaded,
  refHAB,
  setRefHAB,
}) => {
  const originalButtonText = "Copy to clipboard";
  const [buttonText, setButtonText] = useState(originalButtonText);

  if (selectedRows.length === 0) {
    return null;
  }

  const sharingID = rowsToURL(
    selectedRows,
    radianceOrIrradiance,
    measurementLabels
  );
  const sharingURL = `${window.location.origin}/u/${sharingID}`;

  const buttonDisabled = () => {
    return buttonText !== originalButtonText;
  };

  const copySharingURL = () => {
    const sharingURLInput = document.querySelector("input#sharing-url");
    sharingURLInput.select();
    if (document.execCommand("copy")) {
      setButtonText("Copied!");
    } else {
      setButtonText("Failed to copy!");
    }
    setTimeout(() => {
      setButtonText(originalButtonText);
    }, 1000);
  };

  return (
    <div className="row">
      <div className="col">

        <div id="accordion3">
          <div className="card">
            <div className="card-header" id="headingThree">
              <h5 className="mb-0">
                <button type="button" className="btn btn-link" data-toggle="collapse" data-target="#collapseThree"
                        aria-expanded="true"
                        aria-controls="collapseThree" style={{ color: "black", fontSize: "1.2em" }}>
                  Step 3. Check we have understood your input correctly.
                </button>
              </h5>
            </div>
            <div id="collapseThree" className="show" aria-labelledby="headingThree" data-parent="#accordion3">
              <div className="card-body">
                <p className="lead text-start">
                  Check that we have loaded the correct number of observations. Also
                  check the units of measurement. It may help to compare your spectra to
                  a standard reference spectra. For example, if your measurements were
                  made in daylight, check that they have a similar shape to{" "}
                  <code>CIE Standard Illuminant D65</code>. Your data might be easier to
                  read if you change the y-axis scale.
                </p>
                {!powerMode && (
                  <Chart
                    radianceOrIrradiance={radianceOrIrradiance}
                    selectedRows={selectedRows}
                    selectedRowsSampleCount={selectedRowsSampleCount}
                    measurementLabels={measurementLabels}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <div id="accordion4">
          <div className="card">
            <div className="card-header" id="headingFour">
              <h5 className="mb-0">
                <button type="button" className="btn btn-link" data-toggle="collapse" data-target="#collapseFour"
                        aria-expanded="true"
                        aria-controls="collapseFour" style={{ color: "black", fontSize: "1.2em" }}>
                  Step 4. Download the stimulus specification tables and include them in
                  your report.
                </button>
              </h5>
            </div>
            <div id="collapseFour" className="show" aria-labelledby="headingFour" data-parent="#accordion4">
              <div className="card-body">
                <p className="text-start">
                  Heavy load may take some time to render (even if the loading has been
                  processed). Please wait until it populates the table below.
                </p>

                <CalculationTable
                  selectedRows={selectedRows}
                  selectedRowsSampleCount={selectedRowsSampleCount}
                  radianceOrIrradiance={radianceOrIrradiance}
                  measurementLabels={measurementLabels}
                  isLoaded={isLoaded}
                  setLoaded={setLoaded}
                  refHAB={refHAB}
                  setRefHAB={setRefHAB}
                />
              </div>
            </div>
          </div>
        </div>


        <div id="accordion5">
          <div className="card">
            <div className="card-header" id="headingFive">
              <h5 className="mb-0">
                <button type="button" className="btn btn-link collapsed" data-toggle="collapse"
                        data-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive" style={{ color: "black", fontSize: "1.2em" }}>
                  Step 5. Include the full spectral power distribution in your
                  supplementary material.
                </button>
              </h5>
            </div>
            <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordion5">
              <div className="card-body">
                <p className="text-start">
                  Where a journal does not offer the capability of making Supplementary
                  Material available, files can be made available on{" "}
                  <a href="https://figshare.com/">Figshare</a>, the{" "}
                  <a href="https://osf.io/">Open Science Framework</a> or{" "}
                  <a href="https://github.com/">GitHub</a>. Some institutions also offer
                  repositories for research data.
                </p>

                <SpectraTable
                  selectedRows={selectedRows}
                  selectedRowsSampleCount={selectedRowsSampleCount}
                  radianceOrIrradiance={radianceOrIrradiance}
                  measurementLabels={measurementLabels}
                />
              </div>
            </div>
          </div>
        </div>


        <div id="accordion6">
          <div className="card">
            <div className="card-header" id="headingSix">
              <h5 className="mb-0">
                <button type="button" className="btn btn-link collapsed" data-toggle="collapse"
                        data-target="#collapseSix"
                        aria-expanded="false"
                        aria-controls="collapseSix" style={{ color: "black", fontSize: "1.2em" }}>
                  Step 6. Share an online version of this report.
                </button>
              </h5>
            </div>
            <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordion6">
              <div className="card-body">
                <p className="text-start">
                  In order to avoid the{" "}
                  <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/431">
                    HTTP 431 Request Header Fields Too Large
                  </a>{" "}
                  response, url share is unavailable under power user mode.
                </p>
                <div className="form-group">
                  <input
                    id="sharing-url"
                    type="text"
                    className="form-control my-2"
                    value={sharingURL}
                    readOnly
                  />
                </div>
                <div className="row mb-3">
                  <div className="col">
                    {!powerMode && (
                      <button
                        className="btn btn-primary btn-block my-2"
                        type="button"
                        onClick={copySharingURL}
                        disabled={buttonDisabled()}
                      >
                        {buttonText}
                      </button>
                    )}
                  </div>
                  <div className="col">
                    <HashLink
                      className="btn btn-secondary btn-block my-2"
                      role="button"
                      to="/about#requesting-doi-for-sharing-url"
                    >
                      Request DOI
                    </HashLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Results.propTypes = {
  selectedRows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number))
    .isRequired,
  selectedRowsSampleCount: PropTypes.number.isRequired,
  radianceOrIrradiance: PropTypes.oneOf(["radiance", "irradiance"]).isRequired,
  measurementLabels: PropTypes.objectOf(PropTypes.string).isRequired,
  powerMode: PropTypes.bool.isRequired,
  isLoaded: PropTypes.bool.isRequired,
  refHAB: PropTypes.arrayOf(PropTypes.shape),
  setLoaded: PropTypes.func.isRequired,
  setRefHAB: PropTypes.func.isRequired,
};
Results.defaultProps = {
  refHAB: undefined,
};
export default Results;
