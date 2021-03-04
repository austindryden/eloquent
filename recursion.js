//recursive check for even or odd
function isEven(x){
    if (x < 0 ) return isEven(x*-1);
    if (x == 0) return true;
    if (x == 1) return false;
    return (isEven(x-2));
}

console.log(isEven(-50));