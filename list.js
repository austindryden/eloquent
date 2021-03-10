//converts an array to a list
function arrayToList(arr){
    let list = null;
    for (let i = arr.length -1 ; i >=0 ; i--) list = {value: arr[i], rest: list};
    return list;
}

function listToArray(list){
    let arr = [];
    for (let note = list; node; node = node.rest){
        arr.push(node.value);
    }
    return arr;
}

function prepend (value, list){
    return {value, rest: list};
}

function nth (list, n){
    if (!list) return undefined;
    if (n ==0) return list.value;
    return nth(list.rest, n-1);
}

console.log(arrayToList([1,2,3]));  