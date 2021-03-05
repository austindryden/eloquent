function reverseArray(arr){
    let arr2 = [];
    for (let i = (arr.length - 1); i >=0; i--) arr2.push(arr[i]);
    return arr2;
}

function reverseArrayInPlace(arr){
    for (let i = 0; i < Math.floor(arr.length /2); i++){
        let store = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = store;

    }
    return arr;
}

console.log(reverseArray([1,2,3]));

let tester = [4,5,6];
console.log(tester);
reverseArrayInPlace(tester);
console.log(tester);