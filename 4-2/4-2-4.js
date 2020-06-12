"use strict";
function greet(name) {
    console.log("Hello " + (name === null || name === void 0 ? void 0 : name.toLocaleUpperCase));
}
greet(); // RunTime Error ()
