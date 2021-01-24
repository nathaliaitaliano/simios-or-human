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
    it("should return false given a dna sequence with one chemical base", function () {
      const dna = ["T"]
      const dnaResult = dnaChecker.isSimian(dna)
      assert.strictEqual(dnaResult, false)
    })
  })
})