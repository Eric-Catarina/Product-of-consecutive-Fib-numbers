let current = 0
let next = 1
let fibonumbers = []
let productsArray = []
let factorsArray = []
let fibonumber

let count = 0

function CompareNumbers(a, b) {
    return a - b
}


for (let i = 0; i < 30; i++) {
    fibonumber = next + current
    current = next
    next = fibonumber
    fibonumbers.push(fibonumber)

    productsArray.push(fibonumber * current)
    factorsArray.push(fibonumber, current)
}
let factorsArrayWithProd = productsArray


function ReturnTheTwoFactorsOfFalseNumber(number) {

   

    factorsArrayWithProd = productsArray
    factorsArrayWithProd.push(number)

    console.log("Antes do Sort: " + factorsArrayWithProd)

    factorsArrayWithProd.sort(CompareNumbers)

    console.log("Depois do Sort: " + factorsArrayWithProd)


    
    let indexOfTheProduct = factorsArrayWithProd.indexOf(number)
    let firstFactor = (factorsArray[2 * indexOfTheProduct] )
    let secondFactor = (factorsArray[(2 * indexOfTheProduct) + 1 ])

   
        return [secondFactor, firstFactor, false]

    

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
    else if(!(productsArray.includes(prod))) {
        result = ReturnTheTwoFactorsOfFalseNumber(prod)
        count ++

        return result
    }
}




  