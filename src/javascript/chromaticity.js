import CIEXYZ31 from "../data/ciexyz31.json";
import CIEXYZ64 from "../data/ciexyz64.json";
import { integrateWithWeights } from "./rows";

const calculateChromaticity = (selectedRows, selectedRowsSampleCount, data) => {
  const allX = integrateWithWeights(
    selectedRows,
    selectedRowsSampleCount,
    data,
    "X"
  );
  const allY = integrateWithWeights(
    selectedRows,
    selectedRowsSampleCount,
    data,
    "Y"
  );
  const allZ = integrateWithWeights(
    selectedRows,
    selectedRowsSampleCount,
    data,
    "Z"
  );

  const output = new Array(selectedRowsSampleCount);

  for (let i = 0; i < output.length; i += 1) {
    const x = allX[i] / (allX[i] + allY[i] + allZ[i]);
    const y = allY[i] / (allX[i] + allY[i] + allZ[i]);
    const Y = allY[i];
    const Z = allZ[i];
    const X = allX[i];
    const Xnor = allX[i]/Y;
    const Ynor = 1;
    const Znor = allZ[i]/Y;
    output[i] = {
      Y,
      x,
      y,
      X,
      Z,
      Xnor,
      Ynor,
      Znor
    };
  }

  return output;
};

export const calculateChromaticity31 = (
  selectedRows,
  selectedRowsSampleCount
) => {
  return calculateChromaticity(selectedRows, selectedRowsSampleCount, CIEXYZ31);
};

export const calculateChromaticity64 = (
  selectedRows,
  selectedRowsSampleCount
) => {
  return calculateChromaticity(selectedRows, selectedRowsSampleCount, CIEXYZ64);
};
