//fizzbuzz classic, now in function form

function fizzbuzz(total, fizz = 3, buzz = 5){

    for (let i =0; i < total; i++){
        let display =" ";
        if ((i % fizz) != 0 && (i % buzz) !=0)
            display += i;
        if (i% fizz == 0)
            display += "Fizz";
        if (i% buzz == 0)
            display += "Buzz";
        console.log(display);
    }
}

fizzbuzz(100);