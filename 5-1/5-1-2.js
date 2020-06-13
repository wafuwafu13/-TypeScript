"use strict";
var o1 = { p1: 'test' };
var o2 = { p1: 'test', p2: 0 };
o1 = o2; // NoError
o2 = o1; // Error
