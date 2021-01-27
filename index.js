const dnaMapper = require('./dnaMapper')
const dnaChecker = require('./dnaChecker')

const dnaX = ["CTGAGA", "CTGAGC", "TATTGT", "AGAGGG", "CCCCTA", "TCACTG"]
const dnaY = ["ATGCGA", "CAGTGC", "TTATTT", "AGACGG", "GCGTCA", "TCACTG"]

const dnaXSequences = dnaMapper.mapSequences(dnaX)
const dnaYSequences = dnaMapper.mapSequences(dnaY)

console.log(`dnaX Is a simian DNA? => ${dnaChecker.isSimian(dnaXSequences)} <=`)
console.log(`dnaY Is a simian DNA? => ${dnaChecker.isSimian(dnaYSequences)} <=`)