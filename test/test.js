/* global describe, it */
'use strict'

const expect = require('chai').expect
const findIndexesOfDuplicates = require('../index')

describe('#findIndexesOfDuplicates()', function () {
  it('should return an empty array with an empty array', function () {
    const arr = []
    const result = JSON.stringify(findIndexesOfDuplicates(arr))
    const expected = JSON.stringify([])
    expect(result).to.equal(expected)
  })

  it('should return an empty array when there are no repetitions', function () {
    const arr = [0, 1, 2, 3, 4, 5]
    const result = JSON.stringify(findIndexesOfDuplicates(arr))
    const expected = JSON.stringify([])
    expect(result).to.equal(expected)
  })

  it('should return the indexes of one repeated element starting at index 0', function () {
    const arr = [0, 0, 1, 2, 3, 4, 5]
    const result = JSON.stringify(findIndexesOfDuplicates(arr))
    const expected = JSON.stringify([[0, 1]])
    expect(result).to.equal(expected)
  })

  it('should return the indexes of one repeated element starting after index 0', function () {
    const arr = [0, 1, 1, 2, 3, 4, 5, 6, 7]
    const result = JSON.stringify(findIndexesOfDuplicates(arr))
    const expected = JSON.stringify([[1, 2]])
    expect(result).to.equal(expected)
  })

  it('should return the indexes of many sandwiched elements starting at index 0', function () {
    const arr = [0, 0, 1, 1, 2, 2, 1, 1, 0, 0]
    const result = JSON.stringify(findIndexesOfDuplicates(arr))
    const expected = JSON.stringify([[0, 1, 8, 9], [2, 3, 6, 7], [4, 5]])
    expect(result).to.equal(expected)
  })

  it('should return the indexes of many sandwiched elements starting after index 0', function () {
    const arr = [0, 1, 1, 2, 2, 3, 3, 2, 2, 1, 1]
    const result = JSON.stringify(findIndexesOfDuplicates(arr))
    const expected = JSON.stringify([[1, 2, 9, 10], [3, 4, 7, 8], [5, 6]])
    expect(result).to.equal(expected)
  })

  it('should return the indexes of many contiguous elements starting at index 0', function () {
    const arr = [0, 0, 1, 1, 2, 2]
    const result = JSON.stringify(findIndexesOfDuplicates(arr))
    const expected = JSON.stringify([[0, 1], [2, 3], [4, 5]])
    expect(result).to.equal(expected)
  })

  it('should return the indexes of many contiguous elements starting after index 0', function () {
    const arr = [0, 1, 1, 2, 2, 3, 3]
    const result = JSON.stringify(findIndexesOfDuplicates(arr))
    const expected = JSON.stringify([[1, 2], [3, 4], [5, 6]])
    expect(result).to.equal(expected)
  })

  it('should return the indexes of many interwoven elements starting at index 0', function () {
    const arr = [0, 0, 1, 1, 0, 0, 1, 1, 2, 2, 3, 3, 2, 2, 3, 3, 0, 0]
    const result = JSON.stringify(findIndexesOfDuplicates(arr))
    const expected = JSON.stringify([[0, 1, 4, 5, 16, 17], [2, 3, 6, 7], [8, 9, 12, 13], [10, 11, 14, 15]])
    expect(result).to.equal(expected)
  })

  it('should return the indexes of many interwoven elements starting after index 0', function () {
    const arr = [0, 1, 1, 2, 2, 1, 1, 2, 2, 3, 3, 4, 4, 3, 3, 4, 4, 1, 1]
    const result = JSON.stringify(findIndexesOfDuplicates(arr))
    const expected = JSON.stringify([[1, 2, 5, 6, 17, 18], [3, 4, 7, 8], [9, 10, 13, 14], [11, 12, 15, 16]])
    expect(result).to.equal(expected)
  })

  it('should only return the first set of matches when stopAtFirstSet is true', function () {
    const arr = [1, 1, 2, 2, 1, 1, 3, 3, 1, 1]
    const result = JSON.stringify(findIndexesOfDuplicates(arr, true))
    const expected = JSON.stringify([0, 1, 4, 5, 8, 9])
    expect(result).to.equal(expected)
  })
})
