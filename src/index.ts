import Dog from "./Dog";
import { multiply, subtract, devide} from "./utils";
import ShelterDog from "./shelterDog"

console.log("from index file");

const elton = new Dog("Eltom", "powow", 0.5);
elton.bark();

// console.log(add(4,5))
console.log(subtract(4,5))
console.log(multiply(4,5))
console.log(devide(4,5))

const buffy = new ShelterDog("Buffy","husky",2,"street")