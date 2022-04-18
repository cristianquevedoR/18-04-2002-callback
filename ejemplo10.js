function cuadradoCallback(value,callBack){
    setTimeout(()=>{
        callBack(value,value*value);
    },0|(Math.random()*1000));
}
cuadradoCallback(4,(value,result)=>{
    console.log(`callback:${value},${result}`);
    console.log("fin de callback")
})