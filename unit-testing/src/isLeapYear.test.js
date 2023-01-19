const isLeapYear = require('./isLeapYear')

describe('isLeapYear', () => {
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

    it('returns false if number is negative', () => {
      expect(isLeapYear(-2000)).toEqual(false)
    })
  })

  describe('when something that is not a number is passed as argument', () => {
    it('throws error if string is passed', () => {
      expect(() => isLeapYear('hahaha')).toThrow('The argument passed is not a number.')
    })

    it('throws error if boolean is passed', () => {
      expect(() => isLeapYear(true)).toThrow('The argument passed is not a number.')
    })

    it('throws error if nothing/undefined is passed', () => {
      expect(() => isLeapYear()).toThrow('The argument passed is not a number.')
    })
  })
})