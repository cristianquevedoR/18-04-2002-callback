console.log("inicio");

function dos(){
    console.log("Dos");
}
function uno(){ 
    console.log("uno");
    dos();
    console.log("tres")
}
uno();
console.log("Fin");