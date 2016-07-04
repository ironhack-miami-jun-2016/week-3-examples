"use strict";

var Question = require("./lib/question.js");

var question1 = new Question(1, "What is the primary programming language on browsers?", "JavaScript");

console.log( question1.id );
console.log( question1.question_text );
console.log( question1.answer );
