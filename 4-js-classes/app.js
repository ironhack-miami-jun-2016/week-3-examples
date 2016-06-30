function Animal (name, noise) {
  this.name = name;
  this.noise = noise;
}

Animal.prototype.shout = function () {
  console.log("Mooooo!");
};

Animal.prototype.makeNoise = function () {
  console.log(this.noise + "!!!!");
};


var shadow = new Animal("Shadow", "Ruff");

console.log( shadow.name );
shadow.shout();
shadow.makeNoise();


var princess = new Animal("Princess", "Meow");

console.log( princess.name );
princess.shout();
princess.makeNoise();
