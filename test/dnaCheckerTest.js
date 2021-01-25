const assert = require("assert")
const dnaChecker = require("../dnaChecker")

describe("SimiosOrHuman", function () {
  describe("isSimian", function () {
    it("should return false given a empty dna input", function () {
      const dna = []
      assert.strictEqual(dnaChecker.isSimian(dna), false)
    })

    it("should return false given a empty dna sequence", function () {
      const dna = [""]
      assert.strictEqual(dnaChecker.isSimian(dna), false)
    })

    it("should return false given a dna sequence with one nitrogen base", function () {
      const dna = ["T"]
      assert.strictEqual(dnaChecker.isSimian(dna), false)
    })

    it("should return false given a dna sequence with two nitrogen bases", function () {
      const dna = ["TC"]
      const dnaResult =
        assert.strictEqual(dnaChecker.isSimian(dna), false)
    })

    it("should return false given a dna sequence with three nitrogen bases", function () {
      const dna = ["TCA"]
      assert.strictEqual(dnaChecker.isSimian(dna), false)
    })

    it("should return false given a dna sequence with four different nitrogen bases", function () {
      const dna = ["TCAG"]
      assert.strictEqual(dnaChecker.isSimian(dna), false)
    })

    it("should return false given a dna sequence with a nitrogen base that is not A, T, C or G ", function () {
      const dna = ["CCTM"]
      assert.strictEqual(dnaChecker.isSimian(dna), false)
    })

    it("should return true given a dna sequence with four followed equals nitrogen bases", function () {
      const dna = ["AAAA"]
      assert.strictEqual(dnaChecker.isSimian(dna), true)
    })

    it("should return false given a dna that not contains, at least, one sequence with four followedequals nitrogen bases", function () {
      const dna = ["TCGT", "AAAT", "CCTT", "GGTA"]
      assert.strictEqual(dnaChecker.isSimian(dna), false)
    })

    it("should return true given a dna that contains, at least, one nitrogen sequence with four followed equals nitrogen bases", function () {
      const dna = ["TCGT", "AAAT", "CCCC", "TCGT"]
      assert.strictEqual(dnaChecker.isSimian(dna), true)
    })
  })
})