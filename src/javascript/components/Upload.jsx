import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import UploadForm from "./UploadForm";
import Results from "./Results";
// import MultiStepProgressBar from "./MultiStepProgressBar";
import ManageCSV from "./ManageCSV";


const Upload = () => {
  const [radianceOrIrradiance, setRadianceOrIrradiance] = useState(
    "irradiance"
  );
  const [rows, setRows] = useState([]);
  const [sampleCount, setSampleCount] = useState(0);
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectedRowsSampleCount, setSelectedRowsSampleCount] = useState(0);
  const [measurementLabels, setMeasurementLabels] = useState({});
  const [csv, setCSV] = useState([]);
  const [relativePowers, setRelativePowers] = useState({});
  const [powerMode, setPowerMode] = useState(false);
  const [showInstructions, setShowInstructions] = useState(true);
  const [isLoaded, setLoaded] = useState(false);
  const [refHAB, setRefHAB] = useState(null);
  const [modalView, setModalView] = useState(false);
  const fileInput = useRef();

  /* const userModeChange = () => {
    setPowerMode((checked) => !checked);
    if (fileInput.current.files.length > 0) {
      setCSV([]);
      setMeasurementLabels({});
      setRelativePowers({});
      setLoaded(false);
      setRefHAB(null);

      fileInput.current.value = null;
    }
  }; */

  const LoadingIndicator = () => {
    return (
      isLoaded && (
        <div className="overlay">
          <h1>Calculating... Please wait... </h1>
          <div className="loading-container">
            <div className="loader" />
          </div>
        </div>
      )
    );
  };

  useEffect(() => {
    // code to run after render goes here
    document.title = "LUOXtech: Upload spectrum and generate report";
  });

  return (
    <>
      <main id="main" className="upload-main">
        <section className="portfolio">
          <div className="container">
            <div className="section-title">
              <h2>Upload spectrum and generate report</h2>
              {/* <p className="justify-content-center">
                <label htmlFor="pro_mode_checkbox" className="promode-label">
                  <input
                    type="checkbox"
                    id="pro_mode_checkbox"
                    value="proMode"
                    checked={powerMode}
                    onChange={userModeChange}
                  />{" "}
                  Power user mode (check if your SPD columns &gt; 5)
                </label>
              </p>
              <MultiStepProgressBar
                page="upload"
                // onPageNumberClick={nextPageNumber}
              /> */}
            </div>
          </div>
        </section>
        <LoadingIndicator />
        <section className="why-us pt-2 upload-section">
          <div className="container p-4 text-center upload-div">
            <div className="row justify-content-center">
              <UploadForm
                radianceOrIrradiance={radianceOrIrradiance}
                measurementLabels={measurementLabels}
                setRadianceOrIrradiance={setRadianceOrIrradiance}
                setRows={setRows}
                setSampleCount={setSampleCount}
                setMeasurementLabels={setMeasurementLabels}
                csv={csv}
                setCSV={setCSV}
                relativePowers={relativePowers}
                setRelativePowers={setRelativePowers}
                setPowerMode={setPowerMode}
                powerMode={powerMode}
                fileInput={fileInput}
                setRefHAB={setRefHAB}
                isLoaded={isLoaded}
                setLoaded={setLoaded}
                setModalView={setModalView}
                setShowInstructions={setShowInstructions}
              />

              {showInstructions ? (
              <div className="row">
                <div className="col-12">
                  <h1 className="my-5">Format instructions</h1>

                  <p className="lead my-5">
                    Generate a CSV file containing the spectral power distribution of all
                    of the measurements taken during the experiment.
                  </p>

                  <h2 className="mb-3">Specification</h2>

                  <p className="mb-3">
                    The first column contains the wavelength in nanometers. The subsequent
                    columns contain the spectral (ir)radiance for each of the measurements
                    taken during the experiment. Your data can contain up to 5
                    measurements:
                  </p>

                  <table className="table mb-5">
                    <thead>
                    <tr>
                      <th>Column</th>
                      <th>Required?</th>
                      <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>1</td>
                      <td>Yes</td>
                      <td>
                        Wavelength in nanometers. This should be restricted to the
                        visible light range (380-780 nm) and contain only integer
                        wavelengths (e.g. 380, 385, 390 ...).
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Yes</td>
                      <td>
                        First measurement spectral (ir)radiance in µW/mW/W per
                        mm²/cm²/m² (per sr)
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>No</td>
                      <td>
                        Second measurement spectral (ir)radiance in µW/mW/W per
                        mm²/cm²/m² (per sr)
                      </td>
                    </tr>
                    <tr>
                      <td>...</td>
                      <td>...</td>
                      <td>...</td>
                    </tr>
                    <tr>
                      <td>N</td>
                      <td>No</td>
                      <td>
                        Nth measurement spectral (ir)radiance in µW/mW/W per mm²/cm²/m²
                        (per sr)
                      </td>
                    </tr>
                    </tbody>
                  </table>

                  <h3>Example</h3>

                  <pre>
              <code>
                {`Wavelength,Measurement 1,Measurement 2,Measurement 3
    380,1.87,1.18,0.82
    385,2.36,1.48,1.02
    ...
    775,0.52,0.33,0.28
    780,0.43,0.27,0.21
    `}
              </code>
            </pre>

                  <ul>
                    <li>
                      <a download="sample.csv" href="/examples/sample.csv">
                        Download example spectral power distribution
                      </a>
                    </li>
                  </ul>

                  <p>
                    Please note that the accuracy of calculations implemented here depends
                    on the uncertainties present in the uploaded data. For more
                    information, please see <a href="/about">the about page</a>.
                  </p>

                  <p className="my-5">
                    <Link to="/upload" className="btn btn-primary">
                      Next
                    </Link>
                  </p>
                </div>
              </div>
              ) : (
              <br />
              )}

              {modalView ? (
                <ManageCSV
                  rows={rows}
                  sampleCount={sampleCount}
                  setSelectedRows={setSelectedRows}
                  setSelectedRowsSampleCount={setSelectedRowsSampleCount}
                  measurementLabels={measurementLabels}
                  setMeasurementLabels={setMeasurementLabels}
                  modalView={modalView}
                  setModalView={setModalView}
                />
              ) : (
                <br />
              )}

              <Results
                selectedRows={selectedRows}
                selectedRowsSampleCount={selectedRowsSampleCount}
                radianceOrIrradiance={radianceOrIrradiance}
                measurementLabels={measurementLabels}
                powerMode={powerMode}
                isLoaded={isLoaded}
                setLoaded={setLoaded}
                refHAB={refHAB}
                setRefHAB={setRefHAB}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Upload;
