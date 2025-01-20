import React, { useState, useRef, useEffect } from "react";
import sample1 from "../../images/LUOXtech_dataFormat_sample1a.png";
import sample2 from "../../images/LUOXtech_dataFormat_sample2a.png";
import sample3 from "../../images/LUOXtech_dataFormat_sample3a.png";
import sample4 from "../../images/LUOXtech_dataFormat_sample4a.png";

const InstructionsContent = () => {
  return (<>
    <div className="row">
      <div className="col-12">

        <h1 className="my-5">Instructions</h1>

        <h2 className="mb-3">General instructions</h2>

        <p className="lead my-5">
          LUOXtech application is an online &quot;spectral calculator&quot; with which you
          can easily obtain light parameters useful in various fields where light
          is used, based on spectral data.
        </p>

        <p className="lead my-5">
          The results are divided into 2 groups (default/advanced) and
          represent the most frequently used quantities in several fields - from
          basic colorimetric coordinates to ipRGC metrics for alpha-optic values
          and radiometric quantification of the blue component U500 monitored in the nocturnal environment.
        </p>

        <p className="lead my-5">
          To fully use the LUOXtech application, you only need a compatible
          data file that contains at least one set of spectral values covering the
          CIE range 380–780 nm with a resolution of 1 or 5 nm. Then simply
          drag the data file corresponding to the compatibility requirements to
          the Drop-zone at bottom of the Home page or open it in the
          common way using the “Open file” button located in the aforementioned Drop-zone.
        </p>

        <p className="lead my-5">
          If you do not have your own spectral data, you can load one of the
          prepared sample files into the calculator - see examples in the “Format instructions” paragraph.
        </p>

        Download Illuminants&#39; CSVs:
        <br />
        <p style={{ width: "100%" }}>
                    <span>
                    <a
                      download="CIE Standard Illuminant A.csv"
                      className=""
                      href="/examples/CIE Standard Illuminant A.csv"
                    >
                      CIE Standard Illuminant A
                    </a>, </span>
          <span>
                    <a
                      download="CIE Standard Illuminant D65.csv"
                      className=""
                      href="/examples/CIE Standard Illuminant D65.csv"
                    >
                      CIE Standard Illuminant D65
                    </a>, </span>
          <span>
                    <a
                      download="Illuminant E.csv"
                      className=""
                      href="/examples/Illuminant E.csv"
                    >
                      E
                    </a>, </span>
          <span>
                    <a
                      download="Illuminant C.csv"
                      className=""
                      href="/examples/Illuminant C.csv"
                    >
                      C
                    </a>, </span>
          <span>
                      <a
                        download="Illuminant D50.csv"
                        className=""
                        href="/examples/Illuminant D50.csv"
                      >
                      D50
                    </a>, </span>

          <span>
                        <a
                          download="Illuminant D55.csv"
                          className=""
                          href="/examples/Illuminant D55.csv"
                        >
                      D55
                    </a>, </span>

          <span><a
            download="Illuminant D75.csv"
            className=""
            href="/examples/Illuminant D75.csv"
          >
                      D75
                    </a>, </span>
          <span><a
            download="Illuminant FL1.csv"
            className=""
            href="/examples/Illuminant FL1.csv"
          >
                      FL1
                    </a>, </span>
          <span><a
            download="Illuminant FL2.csv"
            className=""
            href="/examples/Illuminant FL2.csv"
          >
                      FL2
                    </a>, </span>
          <span><a
            download="Illuminant FL3.csv"
            className=""
            href="/examples/Illuminant FL3.csv"
          >
                        FL3
                      </a>, </span>

          <span><a
            download="Illuminant FL4.csv"
            className=""
            href="/examples/Illuminant FL4.csv"
          >
                      FL4
                    </a>, </span>

          <span><a
            download="Illuminant FL5.csv"
            className=""
            href="/examples/Illuminant FL5.csv"
          >
                      FL5
                    </a>, </span>
          <span><a
            download="Illuminant FL6.csv"
            className=""
            href="/examples/Illuminant FL6.csv"
          >
                      FL6
                    </a>, </span>
          <span><a
            download="Illuminant FL7.csv"
            className=""
            href="/examples/Illuminant FL7.csv"
          >
                      FL7
                    </a>, </span>
          <span><a
            download="Illuminant FL8.csv"
            className=""
            href="/examples/Illuminant FL8.csv"
          >
                      FL8
                    </a>, </span>
          <span><a
            download="Illuminant FL9.csv"
            className=""
            href="/examples/Illuminant FL9.csv"
          >
                      FL9
                    </a>, </span>
          <span><a
            download="Illuminant FL10.csv"
            className=""
            href="/examples/Illuminant FL10.csv"
          >
                      FL10
                    </a>, </span>
          <span><a
            download="Illuminant FL11.csv"
            className=""
            href="/examples/Illuminant FL11.csv"
          >
                      FL11
                    </a>, </span>
          <span><a
            download="Illuminant FL12.csv"
            className=""
            href="/examples/Illuminant FL12.csv"
          >
                      FL12
                    </a>, </span>
          <span><a
            download="Illuminant FL3.1.csv"
            className=""
            href="/examples/Illuminant FL3.1.csv"
          >
                      FL3.1
                    </a>, </span>
          <span><a
            download="Illuminant FL3.2.csv"
            className=""
            href="/examples/Illuminant FL3.2.csv"
          >
                      FL3.2
                    </a>, </span>
          <span><a
            download="Illuminant FL3.3.csv"
            className=""
            href="/examples/Illuminant FL3.3.csv"
          >
                      FL3.3
                    </a>, </span>
          <span><a
            download="Illuminant FL3.4.csv"
            className=""
            href="/examples/Illuminant FL3.4.csv"
          >
                      FL3.4
                    </a>, </span>
          <span><a
            download="Illuminant FL3.5.csv"
            className=""
            href="/examples/Illuminant FL3.5.csv"
          >
                      FL3.5
                    </a>, </span>
          <span><a
            download="Illuminant FL3.6.csv"
            className=""
            href="/examples/Illuminant FL3.6.csv"
          >
                      FL3.6
                    </a>, </span>
          <span><a
            download="Illuminant FL3.7.csv"
            className=""
            href="/examples/Illuminant FL3.7.csv"
          >
                      FL3.7
                    </a>, </span>
          <span><a
            download="Illuminant FL3.8.csv"
            className=""
            href="/examples/Illuminant FL3.8.csv"
          >
                      FL3.8
                    </a>, </span>
          <span><a
            download="Illuminant FL3.9.csv"
            className=""
            href="/examples/Illuminant FL3.9.csv"
          >
                      FL3.9
                    </a>, </span>
          <span><a
            download="Illuminant FL3.10.csv"
            className=""
            href="/examples/Illuminant FL3.10.csv"
          >
                      FL3.10
                    </a>, </span>
          <span><a
            download="Illuminant FL3.11.csv"
            className=""
            href="/examples/Illuminant FL3.11.csv"
          >
                      FL3.11
                    </a>, </span>
          <span><a
            download="Illuminant FL3.12.csv"
            className=""
            href="/examples/Illuminant FL3.12.csv"
          >
                      FL3.12
                    </a>, </span>
          <span><a
            download="Illuminant FL3.13.csv"
            className=""
            href="/examples/Illuminant FL3.13.csv"
          >
                      FL3.13
                    </a>, </span>
          <span><a
            download="Illuminant FL3.14.csv"
            className=""
            href="/examples/Illuminant FL3.14.csv"
          >
                      FL3.14
                    </a>, </span>
          <span><a
            download="Illuminant FL3.15.csv"
            className=""
            href="/examples/Illuminant FL3.15.csv"
          >
                      FL3.15
                    </a>, </span>
          <span><a
            download="Illuminant LED-B1.csv"
            className=""
            href="/examples/Illuminant LED-B1.csv"
          >
                      LED-B1
                    </a>, </span>
          <span><a
            download="Illuminant LED-B2.csv"
            className=""
            href="/examples/Illuminant LED-B2.csv"
          >
                      LED-B2
                    </a>, </span>
          <span><a
            download="Illuminant LED-B3.csv"
            className=""
            href="/examples/Illuminant LED-B3.csv"
          >
                      LED-B3
                    </a>, </span>
          <span><a
            download="Illuminant LED-B4.csv"
            className=""
            href="/examples/Illuminant LED-B4.csv"
          >
                      LED-B4
                    </a>, </span>
          <span><a
            download="Illuminant LED-B5.csv"
            className=""
            href="/examples/Illuminant LED-B5.csv"
          >
                      LED-B5
                    </a>, </span>
          <span><a
            download="Illuminant LED-BH1.csv"
            className=""
            href="/examples/Illuminant LED-BH1.csv"
          >
                      LED-BH1
                    </a>, </span>
          <span><a
            download="Illuminant LED-RGB1.csv"
            className=""
            href="/examples/Illuminant LED-RGB1.csv"
          >
                      LED-RGB1
                    </a>, </span>
          <span><a
            download="Illuminant LED-V1.csv"
            className=""
            href="/examples/Illuminant LED-V1.csv"
          >
                      LED-V1
                    </a>, </span>
          <span><a
            download="Illuminant LED-V2.csv"
            className=""
            href="/examples/Illuminant LED-V2.csv"
          >
                      LED-V2
                    </a>, </span>
          <span><a
            download="Illuminant HP1.csv"
            className=""
            href="/examples/Illuminant HP1.csv"
          >
                      HP1
                    </a>, </span>
          <span><a
            download="Illuminant HP2.csv"
            className=""
            href="/examples/Illuminant HP2.csv"
          >
                      HP2
                    </a>, </span>
          <span><a
            download="Illuminant HP3.csv"
            className=""
            href="/examples/Illuminant HP3.csv"
          >
                      HP3
                    </a>, </span>
          <span><a
            download="Illuminant HP4.csv"
            className=""
            href="/examples/Illuminant HP4.csv"
          >
                      HP4
                    </a>, </span>
          <span><a
            download="Illuminant HP5.csv"
            className=""
            href="/examples/Illuminant HP5.csv"
          >
                      HP5
                    </a></span>

        </p>
        <br />

        <h2 className="mb-3">Format instructions</h2>

        <p className="lead my-5">
          To activate the calculation process with your data, you will need a
          compatible file in one of the supported
          filetype .XLS/ .XLSX, .CSV, .SPDX.
        </p>

        <p className="lead my-5">
          Only 1 file can be loaded into the application at a time, but it can
          contain more than one set of spectral values. Spectral data must be
          arranged in columns, with the first column always reserved for
          indicating the wavelength as an integer in nanometers. Other values
          on the line are loaded as decimal numbers for individual measurements.
        </p>

        <p className="lead my-5">
          The file must contain at least one set of spectral values covering the
          CIE range 380–780 nm with a resolution of 1 or 5 nm.
        </p>
        <p className="lead my-5">
          Each measurement has its own text label, which is automatically read
          from the first row of the header of the input data table, but only if the
          table contains a header in addition to the data itself. After reading
          and processing the data, the names of individual measurements can be overwritten manually.
        </p>
        <p className="lead my-5">
          If the table contains more than one measurement, a help window will
          appear where you can select individual columns of data to be
          processed in the calculations by checking them.
        </p>
        <p className="lead my-5">
          Sample examples of compatible files can be downloaded at the end of this chapter.
        </p>
        <p className="lead my-5">
          /note: If your Excel file contain multiple sheets, only first table from first sheet can be imported
          to LUOXtech.
        </p>

        <h2 className="mb-3">Format example 1</h2>

        <p className="lead my-5">
          <img
            src={sample1}
            width="190"
            className="d-inline-block align-top me-2"
            alt="sample data 1"
          />
        </p>

        <div className="col text-right">
          <a
            download="LUOXtech_DataSample_01.xlsx"
            className="btn btn-primary m-2"
            href="/examples/LUOXtech_DataSample_01.xlsx"
          >
            Download Sample XLSX
          </a>&nbsp;
          <a
            download="LUOXtech_DataSample_01.csv"
            className="btn btn-primary m-2"
            href="/examples/LUOXtech_DataSample_01.csv"
          >
            Download Sample CSV
          </a>
        </div>

        <br />
        <br />

        <h2 className="mb-3">Format example 2</h2>

        <p className="lead my-5">
          <img
            src={sample2}
            width="204"
            className="d-inline-block align-top me-2"
            alt="sample data 2"
          />
        </p>

        <div className="col text-right">
          <a
            download="LUOXtech_DataSample_02.xlsx"
            className="btn btn-primary"
            href="/examples/LUOXtech_DataSample_02.xlsx"
          >
            Download Sample XLSX
          </a>
        </div>

        <br />
        <br />

        <h2 className="mb-3">Format example 3</h2>

        <p className="lead my-5">
          <img
            src={sample3}
            width="222"
            className="d-inline-block align-top me-2"
            alt="sample data 3"
          />
        </p>

        <div className="col text-right">
          <a
            download="LUOXtech_DataSample_03.xlsx"
            className="btn btn-primary"
            href="/examples/LUOXtech_DataSample_03.xlsx"
          >
            Download Sample XLSX
          </a>
        </div>

        <br />
        <br />

        <h2 className="mb-3">Format example 4</h2>

        <p className="lead my-5">
          <img
            src={sample4}
            width="468"
            className="d-inline-block align-top me-2"
            alt="sample data 4"
          />
        </p>

        <div className="col text-right">
          <a
            download="LUOXtech_DataSample_04.xlsx"
            className="btn btn-primary m-2"
            href="/examples/LUOXtech_DataSample_04.xlsx"
          >
            Download Sample XLSX
          </a>&nbsp;
          <a
            download="LUOXtech_DataSample_04.csv"
            className="btn btn-primary m-2"
            href="/examples/LUOXtech_DataSample_04.csv"
          >
            Download Sample CSV
          </a>
        </div>


      </div>
    </div>
  </>);
};

export default InstructionsContent;