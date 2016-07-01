"use strict";

var Viking = require("./lib/viking.js");
var PitFight = require("./lib/pitfight.js");

var viking1 = new Viking("Nizar", 200, 30);
var viking2 = new Viking("Josh", 150, 20);

var thisPitFight = new PitFight(viking1, viking2, 10);
thisPitFight.initiate();
