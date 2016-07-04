"use strict";

var Question = require("./lib/question.js");
var Quiz = require("./lib/quiz.js");

var question1 = new Question(1, "What is the primary programming language on browsers?", "JavaScript");
var question2 = new Question(2, "What allows you to run JavaScript on the backend?", "Node.js");

var theQuiz = new Quiz();

theQuiz.addQuestion( question1 );
theQuiz.addQuestion( question2 );

console.log( theQuiz.getCurrentQuestion() ===  "What is the primary programming language on browsers?");
console.log( theQuiz.answer("JavaScript") === true );
console.log( theQuiz.isGameOver() === false );

console.log( theQuiz.getCurrentQuestion() === "What allows you to run JavaScript on the backend?" );
console.log( theQuiz.answer("blah") === false );
console.log( theQuiz.isGameOver() === false );

console.log( theQuiz.getCurrentQuestion() === "What allows you to run JavaScript on the backend?" );
console.log( theQuiz.answer("Node.js") === true );
console.log( theQuiz.isGameOver() === true );
