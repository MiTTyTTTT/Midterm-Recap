function hiDig (num){

    let split = num.toString().split("").map(Number)


    return Math.max(split)
}

console.log(hiDig(379))
console.log(hiDig(2))
console.log(hiDig(377401))