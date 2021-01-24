const isSimian = dna => {
  const nitrogenBasesPosibles = ["A", "T", "C", "G"]

  dna.forEach(sequence => {
    const nitrogenBases = sequence.split("")
    nitrogenBases.forEach(base => {
      if (nitrogenBases.length >= 4 && nitrogenBasesPosibles.includes(base)) return true
    })
  })
  return false
}

module.exports = { isSimian }