"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Dog_1 = __importDefault(require("./Dog"));
const utils_1 = require("./utils");
const shelterDog_1 = __importDefault(require("./shelterDog"));
console.log("from index file");
const elton = new Dog_1.default("Eltom", "powow", 0.5);
elton.bark();
console.log((0, utils_1.add)(4, 5));
console.log((0, utils_1.subtract)(4, 5));
console.log((0, utils_1.multiply)(4, 5));
console.log((0, utils_1.devide)(4, 5));
const buffy = new shelterDog_1.default("Buffy", "husky", 2, "street");
