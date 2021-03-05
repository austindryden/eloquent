function reverseArray(arr){
let arr2 = [];
for (let i = (arr.length - 1); i >=0; i--) arr2.push(arr[i]);
return arr2;
}

function reverseArrayInPlace(arr){

}

console.log(reverseArray([1,2,3]));