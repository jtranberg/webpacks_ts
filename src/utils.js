"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.devide = exports.multiply = exports.subtract = exports.add = void 0;
const lodash_1 = __importDefault(require("lodash"));
function add(x, y) {
    return lodash_1.default.add(x, y); //lodash dependancy  _.add
}
exports.add = add;
function subtract(x, y) {
    return x - y;
}
exports.subtract = subtract;
function multiply(x, y) {
    return x * y;
}
exports.multiply = multiply;
function devide(x, y) {
    return x / y;
}
exports.devide = devide;
