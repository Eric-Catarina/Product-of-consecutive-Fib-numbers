let current = 0
let next = 1
let fibonumbers = []
let productsArray = []
let factorsArray = []
let fibonumber

for (let i = 0; i < 150; i++) {
  fibonumber = next + current
  current = next
  next = fibonumber
  fibonumbers.push(fibonumber)

  productsArray.push(fibonumber * current)
  factorsArray.push(fibonumber, current)
}

function ReturnTheTwoFactorsOfFalseNumber(number) {
  function CompareNumbers(a, b) {
    return a - b
  }
  
  let factorsArrayWithProd = productsArray
  factorsArrayWithProd.push(number)
  factorsArrayWithProd.sort(CompareNumbers)
  let indexOfTheProduct = factorsArrayWithProd.indexOf(number)
  let firstFactor = (factorsArray[2*indexOfTheProduct])
  let secondFactor = (factorsArray[(2*indexOfTheProduct) + 1]) 

  return [secondFactor, firstFactor, false]
}

function ReturnTwoFactorsOfTrueNumber(number){
let indexOfTheProduct = productsArray.indexOf(number)
  
let firstFactor = factorsArray[(indexOfTheProduct*2)]
let secondFactor = factorsArray[(indexOfTheProduct*2) + 1]

return [secondFactor, firstFactor, true]
}
function productFib(prod) {
  if (productsArray.includes(prod)){
    return ReturnTwoFactorsOfTrueNumber(prod)
  }
  else{
    return ReturnTheTwoFactorsOfFalseNumber(prod)
  }
}

