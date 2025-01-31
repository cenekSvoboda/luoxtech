import React, { useState } from "react";
import PropTypes from "prop-types";
import sample1 from "../../images/LUOXtech_dataFormat_sample1a.png";
import sample2 from "../../images/LUOXtech_dataFormat_sample2a.png";
import sample3 from "../../images/LUOXtech_dataFormat_sample3a.png";
import sample4 from "../../images/LUOXtech_dataFormat_sample4a.png";


const SearchableSelect = ({ onSelect, children }) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    onSelect(event.target.value);
  };

  return (
    <select value={selectedValue} className="form-select m-2" onChange={handleChange}>
      <option value="" disabled>Select an illuminant...</option>
      {children}
    </select>
  );
};

const InstructionsContent = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  // const [file, setFile] = useState("CIE Standard Illuminant A.csv");
  const [url, setUrl] = useState("/u/spd1,380,1,wi,-8,MrMzM8NFNONXNgNpNyN7OEOOOXOgOpOyO8PFPOPYPhPrP0P-QHQRQaQkQuQ3RBRLRUReRoRyR7SFSPSZSjStS3TATKTUTeToTyT8UGUQUbUlUvU5VDVNVXVhVsV2WAWKWUWfWpWzW9XHXSXcXmXxX7YFYPYaYkYuY5ZDZNZYZiZsZ2aBaLaVagaqa0a_bJbTbebobyb9cHcRcbcmcwc6dFdPdZdjdud4eCeMeXehere1e_fKfUfefofyf8gHgRgbglgvg5hDhNhXhhhrh1h_iJiTidinixi7jFjPjZjijsj2kAkKkTkdknkxk6lElOlXlhlrl0l-mHmRmamkmum3nAnKnTndnmnvn5oCoLoVoeonowo6pDpMpVpepnpwp5qCqLqUqdqmqvq4rBrKrTrbrkrtr2r-sHsQsYshspsys7tDtMtUtdtlttt2t-uGuPuXufunuwu4vAvIvQvYvgvovwv4wAwIwQwYwgwowvw3w_xHxOxWxexlxtx0x8yDyLySyayhypywy3y_zGzNzUzbzjzqzxz4z_0G0N0U0b0i0p0w03091E1L1S1Z1f1m1t1z162A2H2N2U2a2h2n2t20263A3H3N3T3Z3g3m3s3y343-4E4K4Q4W4c4i4o4t4z454_5E5K5Q5V5b5h5m5s5x53586C6H6N6S6X6d6i6n6s6y63687B7G7L7Q7V7a7f7k7p7u7z74798C8G8L8Q8V8Z8e8j8n8s8x81868-9D9H9L9Q9U9Z9d9h9m9q9u9y92979_-D-H-L-P-T-X-b-f-j-n-r-v-z-2-6,nObservation%201");
  const handleSelect = (value) => {
    const jsonVal = JSON.parse(value);
    // setFile(jsonVal.file);
    setUrl(jsonVal.url);
    setIsDisabled(false);
  };

  /* const getFile = () => {
    return `/examples/${file}`;
  } */

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
        <br />
        <div className="row">
          <div className="col-md-6">
            <SearchableSelect onSelect={handleSelect}>
              <option
                value='{"file":"CIE Standard Illuminant A.csv","url":"/u/spd1,380,1,wi,-8,MrMzM8NFNONXNgNpNyN7OEOOOXOgOpOyO8PFPOPYPhPrP0P-QHQRQaQkQuQ3RBRLRUReRoRyR7SFSPSZSjStS3TATKTUTeToTyT8UGUQUbUlUvU5VDVNVXVhVsV2WAWKWUWfWpWzW9XHXSXcXmXxX7YFYPYaYkYuY5ZDZNZYZiZsZ2aBaLaVagaqa0a_bJbTbebobyb9cHcRcbcmcwc6dFdPdZdjdud4eCeMeXehere1e_fKfUfefofyf8gHgRgbglgvg5hDhNhXhhhrh1h_iJiTidinixi7jFjPjZjijsj2kAkKkTkdknkxk6lElOlXlhlrl0l-mHmRmamkmum3nAnKnTndnmnvn5oCoLoVoeonowo6pDpMpVpepnpwp5qCqLqUqdqmqvq4rBrKrTrbrkrtr2r-sHsQsYshspsys7tDtMtUtdtlttt2t-uGuPuXufunuwu4vAvIvQvYvgvovwv4wAwIwQwYwgwowvw3w_xHxOxWxexlxtx0x8yDyLySyayhypywy3y_zGzNzUzbzjzqzxz4z_0G0N0U0b0i0p0w03091E1L1S1Z1f1m1t1z162A2H2N2U2a2h2n2t20263A3H3N3T3Z3g3m3s3y343-4E4K4Q4W4c4i4o4t4z454_5E5K5Q5V5b5h5m5s5x53586C6H6N6S6X6d6i6n6s6y63687B7G7L7Q7V7a7f7k7p7u7z74798C8G8L8Q8V8Z8e8j8n8s8x81868-9D9H9L9Q9U9Z9d9h9m9q9u9y92979_-D-H-L-P-T-X-b-f-j-n-r-v-z-2-6,nObservation%201"}'>
                CIE Standard Illuminant A
              </option>
              <option
                value='{"file":"CIE Standard Illuminant D65.csv","url":"/u/spd1,380,1,wi,-12,odopo1pBpNpZplpxp8qIqUrYsbtdudvcwZxWyRzL0E0V0n041K1b1s192O2f2v2z23262-3C3G3J3N3R3U3I272u2h2U2H161t1f1S122Z283e4A4i5E5l6G6n687S7n798S8n889R9l9697999-9_-B-C-D-F-G-I-D9-95909v9q9l9f9a9V9X9Z9b9d9e9g9i9k9m9o9b9P9D838r8e8S8G757t7u7v7v7w7x7y7z7071727z7x7u7r7p7m7j7g7e7b7W7Q7L7G7A67626w6r6l6r6w61666_7E7J7P7U7Z7T7N7H7C68626w6q6k6e6e6d6d6c6b6b6a6Z6Z6Y6R6J6C57505s5l5d5W5P5I5B46404t4m4f4Z4S4L4K4J4I4H4G4F4E4D4C4B3z3m3Z3L2-2w2i2V2H15181-2B2E2G2J2L2O2Q2T2S2R2Q2Q2P2O2N2N2M2L2H2E2A1815111x1t1q1m1d1V1M1D070y0p0g0X0P0P0Q0R0S0T0U0U0V0W0X0Q0I0Bz5zyzqzjzczUzNzNzNzOzOzOzPzPzQzQzQzVzZzdzhzlzqzuzyz2z6zyzqzizazSzKzBy5yxypyXyFxzxhxPw9wqwYwFvyv2v7v_wDwHwLwPwTwXwbwhwnwtwzw5w_xFxLxQxWw7wgwEvovMuvuTt2tYs7tOtht0uHuausu_vRvkv2wBwNwYwjwuw6xFxQxbxmxNw1wcwDvqvRu3uduDtptBsZrwrHqcpypGoantm_n2orpfqSrEr1sltVuEuyuquiubuTuLuDt8t0tstk,nObservation%201"}'>
                CIE Standard Illuminant D65
              </option>
              <option
                value='{"file":"Illuminant E.csv","url":"/u/spd1,380,1,wi,-39,7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y,nObservation%201"}'>
                E
              </option>
              <option
                value='{"file":"Illuminant C.csv","url":"/u/spd1,380,5,wi,-12,g4kKnaqhtiwgzY2K4s638r-G_F_m_v_o_g_j_r_w_t_d-4948m7M55454V4T4q5O516W6t616u6Z555R4m363Q2q2N18101w1u1t1s1p1o1s1w1w1q1d1L030dz5zQyox_xWwtwBvTumt7tXs4sasCrxrorlrqrxsA,nObservation%201"}'>
                C
              </option>
              <option
                value='{"file":"Illuminant D50.csv","url":"/u/spd1,380,1,wi,-13,e5fOfjf5gOgig3hLhfhziHjNkRlTmTnRoOpKqEq9r1sJsdsytGtZttuBuUunu7vEvNvXvgvpvyv7wFwOwXwRwLwGwAv6v0vvvpvjvdwJw1xgyLy1ze0H0w1Y1_2c243U3w4M4n5C5d546T6a6h6o6v636-7F7M7T7a7c7d7f7g7i7k7l7n7o7q7y768B8J8R8Z8g8o8w838x8q8k8d8X8Q8K8D79727-8G8O8W8d8l8t80889E9G9H9J9L9N9P9R9S9U9W9X9Y9Z9a9b9c9d9e9f9g9q919_-J-S-c-m-w-6_E_B-_-8-5-3-0-x-v-s-p-s-v-z-2-5-8-__C_F_I_E-_-6-2-x-t-o-j-f-a-W-R-N-I-D9_96929x9t9v9x9092959799-A-C-F969v9k9Z9O9D848s8h8W8f8n8w859B9K9S9b9j9s9v9y9194989_-C-F-I-M-L-L-K-K-J-J-I-I-H-H-A969z9s9m9f9Y9R9L9E9K9R9X9d9k9q9w9399-D99929w9q9j9d9W9Q9J9D9I9N9S9X9c9h9n9s9x92-A-J-T-c-m-w-5_D_M_W_O_G-_-3-v-o-g-Y-R-J9x9Z9B8p8R757g7I6v6W6f6o6x667D7L7U7d7m7v7x707376787_8C8E8H8K7o7H6l6C5g494Z323S2u3D3Z3v4E4a4v5E5Z5u6D6Q6d6q637E7Q7d7q738D7l7H6p6K5r5M4t4N3t3N2e1v0_0Ozdyrx4xEwPvawbxcybzY0V1R2L3F39414r4h4W4M4C333t3j3Y3O,nObservation%201"}'>
                D50
              </option>
              <option
                value='{"file":"Illuminant D55.csv","url":"/u/spd1,380,5,wi,-13,jolGmhr7wuyOzr0P0z0Izc2r5w7z9y-L-j-e-Y-1_R-i90-O-o-o-o-h-a_E_t_Z_E_M_V-4-a9-9i9o9t8t7r8K8p8x848u8l7-7X7q7-7a617E7U768f727M5e3t4Q4z5J5f290T1-3l4k5i3R06xStWyE2Y1p05,nObservation%201"}'>
                D55
              </option>
              <option
                value='{"file":"Illuminant D75.csv","url":"/u/spd1,380,5,wi,-11,q3rYr5wq0_2R3h3o3v2i1S3l5y7L8i8d8Y7z7O7K7G6C49404r4U393V2t273K2o2H171w1I0fz6zUzIy8x9w9w_xBw3wtwWv_vSukuhuet8tZtUtQtatls_sarMp8qJqVq0rTpanboxqEq3rpp9oMlWiRl2pHomoF,nObservation%201"}'>
                D75
              </option>
              <option
                value='{"file":"Illuminant FL1.csv","url":"/u/spd1,380,5,wi,-18,NKOyQgR7V5qfX1YDZfa3cK_nnnfhgbhMh2iYiti6jBi7i4igiEhohHgpgPgAf-gMgsysnwjbkclTl7pKqkl4lLkNjAhngGefczbKZgX-WaU8TnSXROQJPIONNYMoMcLhK8KgKAJcJCIqIdIVIOH8IAHtH8IAHhG8GU,nObservation%201"}'>
                FL1
              </option>
              <option
                value='{"file":"Illuminant FL2.csv","url":"/u/spd1,380,5,wi,-19,LaMxOPPZTeplUmUTVfWkXn-FkEaSbCbocJcjc1c-dCc-c-cpcUcEb4b2cFcsdxfShN0Xq0oGqMr_tTwpyHuGtWsMqso8m_k6ivgnebcZaXYdWtVDTgSEQxPiObNcM_L1LBKcJ2JKIqINH3HuHgHNHNG4HIHNGpGCFd,nObservation%201"}'>
                FL2
              </option>
              <option
                value='{"file":"Illuminant FL3.csv","url":"/u/spd1,380,5,wi,-19,JgKmLyMmQ1nyRQQbRWSLTB7PgTVDVpWHWfWzXAXJXKXHXMW7WsWkWkW1XdYkaPccfGzOqLoGqztIu4yd0Kwkv7u3tXrkphnVlCivgYeMb_Z6X_WJUdS3RaQBO0NsNEL1K9KSJkI2IRHuHWHIG4GkGkGNGeGkGCFjE0,nObservation%201"}'>
                FL3
              </option>
              <option
                value='{"file":"Illuminant FL4.csv","url":"/u/spd1,380,5,wi,-20,IpJlKrLVQPqcP_OcPMP6Qm-_gcSSS0TOTiTzT9UGUIUIUSUBT1TxT3USVJWnYybme-2asfqpuQxe0A4a6q3O21130WydwNtyreokl2jUgveTcCZ4X6V_UQSmRIP0O7NgMcLnKvJ2JKIaIBHxHbG-G-GlGxG4GYF2E_,nObservation%201"}'>
                FL4
              </option>
              <option
                value='{"file":"Illuminant FL5.csv","url":"/u/spd1,380,5,wi,-18,NKOwQdR4Vvp3XlXzZMagbw9dmle7fzgghHhlh5iFiJiEh_hohMgzgZgEf3f4gKgthgyvoiknlimOmopcqglxk1jqiSgvfHdcbuaDYYW2VUT3SkRWQMPMOQNYMmL3LtKzKPJ3JcI4IgILH8H4HxHhHlHZHlHtHJGmGG,nObservation%201"}'>
                FL5
              </option>
              <option
                value='{"file":"Illuminant FL6.csv","url":"/u/spd1,380,5,wi,-19,KwMBNaOeShoYTcTEUJVLWJ78iZYkZPZyaPalaza7a8a4a4amaTaJaHaWa-cAdlfniA0tr3pgrktMuRxNyWuPtOr0qGoKmEj4hnfadNbJZFXKVaTySPQ1PkOXNSMSL7KwKBJdI2INHuHRG-G4GpGZGeGNGkGuGCFXE0,nObservation%201"}'>
                FL6
              </option>
              <option
                value='{"file":"Illuminant FL7.csv","url":"/u/spd1,380,5,wi,-18,PaRKS3UfX4qXaIZkaub6dH_8oSgbhWiJi0jTjpj3j9j7jyjjjRjCi0iniaiLh9hzht0Tnwh9iJiViel2nZieiRh9hnhMgygbgGf2flfEenegeeenePcUZ9YbXPWZVnUlTiSsR6Q5P6PIOcN0NRMvMQL8LmLEKaJlIq,nObservation%201"}'>
                FL7
              </option>
              <option
                value='{"file":"Illuminant FL8.csv","url":"/u/spd1,380,5,wi,-19,LjM3OIPUSsl9UjTgUoWEXs9Tk_dGeygShmikjVj7kVknkyk2k5lBlMlYlglclQlAks4fqpkDkAkBkHoIqIk4lKlclvmBmVmunGnYnjngndnwn-n6nRlPizhKf4e0d0cibMaDY6XjWLVDUFTPSdRuRGQoQKPZObNUME,nObservation%201"}'>
                FL8
              </option>
              <option
                value='{"file":"Illuminant FL9.csv","url":"/u/spd1,380,5,wi,-19,J9LHMPNSQ5ljSVQzRwTEUh79icZXa6cRdbeVfDfmgCgUgigqgwg_hQhoh_iOieiwjG3QqXkylemJmyqustoCoLoMoIn-n0n1n7oIoRoCn1oFofpVpSmJiIfzeJc4b1adZHYDXAVvUdTcSjRwRDQXPyPXO7ONNUMVLH,nObservation%201"}'>
                FL9
              </option>
              <option
                value='{"file":"Illuminant FL10.csv","url":"/u/spd1,380,5,wi,-15,H0GpF2FnJCZ4K0MMOXQ1TSrhcnX8YWYQXmWmVYUCU4eSeXX_SGNkLYKLJXJAJ9Rvvh_trCVTNpLrK3QXZHcjZ4WPS9VZxTroZ0Z4YFPoKXK_NQMXLPKgJKIoJAJ7JzHgH7NhPuKoFMDpDaDaDpDpDaDEDaDfDEClCO,nObservation%201"}'>
                FL10
              </option>
              <option
                value='{"file":"Illuminant FL11.csv","url":"/u/spd1,380,5,wi,-15,HFF5FCEhIbabJXJ7LpNjPurPZ2TkT6TzTPSYRWQQRqcEctWPQILVJAHyHAGxIEQbut_WqYUXMfKZJmPoY7chafXKUGXJ3Lwba8a7Z_QyKrLXODM4LsK3JNIkI-KWKgIIIoPCRiLxFnD3DkDaDpDpDUDpENDyC-ClCO,nObservation%201"}'>
                FL11
              </option>
              <option
                value='{"file":"Illuminant FL12.csv","url":"/u/spd1,380,5,wi,-15,HRF8EsERIGaOH3HNHuIsJ6oAU3MFMOMFLuLVKwKQM4YbZlTeNwJEHIGQFwF5HyP2ri8BoTT3NCLrLMQwZrdDcCZkWnaD9c2DcbcJceS3L5MUPLNxMcLjJgIqJEK3LXI2JbQqTnNQGQEEDyDkD7D7DaDEDaDPC4CWBq,nObservation%201"}'>
                FL12
              </option>
              <option
                value='{"file":"Illuminant FL3.1.csv","url":"/u/spd1,380,5,wi,-9,G1HjIoJFJ2pAPELwMXM8Nk93OmO5POPhPzQAQJQQQRQQQjQJQGQEQPQqRhS3U1XWaY13hMklneqNsbw-yOvVvBuTtErspxnqlbjLg3ekcZaTYTWaUoTAReQDOvNiM_LeKiJvJJITHsHJGqGJFwFaFJEwJyETFaEKDp,nObservation%201"}'>
                FL3.1
              </option>
              <option
                value='{"file":"Illuminant FL3.2.csv","url":"/u/spd1,380,5,wi,-8,JwKtL8MuNynWSdQdRUSQS_9oUkVRV1WZW3XSXiX2X9YBYOX_X_X6X2X9YVY7ZzbEchyQf7hmjPkplvpLqcmzmXlyk7j9izhlgPfDdscdbUaFZDX0W0VzU7T7TESSRsQlPvPDOYNqNAMSMELFKfKAJaI3L8IHIMHWGz,nObservation%201"}'>
                FL3.2
              </option>
              <option
                value='{"file":"Illuminant FL3.3.csv","url":"/u/spd1,380,5,wi,-7,LGMbN7PEQcoCVBUPVcWjXk8JZaaMa4beb-cYcocxczcucucacOb2bebIa8a5bGbgcLyLd_e7fxgeg6kUkmghfye5dvcfbHZsYOWzVXUASqRcQUPPOONVMhLuLBKaKWJUI2IbIOHtHaHHG4GoGYGKGBFyJ7FfGHFQE_,nObservation%201"}'>
                FL3.3
              </option>
              <option
                value='{"file":"Illuminant FL3.4.csv","url":"/u/spd1,380,5,wi,-9,INIrJRJYJvlPNCKOKdKvLM9RMTMxNaOFOwPeQJQ1RhSQTiUQVmXQZPbUdMeffSfwgC5Gg0hTh_izjqohpsmbnRoKo4pjqIqqrcsds7sNrqrYtfuSv1rQnhlCjliOhCffeBczbgaJY3XrWZVPUXTASmQ8P4QTOQNuMi,nObservation%201"}'>
                FL3.4
              </option>
              <option
                value='{"file":"Illuminant FL3.5.csv","url":"/u/spd1,380,5,wi,-10,KdLnM5N8PMk7THStUBVWWz_2ZxbMcod9fMgQhKh5ici1jXjTjYjVjPjIjEjAjCjFjQ-Xj5kSkxlWl9rcsXn5oepIpmqCqbqsrFrgrmrCqjqGq1q6rVofmEkTi_hugvfSd5ctbjaMY9X1WqViUrTTTBRbQdQ9OyOaNF,nObservation%201"}'>
                FL3.5
              </option>
              <option
                value='{"file":"Illuminant FL3.6.csv","url":"/u/spd1,380,5,wi,-9,KYLXMiNkO1imSoScTzVMWq8MZtbNcpeDfTgahTiCiki8jZjSjRjGi4iliUiChzhmhd6ahZhdhnh1iFnLnyjFjZjzkEkVkjksk-lXlck4kakCk2lBlki1gke9dzcvb7aqZdYgXeWWVUUVTYSaR1QpQiPAOOO1M4MrLs,nObservation%201"}'>
                FL3.6
              </option>
              <option
                value='{"file":"Illuminant FL3.7.csv","url":"/u/spd1,380,5,wi,-4,FlElD9DaDhYkHxGNGnHcIWmlJzJ5J_J4JkJlI-IkJ9UwVTQHLdHbGIFfE-FIGVMfmJ1Ve7QKLlLDKwPjWbaZXDXFU3Qv7JolV6YSa4M0KXKSOLLbKiKeITHVHrJAJsIiFANcSuK3D7DoDaC8DLDzCeCEFzB8C2B4AA,nObservation%201"}'>
                FL3.7
              </option>
              <option
                value='{"file":"Illuminant FL3.8.csv","url":"/u/spd1,380,5,wi,-5,GYFWEuEZE4aPJ-JxLWNKO9rLRlSBSKR5RRQmPjOgPGZ7aRUTO3KZIpHsHCG5H0OEsp9pkWSWMYLFKYPoXJcaX0WvUGPs4rnoW-ZaaYMYJ-KNOELvKsKtIwH4IZJVJxIaFBM4SHK0EDD1DlDJDXD8CyCjG2CcDfCyCY,nObservation%201"}'>
                FL3.8
              </option>
              <option
                value='{"file":"Illuminant FL3.9.csv","url":"/u/spd1,380,5,wi,-5,GEFEEfERE_abK1LgN0QUSktbV2WeWnWOVYUVTBRnRpbhb0VnP_LUJQIFHPG7HsN4t3_WlPSZL_KWJfPIWvcPXIVlS5Ol0wk6WzZBY-LmJZJyNdLbKWKPIlHxIUJIJPH6EsMGQ7J-DuDdDRC3DFDoChBIGaA_ClBQAA,nObservation%201"}'>
                FL3.9
              </option>
              <option
                value='{"file":"Illuminant FL3.10.csv","url":"/u/spd1,380,5,wi,-13,DIAAAAAAFMcxJOIhK_N9Qjp6ZkV4WxXEXGWnV4VGVUdTf7a5VCQUOwNyM9MHL3Ozmx-aluUTKyI8IePaZ8dIbAT5Q0OMu_r3a5XiXXPSKOLEPnPAQOOLK3H0IMHwIKGjDTL7RJJjBZBQBQBFBFA4A4AoAoAAAAAAAA,nObservation%201"}'>
                FL3.10
              </option>
              <option
                value='{"file":"Illuminant FL3.11.csv","url":"/u/spd1,380,5,wi,-5,GIFVFAFBF8a8L9M9PmSTU1vIYfZOZbZCYIW_VfUATwc3dCW0RWNBLEJ7JGIsJJOcuT_wluS5MrLEKRPtWycDW2UtR8ODvsh7WbYbXLLPJVJwM6LQKGKCIqH3IdI9IyHdEqLAPXJODrDdDRC3DCDdClCQGsCGDMCGAA,nObservation%201"}'>
                FL3.11
              </option>
              <option
                value='{"file":"Illuminant FL3.12.csv","url":"/u/spd1,380,5,wi,-9,FnGVHRHyIdmHNKJpJmJmJ02GK4LyNUPJRETAU7W1Y1cPd4d8dsc_ceb1bJaiaNa3iJ7yh6ejeygChZm6pXnnoppIqNrXtStmt-toserEpuoMmbkkiqgzexc6bHZVYCWKUjTYSZQ8P1O1N8NKMULtLFKZOEJXJrIhIA,nObservation%201"}'>
                FL3.12
              </option>
              <option
                value='{"file":"Illuminant FL3.13.csv","url":"/u/spd1,380,5,wi,-9,GmHjIuJaKUm1OzMPMtNON-_GQXSIUlXVaFclexgiiCkXk7j9ixhTgCewdichb1cFh-74h6fMffglhtm2o4mhnKnOn1olpWpxqMpooXnDlwkSilg4fJdbbnZ6YSWqVkTySaRQQSPFOLNUMgLyLFKhJ-JaNSIiI4H0HU,nObservation%201"}'>
                FL3.13
              </option>
              <option
                value='{"file":"Illuminant FL3.14.csv","url":"/u/spd1,380,5,wi,-9,HeIfJvKpL0lgQVOuPkQdRj-kUkWpZTcMe-hcjqlcnCpmqQpHnll7ksjOhvgTfGeulm-ejleadUdgd8jLlYjLjWjPkFlGnTnqoWoHm4lkkfjQhxgMekc_bRZrYJWnVlT5SbRdQuPbOaNjMwMHLdK4KYJ4NlI6JSIIH3,nObservation%201"}'>
                FL3.14
              </option>
              <option
                value='{"file":"Illuminant FL3.15.csv","url":"/u/spd1,380,5,wi,3,bCaZZjYYbNlnXaTbTPUWaz6vmcc5eqgXhyi9j9kqlKlUlak9kij0jIiQhggqf6fXgUxvlneBd8eDeTiijwfSfXfrf6gLgSgbgegZgPf-fmfLeneBdRcmbya8Z-ZKYRXTWLVVUKTPSMRcQlP1PDOTNhMrL4LJKlJ_Jf,nObservation%201"}'>
                FL3.15
              </option>
              <option
                value='{"file":"Illuminant LED-B1.csv","url":"/u/spd1,380,5,wi,-22,AABXBXB7CuDmFRHNJ6NEQ5VnbxiamPldiCe7cdaraMa0cGdzfqhfjPk4mdoBpirGsquOv5xnzW1E2y4c5-7X8i9d-F-Y-V989O8N695d3w13z0xqvdtMq8ormdkRiLgIeGcGaQYiW5VZT9SnRYQOPOOSNaMoL3LOKo,nObservation%201"}'>
                LED-B1
              </option>
              <option
                value='{"file":"Illuminant LED-B2.csv","url":"/u/spd1,380,5,wi,-22,AAAAAABXB7DDEhGrJoNWRzW3djmMsPrkmXiCfIcbbObzdKfEhPjSlImxoPptrLsouJvpxLyr0M1m274I5Q6Q7E7t8I8Q8F7o65564s3P1nz0x3vztrrkpZnOlFi-g7e9dCbMZbXvWKUsTTSAQyPpOmNnMtL3LJKdJ0,nObservation%201"}'>
                LED-B2
              </option>
              <option
                value='{"file":"Illuminant LED-B3.csv","url":"/u/spd1,380,5,wi,-22,AAAABXB7DDEhG0KMO6U9cCkdvY5R7Iz-q1lWhZexe9g2jbmNotqqsJtRuLvBv4wwxqyjza0K031d1-2Z2w3F3T3Y3T2_2d1q0pzbx-wXulssquormmkiifgeegcna0ZEXYVyUSS3RfQSPGOBM_MBLOKXJoI7ISHtHN,nObservation%201"}'>
                LED-B3
              </option>
              <option
                value='{"file":"Illuminant LED-B4.csv","url":"/u/spd1,380,5,wi,-21,AAAAAABQCKDiFuJLOSUtcBj_tp4r_i9T0LrEkpfbbmZvZjbEd_hqlVoprctovNwYxNxxyKycylynyfyPx5xdw7wPvcuetbsQq9pooOmylQjuiNgsfHdicDamZIXwWcVJT3SsRnQkPjOnNvM6MLLgK0KOJwJQI1IYIG,nObservation%201"}'>
                LED-B4
              </option>
              <option
                value='{"file":"Illuminant LED-B5.csv","url":"/u/spd1,380,5,wi,-19,AABDBDB0CyENGNJRNkTEZlhEqM0p7s6ny2qgkffocMauavb4d4gRioksmZnroopTpvqAqHqKqHp9pspVo3oVntm-mKlPkOjIh-gvffeMc4blaPY9XqWZVKT8S1RwQvPyO2N5NCMPLgKwKIJgI6IZH3HWG-GkGNF2Fd,nObservation%201"}'>
                LED-B5
              </option>
              <option
                value='{"file":"Illuminant LED-BH1.csv","url":"/u/spd1,380,5,wi,-18,AAA-BXB7CuD-GKJSNEQ0T8W9ZlbEayYxVzS5QgOuNlNWOQQUTVW3aWdRfqhgi0jlkCkQkYkXkQkDjyjfjLi-i9jUkamrqfwM4B9c5bsugFZ9WvUvTNR9Q3P6O-OHNTMjLyLGKdJ3JSIxISHxHRG4GiGKF3FnFRFGE0,nObservation%201"}'>
                LED-BH1
              </option>
              <option
                value='{"file":"Illuminant LED-RGB1.csv","url":"/u/spd1,380,5,wi,-15,AAAAAAAvBDBqCeDpFQHNJZLkNpP6R8RgO2NKMbMKM7O0RdUyYkcYfghZhqgieicWaXYuXZWaVxVZVRVTViV8WlXeYvafdFgul2s01D6x1kntdOW-S_QhO3NoMnLxK9KSJmI6ITHwHKGuGQFzFaE_EsEZEED3DpDaDE,nObservation%201"}'>
                LED-RGB1
              </option>
              <option
                value='{"file":"Illuminant LED-V1.csv","url":"/u/spd1,380,5,wi,-21,BQCKErJwUNkPyu00p5ebWtSuR9S5UcWKX0Zhbcddflhqjfk4l4mjm-nTnmn_oepEpuqbrGrysdtIt5uzv3xFyh0D1s3I4j567D798h8y8u8U7n6k5P3s1-0DyAv2torUpBmukeiWgReOcQaXYmW6VaT5SkRNQCO_Ny,nObservation%201"}'>
                LED-V1
              </option>
              <option
                value='{"file":"Illuminant LED-V2.csv","url":"/u/spd1,380,5,wi,-22,BXDVG8OmcyvH8t9PzpougudXeAguj8mvo9qqsJtlu5wIxDxhxpxexLw2wlwewgwpw6xKxYxkxvx3yDyRyozEzs0a1L112g3I3l374A343f221-02zfx7wRucsgqkoimgkdiXgXeecna0ZEXYV3UYTARwQgPhOSNWMe,nObservation%201"}'>
                LED-V2
              </option>
              <option
                value='{"file":"Illuminant HP1.csv","url":"/u/spd1,380,5,wi,-6,EsFDFYFmF_HEGpG-HdHwIRJQJkIHMOIzHEPhMRIzECELGGOhZhFzE8MdE8E0FDFKFfHsLfNZPhZZ2PZgj_6voo-Ru1k8ebjYXTVBTZSIRJQUPXPJOWN8O6ObMmKwJvJYJAI3IrInIZIVIMIMIMIMInIVIDTPR-IRIz,nObservation%201"}'>
                HP1
              </option>
              <option
                value='{"file":"Illuminant HP2.csv","url":"/u/spd1,380,5,wi,-10,H0IBI6JPKBLSLvM6OdPbRATvTSSzW4VkSuYMZfTQPhQCRpW5h8T-T6ZIViWVXRYYaOfmvu183164-Cv1akFNDAGMWRp_2D9Q858i7q6b5E352X1v0SzY0Tzpw0tzr8q5qOpppKotoTn_ninTnMm2nAmvmir3ssmfmy,nObservation%201"}'>
                HP2
              </option>
              <option
                value='{"file":"Illuminant HP3.csv","url":"/u/spd1,380,5,wi,-10,IjNLP3RERVWNYracflaLXLclYrXuXCYoaDYNZiXmWfVzXHZAayarZEaKcKaWe5_V5Omzb_cLbyi-pfhVhwvLse_s7r0xv3ttoSnWkijDh_hZfeiQhfe7fueocicdX6X7WUVQUsUKUDT5TcTTTmTHUOVxTmUUTTSiSZ,nObservation%201"}'>
                HP3
              </option>
              <option
                value='{"file":"Illuminant HP4.csv","url":"/u/spd1,380,5,wi,-9,N0QGTuWbV7eegkjQo0iWbVpcdlaWYeZpcMZpaOZLX8WlYKZSZlcUZVZBZ6YOcT8XscxJcxaAY5gohdlCkzfA7w4MuJljlFhodUfRcMbLavbUYraOd0aap2afZMbqVSWNTwSfRzRNRLROQrPsQ9QCSiVWRqV1UuRuP3,nObservation%201"}'>
                HP4
              </option>
              <option
                value='{"file":"Illuminant HP5.csv","url":"/u/spd1,380,5,wi,-11,DEOARyUUUTcVgZlsphnJiAlHiEgzhajUlfkzkwjpjfg-i-jpk8okkikgkoi6mu7mvUrFkjloksrcvMqoodrJ7d8R07uEquuFo1qZn7nWmrnZjglangl2wMkKkKpQe1gqdNaeZHX9YFX8WsV_XOVRZmfOYRe3c2XTUv,nObservation%201"}'>
                HP5
              </option>
            </SearchableSelect>
          </div>
          <div className="col-md-6" style={{ textAlign: "left" }}>
            {/* <button
              type="button"
              disabled={isDisabled}
              className="btn btn-primary m-2"
              onClick={()=>{
                const link = document.createElement('a');
                link.href = getFile();
                link.download = file;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              Download Sample CSV
            </button> */}
            <button
              type="button"
              disabled={isDisabled}
              className="btn btn-info m-2"
              onClick={()=>{
                window.location.href = url;
              }}
            >
              Use Sample
            </button>
          </div>
        </div>
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

SearchableSelect.propTypes = {
  onSelect: PropTypes.func.isRequired,
  children: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default InstructionsContent;
