var sleep = require("./lib/sleep.js");

sleep(5, function () {
  console.log("5 seconds have ellapsed");
});


var colorsArray = [ "chartreuse", "indigo", "orange", "black" ];


sleep(1, function () {

  // Anonymous function style
  colorsArray.forEach(function (theColor) {
    console.log(theColor.toUpperCase());
  });

});


console.log("END OF PROGRAM");
