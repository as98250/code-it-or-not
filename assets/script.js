let start = document.getElementById('start-btn');
let cardElement = document.getElementById('mainCard');
let questionContainer = document.getElementById('question-container');
let gameOver = document.getElementById('gameOver');
let startPage = document.getElementById('startPage');

let timeEl = document.getElementById('timer')
var currentIndex = 0;
var myQuestions = [
    {
        question: "What is the correct algorithm for a for-loop?",
        answers: [
            'for ( var i = 0; i > array.length; i++)',
            'for ( var i = 0; i < array.length; i--)',
            'for ( var i = 0; i < array.length; i++)',
            'for ( var i = 0, i > array.length; i--)'
        ],
        correctAnswer: 2
    },
    {
        question: "Which of the following is NOT used for DECLARATIONS?",
        answers: [
            'var',
            'use',
            'const',
            'let'
        ],
        correctAnswer: 1
    },
    {
        question: "JavaScript is a [blank] typed and [blank] language.",
        answers: [
            'loosely, dynamic',
            'strongly, dynamic',
            'loosely, static',
            'strongly, static'
        ],
        correctAnswer: 0
    },
    {
        question: "[blank] represents a logical entity and can have a value of either true or false.",
        answers: [
            'array',
            'string',
            'null',
            'boolean'
        ],
        correctAnswer: 3
    },
    {
        question: "A variable declared in [blank] is available to all functions?",
        answers: [
            'local scope',
            'internal scope',
            'global scope',
            'wide scope'
        ],
        correctAnswer: 2
    },
    {
        question: "[blank] are reusable blacks of code that perform a specific task?",
        answers: ['objects',
            'declarations',
            'perameters',
            'functions'
        ],
        correctAnswer: 3
    },
    {
        question: "Which of the following stops the functions from being executed?",
        answers: [

            'return',
            'stop',
            'pause',
            'loop'
        ],
        correctAnswer: 0
    },
    {
        question: "which represents equal value and equal type?",
        answers: [
            '==',
            '===',
            '=',
            '/='
        ],
        correctAnswer: 1
    },
    {
        question: "[Blank] are a collection of [blank]. [Blank] are made up of key-value pairs?",
        answers: [
            'objects, properties, properties',
            'properties, objects, objects',
            'objects, properties, objects',
            'properties, objects, properties'
        ],
        correctAnswer: 0
    },
    {
        question: "True or False: Functions can not be called again to execute the block of code.",
        answers: [
            'true',
            'false'
        ],
        correctAnswer: 1
    },
]
localStorage.setItem("myQuestions", JSON.stringify)
var score = 0;

var secondsLeft = 90;

function startTimer() {
    var interval = setInterval(function () {

    } )
}

var interval = setInterval ( function function1() {
    timeEl.textContent = secondsLeft; 
    secondsLeft-=1;
        if(secondsLeft <= 0) {
            secondsLeft = 0; 
            clearInterval(interval)          
        }
            
}
, 1000);


function startQuiz() {
    start.style.display = "none";
    startPage.style.display = "none";
    cardElement.style.display = "block";
    initiateQuestions()
}

function initiateQuestions() {
    // TODO: loop through all of the current question's possible answers
    var currentQuestion = myQuestions[currentIndex];
    for (var i = 0; i < currentQuestion.answers.length; i++) {
        var answerText = currentQuestion.answers[i];
        console.log(answerText);
    }
}
   // console.log(myQuestions[i])
  //  localStorage.setItem("myQuestions", JSON.stringify)
  //  questionContainer.innerText = myQuestions.question

  start.addEventListener("click", startQuiz, function () {
      startTimer();
  })
