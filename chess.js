//prints a chess board of size, as defined by the variable size
function chess(size){
    for (let i = 0; i< size; i++){
        let display = "";
        for (let j = 0; j < size; j++){
            display += (((i + j) % 2 == 0) ? " ": "#");
        }
        console.log(display);
    }
}

chess(8);