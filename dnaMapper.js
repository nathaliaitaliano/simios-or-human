const mapSequences = dna => {
  const dnaSequences = dna.concat(mapVerticalSequences(dna), mapLeftDiagonalSequences(dna))
  return dnaSequences
}

const mapVerticalSequences = dna => {
  const verticalSequences = []

  for (let i = 0; i < dna.length; i++) {
    let verticalSequence = ""
    dna.forEach(sequence => {
      verticalSequence = verticalSequence.concat(sequence.charAt(i))
    })
    verticalSequences.push(verticalSequence)
  }

  return verticalSequences
}

const mapLeftDiagonalSequences = dna => {
  const leftDiagonalSequences = []

  for (let i = 0; i < dna.length; i++) {
    let leftDiagonalSequenceHorizontal = dna[0].charAt(i)
    let nextPosition = i + 1
    while (nextPosition < dna.length) {
      leftDiagonalSequenceHorizontal = leftDiagonalSequenceHorizontal.concat(dna[nextPosition].charAt(nextPosition))
      nextPosition++
    }
    leftDiagonalSequences.push(leftDiagonalSequenceHorizontal)
  }

  for (let i = 1; i < dna.length; i++) {
    let leftDiagonalSequenceVertical = dna[1].charAt(i - 1)
    let nextPosition = i + 1
    while (nextPosition < dna.length) {
      leftDiagonalSequenceVertical = leftDiagonalSequenceVertical.concat(dna[nextPosition].charAt(nextPosition))
      nextPosition++
    }
    leftDiagonalSequences.push(leftDiagonalSequenceVertical)
  }
  return leftDiagonalSequences
}

module.exports = { mapSequences }