import {calculateLuminance, calculateIrradiance, calculateChromaticity31, calculateChromaticity64} from './rows.js'
import {createTableHeader, createTableRow} from './table.js'
import {asDecimal, sampleTitles} from './helpers.js'

const createCalculationTableHeader = (table, sampleCount) => {
  const titles = ["Condition", ...sampleTitles(sampleCount)]
  createTableHeader(table, titles)
}

export const createCalculationTable = (table, rows, sampleCount, simplifiedReport) => {
  createCalculationTableHeader(table, sampleCount)

  const luminanceTotals = calculateLuminance(rows, sampleCount)
  const chromaticity31  = calculateChromaticity31(rows, sampleCount)
  const chromaticity31XValues = chromaticity31.map((c) => c.x)
  const chromaticity31YValues = chromaticity31.map((c) => c.y)
  const chromaticity64  = calculateChromaticity64(rows, sampleCount)
  const chromaticity64XValues = chromaticity64.map((c) => c.x)
  const chromaticity64YValues = chromaticity64.map((c) => c.y)
  const sConeTotals = calculateIrradiance(rows, sampleCount, 'sCone')
  const mConeTotals = calculateIrradiance(rows, sampleCount, 'mCone')
  const lConeTotals = calculateIrradiance(rows, sampleCount, 'lCone')
  const rodTotals = calculateIrradiance(rows, sampleCount, 'rod')
  const melTotals = calculateIrradiance(rows, sampleCount, 'mel')
  createTableRow(table, "Illuminance [lux]", luminanceTotals, asDecimal)
  if (!simplifiedReport) {
    createTableRow(table, "CIE 1931 xy chromaticity (x)", chromaticity31XValues, asDecimal)
    createTableRow(table, "CIE 1931 xy chromaticity (y)", chromaticity31YValues, asDecimal)
    createTableRow(table, "CIE 1964 x₁₀y₁₀ chromaticity (x₁₀)", chromaticity64XValues, asDecimal)
    createTableRow(table, "CIE 1964 x₁₀y₁₀ chromaticity (y₁₀)", chromaticity64YValues, asDecimal)
  }
  createTableRow(table, "S-cone-opic irradiance (mW/m²)", sConeTotals, asDecimal)
  createTableRow(table, "M-cone-opic irradiance (mW/m²)", mConeTotals, asDecimal)
  createTableRow(table, "L-cone-opic irradiance (mW/m²)", lConeTotals, asDecimal)
  createTableRow(table, "Rhodopic irradiance (mW/m²)", rodTotals, asDecimal)
  createTableRow(table, "Melanopic irradiance (mW/m²)", melTotals, asDecimal)
}