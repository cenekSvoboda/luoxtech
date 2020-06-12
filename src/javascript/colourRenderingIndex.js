export const cie1960UCS = (x, y) => {
  const u = (4 * x) / ((-2 * x) + (12 * y) + 3)
  const v = (6 * y) / ((-2 * x) + (12 * y) + 3)

  return {
    u,
    v
  }
}

export const correlatedColourTemperature = (x, y) => {
  const n = (x-0.3320)/(y-0.1858)
  const cct = (-449*(n**3)) + (3525*(n**2)) - (6823.3*n) + 5520.33
  return cct
}

// Cite: CIE 015:2018 Annex E
const blackBodyspectralRadiance = (lambda, t) => {
  const pi = Math.PI
  // Plank constant
  const h = 6.62607015e-34
  // Boltzmann constant
  const k = 1.380649e-23
  // Speed of light in a vacuum
  const c = 299792458
  // Refractive index for dry air
  const n = 1

  const c1 = 2 * pi * h * (c**2)
  const c2 = h * c / k

  return ((c1 * (n**-2) * (lambda ** -5)) / pi) * (1 / (Math.exp(c2 / (n * lambda * t)) - 1))
}

// Cite: CIE 015:2018 Annex E
export const blackBodyReferenceSpectra = (lambda, T) => {
  return blackBodyspectralRadiance(lambda, T) / blackBodyspectralRadiance(560e-9, T)
}
