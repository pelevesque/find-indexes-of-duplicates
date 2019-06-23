'use strict'

const isEqual = require('lodash.isequal')

function findDuplicates (arr, stopAtFirstSet = false, duplicates, mark) {
  duplicates = typeof duplicates === 'undefined' ? [] : duplicates
  let indices = []

  const startIndex = typeof mark === 'undefined'
    ? 0
    : arr.findIndex(v => v !== mark)

  if (startIndex === -1) {
    return duplicates
  }

  for (let i = startIndex; i < arr.length; i++) {
    if (isEqual(arr[i], arr[startIndex])) {
      indices.push(i)
    }
  }

  if (stopAtFirstSet && indices.length > 1) {
    return indices
  }

  if (startIndex < arr.length - 1) {
    if (typeof mark === 'undefined') {
      mark = arr[startIndex]
    }

    const newArr = arr.map(
      (i, v) => (v === 0 || indices.indexOf(v) !== -1 ? mark : i)
    )

    if (indices.length > 1) {
      duplicates.push(indices)
    }

    findDuplicates(newArr, stopAtFirstSet, duplicates, mark)
  }

  return duplicates
}

module.exports = findDuplicates
