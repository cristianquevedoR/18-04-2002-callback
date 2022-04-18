/*setTimeout(function(){
    console.log('He ejecutado la funcion');
},2000);*/
//setTimeout(()=>console.log("He ejecutado la funcion"),4000);
//envio de una funcion y llegando como parametro
/*const action=()=> console.log("He ejecutado la funcion");
setTimeout(action,2000);*/
function saludar(nombre){
    alert("hola "+nombre);
}

function procesarEntradaUsuario(callBack){
    let nombre = prompt("Por favor ingrese su nombre.");
    callBack(nombre);
}