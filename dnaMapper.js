const mapSequences = dna => {
  const dnaSequences = []

  for (let i = 0; i < dna.length; i++) {
    let verticalSequence = ""
    dna.forEach(sequence => {
      verticalSequence = verticalSequence.concat(sequence.charAt(i))
    })
    dnaSequences.push(verticalSequence)
  }

  const firstSequence = dna[0].split("")
  for (let i = 0; i < firstSequence.length; i++) {
    let leftDiagonalSequence = dna[0].charAt(i)
    let nextPosition = i+1
    while (nextPosition < dna.length) {
      leftDiagonalSequence = leftDiagonalSequence.concat(dna[nextPosition].charAt(nextPosition))
      nextPosition++
    }
    dnaSequences.push(leftDiagonalSequence)
  }

  return dna.concat(dnaSequences)
}

module.exports = { mapSequences }