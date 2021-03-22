//returns true when given function returns true for every element in an array

function every(arr,test){
    for (let item of arr){
        if (!test(item)) return false;
    }
    return true;
}


console.log(every([1, 3, 5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));
console.log(every([], n => n < 10));