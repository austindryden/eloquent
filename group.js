class Group{
    constructor(){
        this.members = [];
    }

    add(item){
        if (this.has(item)) return false;
        this.members.push(item);
        return true;
    }

    delete(item){
        this.members = this.members.filter(x => x !== item);
        
    }

    has(item){
        for (let i of this.members){
            if (i === item) return true;
        }
        return false;
    }

    static from(arr){
        let group = new Group;
        for (let i of arr){
            group.add(i);
        }
        return group;
    }

    [Symbol.iterator](){
        return new GroupIterator(this);
    }
    
}

class GroupIterator{
    constructor(group){
        this.group = group;
        this.position = 0;
    }

    next(){
        if (this.position == this.group.members.length) return {done: true};
        //let value = {position : this.position, value: this.group.members[this.position]};
        let value = this.group.members[this.position];
        this.position++;
        //return {value: value.value, done: false};
        return {value, done: false};
    }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }
  // → a
  // → b
  // → c