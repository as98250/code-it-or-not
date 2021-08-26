let start = document.getElementById('start-btn')
let cardElement = document.getElementById('main-card-container')
let questionContainer = document.getElementById('questions')
let answers = document.getElementById('answer-container')

var score = 0;


const questions = [
    { question:"What is the correct algorithm for a for-loop?",

    answers: { 

        a: 'for ( var i = 0; i > array.length; i++)',
        b: 'for ( var i=0; i < array.length; i++)',
        c: 'for ( var i = 0; i < array.length; i++)',
        d: 'for ( var i = 0, i < array.length; i++)'
     },

    correctAnswer: 'c'
    },

    { question: "Which of the following is NOT used for DECLARATIONS?",

        answers: {
           
            a: 'var',
            b: 'use',
            c: 'const',
            d: 'let'
        },
    
        correctAnswer: 'b'
        },
    { question: "JavaScript is a [blank] typed and [blank] language.",

        answers: {
           
            a: 'loosely, dynamic',
            b: 'strongly, dynamic',
            c: 'loosely, static',
            d: 'strongly, static'
        },
        
        correctAnswer: 'a'
        },

        { question: "[blank] represents a logical entity and can have a value of either true or false.",

        answers: {
           
            a: 'array',
            b: 'string',
            c: 'null',
            d: 'boolean'
        },
        
        correctAnswer: 'd'
        },

        { question: "A variable declared in [blank] is available to all functions?",

        answers: {
           
            a: 'local scope',
            b: 'internal scope',
            c: 'global scope',
            d: 'wide scope'
        },
        
        correctAnswer: 'c'
        },
        { question: "[blank] are reusable blacks of code that perform a specific task?",

        answers: {
           
            a: 'objects',
            b: 'declarations',
            c: 'perameters',
            d: 'functions'
        },
        
        correctAnswer: 'd'
        },
        { question: "Which of the following stops the functions from being executed?",

        answers: {
           
            a: 'return',
            b: 'stop',
            c: 'pause',
            d: 'loop'
        },
        
        correctAnswer: 'a'
        },
        { question: "which represents equal value and equal type?",

        answers: {
           
            a: '==',
            b: '===',
            c: '=',
            d: '/='
        },
        
        correctAnswer: 'b'
        },
        { question: "[Blank] are a collection of [blank]. [Blank] are made up of key-value pairs?",

        answers: {
           
            a: 'objects, properties, properties',
            b: 'properties, objects, objects',
            c: 'objects, properties, objects',
            d: 'properties, objects, properties'
        },
        
        correctAnswer: 'a'
        },
        { question: "True or False: Functions can not be called again to execute the block of code.",

        answers: {
           
            a: 'true',
            b: 'false'
    
        },
        
        correctAnswer: 'b'
        },
]

start.addEventListener('click', startQuiz)
function startQuiz() {
    start.style.display = "none";
    cardElement.style.display = "block";
    initiateQuestions()
 }

function initiateQuestions(question) {
  answers.innerText = questions.question
  questions.answers






