function sumEven(start,end){
    let sum = 0

    for (let i = start; i <= end;i++){
        if(i%2 === 0)
            sum += i 
    }
    return sum
}

console.log(sumEven(1,11)) 