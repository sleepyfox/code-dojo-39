assert = require('assert')
pairs = require('./pairs')

const start = [1,2,3,4,5]
const target = [[1,2], [2,3], [3,4], [4,5]]

assert.deepEqual(pairs(start), target)

const two = [1,2]
const result = [[1,2]]

assert.deepEqual(pairs(two), result)
