function captoFont (cap){
   
    let front = cap.match(/[A-Z]/g).join("")
    let back = cap.match(/[a-z]/g).join("")
    

    return front+back

}

console.log (captoFont("hApPy"))
console.log (captoFont("moveMENT"))
console.log (captoFont("shortCAKE"))