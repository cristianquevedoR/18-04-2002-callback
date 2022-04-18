function obtenerResultados(resultados){
    console.log("Respuesta del servicio:"+resultados);
}
function solicitudServicidor(consulta,callBack){
setTimeout(function(){
    var respuesta=consulta+"lleno";
    callBack(respuesta);
},5000);
}
solicitudServicidor("El caso esta medio",obtenerResultados);