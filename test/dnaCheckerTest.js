const assert = require("assert")
const dnaChecker = require("../dnaChecker")

describe("SimiosOrHuman", function () {
  describe("isSimian", function () {
    it("should return false given a empty dna input", function () {
      const dna = []
      const dnaResult = dnaChecker.isSimian(dna)
      assert.strictEqual(dnaResult, false)
    })
    it("should return false given a empty dna sequence", function () {
      const dna = [""]
      const dnaResult = dnaChecker.isSimian(dna)
      assert.strictEqual(dnaResult, false)
    })
    it("should return false given a dna sequence with one nitrogen base", function () {
      const dna = ["T"]
      const dnaResult = dnaChecker.isSimian(dna)
      assert.strictEqual(dnaResult, false)
    })
    it("should return false given a dna sequence with two nitrogen bases", function () {
      const dna = ["TC"]
      const dnaResult = dnaChecker.isSimian(dna)
      assert.strictEqual(dnaResult, false)
    })
    it("should return false given a dna sequence with three nitrogen bases", function () {
      const dna = ["TCA"]
      const dnaResult = dnaChecker.isSimian(dna)
      assert.strictEqual(dnaResult, false)
    })
    it("should return false given a dna sequence with four different nitrogen bases", function () {
      const dna = ["TCAG"]
      const dnaResult = dnaChecker.isSimian(dna)
      assert.strictEqual(dnaResult, false)
    })
    it("should return false given a dna sequence with a nitrogen base that is not A, T, C or G ", function () {
      const dna = ["CCTM"]
      const dnaResult = dnaChecker.isSimian(dna)
      assert.strictEqual(dnaResult, false)
    })
  })
})