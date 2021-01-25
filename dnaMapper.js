const mapSequences = dna => {
  const dnaSequences = []

  for (let i = 0; i < dna.length; i++) {
    let verticalBase = ""
    dna.forEach(sequence => {
      const nitrogenBases = sequence.split("")
      verticalBase = verticalBase.concat(nitrogenBases[i])
    })
    dnaSequences.push(verticalBase)
  }
  
  return dna.concat(dnaSequences)
}

module.exports = { mapSequences }