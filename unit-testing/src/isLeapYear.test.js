const isLeapYear = require('./isLeapYear')

describe('check if year is a leap year', () => {
  describe('when a number is passed as argument', () => {
    it('returns true if number is a leap year', () => {
      expect(isLeapYear(2000)).toEqual(true)
    })

    it('returns false if number is not a leap year', () => {
      expect(isLeapYear(1700)).toEqual(false)
    })

    it('returns false if number is not an integer (with dot)', () => {
      expect(isLeapYear(2000.5)).toEqual(false)
    })

    // it('returns false if number is not an integer (with comma)', () => {
    //   expect(isLeapYear(2000,5)).toEqual(false)
    // })

    it('returns false if number is negative', () => {
      expect(isLeapYear(-2000)).toEqual(false)
    })
  })

  describe('when NaN is passed as argument', () => {
    it('returns false if string is passed', () => {
      expect(isLeapYear('hahaha')).toEqual(false)
    })

    it('returns false if boolean is passed', () => {
      expect(isLeapYear(true)).toEqual(false)
    })

    it('returns false if nothing/undefined is passed', () => {
      expect(isLeapYear()).toEqual(false)
    })
  })
})