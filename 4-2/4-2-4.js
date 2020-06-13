"use strict";
function greet(name) {
    console.log("Hello " + name.toLocaleUpperCase);
}
greet(); // RunTime Error (Non-null assertion)
function greet2(name) {
    console.log("Hello " + name.toLocaleUpperCase);
}
greet2(); // Hello undefined
var myName = 0;
console.log(myName.toLocaleUpperCase()); // NoError (double assertion)
