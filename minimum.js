//arrow ternary minimum function
const min = (x,y) => ((x<y) ? x:y);

//long form minimum function.
function min2(x,y){
    if (x <= y){
        return x;
    }
    return y;
}

console.log(min(2,3));
console.log(min(40,70));

