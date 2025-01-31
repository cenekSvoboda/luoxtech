import React /* , { useState, useRef, useEffect } */ from "react";
// import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
// import UploadForm from "./UploadForm";
// import Results from "./Results";
// import InstructionsContent from "./InstructionsContent";
// import MultiStepProgressBar from "./MultiStepProgressBar";
// import ManageCSV from "./ManageCSV";

const Upload = ( /* {
                  setFileNameInHeader
                } */ ) => {
  /* const [radianceOrIrradiance, setRadianceOrIrradiance] = useState("irradiance");
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
  // const [fileName, setFileName] = useState("");
  const fileInput = useRef();

  const LoadingIndicator = () => {
    return (isLoaded && (<div className="overlay">
      <h1>Calculating... Please wait... </h1>
      <div className="loading-container">
        <div className="loader" />
      </div>
    </div>));
  };

  useEffect(() => {
    // code to run after render goes here
    document.title = "LUOXtech: Upload spectrum and generate report";
  }); */

  return (<>
    <main id="main" className="upload-main">
      <section className="portfolio">
        <div className="container">
          <div className="section-title">
            <h2>Moved to <a href="/">homepage</a></h2>
          </div>
        </div>
      </section>
      {/* <LoadingIndicator /> */}
      {/* <section className="why-us pt-2 upload-section">
        <div className="container p-4 text-center upload-div">
          <div className="row justify-content-center">


            {showInstructions ? (
              <InstructionsContent />
            ) : (<br />)}

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

            {modalView ? (<ManageCSV
              rows={rows}
              sampleCount={sampleCount}
              setSelectedRows={setSelectedRows}
              setSelectedRowsSampleCount={setSelectedRowsSampleCount}
              measurementLabels={measurementLabels}
              setMeasurementLabels={setMeasurementLabels}
              modalView={modalView}
              setModalView={setModalView}
            />) : (<br />)}

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
              setFileNameInHeader={setFileNameInHeader}
            />
          </div>
        </div>
      </section> */}
    </main>
  </>);
};

/* Upload.propTypes = {
  // setFileNameInHeader: PropTypes.func.isRequired,
}; */

export default Upload;
