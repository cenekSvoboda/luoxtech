import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Button, Modal } from "react-bootstrap";

// export const t0 = performance.now();

const ManageCSV = ({
                     rows,
                     sampleCount,
                     setSelectedRows,
                     setSelectedRowsSampleCount,
                     measurementLabels,
                     setMeasurementLabels,
                     modalView,
                     setModalView
                   }) => {
  const [error, setError] = useState(false);
  // const [mode, setMode] = useState("allData");

  const [checkboxesState, setCheckboxesState] = useState({...measurementLabels});

  // Toggle the checkbox value when clicked
  const toggleCheckbox = (key) => {
    setCheckboxesState(prevState => ({
      ...prevState,
      [key]: !prevState[key]
    }));
  };

  const buttonRef = useRef(null);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.focus();
    }
    if (rows && rows[0] && rows[0].length === 2) {
      if (buttonRef.current) {
        buttonRef.current.click();
      }
    }
  }, []);

 /* const handleChange = (event) => {
    setMode(event.target.value);
  }; */

  let selectedRowsArray = [];
  // const selectedRowsColumnsArray = [];
  const selectedColumnsArray = [];
  const selectedColumnsKeysArray = [];



/* const addSelectedRow = (row, isChecked) => {
    if (isChecked) {
      selectedRowsArray.push(row);
    } else {
      for (let i = 0; i < selectedRowsArray.length; i += 1) {
        if (selectedRowsArray[i] === row) {
          const valueIndex = selectedRowsArray.indexOf(row);
          if (valueIndex > -1) {
            selectedRowsArray.splice(valueIndex, 1);
          }
        }
      }
    }
  }; */

  /*  const xuseSelectedRowsAllColumns = () => {
      if (selectedRowsArray.length > 0) {
        setError(false);
        setSelectedRows(selectedRowsArray);
        setSelectedRowsSampleCount(sampleCount);
        setModalView(false);
      } else {
        setError(true);
      }
    }; */

/* const xuseSelectedRowsSelectedColumns = () => {
    if (selectedRowsArray.length > 0 && selectedColumnsArray.length > 0) {
      if (measurementLabels.length === selectedColumnsArray.length) {
        setError(false);
        setSelectedRows(selectedRowsArray);
        setSelectedRowsSampleCount(sampleCount);
        setModalView(false);
      } else {
        for (let i = 0; i < selectedRowsArray.length; i += 1) {
          const rowArray = [];
          for (let j = 1; j <= selectedRowsArray[i].length; j += 1) {
            if (j - 1 === 0) {
              rowArray.push(selectedRowsArray[i][j - 1]);
            }
            if (selectedColumnsKeysArray.includes(j - 1)) {
              rowArray.push(selectedRowsArray[i][j]);
            }
          }
          selectedRowsColumnsArray.push(rowArray);
        }
        setError(false);
        setSelectedRows(selectedRowsColumnsArray);
        setSelectedRowsSampleCount(selectedColumnsArray.length);
        setMeasurementLabels({ ...selectedColumnsArray });
        setModalView(false);
      }
    } else {
      setError(true);
    }
  }; */
  /* const xuseAllRowsColumns = () => {
    setSelectedRows(rows);
    setSelectedRowsSampleCount(sampleCount);
    setModalView(false);
  }; */

  const xuseAllRowsSelectedColumns = () => {
    if (selectedColumnsArray.length > 0) {
      if (measurementLabels.length === selectedColumnsArray.length) {
        setSelectedRows(rows);
        setSelectedRowsSampleCount(sampleCount);
        setModalView(false);
      } else {
        selectedRowsArray = [];
        for (let i = 0; i < rows.length; i += 1) {
          const rowArray = [];
          for (let j = 1; j <= rows[i].length; j += 1) {
            if (j - 1 === 0) {
              rowArray.push(rows[i][j - 1]);
            }
            if (selectedColumnsKeysArray.includes(j - 1)) {
              rowArray.push(rows[i][j]);
            }
          }
          selectedRowsArray.push(rowArray);
        }
        setSelectedRows(selectedRowsArray);
        setSelectedRowsSampleCount(selectedColumnsArray.length);
        setMeasurementLabels({ ...selectedColumnsArray });
        setModalView(false);
      }
    } else {
      setError(true);
    }
  };

  const changeColumnCheckbox = (key, value, isChecked) => {
    if (isChecked) {
      selectedColumnsArray.push(value);
      selectedColumnsKeysArray.push(Number(key));
    } else {
      for (let i = 0; i < selectedColumnsArray.length; i += 1) {
        if (selectedColumnsArray[i] === value) {
          const valueIndex = selectedColumnsArray.indexOf(value);
          const keyIndex = selectedColumnsKeysArray.indexOf(Number(key));
          if (valueIndex > -1) {
            selectedColumnsArray.splice(valueIndex, 1);
            selectedColumnsKeysArray.splice(keyIndex, 1);
          }
        }
      }
    }
    selectedColumnsArray.sort();
    selectedColumnsKeysArray.sort();
  };

  const proceed = () => {

    Object.entries(measurementLabels).map(([key, value]) => (
      changeColumnCheckbox(
        key,
        value,
        checkboxesState[key]
      )
    ));

    xuseAllRowsSelectedColumns();

    /* if (mode === "allData") {
      xuseAllRowsColumns();
    } else if (mode === "columnsSelectedAllRows") {
      xuseAllRowsSelectedColumns();
    } else if (mode === "selectionOnly") {
      xuseSelectedRowsSelectedColumns();
    } */
    // xuseSelectedRowsAllColumns();
  };

  const selectAll = () => {
    Object.entries(measurementLabels).map(([key, value]) => (
      changeColumnCheckbox(
        key,
        value,
        true
      )
    ));

    setCheckboxesState(prevState => {
      return Object.keys(prevState).reduce((acc, key) => {
        acc[key] = true; // Set all values to true
        return acc;
      }, {});
    });
  }

  const deselectAll = () => {
    Object.entries(measurementLabels).map(([key, value]) => (
      changeColumnCheckbox(
        key,
        value,
        false
      )
    ));

    setCheckboxesState(prevState => {
      return Object.keys(prevState).reduce((acc, key) => {
        acc[key] = false; // Set all values to true
        return acc;
      }, {});
    });
  }


  useEffect(() => {
    const handleGlobalKeyDown = (event) => {
      if (event.key === "Enter") {
        document.getElementById("proceedButton").click();
      }
    };

    if (rows && rows[0] && rows[0].length === 2) {
      setTimeout(()=>{document.getElementById("proceedButton").click();},1);
    }

    selectAll();

    // Add event listener
    window.addEventListener("keydown", handleGlobalKeyDown);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleGlobalKeyDown);
    };
  }, []);

  if (rows.length === 0) {
    return null;
  }

  // Check if all checkboxes are selected
  const allSelected = Object.values(checkboxesState).every(value => value);
  const noneSelected = Object.values(checkboxesState).every(value => !value);

  return (
    <>
      <Modal size="lg" show={modalView}>
        <Modal.Header>
          <Modal.Title>Manage Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <form style={{ fontSize: "1.6em" }}>
              <div className="col-md-12 text-start">
                {error ? (
                  <p className="colorRed">
                    Please select atleast one row or one column.
                  </p>
                ) : (
                  ""
                )}
                <div style={{ paddingTop: "10px" }}>
                  <h3>Choose data:</h3>

                  <div>
                    <Button
                      id="selectButton"
                      variant="secondary"
                      onClick={()=> {
                          selectAll();
                        }
                      }
                      className="mx-2 my-1"
                      disabled={allSelected}
                    >
                      Select all
                    </Button>

                    <br/>

                    <Button
                      id="deselectButton"
                      variant="secondary"
                      onClick={()=> {
                          deselectAll();
                        }
                      }
                      className="mx-2 my-1"
                      disabled={noneSelected}
                    >
                      Deselect all
                    </Button>

                    {/*
                    <label htmlFor="allData">
                      <input id="allData" name="allData" type="radio"
                             value="allData"
                             checked={mode === "allData"}
                             onChange={handleChange}
                      />
                      &nbsp;All data&nbsp;
                    </label>
                    <br />
                    <label htmlFor="columnsSelectedAllRows">
                      <input id="columnsSelectedAllRows" name="columnsSelectedAllRows" type="radio"
                             value="columnsSelectedAllRows"
                             checked={mode === "columnsSelectedAllRows"}
                             onChange={handleChange}
                      />
                      &nbsp;Columns selected (all rows)&nbsp;
                    </label>
                    <br />
                    <label htmlFor="selectionOnly">
                      <input id="selectionOnly" name="selectionOnly" type="radio"
                             value="selectionOnly"
                             checked={mode === "selectionOnly"}
                             onChange={handleChange}
                      />
                      &nbsp;Selection only&nbsp;
                    </label>
                    <br />
                    */}
                  </div>

                </div>

                {/* <Button
                variant="success"
                onClick={xuseAllRowsColumns}
                className="mx-2 my-1"
              >
              Use all Rows and Columns
              </Button>
              <Button
                variant="primary"
                onClick={xuseAllRowsSelectedColumns}
                className="mx-2 my-1"
              >
                Use all Rows and Selected Columns
              </Button> */}
              </div>
              <div className="col-md-12 text-end">
                <Button
                  id="proceedButton"
                  variant="success"
                  onClick={proceed}
                  className="mx-2 my-1"
                  ref={buttonRef}
                  disabled={noneSelected}
                >
                  {allSelected ? "Process all data" : "Process selection" }
                </Button>
              </div>
            </form>
          </div>
          <div className="row mt-3">
            <div className="col-md-12 text-end">
              {/* <Button
                variant="success"
                onClick={xuseSelectedRowsAllColumns}
                className="mx-2 my-1"
              >
                Use Selected Rows and all Columns
              </Button>
              <Button
                variant="primary"
                onClick={xuseSelectedRowsSelectedColumns}
                className="my-1"
              >
                Use Selected Rows and Selected Columns
              </Button> */}
            </div>
          </div>
          <div className="row mt-3 row-div table-row">
            <div className="col-md-12">
              <table className="table table-striped table-bordered table-hover generate-csv-table mb-1">
                <thead>
                <tr>
                  {/* <th></th> */}
                  <th>Wavelength</th>
                  {Object.entries(measurementLabels).map(([key, value]) => (
                    <th key={key}>
                      <input
                        type="checkbox"
                        name="columnCheckbox"
                        onChange={(event) => {
                            changeColumnCheckbox(
                              key,
                              value,
                              event.target.checked
                            );
                            toggleCheckbox(key)
                          }
                        }
                        checked={checkboxesState[key]}
                      />{" "}
                      {value}
                    </th>
                  ))}
                </tr>
                </thead>
                <tbody>
                {rows && rows.length > 0 ? (
                  rows.map((row) => (
                    <tr key={row[0]}>
                      {/* <td>
                        <input
                          type="checkbox"
                          name="rowCheckbox"
                          className="selectedRowCheckbox"
                          onChange={(event) =>
                            addSelectedRow(row, event.target.checked)
                          }
                        />
                      </td> */}
                      {Object.entries(row).map(([key, value]) => (
                        <td key={key}>{value}</td>
                      ))}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center">
                      <div className="px-2 text-center">
                        <div className="my-auto text-center text-bold">
                          No Record found
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
                </tbody>
              </table>
            </div>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
        </Modal.Footer> */}
      </Modal>
    </>
  );
};

ManageCSV.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  sampleCount: PropTypes.number.isRequired,
  setSelectedRows: PropTypes.func.isRequired,
  setSelectedRowsSampleCount: PropTypes.func.isRequired,
  measurementLabels: PropTypes.objectOf(PropTypes.string).isRequired,
  setMeasurementLabels: PropTypes.func.isRequired,
  modalView: PropTypes.bool.isRequired,
  setModalView: PropTypes.func.isRequired
};
export default ManageCSV;
