"use strict";
var defaultTheme = {
    backgroundColor: "orange",
    borderColor: "red"
};
//defaultTheme.backgroundColor = "blue" // Error (ダウンキャスト)
function toNumber(value) {
    return value;
}
var fiction = toNumber('1000'); // NoError
fiction.toFixed(); // RunTime Error!  (anyにアップキャストした上でnumberにダウンキャストしているため)
