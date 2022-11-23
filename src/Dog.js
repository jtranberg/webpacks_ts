"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Dog {
    constructor(name, breed, age) {
        this.name = name;
        this.breed = breed;
        this.age = age;
    }
    bark() {
        console.log("Woof-Woof!!!");
    }
}
exports.default = Dog;
