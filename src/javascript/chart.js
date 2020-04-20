import {mapSamples} from './rows.js'
import {sampleTitles} from './helpers.js'
import Chart from 'chart.js'

const generateHues = (sampleCount) => {
  const hues = []
  const hueInterval = 360 / sampleCount
  for (let i = 0; i < sampleCount; i += 1) {
    hues.push(i * hueInterval)
  }
  return hues
}

const createDataSourceInput = (value, id, text) => {
  const container = document.createElement('div')
  container.className = 'form-check-inline'
  const input = document.createElement('input')
  input.className = 'form-check-input'
  input.type = 'radio'
  input.name = 'chart-data'
  input.value = value
  input.id = id
  const label = document.createElement('label')
  label.className = 'form-check-label'
  label.setAttribute('for', id)
  const textNode = document.createTextNode(text)
  label.appendChild(textNode)
  container.appendChild(input)
  container.appendChild(label)
  return container
}

const createDataSourceForm = () => {
  const form = document.createElement('form')
  const rawDataInput = createDataSourceInput('raw', 'chart-data-raw', 'Raw data')
  const normalisedDataInput = createDataSourceInput('normalised', 'chart-data-normalised', 'Normalised data')
  const log10Input = createDataSourceInput('log10', 'chart-data-log10', 'Log10')
  form.appendChild(rawDataInput)
  form.appendChild(normalisedDataInput)
  form.appendChild(log10Input)
  return form
}

const addDataSourcesToChart = (chartCanvas, chart, rows, sampleCount) => {
  const maxValues = []
  for (let sampleIdx = 0; sampleIdx < sampleCount; sampleIdx += 1) {
    const spectrum = rows.map((row) => row[sampleIdx + 1])
    maxValues[sampleIdx] = Math.max(...spectrum)
  }
  const normalisedRows = mapSamples(rows, (wavelength, sample, sampleIndex) => {
    return sample / maxValues[sampleIndex]
  })

  const log10Rows = mapSamples(rows, (wavelength, sample) => {
    return Math.log10(sample)
  })

  const chartForm = createDataSourceForm()
  chartCanvas.parentNode.insertBefore(chartForm, chartCanvas)

  const toggleDataSource = (event) => {
    let data = []
    let yAxisLabel = ''
    if (event.target.value === 'raw') {
      yAxisLabel = 'Spectral irradiance [W/(m² nm)]'
      data = rows
    } else if (event.target.value === 'normalised') {
      yAxisLabel = 'Normalised spectral irradiance (relative to max.)'
      data = normalisedRows
    } else if (event.target.value === 'log10') {
      yAxisLabel = 'Log₁₀ spectral irradiance [log₁₀ W/(m² nm)]'
      data = log10Rows
    }
    chart.options.scales.yAxes[0].scaleLabel.labelString = yAxisLabel
    chart.data.datasets.forEach((dataset, index) => {
      dataset.data = data.map((row) => row[index + 1])
    })
    chart.update()
  }

  chartForm.querySelectorAll('input[name="chart-data"]').forEach((input) => {
    input.addEventListener('click', toggleDataSource, false)
  })

  document.getElementById('chart-data-raw').checked = true
}

/* eslint-disable max-lines-per-function */
export const createChart = (chartCanvas, rows, sampleCount) => {
  const datasets = []
  const hues = generateHues(sampleCount)
  const labels = sampleTitles(sampleCount)

  for (let sampleIdx = 0; sampleIdx < sampleCount; sampleIdx += 1) {
    const lineColor = 'hsl(' + hues[sampleIdx] + ',100%,50%)'
    datasets[sampleIdx] = {
      'backgroundColor': lineColor,
      'borderColor': lineColor,
      'data': rows.map((row) => row[sampleIdx + 1]),
      'fill': false,
      'label': labels[sampleIdx],
      'pointRadius': 1
    }
  }
  const waveLengths = rows.map((row) => row[0]);

  const chart = new Chart(chartCanvas, { // eslint-disable-line no-new
    'data': {
      datasets,
      'labels': waveLengths
    },
    'options': {
      'scales': {
        'xAxes': [
          {
            'scaleLabel': {
              'display': true,
              'labelString': 'Wavelength [nm]'
            },
            'ticks': {
              'maxTicksLimit': 20
            }
          }
        ],
        'yAxes': [
          {
            'scaleLabel': {
              'display': true,
              'labelString': 'Spectral irradiance [W/(m² nm)]'
            }
          }
        ]
      }
    },
    'type': 'line'
  });

  addDataSourcesToChart(chartCanvas, chart, rows, sampleCount)
}
/* eslint-enable max-lines-per-function */
