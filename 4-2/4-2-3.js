"use strict";
var tuple = [false, 1, '2']; // const tuple: readonly [false, 1, '2]
function increment() {
    return { type: 'INCREMENT' };
}
function decrement() {
    return { type: 'DECREMENT' };
}
var x2 = increment(); // const x2: {type: string}
var y2 = decrement(); // const y2: {readonly type: "DECREMENT"}
