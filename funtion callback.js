function logcita(cita){
    console.log(cita);
}
function crearcita(cita,callBack){
    var miCita="como yo siempre digo, "+cita;
    callBack(miCita);
}
crearcita("come tus vegetales",logcita);