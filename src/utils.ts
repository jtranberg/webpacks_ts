

import _ from "lodash";

export function add(x: number, y: number) {
    return _.add(x,y);                             //lodash dependancy  _.add
}
export function subtract(x: number, y: number) {
    return x - y;
}
export function multiply(x: number, y: number) {
    return x * y;
}
export function devide(x: number, y: number) {
    return x / y;
}