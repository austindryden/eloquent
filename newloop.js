//rebuild the for loop using higher-order functions.
function loop(value, test, update, body){
    while (test(value)){
        body(value);
        value = update(value);
    }
    return false;
}

//same function, built recursively.
function loopr(value, test, update, body){
    if (!test(value)) return false;
    body(value);
    loopr(update(value),test,update,body);
}

loopr(3, n => n > 0, n => n - 1, console.log);