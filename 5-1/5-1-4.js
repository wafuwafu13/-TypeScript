"use strict";
var Animal2 = /** @class */ (function () {
    function Animal2(name, numFeet) {
        this.feet = 4;
    }
    return Animal2;
}());
var Human2 = /** @class */ (function () {
    function Human2(name, gender) {
        this.feet = 2;
        this.hands = 2;
    }
    return Human2;
}());
var animal = new Animal2('dog', 4);
var human = new Human2('Taro', 'male');
console.log(animal)
console.log(human)
