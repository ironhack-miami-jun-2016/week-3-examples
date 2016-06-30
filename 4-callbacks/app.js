var colorsArray = [ "chartreuse", "indigo", "orange", "black" ];

function printOneMs () {
  console.log("1 MILLISECOND has ellapsed!!");
}

setTimeout(printOneMs, 1);




function print1SecondStuff () {
  console.log("1 second has ellapsed!!");
}

setTimeout(print1SecondStuff, 1000);


// Named function style
function printColor (theColor) {
  console.log(theColor);
}

colorsArray.forEach(printColor);


function printStuff () {
  console.log("10 seconds over!!");
}

setTimeout(printStuff, 10000);

console.log("\nTimer started\n");



// Anonymous function style
colorsArray.forEach(function (theColor) {
  console.log(theColor.toUpperCase());
});


console.log("\nEND OF PROGRAM\n");
