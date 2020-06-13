"use strict";
function isUserG(user) {
    return user.name !== undefined;
}
function isUserH(user) {
    return user.age !== undefined;
}
function getUserType(user) {
    var u0 = user; // any
    if (isUserG(user)) {
        var u1 = user; // UserG (推論適用)
        return 'G';
    }
    if (isUserH(user)) {
        var u2 = user; // UserH
        return 'H';
    }
    return 'unknown';
}
var x3 = getUserType({ name: 'Taro' }); // "G" | "H" | unknown
