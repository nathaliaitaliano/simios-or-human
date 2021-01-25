const assert = require("assert")
const dnaMapper = require("../dnaMapper")

describe("SimiosOrHuman", function () {
  describe("mapSequences", function () {
    it("should return the horizontals dna sequences given a dna", function () {
      const dna = ["CT", "GC"]
      const dnaSequencesExpected = ["CT", "GC", "CG", "TC"]
      const dnaSequences = dnaMapper.mapSequences(dna)
      assert.deepStrictEqual(dnaSequencesExpected, dnaSequences)
    })

    it("should retturn the vertical dna sequences given a dna", function () {
      const dna = ["CT", "GC"]
      const dnaSequencesExpected = [ "CT", "GC", "CG", "TC"]
      const dnaSequences = dnaMapper.mapSequences(dna)
      assert.deepStrictEqual(dnaSequencesExpected, dnaSequences)
    })

    it("should retturn the left diagonal dna sequences given a dna", function () {
      const dna = ["CT", "GC"]
      const dnaSequencesExpected = [ "CT", "GC", "CG", "TC", "CC"]
      const dnaSequences = dnaMapper.mapSequences(dna)
      assert.deepStrictEqual(dnaSequencesExpected, dnaSequences)
    })
  })
})