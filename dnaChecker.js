const isSimian = dna => {
  return dnaValidator(dna) && checkNitrogenBasesSequence(dna)
}

function dnaValidator(dna) {
  const posiblesNitrogenBases = ["A", "T", "C", "G"]
  let dnaValidation = true
  return dna.every(nitrogenBasesSequence => nitrogenBasesSequence.split("").every(base => posiblesNitrogenBases.includes(base)))
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