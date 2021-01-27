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

  for (let k = dna.length - 1; k >= 0; k--) {
    let rightDiagonalSequenceHorizontal = dna[0].charAt(k)
    let nextDnaSequencePosition = 1
    let nextNitrogenBasePosition = k - 1
    while (nextDnaSequencePosition < dna.length && nextNitrogenBasePosition >= 0) {
      rightDiagonalSequenceHorizontal = rightDiagonalSequenceHorizontal.concat(dna[nextDnaSequencePosition].charAt(nextNitrogenBasePosition))
      nextDnaSequencePosition++
      nextNitrogenBasePosition--
    }
    rightDiagonalSequences.push(rightDiagonalSequenceHorizontal)
  }


  for (let i = 1; i < dna.length; i++) {
    let rightDiagonalSequenceVertical = dna[i].charAt(dna.length - 1)
    let nextDnaSequencePosition = i + 1
    let nextNitrogenBasePosition = dna.length - 2
    while (nextDnaSequencePosition < dna.length && nextNitrogenBasePosition >= 0) {
      rightDiagonalSequenceVertical = rightDiagonalSequenceVertical.concat(dna[nextDnaSequencePosition].charAt(nextNitrogenBasePosition))
      nextDnaSequencePosition++
      nextNitrogenBasePosition--
    }
    rightDiagonalSequences.push(rightDiagonalSequenceVertical)
  }

  return rightDiagonalSequences
}

module.exports = { mapSequences }