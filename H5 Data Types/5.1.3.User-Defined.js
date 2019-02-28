"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
exports.default = Animal;
let animal1 = new Animal("Donkey");
console.log(animal1.getName());
