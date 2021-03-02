function countBs(word){
    return countChar(word, "B");
}

function countChar(word, letter){
    let count = 0;
    for (let i =0; i < word.length; i++){
        if(word[i] == letter) count++;
    }
    return count;
}


console.log(countBs("BoBoBoB"));

console.log(countChar("count the letter h in this sentence", "h"));