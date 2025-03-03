import Chart from "chart.js";
import { mapSamples } from "./rows";
import { radianceOrIrradianceSIUnit, mWradianceOrIrradianceSIUnit } from "./helpers";
import { referenceSpectrum } from "./referenceSpectra";

const generateHues = (selectedRowsSampleCount) => {
  const hues = [];
  const hueInterval = 360 / selectedRowsSampleCount;
  for (let i = 0; i < selectedRowsSampleCount; i += 1) {
    hues.push(i * hueInterval);
  }
  return hues;
};

const createChart = (
  chartCanvas,
  radianceOrIrradiance,
  selectedRows,
  selectedRowsSampleCount,
  measurementLabels,
  yAxisScaling,
  displayedReference,
  isByFrequency
) => {
  const datasets = [];
  const hues = generateHues(selectedRowsSampleCount);

  /**
   * We use .map() to iterate over each sub-array.
   * The first element arr[0] remains unchanged.
   * .slice(1).map(value => value * 1000) takes all elements except the first and multiplies them by 1000.
   * We use spread syntax (...) to merge the transformed values back into a new array.
   */
  let data = selectedRows.map(arr =>
    [arr[0], ...arr.slice(1).map(value => value * 1000)]
  );

  let yAxisLabel = `Spectral ${radianceOrIrradiance} [${mWradianceOrIrradianceSIUnit(
    radianceOrIrradiance
  )}]`;

  if (yAxisScaling === "normalised") {
    const maxValues = [];
    for (
      let sampleIdx = 0;
      sampleIdx < selectedRowsSampleCount;
      sampleIdx += 1
    ) {
      const spectrum = selectedRows.map((row) => row[sampleIdx + 1]);
      maxValues[sampleIdx] = Math.max(...spectrum);
    }
    data = mapSamples(selectedRows, (wavelength, sample, sampleIndex) => {
      return sample / maxValues[sampleIndex];
    });
    yAxisLabel = `Normalised spectral ${radianceOrIrradiance} (relative to max.)`;
  } else if (yAxisScaling === "log10") {
    data = mapSamples(selectedRows, (wavelength, sample) => {
      return Math.log10(sample);
    });
    yAxisLabel = `Log₁₀ spectral ${radianceOrIrradiance} [log₁₀ ${radianceOrIrradianceSIUnit(
      radianceOrIrradiance
    )}]`;
  }

  if (isByFrequency) {
    data = data.map((row) => [299792458/row[0]/1000, ...row.slice(1).map(value => value)])
  }

  for (let sampleIdx = 0; sampleIdx < selectedRowsSampleCount; sampleIdx += 1) {
    const lineColor = `hsl(${hues[sampleIdx]},100%,50%)`;
    datasets[sampleIdx] = {
      backgroundColor: lineColor,
      borderColor: lineColor,
      data: data.map((row) => {
        return { x: row[0], y: row[sampleIdx + 1] };
      }),
      fill: false,
      label: measurementLabels[sampleIdx],
      pointRadius: 1,
    };
  }

  if (displayedReference !== "none") {
    const reference = referenceSpectrum(displayedReference, yAxisScaling);
    if (isByFrequency) {
      reference.data = reference.data.map((row) => {
        return { x: 299792458/parseInt(row.x,10)/1000, y: row.y };
      })
    }
    datasets.push({
      data: reference.data,
      label: reference.name,
      fill: false,
      pointRadius: 1,
    });
  }
  if (isByFrequency) {
    return new Chart(chartCanvas, {
      // eslint-disable-line no-new
      data: {
        datasets,
      },
      options: {
        scales: {
          xAxes: [
            {
              type: "linear",
              scaleLabel: {
                display: true,
                labelString: "Frequency [THz]",
              },
              ticks: {
                min: 380,
                max: 790,
                stepSize: 10,
              },
            },
          ],
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: yAxisLabel,
              },
            },
          ],
        },
      },
      type: "line",
    });
  }

  return new Chart(chartCanvas, {
    // eslint-disable-line no-new
    data: {
      datasets,
    },
    options: {
      scales: {
        xAxes: [
          {
            type: "linear",
            scaleLabel: {
              display: true,
              labelString: "Wavelength [nm]",
            },
            ticks: {
              min: 380,
              max: 780,
              stepSize: 10,
            },
          },
        ],
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: yAxisLabel,
            },
          },
        ],
      },
    },
    type: "line",
  });
};

export default createChart;
