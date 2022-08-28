function productFib(targetProduct){
    let fiboIndex = 0
    while(true){
        let fiboFactor1 = fibonnaci(fiboIndex)
        let fiboFactor2 = fibonnaci(fiboIndex + 1)
        let currentFiboProduct = fiboFactor1 * fiboFactor2

        if (currentFiboProduct === targetProduct){
            return [fiboFactor1, fiboFactor2, true]
        }
        else if(currentFiboProduct > targetProduct){
            return [fiboFactor1, fiboFactor2, false]
        }
        fiboIndex++
    }
}


function fibonnaci(fiboIndex){
    if (fiboIndex <= 1){
        return 1
    }
    else{
        return fibonnaci(fiboIndex - 1 ) + fibonnaci(fiboIndex - 2)
    }
}

console.log(productFib(7))