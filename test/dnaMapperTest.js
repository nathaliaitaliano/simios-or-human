const assert = require("assert")
const dnaMapper = require("../dnaMapper")

describe("SimiosOrHuman", function () {
  describe("mapSequences", function () {
    const contains = (array, target) => target.every(targetElement => array.includes(targetElement))

    it("should return the horizontals dna sequences given a dna", function () {
      const dna = ["CT", "GC"]
      const dnaSequencesExpected = ["CT", "GC"]
      const dnaSequences = dnaMapper.mapSequences(dna)
      assert.ok(contains(dnaSequences, dnaSequencesExpected))
    })

    it("should retturn the vertical dna sequences given a dna", function () {
      const dna = ["CT", "GC"]
      const dnaSequencesExpected = ["CT", "GC", "CG", "TC", "CC", "T"]
      const dnaSequences = dnaMapper.mapSequences(dna)
      assert.ok(contains(dnaSequences, dnaSequencesExpected))
    })

    it("should retturn the left diagonal dna sequences given a dna", function () {
      const dna = ["CT", "GC"]
      const dnaSequencesExpected = ["CT", "GC", "CG", "TC", "G", "CC", "T"]
      const dnaSequences = dnaMapper.mapSequences(dna)
      assert.ok(contains(dnaSequences, dnaSequencesExpected))
    })
  })
})