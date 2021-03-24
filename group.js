class Group{
    constructor(){
        this = [];
    }

    add(item){
        if (this.has(item)) return false;
        this.push(item);
        return true;
    }

    delete(item){
        if (!this.has(item)) return false;
        for (let i = 0; i < this.length; i++){
            if (i == item){
                this.splice(i,1);
            }
        }
        
    }

    has(item){
        for (let i of this){
            if (i == item) return true;
        }
        return false;
    }

    from(arr){
        for (let i of arr){
            this.add(i);
        }
    }
}