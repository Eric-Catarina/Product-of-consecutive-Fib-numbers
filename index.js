let current = 0
let next = 1
let fibonumbers = []
let productsArray = []
let factorsArray = []
let fibonumber
let factorsArrayWithProd = productsArray


for (let i = 0; i < 30; i++) {
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

    factorsArrayWithProd = productsArray
    factorsArrayWithProd.push(number)
    factorsArrayWithProd.sort(CompareNumbers)

    
    let indexOfTheProduct = factorsArrayWithProd.indexOf(number)
    let firstFactor_ = (factorsArray[2 * indexOfTheProduct] - 1)
    let secondFactor_ = (factorsArray[(2 * indexOfTheProduct) ])

    return [secondFactor_, firstFactor_, false]
}

function ReturnTwoFactorsOfTrueNumber(number) {
    let indexOfTheProduct = productsArray.indexOf(number)

    let firstFactor = factorsArray[(indexOfTheProduct * 2)]
    let secondFactor = factorsArray[(indexOfTheProduct * 2) + 1]

    return [secondFactor, firstFactor, true]
}

function productFib(prod) {
    if (productsArray.includes(prod)) {
        return ReturnTwoFactorsOfTrueNumber(prod)
    }
    else {
        return ReturnTheTwoFactorsOfFalseNumber(prod)
    }
}

console.log(productFib(4895))
console.log(productFib(5895))
console.log(productFib(74049690))
console.log(productFib(84049690))
console.log(productFib(193864606))
console.log(productFib(447577))
console.log(productFib(602070))
  