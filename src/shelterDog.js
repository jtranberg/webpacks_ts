"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Dog_1 = __importDefault(require("./Dog"));
class ShalterDog extends Dog_1.default {
    constructor(name, breed, age, shelter) {
        super(name, breed, age);
    }
}
exports.default = ShalterDog;
