const isLeapYear = (year) => {
  if (typeof year !== 'number') {
    throw new Error('The argument passed is not a number.')
  }

  if (!Number.isInteger(year) || year < 0) {
    return false
  }

  return (year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)
}

module.exports = isLeapYear