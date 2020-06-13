"use strict";
function judgeUserType(user) {
    if ('gender' in user) {
        var u0 = user;
        console.log('user type is UserC | userD');
    }
    if ('name' in user) {
        var u1 = user;
        console.log('user type is UserC');
        return;
    }
    var u2 = user;
    console.log('user type is UserD');
}
