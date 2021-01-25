const assert = require("assert")
const dnaMapper = require("../dnaMapper")

describe("SimiosOrHuman", function () {
  describe("mapSequences", function () {
    it("should return the horizontals dna sequences given a dna", function () {
      const dna = ["CTGAGA", "CTGAGC", "TATTGT", "AGAGGG", "CCCCTA", "TCACTG"]
      const dnaSequencesExpected = ["CTGAGA", "CTGAGC", "TATTGT", "AGAGGG", "CCCCTA", "TCACTG"]
      const dnaSequences = dnaMapper.mapSequences(dna)
      assert.deepStrictEqual(dnaSequencesExpected, dnaSequences)
    })
  })
})