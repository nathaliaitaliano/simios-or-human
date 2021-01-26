const mapSequences = dna => {
  const dnaSequences = dna.concat(mapVerticalSequences(dna), mapLeftDiagonalSequences(dna), mapRightDiagonalSequences(dna))
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
      leftDiagonalSequenceVertical = leftDiagonalSequenceVertical.concat(dna[nextPosition].charAt(nextPosition - 1))
      nextPosition++
    }
    leftDiagonalSequences.push(leftDiagonalSequenceVertical)
  }
  return leftDiagonalSequences
}

const mapRightDiagonalSequences = dna => {
  const rightDiagonalSequences = []

  for (let i = 0; i < dna.length; i++) {
    let rightDiagonalSequenceHorizontal = dna[0].charAt(dna.length - 1)
    let nextPosition = i + 1
    let nextPositionCharAt = dna.length - 2

    while (nextPosition < dna.length && nextPositionCharAt >= 0) {
      rightDiagonalSequenceHorizontal = rightDiagonalSequenceHorizontal.concat(dna[nextPosition].charAt(nextPositionCharAt))
      nextPosition++
      nextPositionCharAt--
    }
    rightDiagonalSequences.push(rightDiagonalSequenceHorizontal)
  }

  for (let i = 1; i < dna.length; i++) {
    let rightDiagonalSequenceVertical = dna[1].charAt(dna.length - 1)
    let nextPosition = i + 1
    let nextPositionCharAt = dna.length - 2

    while (nextPosition < dna.length && nextPositionCharAt >= 0) {
      rightDiagonalSequenceVertical = rightDiagonalSequenceVertical.concat(dna[nextPosition].charAt(nextPositionCharAt))
      nextPosition++
      nextPositionCharAt--
    }
    rightDiagonalSequences.push(rightDiagonalSequenceVertical)
  }
  return rightDiagonalSequences
}

module.exports = { mapSequences }