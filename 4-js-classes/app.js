var shadow = {
  name: "Shadow",
  noise: "Ruff",

  shout: function () {
    console.log("Mooooo!");
  },

  makeNoise: function () {
    console.log(this.noise + "!!!!");
  }
};


shadow.shout();
shadow.makeNoise();


var princess = {
  name: "Princess",
  noise: "Meow",

  shout: function () {
    console.log("MEOW!");
  },

  makeNoise: function () {
    console.log(this.noise + "!!!!");
  }
};


princess.shout();
princess.makeNoise();

