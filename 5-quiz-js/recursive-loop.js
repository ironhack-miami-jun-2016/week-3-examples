var i = 10;

function printCurrentCount () {
  console.log(`Current count: ${i}`);
  i -= 1;

  if (i > 0) {
    setTimeout(printCurrentCount, 1000);
  }
}

setTimeout(printCurrentCount, 1000);

// for (var i = 10; i > 0; i -= 1) {
