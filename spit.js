function numSplit (num){
    let left = Math.floor(num/2)
    let right = num - left

    return {left,right}
}

console.log (numSplit(4))
console.log (numSplit(10))
console.log (numSplit(11))
console.log (numSplit(-9))

