function deepEqual(a, b){
    if (a === b) return true;
    if(a == null || b == null || typeof(a)  != "object" || typeof(b) != "object") return false;
    
        let akeys = Object.keys(a);
        let bkeys = Object.keys(b);
        console.log(akeys);
        console.log(bkeys);

        if (akeys.length != bkeys.length) return false;
        for (let key of akeys){
                
                if (!bkeys.includes(key) || !deepEqual(a[key], b[key])) return false;
        }
        return true;    
}
let objA = {thingyB: "yes", More : "Things"};
let objB = {thingyB: "yes", More : "Things"};
console.log(deepEqual(objA,objB));