function mycallback(message){
    console.log(message);
}
function welcome(name,mycallback){
    const message=`Welcome ${name}`;
    mycallback(message);
}
welcome('Antonio',mycallback);