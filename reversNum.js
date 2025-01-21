function renum (num){
    num = num + "";
    return num.split("").reverse().join("");
}

console.log(Number(renum(32243)));
console.log(String(renum("NauMit")));