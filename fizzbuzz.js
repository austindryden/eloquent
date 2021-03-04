//fizzbuzz classic
const fizz = 3;
const buzz = 5;
for (let i =0; i < 100; i++){
    let display =" ";
    if ((i % fizz) != 0 && (i % buzz) !=0)
        display += i;
    if (i% fizz == 0)
        display += "Fizz";
    if (i% buzz == 0)
        display += "Buzz";
    console.log(display);
}