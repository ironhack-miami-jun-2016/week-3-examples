// lib/count-colors.js

function countColors (color, theArray) {
  var colorOccurances = 0;

  theArray.forEach(function (colorFromArray) {
    if (colorFromArray === color) {
      colorOccurances += 1;
    }
  });

  return colorOccurances;
}

// Explicitely declare the countColors function
// as the thing you are providing to app.js
module.exports = countColors;
