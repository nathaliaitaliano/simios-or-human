const isSimian = dna => {
  const nitrogenBasesPosibles = ["A", "T", "C", "G"]
  let dnaResult = false

  dna.forEach(sequence => {
    // console.log(sequence)
    const nitrogenBases = sequence.split("")
    // console.log(nitrogenBases)
    nitrogenBases.forEach(base => {
      // console.log(base)
      dnaResult = nitrogenBases.length >= 4 && nitrogenBasesPosibles.includes(base)
    })
  })
  return dnaResult
}



module.exports = { isSimian }