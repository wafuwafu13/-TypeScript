"use strict";
var fn1 = function (a) { return 0; };
var fn2 = function (b, c) { return 0; };
fn2 = fn1; // NoError
fn1 = fn2; // Error
