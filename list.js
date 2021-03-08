//converts an array to a list
function arrayToList(arr){
    let list = {};
    for (let num of arr){   
        list.value = num;
        list.rest = {};

    }
    return list;
}

console.log(arrayToList([1,2,3]));