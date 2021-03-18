//Take an array of arrays, and flatten into a single array, using reduce and concat

function flatten(arr){
    let newarr = [];
    arr.reduce((a,b) => newarr.push(a));
    
    return newarr;
}

console.log(flatten([[1,2,3],[4,5,6]]));