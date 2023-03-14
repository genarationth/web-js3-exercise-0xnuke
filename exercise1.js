//exercise1

const feeCalculator = (amount) =>{
  let transactionFee = 3
  let interestFee = 0.001
  let totalFee = (amount*interestFee)+transactionFee
  let totalAmount = amount+totalFee
  let text = `Maria total cost for this month is ${(totalAmount).toFixed(2)}, total fee is ${(totalFee).toFixed(2)}}`
  return text
}

console.log(feeCalculator(129))
