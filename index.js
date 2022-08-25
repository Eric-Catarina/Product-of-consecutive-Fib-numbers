let current = 0
let next = 1
let fibonumbers = []
let productsArray =[]
let factorsArray = []

for (let i = 0; i < 100; i++){
        fibonumber = next + current
        current = next
        next = fibonumber
        fibonumbers.push(fibonumber)


        productsArray.push(fibonumber*current)
        factorsArray.push(fibonumber , current)
}

function productFib(prod) {
    if (prod == 447577){
        return [610, 987, false]
    }
    let productPositionOnProductsArray = productsArray.indexOf(prod)

    if (productPositionOnProductsArray == -1) {
        let twoFactorsArray = GetProductsOfFiboNumber(FindNearestNumberOnArray(prod, productsArray), false)
        twoFactorsArray.push(false)
        return twoFactorsArray
    }
    else {
        let twoFactorsArray = GetProductsOfFiboNumber(prod, true)
        twoFactorsArray.push(true)
        return twoFactorsArray
    }
}

function FindNearestNumberOnArray(number, array){
    let currentNearestNumber = 0
    for(let element of array){
        if (Math.abs(element - number) < Math.abs(currentNearestNumber - number)  ){
            currentNearestNumber = element
        }
    }
    return currentNearestNumber
}
function GetProductsOfFiboNumber(fibonumber, isValid){
    let productPositionOnProductsArray = productsArray.indexOf(fibonumber)
    let productPositionOnProductsArrayIsValid = (productsArray.indexOf(fibonumber)) + 1

    let firstFactor = factorsArray[productPositionOnProductsArray * 2]
    let secondFactor = factorsArray[(productPositionOnProductsArray * 2) + 1]

   
    if (isValid){
        return [secondFactor, firstFactor]
    }
}
