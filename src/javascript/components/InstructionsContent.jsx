import React, { useState, useRef, useEffect } from "react";
import sample1 from "../../images/LUOXtech_dataFormat_sample1a.png";
import sample2 from "../../images/LUOXtech_dataFormat_sample2a.png";
import sample3 from "../../images/LUOXtech_dataFormat_sample3a.png";
import sample4 from "../../images/LUOXtech_dataFormat_sample4a.png";

const InstructionsContent = () => {
  return (<>
    <div className="row">
      <div className="col-12">

        {/* <h1 className="my-5">Instructions</h1> */}

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
          <br />
          <a
            className="btn btn-info m-2"
            href="/u/spd1,380,5,wi,-19,JgKmLyMmQ1nyRQQbRWSLTB7PgTVDVpWHWfWzXAXJXKXHXMW7WsWkWkW1XdYkaPccfGzOqLoGqztIu4yd0Kwkv7u3tXrkphnVlCivgYeMb_Z6X_WJUdS3RaQBO0NsNEL1K9KSJkI2IRHuHWHIG4GkGkGNGeGkGCFjE0,nObservation%201"
          >
            Use Sample
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
            className="btn btn-primary m-2"
            href="/examples/LUOXtech_DataSample_02.xlsx"
          >
            Download Sample XLSX
          </a>
          <br />
          <a
            className="btn btn-info m-2"
            href="/u/spd1,380,1,wi,-25,BvBvAABuAAAAAtAKAAAAAAAAAAAAAAAAAjBJBvCJCXCZCOB0BhB7CuDYD1EKEdEwFEFcF3GXG7HfH9IWIxJQJ2KiLUMHM4NoOXPGP5QwRrSuT0VCWSXkY-abcBdtfdhYjZlhnmpprktYvCwgx0y2zq0N0k0z0406071B1O1m2F2t3b4O5B5w6Y647R7d7h7Z7K6y6U5y5P4x4X4C3w3j3c3b3d3h3o3x384F4N4S4W4X4W4S4J393v3k3c3P2_2s2c2O2C131r1f1R1G070z0s0m0f0Z0S0M0G0Az7z5z6z8z-z-z9z9z9z-0A0E0I0N0R0U0W0V0U0V0Z0f0i0j0l0p0r0q0o0o0p0q0p0n0m0n0o0o0o0m0i0d0Y0V0S0P0N0L0L0K0I0H0J0M0M0L0K0J0J0J0J0L0O0R0T0V0X0e0p0y01041A1K1S1Y1f1o1v10162B2K2T2b2k2u263G3R3a3l3w353_4F4M4T4Y4b4f4h4k4o4v4142404z41404v4q4n4n4n4j4a4O4E38313u3m3c3Q3A2u2d2P2B1v1Y1B0q0U0AztzZzBynyMxzxZxBwowLvqvLuwuZt_tmtOs2scsDrrrRq0qUp5pmpXpColoGnpnMmvmTl5lilMkykTjzjVi5ieiBhlhKgxgXf8fhfFeoeJdpdOc5clcNb0bfbKawaVZ9ZpZSY2YXX7XlXTXCWuWXWAVqVXVGU2UoUaUETqTQS6SmSYSPSGR3RmRTQ8QiQMP5PlPTPHO-O3OtOhOTOKOIOKOBNmNIMwMpMgMRMAL4L4L4,nmySet_01"
          >
            Use Sample
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
            className="btn btn-primary m-2"
            href="/examples/LUOXtech_DataSample_03.xlsx"
          >
            Download Sample XLSX
          </a>
          <br />
          <a
            className="btn btn-info m-2"
            href="/u/spd1,380,1,wi,-28,x3x3x3xtxexJxAw9xCxHxKxNxUxex4yhza0T1L2I3K4R5R6J6y7J7Q7O7M7L7O7V7e7l7q7r7o7h7V7G646r6e6O575g5A4c3-3o3b3T3S3X3g3u4A4V4m4y454_5E5K5T5d5n5x5355535y5r5j5a5Q5I4_414p4c4R4J3_3x3g3O292u2h2Y2P2G2A1916131z1r1g1R1C0x0e0JzzzgzQzCy4yyywyyyxyvyoydyQyBxzxlxYxMw_wywowiwbwSwGv5vsvcvIuwuWt9tptbtRtJtCs7s0suspsjscsTsJr_r4r0rxrqrgrUrJrAq3qwqqqlqdqSqKqGqEp9pxpnpfpapWpQpFo2omoYoMn_nynmnanRnLnDm5mtmimYmNmCl6l1lylulslplmlflXlQlLlHlBk1kjkNj5jpjbjRjKjGjEjDjCjBjBjAjAjAi-i5ixiqimihibiTiLiCh6hyhrhnhjhehXhOhDg4gvgqgkgagOgDf7f2fyfvfufrfnfkfifgfdfbfZfWfRfLfFe8ewekedeZeTeNeMeLeGd9d1dvdrdodndodpdqdrdqdmdgdbdXdTdRdQdPdMdHdCc6cvcjcWcIb4bmbTbAawaiaWaKaCZ9Z8Z9aAaEaKaQaQaNaIaGaFaDaFaJaIaAZ0ZpZgZYZJYsYHXkXQXJXFXBW4WrWmWoWrWlWbWYWdWwXHXgX0X-YIYZYsY2YxYsYvY2Y6Y6Y9ZHZLZGZCZHZXZYZDYiYBXiW4WCVEUJTjTTTTTfT6UhVNV-WwXXXuX-YLYTYUYSYSYTYTYT,nBlueSKY_3c"
          >
            Use Sample
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
          <br />
          <a
            className="btn btn-info m-2"
            href="/u/spd1,380,1,wi,-72,L8MFMNMVMeMmMvM3NANINRNaNiNrN0N9OFOOOXOgOpOyO7PDPMPVPePoPxP6QDQMQVQeQnQxQ6RDRNRWRfRoRyR7SFSOSXShSqS0S9THTQTaTjTtT2UAUJUTUcUmUwU5VDVNVWVgVqVzV9WHWQWaWkWtW3XBXKXUXeXoXxX7YFYOYYYiYsY1Y_ZJZTZcZmZwZ6aDaNaXagaqa0a-bHbRbbbkbub4cBcLcVcecocyc7dFdOdYdidrd1d-eIeSebeleue4fBfLfUfefnfwf6gDgNgWgggpgyg8hFhOhYhhhqhzh9iGiPiYihiri0i9jGjPjYjhjqjzj8kFkOkXkgkpkyk7lElNlWlflnlwl5mCmKmTmcmkmtm2m-nHnQnYnhnpnyn6oCoLoTocokoso1o9pFpOpWpepmpup3p_qHqPqXqfqnqvq3q_rHrPrWrermrur2r9sFsNsVscskssszs7tCtKtRtZtgtotvt2t-uFuMuUubuiupuwu4u_vGvNvUvbvivpvwv3v-wFwMwSwZwgwnwtw0w7xCxIxPxVxcxixpxvx2x8yDyJyQyWycyiypyvy1y7zCzIzOzUzazgzmzszyz4z-0E0K0P0V0b0h0n0s0y04091D1J1O1U1Z1f1k1q1v10161_2E2K2P2U2a2f2k2p2u2z24293C3I3M3R3W3b3g3l3q3v3034394C4H4L4Q4V4Z4e4i4n4r4w4045495C5G5K5P5T5X5c5g5k5o5s5x5155596B6F6J6N6R6V6Z6d6h6l6o6s6w6064676_7D7G7K7O7R7V,nA_0%2C1lx|spd1,380,1,wi,-59,MQMYMhMpMyM7NDNMNVNeNmNvN4OBOKOTOcOlOuO3PAPJPTPcPlPuP3QBQKQTQdQmQwQ5RCRMRVRfRoRyR7SFSOSYSiSrS1S_TITSTcTlTvT5UDUMUWUgUqU0U-VHVRVbVlVvV5WDWNWWWgWqW0W-XIXSXcXmXwX6YEYOYYYiYsY2ZAZKZUZeZoZxZ7aFaPaZajata3bBbLbVbfbpbzb9cHcRcbclcvc5dCdMdWdgdqd0d-eIeRebeleve5fCfMfWfgfqfzf9gHgQgagkgtg3hBhKhUhehnhxh6iEiNiXihiqizi9jGjQjZjjjsj1j_kIkRkbkkktk3lAlJlSlblllul3mAmJmSmbmkmtm2m_nInRnanjnsn0n9oGoPoYogopoyo7pDpMpUpdpmpup3p_qIqQqZqhqpqyq6rCrLrTrbrkrsr0r8sEsMsUsdslsts1s9tEtMtUtctktst0t7uDuLuTuauiuquxu5vAvIvPvXvevmvtv1v8wDwLwSwZwgwowvw2w9xExLxSxZxgxnxux1x8yDyKyRyYyeylysyzy5zAzGzNzUzazhznzuz0z70B0H0O0U0a0h0n0t0z051A1G1M1S1Y1e1k1q1w12182B2H2N2T2Z2e2k2q2v21273A3G3L3R3W3c3h3n3s3x33384B4H4M4R4W4b4h4m4r4w41464_5E5J5O5T5X5c5h5m5r5w50555-6C6H6M6Q6V6Z6e6i6n6r6w6064697B7F7K7O7S7W7b7f7j7n7r7v7z73777_8D8H8L8P8T8X8b8e8i8m8q8t8x81,nA_1lx|spd1,380,1,wi,-46,MjMsM1M-NHNQNYNhNqNzN8OGOPOYOhOqOzO9PGPPPZPiPrP1P-QIQRQbQkQuQ3RBRLRUReRoRxR7SFSPSYSiSsS2TATKTTTdTnTxT7UFUPUZUjUtU3VBVLVVVfVpV0V-WIWSWcWmWwW7XFXPXZXjXtX4YCYMYWYgYrY1Y_ZJZUZeZoZyZ8aHaRabalawa6bEbObYbjbtb3cBcMcWcgcqc0c-dJdTdddndxd7eGeQeaekeue4fCfMfWfgfrf1f_gJgTgdgngxg7hFhOhYhihsh2iAiKiUieinixi7jFjPjYjijsj1j_kJkSkckmkvk5lClMlWlflplyl8mFmOmYmhmrm0m9nHnQnZninsn1n-oHoQoaojoso1o-pHpQpZpiprp0p9qFqOqXqgqpqyq6rDrMrUrdrmrur3r_sIsQsZshsqsys7tDtLtUtctkttt1t9uFuNuVueumuuu2u-vGvOvWvdvlvtv1v9wFwMwUwcwjwrwzw6xCxJxRxYxgxnxvx2x-yFyMyTybyiypywy4y_zGzNzUzbzizpzwz3z-0F0L0S0Z0g0n0t00071B1I1O1V1c1i1p1v11182C2J2P2V2b2i2o2u20263A3H3N3T3Z3f3l3r3w32384C4I4O4T4Z4f4k4q4w41475A5G5M5R5W5c5h5n5s5x53586B6G6M6R6W6b6g6l6q6v60656-7D7I7N7S7W7b7g7l7q7u7z74788B8F8K8O8T8X8c8g8l8p8u8y82878_9D9H9L9Q9U9Y9c9g9k9o9s9w909498-A-E-I-M-P-T-X,nA_10lx|spd1,380,1,wi,-33,M4NBNKNTNcNlNuN3OAOKOTOcOmOvO4PCPLPVPePoPxP7QFQOQYQiQrQ1Q_RJRTRcRmRwR6SESOSYSiSsS2TATKTUTeToTzT9UHURUbUmUwU6VEVPVZVjVtV4WCWMWXWhWsW2XAXLXVXgXqX0X_YJYUYeYpYzY-ZIZSZdZnZyZ8aHaRacamaxa7bGbQbbblbwb6cFcPcackcvc5dEdOdYdjdtd4eCeNeXehese2fBfLfVfgfqf0f_gJgTgegogyg9hHhRhbhmhwh6iEiOiYijiti3jBjLjVjfjpjzj9kHkRkbklkvk5lDlNlXlhlrl0l-mImSmcmlmvm5nCnMnWnfnpnzn8oGoPoZoioso1o_pIpRpbpkptp3qAqJqTqcqlquq3rArJrTrcrlrur3sAsJsRsasjsss1s-tGtPtYthtptyt7uDuMuUuduluuu2u_vHvQvYvgvpvxv5wBwKwSwawiwqwyw6xCxKxSxaxixqxyx6yCyJyRyZyhyoywy4y_zHzOzWzdzlzsz0z70C0K0R0Y0g0n0u01081D1L1S1Z1g1n1u11182C2J2Q2X2e2k2r2y242_3G3M3T3Z3g3m3t3z364A4G4N4T4Z4g4m4s4y444-5E5L5R5X5d5i5o5u50566A6G6L6R6X6d6i6o6t6z656-7E7J7P7U7Z7f7k7p7v70757_8E8J8O8T8Y8d8i8n8s8x82879A9F9K9P9T9Y9d9i9m9r9w90959--C-H-L-Q-U-Z-d-h-m-q-u-z-3-7-__E_I_M_Q_U_Y_c_g_k_o_s_w_0_4_8,nA_100lx|spd1,380,1,wi,-19,MGMPMXMgMoMxM6NCNLNUNcNlNuN3N_OIOROaOjOsO1O-PHPQPZPiPsP1P-QHQQQaQjQsQ1Q_RIRSRbRkRuR3SBSKSUSdSnSwS6TDTNTXTgTqT0T9UHURUaUkUuU3VBVLVVVeVoVyV8WGWPWZWjWtW3XAXKXUXeXoXyX7YFYPYZYjYtY3ZAZKZUZeZoZyZ8aFaPaZajata3bBbKbUbebobyb8cFcPcZcjctc2dAdKdUdddndxd7eEeOeYehere1e-fIfSfbflfuf4gCgLgVgegogxg7hEhOhXhhhqh0h9iGiQiZijisi1i_jIjRjajkjtj2j_kIkSkbkkktk2k_lIlRlaljlsl1l-mHmQmZmimrmzm8nFnOnWnfnonxn5oCoKoTocokoto1o-pGpPpXpgpopwp5qBqJqRqaqiqqqyq7rDrLrTrbrjrrrzr7sDsLsTsbsisqsys6tCtJtRtZtgtotwt3t_uGuOuVudukusuzu7vCvJvRvYvfvmvtv1v8wDwKwRwYwfwmwtw0w7xCxJxQxXxdxkxrxyx4x_yGyMyTyZygymytyzy6zAzHzNzTzazgzmztzzz5z_0F0L0R0Y0e0k0q0w02071B1H1N1T1Z1e1k1q1w11172B2G2M2R2X2c2i2n2t2y23293C3H3N3S3X3c3h3n3s3x32374A4F4K4P4U4Z4e4j4n4s4x42474_5E5J5N5S5W5b5g5k5p5t5y52565_6D6I6M6Q6V6Z6d6h6l6q6u6y62666-7C7G7K7O7S7W7a7e7i7l7p7t7x7074788A8D8H,nA_1000lx"
          >
            Use Sample
          </a>
        </div>
      </div>
    </div>
  </>);
};

export default InstructionsContent;