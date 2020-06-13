"use strict";
var s1 = 'test';
var s2 = s1; // NoError
var s3 = 'test';
var s4 = s3; // Error
var un1 = "test";
var un2 = un1; // Error(型が決定するまでは別の型に代入できない)
var un3 = un1; // NoError
