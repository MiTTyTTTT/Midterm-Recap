let removeDups1 = ([1,0,1,0]) 
let removeDups2 = (["The","Big","Cat",])
let removeDups3 = (["John","Taylor","John"])

function uniq (ch)  {
    let uniqueChars = [...new Set(ch)]
    return uniqueChars
}

console.log(uniq(removeDups1))
console.log(uniq(removeDups2))
console.log(uniq(removeDups3))