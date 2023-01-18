const isLeapYear = (year) => {
  if (!Number.isInteger(year) || year < 0) {
    return false
  }

  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true
      } else {
        return false
      }
    } else {
      return true
    }
  } else {
    return false
  }
}

module.exports = isLeapYear