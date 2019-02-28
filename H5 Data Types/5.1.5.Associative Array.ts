export default class Animal {
    constructor(public name: string) {
    }

    getName(){
        return this.name;
    }
}

let map: {[email:string]: Animal} = {};
map['donkey@gmail.com']= new Animal("donkey");
map['horse@gmail.com']= new Animal("horse");
map['pig@gmail.com']= new Animal("pig");
console.log(map);