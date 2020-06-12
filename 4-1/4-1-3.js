"use strict";
function getFormattedValue2(value, unit) {
    if (unit === void 0) { unit = null; }
    var _value = value.toFixed(1);
    if (unit == null)
        return "" + _value;
    return _value + " " + unit.toUpperCase();
}
console.log(getFormattedValue2(100));
console.log(getFormattedValue2(100, 'kg'));
