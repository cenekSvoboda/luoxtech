export const asExponential = (number) => {
  let newNumber = number;
  if (typeof newNumber !== "number") {
    newNumber = Number(newNumber.match(/(\d+(\.\d+)?)/)[0] || '');
  }
  const parts = newNumber.toExponential(2).split(/(e\+|-)/);
  let result = String(newNumber);
  if (parts[2]) {
    result = parts[0] + parts[1] + parts[2].padStart(2, "0");
  }
  if (typeof number !== "number") {
    return number.replace(/(\d+(\.\d+)?)/, () => {
      return result;
    });
  }
  return result;
};

export const asDecimal = (number, precision = 4) => (typeof number === "number")?number.toFixed(precision):number.replace(/(\d+(\.\d+)?)/, (match) => {
  return Number(match).toFixed(precision);
});

export const radianceOrIrradianceSIUnit = (radianceOrIrradiance) => {
  let units = "";
  if (radianceOrIrradiance === "radiance") {
    units = "W ⋅ m⁻² ⋅ sr⁻¹ ⋅ nm⁻¹";
  } else if (radianceOrIrradiance === "irradiance") {
    units = "W ⋅ m⁻² ⋅ nm⁻¹";
  }
  return units;
};

export const mWradianceOrIrradianceSIUnit = (radianceOrIrradiance) => {
  let units = "";
  if (radianceOrIrradiance === "radiance") {
    units = "mW ⋅ m⁻² ⋅ sr⁻¹ ⋅ nm⁻¹";
  } else if (radianceOrIrradiance === "irradiance") {
    units = "mW ⋅ m⁻² ⋅ nm⁻¹";
  }
  return units;
};