const isSimian = dna => {
  return dnaValidator(dna) && checkNitrogenBasesSequence(dna)
}

const dnaValidator = dna => {
  const nitrogenBasesPosibles = ["A", "T", "C", "G"]
  let dnaValidation = false

  dna.forEach(nitrogenBasesSequence => {
    const nitrogenBases = nitrogenBasesSequence.split("")
    nitrogenBases.forEach(base =>
      dnaValidation = nitrogenBases.length >= 4 && nitrogenBasesPosibles.includes(base))
  })
  return dnaValidation
}

const checkNitrogenBasesSequence = dna => {
  const sequencesToBeSimian = ["AAAA", "TTTT", "CCCC", "GGGG"]
  let simianDna = false

  dna.forEach(nitrogenBasesSequence => {
    sequencesToBeSimian.forEach(simianSequence => {
      if (nitrogenBasesSequence.indexOf(simianSequence) !== -1) return simianDna = true
    })
  })
  return simianDna
}

module.exports = { isSimian }