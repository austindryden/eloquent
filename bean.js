//counts the number of Bs in a word
function countBs(word){
    return countChar(word, "B");
}

//counts the number of a given letter in a word
function countChar(word, letter){
    let count = 0;
    for (let i =0; i < word.length; i++){
        if(word[i] == letter) count++;
    }
    return count;
}

//TESTING
console.log(countBs("BoBoBoB"));

console.log(countChar("count the letter h in this sentence", "h"));