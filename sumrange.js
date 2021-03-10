//creates an array ranged from x to y by step
function range(x, y, step = 1){
    let ranger = [];
    if (y < x){
        for (let i = x; i >= y; i -= Math.abs(step)){
            ranger.push(i);
        }
        return ranger;
    }
    for (let i = x; i <= y; i += Math.abs(step)){
        ranger.push(i);
    }
    return ranger;
}

function sum(ranger){
    let sum = 0;
    for (let num of ranger) sum += num;
    return sum;
}
console.log(sum(range(1, 10)));


function deepEqual(a, b){
    if (a === b) return true;
    if(a == null || b == null) return false;
    if (typeof(a)  == "object" && typeof(b) == "object"){
        let akeys = Object.keys(a);
        let bkeys = Object.keys(b);
        console.log(akeys);
        console.log(bkeys);
    }
    
    return false;
}
let objA = {thingyA: "yes"};
let objB = {thingyB: "yes"};
console.log(deepEqual(objA,objB));