var fs = require("fs");


fs.readFile("movies.txt", "utf8", function (theError, fileContents) {
  console.log("\nFile has been read! Printing it's contents:");
  // We have access to the contents of the file in here
  console.log(fileContents);
});






// -----------------------------------------------------------------
// ---------Sleep examples using setTimeout under the hood---------
// -----------------------------------------------------------------
var sleep = require("./lib/sleep.js");

sleep(5, function () {
  console.log("\n5 seconds have ellapsed");
});


var colorsArray = [ "chartreuse", "indigo", "orange", "black" ];


sleep(1, function () {

  // Anonymous function style
  console.log("\n1 second has ellapsed! Printing the array");

  colorsArray.forEach(function (theColor) {
    console.log(theColor.toUpperCase());
  });

});


console.log("\nEND OF PROGRAM\n");
