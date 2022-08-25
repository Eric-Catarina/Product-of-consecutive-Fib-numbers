let current = 0
let next = 1
let fibonumbers = []
let productsArray =[]



for (let i = 0; i < 40; i++){
        fibonumber = next + current
        current = next
        next = fibonumber
        fibonumbers.push(fibonumber)
        productsArray.push(fibonumber*current)
    
}

function productFib(prod){
    let productPositionOnProductsArray = productsArray.indexOf(prod)
    if (productPositionOnProductsArray == -1){
        return false
    }
    else{
        return true

    }
    
}
let prod = 4895
console.log(productFib(prod))