import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import UploadForm from "./UploadForm";
import ManageCSV from "./ManageCSV";
import Results from "./Results";

const Intro = ({
                 setFileNameInHeader
               }) => {
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
  // const [fileName, setFileName] = useState("");
  const [absoluteOrRelative, setAbsoluteOrRelative] = useState("absolute");
  const fileInput = useRef();

  const [powerScale, setPowerScale] = useState("milliwatt");
  const [areaScale, setAreaScale] = useState("metresq");

  const handleRadianceOrIrradiance = ({ target: { value } }) => {
    setRadianceOrIrradiance(value);
  };

  const handleAbsoluteOrRelative = ({ target: { value } }) => {
    setAbsoluteOrRelative(value);
  };

  const handlePowerScale = ({ target: { value } }) => {
    setPowerScale(value);
  };

  const handleAreaScale = ({ target: { value } }) => {
    setAreaScale(value);
  };

  const handleRelativePowers = (index) => ({ target: { value } }) => {
    setRelativePowers((powers) => ({
      ...powers,
      [index]: value,
    }));
  };

  const handleMeasurementLabel = (index) => ({ target: { value } }) => {
    setMeasurementLabels((labels) => ({
      ...labels,
      [index]: value,
    }));
  };

  useEffect(() => {
    document.title = "LUOXtech: Home";
  });

  return (
    <>
      <section
        id="hero"
        className="d-flex justify-cntent-center align-items-center"
      >
        { showInstructions && (
        <div
          id="heroCarousel"
          className="container carousel carousel-fade"
          data-bs-ride="carousel"
          data-bs-interval="3000"
        >
          <div className="carousel-item active">
            <div className="carousel-container">
              <h2 className="animate__animated animate__fadeInDown" style={{marginTop:"25px"}}>
                Welcome to <span>LUOXtech</span>
              </h2>
              <p className="animate__animated animate__fadeInUp">
                {/* <div style={{backgroundColor: "#2481a6", color:"#b7c726", boxShadow: "0px 0px 20px red", padding: "10px" }}> */}
                <p style={{ backgroundColor: "transparent", color: "#ff9300", padding: "3px" }}>
                  <b>LUOXtech.app is a modified clone of luox.app</b>
                  <br />
                  <b>it is an extension for lighting engineers and designers</b>
                  <br />
                </p>
                <p style={{ backgroundColor: "transparent", color: "#96dffc", padding: "3px" }}>
                  The formula for U500 is added to the system.
                  <br />
                  It is a percentage expression of the relative power of <br />shortwave radiation (&quot;blue
                  content&quot;) in visible light.
                  <br />
                  For more details see related document: <a style={{ color: "white", textDecoration: "underline" }}
                                                            href="https://brno.cso.lighting/wp-content/uploads/2024/09/CSO-B_WhitePaperU500_9.2024_Fin1ENG.pdf">U500
                  whitepaper</a>
                </p>
                LUOXtech is a free-to-use and open-source tool for calculating
                lighting-related quantities directly in the browser. The tool was inspired by
                the development in chronobiology and circadian environment.
                <br />
                You will need a CSV (comma-separated) or SPDX (following ANSI/IES
                TM-27-20) file containing the spectral data in range 380 - 780 nm.
                <br />
                <a style={{ color: "white", textDecoration: "underline" }}
                  target="_blank" rel="noopener noreferrer"
                  download="LUOXtech.eu - example calculations.pdf"
                  className=""
                  href="/examples/LUOXtech.eu - example calculations.pdf"
                >
                  Example calculations (pdf)
                </a>
                <br />
                <span style={{ color: "gray" }}>LUOXtech is operated by the Czech Lighting Society, group Brno.</span>
              </p>
            </div>
          </div>
        </div>
        )}
      </section>

      <section className="why-us pt-2 upload-section">
        <div className="container p-4 text-center upload-div">
          <div className="row justify-content-center" style={{paddingTop:"1px"}}>
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
              /* setFileName={setFileName} */
              /* fileName={fileName} */
              powerScale={powerScale}
              areaScale={areaScale}
              absoluteOrRelative={absoluteOrRelative}
              setAbsoluteOrRelative={setAbsoluteOrRelative}
              setFileNameInHeader={setFileNameInHeader}
            />
            {csv.length > 0 && (
              <div className="row">
                <div className="col">

                  <div id="accordion2">
                    <div className="card">
                      <div className="card-header" id="headingTwo">
                        <h5 className="mb-0">
                          <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
                                  aria-expanded="false"
                                  aria-controls="collapseTwo" style={{ color: "black", fontSize: "1.2em" }}>
                            Step 2. Tell us more about your data.
                          </button>
                        </h5>
                      </div>

                      <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion2">
                        <div className="card-body">
                          <form className="form-inline text-start">
                            <p className="lead" style={{ lineHeight: "2.5rem" }}>
                              {"My data contains "}
                              <select
                                value={absoluteOrRelative}
                                onChange={handleAbsoluteOrRelative}
                                className="form-control form-control-sm"
                              >
                                <option value="absolute">absolute</option>
                                <option value="relative">relative</option>
                              </select>
                              {" spectra with wavelength in nm. "}
                              <MeasurementLabels
                                measurementLabels={measurementLabels}
                                onChange={handleMeasurementLabel}
                              />
                              {absoluteOrRelative === "absolute" && (
                                <AbsoluteUnits
                                  radianceOrIrradiance={radianceOrIrradiance}
                                  handleRadianceOrIrradiance={handleRadianceOrIrradiance}
                                  powerScale={powerScale}
                                  handlePowerScale={handlePowerScale}
                                  areaScale={areaScale}
                                  handleAreaScale={handleAreaScale}
                                />
                              )}
                              {absoluteOrRelative === "relative" && (
                                <RelativeUnits
                                  radianceOrIrradiance={radianceOrIrradiance}
                                  setRadianceOrIrradiance={setRadianceOrIrradiance}
                                  measurementLabels={measurementLabels}
                                  handleRelativePowers={handleRelativePowers}
                                  relativePowers={relativePowers}
                                />
                              )}
                            </p>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
          </div>
        </div>
      </section>
    </>
  );
};

Intro.propTypes = {
  setFileNameInHeader: PropTypes.func.isRequired,
};

const AbsoluteUnits = ({
                         radianceOrIrradiance,
                         handleRadianceOrIrradiance,
                         powerScale,
                         handlePowerScale,
                         areaScale,
                         handleAreaScale
                       }) => {
  return (
    <>
      <br />
      {"Each measurement column contains "}
      <select
        value={radianceOrIrradiance}
        onChange={handleRadianceOrIrradiance}
        className="form-control form-control-sm"
      >
        <option value="irradiance">irradiances</option>
        <option value="radiance">radiances</option>
      </select>
      {" in "}
      <select
        value={powerScale}
        onChange={handlePowerScale}
        className="form-control form-control-sm"
      >
        <option value="microwatt">µW</option>
        <option value="milliwatt">mW</option>
        <option value="watt">W</option>
      </select>
      {" per "}
      <select
        value={areaScale}
        onChange={handleAreaScale}
        className="form-control form-control-sm"
      >
        <option value="millimetresq">mm²</option>
        <option value="centimetresq">cm²</option>
        <option value="metresq">m²</option>
      </select>
      {radianceOrIrradiance === "radiance" && " per sr"}.
    </>
  );
};

AbsoluteUnits.propTypes = {
  radianceOrIrradiance: PropTypes.oneOf(["radiance", "irradiance"]).isRequired,
  handleRadianceOrIrradiance: PropTypes.func.isRequired,
  powerScale: PropTypes.string.isRequired,
  handlePowerScale: PropTypes.func.isRequired,
  areaScale: PropTypes.string.isRequired,
  handleAreaScale: PropTypes.func.isRequired,
};

const RelativeUnits = ({
                         radianceOrIrradiance,
                         setRadianceOrIrradiance,
                         measurementLabels,
                         handleRelativePowers,
                         relativePowers,
                       }) => {
  const luminanceOrIlluminance =
    radianceOrIrradiance === "radiance" ? "luminance" : "illuminance";

  const handleLuminanceOrIlluminance = ({ target: { value } }) => {
    setRadianceOrIrradiance(value === "luminance" ? "radiance" : "irradiance");
  };

  const units = radianceOrIrradiance === "radiance" ? "(cd/m²)" : "(lx)";

  return (
    <>
      {"I have separately measured "}
      <select
        value={luminanceOrIlluminance}
        onChange={handleLuminanceOrIlluminance}
        className="form-control form-control-sm"
      >
        <option value="luminance">luminance</option>
        <option value="illuminance">illuminance</option>
      </select>
      {Object.entries(measurementLabels).map(([key, title], index) => (
        <React.Fragment key={key}>
          <RelativePower
            title={title}
            onChange={handleRelativePowers(index)}
            value={relativePowers[index]}
            units={units}
          />
          <Separator
            index={index}
            length={Object.keys(measurementLabels).length}
          />
        </React.Fragment>
      ))}
      .
    </>
  );
};

RelativeUnits.propTypes = {
  radianceOrIrradiance: PropTypes.oneOf(["radiance", "irradiance"]).isRequired,
  setRadianceOrIrradiance: PropTypes.func.isRequired,
  measurementLabels: PropTypes.objectOf(PropTypes.string).isRequired,
  handleRelativePowers: PropTypes.func.isRequired,
  relativePowers: PropTypes.objectOf(PropTypes.string).isRequired,
};

const RelativePower = ({ title, onChange, value, units }) => {
  const handleInput = ({ target }) => {
    target.reportValidity();
  };

  return (
    <>
      {" "}
      for <span className="font-italic">{title}</span> at{" "}
      <input
        type="number"
        className="form-control form-control-sm"
        onChange={onChange}
        onInput={handleInput}
        value={value}
        min="0.00001"
        step="any"
        required
      />{" "}
      {units}
    </>
  );
};

RelativePower.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  units: PropTypes.string.isRequired,
};

const MeasurementLabels = ({ measurementLabels, onChange }) => {
  return (
    <>
      {"Label my measurements as "}
      {Object.entries(measurementLabels).map(([key, label], index) => (
        <React.Fragment key={key}>
          <input
            className="form-control form-control-sm"
            value={label}
            onChange={onChange(key)}
          />
          <Separator
            index={index}
            length={Object.keys(measurementLabels).length}
          />
        </React.Fragment>
      ))}
      {". "}
    </>
  );
};

MeasurementLabels.propTypes = {
  measurementLabels: PropTypes.objectOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};

const Separator = ({ index, length }) => {
  const penultimateIndex = length - 2;

  if (index < penultimateIndex) {
    return <>, </>;
  }

  if (index === penultimateIndex) {
    return <> and </>;
  }

  return null;
};

Separator.propTypes = {
  index: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
};

export default Intro;
