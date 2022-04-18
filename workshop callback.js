function sumar(a,b,callBack){
    return callBack(a+b);
}
document.querySelector("#operar").addEventListener('click',function(){
    var a=parseInt(document.querySelector("#a").value),
        b=parseInt(document.querySelector("#b").value);
        sumar(a,b,function(r){
            alert("El resultado es "+r);
        })
})