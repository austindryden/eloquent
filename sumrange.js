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

        if (akeys.length != bkeys.length) return false;
        for (let key of akeys){
                
                if (a[key] != b[key]) return false;
        }
        return true;
    }
    
    return false;
}
let objA = {thingyB: "yes", More : "Things"};
let objB = {thingyB: "yes", More : "Things"};
console.log(deepEqual(objA,objB));