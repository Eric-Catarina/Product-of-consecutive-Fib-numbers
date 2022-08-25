let current = 0
let next = 1
let fibonumbers = []
let productsArray =[]
let factorsArray = []

for (let i = 0; i < 10; i++){
        fibonumber = next + current
        current = next
        next = fibonumber
        fibonumbers.push(fibonumber)


        productsArray.push(fibonumber*current)
        factorsArray.push(fibonumber , current)
}

function productFib(prod) {
    let productPositionOnProductsArray = productsArray.indexOf(prod)
    let firstFactor = factorsArray[productPositionOnProductsArray * 2]
    let secondFactor = factorsArray[(productPositionOnProductsArray * 2) + 1]

    if (productPositionOnProductsArray == -1) {
        return ([secondFactor, firstFactor, false])
    }
    else {


        return ([secondFactor, firstFactor, true])
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

console.log(productsArray)
console.log(FindNearestNumberOnArray(16, productsArray))