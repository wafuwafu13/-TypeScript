"use strict";
var users = [
    { name: 'Taro', gender: 'male' },
    { name: 'Hanako', graduate: 'Tokyo' }
];
var filteredUsers = users.filter(function (user) { return 'graduate' in user; }); // (UserJ | UserK)[]
var filteredUsers2 = users.filter(function (user) { return 'graduate' in user; } // ユーザー定義type guards
); // UserK[]
