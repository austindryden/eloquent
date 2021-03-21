//Take an array of arrays, and flatten into a single array, using reduce and concat

function flatten(arr){
       return arr.reduce((flat,current)=> flat.concat(current),[]);
}

console.log(flatten([[1,2,3],[4,5,6]]));