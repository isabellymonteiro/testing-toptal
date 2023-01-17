enum BalanceType {
  CREDIT = 'CREDIT',
  DEBIT = 'DEBIT',
}

interface Memorandums {
  balance: BalanceType
  amount: number
}

export const roundTo = (input: number, f = 2): number => {
  const a = Math.pow(10, f)

  return Math.round(input * a) / a
}

console.log('test')

export const b = (ar: Memorandums[], initialAmount = 0): number =>
  ar.reduce((acc, item) => {
    const a = Number(item.amount)
    const isCredit = item.balance === BalanceType.CREDIT
    return isCredit ? acc - a : acc + a
  }, initialAmount)
