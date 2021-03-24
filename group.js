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