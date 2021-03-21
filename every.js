//returns true when given function returns true for every element in an array

function every(arr,test){
    for (int item of arr){
        if (!test(item)) return false;
    }
    return true;
}