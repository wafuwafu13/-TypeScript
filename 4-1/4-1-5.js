"use strict";
var state = {
    id: 1,
    name: 'Taro'
};
state.name = 'Hanako';
state.id = 2; // Error
var state2 = {
    id: 1,
    name: 'Taro'
};
var frozenState = Object.freeze(state2);
frozenState.name = 'Hanako'; // Error
frozenState.id = 2; // Error
