"use strict";
function reset(value) {
    var v0 = value; // string | number | boolean
    if (typeof value == 'number') {
        var v1 = value; // number
        return 0;
    }
    var v2 = value; // string || boolean
    if (typeof value == 'string') {
        var v3 = value; // strig
        return '';
    }
    var v4 = value;
    return false;
}
console.log(reset(1));
console.log(reset('1'));
console.log(reset(true));
