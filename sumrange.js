function range(x,y,step = 1){
    let ranger = [];
    if (y < x) step = 0 - Math.abs(step);
    for (let i = x; i == y; i+= (step)) ranger.push(i);
    return ranger;
}
console.log(range(8,2));