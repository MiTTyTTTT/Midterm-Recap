function sayhello(name,num){
    if (num==1){
        console.log("Hello "+name.charAt(0).toUpperCase()+name.slice(1))
    }else console.log("Bye "+name.charAt(0).toUpperCase()+name.slice(1))
}

sayhello("alon",1)
sayhello("anny",0)