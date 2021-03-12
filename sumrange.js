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

//sums the numbers in an array
function sum(ranger){
    let sum = 0;
    for (let num of ranger) sum += num;
    return sum;
}
console.log(sum(range(1, 10)));