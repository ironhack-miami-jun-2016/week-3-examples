"use strict";

class Animal {
  constructor (name, noise) {
    this.name = name;
    this.noise = noise;
  }

  shout () {
    console.log("Mooooo!");
  }

  makeNoise () {
    console.log(this.noise + "!!!!");
  }
}


var shadow = new Animal("Shadow", "Ruff");

console.log( shadow.name );
shadow.shout();
shadow.makeNoise();


var princess = new Animal("Princess", "Meow");

console.log( princess.name );
princess.shout();
princess.makeNoise();
