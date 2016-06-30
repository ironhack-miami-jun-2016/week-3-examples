// app.js

//             Don't forget the ./
//                         |
//                         v
var countColors = require("./lib/count-colors.js");
//      ^
//      |
// Assign the return value of require to a variable


//                      0        1         2         3          4
var colorsArray = [ "indigo", "black", "purple", "indigo", "chartreuse", "indigo", "indigo", "magenta", "chartreuse", "scarlet" ];



console.log("Testing countColors function");


// p countColors("indigo", colors_array) == 4
console.log( countColors("indigo", colorsArray) === 4 );

// p countColors("chartreuse", colors_array) == 2
console.log( countColors("chartreuse", colorsArray) === 2 );

// p countColors("black", colors_array) == 1
console.log( countColors("black", colorsArray) === 1 );

// p countColors("pink", colors_array) == 0
console.log( countColors("pink", colorsArray) === 0 );


var upperCaseColors = colorsArray.map(function (colorFromArray) {
  return colorFromArray.toUpperCase();
});

console.log(upperCaseColors);
