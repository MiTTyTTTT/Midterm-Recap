
function finddig (n){
    if (n==0){
        return 0
    }
    else{
        return Math.max(n%10 , finddig(n/10))
    }

}
console.log (finddig(379))