"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function registerUser(user) { }
var maybeUser = {
    age: 26,
    name: 'Taro',
    gender: 'male'
};
var notUser = {
    gender: 'male',
    graduate: 'Tokyo'
};
registerUser(maybeUser);
registerUser(notUser); // Error
registerUser({
    age: 26,
    name: 'Taro',
    gender: 'male' // Error (Excess Property Checks)
});
registerUser(__assign({
    age: 26,
    name: 'Taro',
    gender: 'male'
}));
