function saludar(nombre){
    console.log('hola'+nombre);
}
function procesarEntradaUsuario(callBack){
    var nombre=console.log('por favor ingresar tu nombre');
    
    callBack(nombre);
}
procesarEntradaUsuario(saludar);

