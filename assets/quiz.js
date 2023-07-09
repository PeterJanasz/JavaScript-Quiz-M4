var timerElement = document.querySelector(".timer");
var scores = document.querySelector(".scores");
var startButton = document.querySelector(".start-button");
var questionElement = document.querySelector(".question")//should it be questionElement?
var answers = document.querySelector(".answers")
var correct = document.querySelector(".correct");
var incorrect = document.querySelector(".incorrect");


var correct = true;
var inCorrect = false;//do i need this?
var timer;
var timerCount;
var questions;
var answers;
//create array for questions and answers
/*var questions = [
  {
   "question": "How to write an IF statement for executing some code if "i" is NOT equal to 5?",
    "answers": ["if i <> 5","if i =! 5 then","if (i <> 5)","if (i != 5)"],
    "correct": "if (i != 5)"
  }
  {
    "question": "How does a FOR loop start?",
    "answers": "for (i = 0; i <= 5; i++)", "for (i = 0; i <= 5)", "for i = 1 to 5", "for (i <= 5; i++)",
    "correct": "for (i = 0; i <= 5; i++)"
  }
  {
    "question": "Which event occurs when the user clicks on an HTML element?",
    "answers": "onmouseclick", "onmouseover", "onclick", "onchange", 
    "correct": "onclick  "
  }
  {
    "question": "How can you add a comment in a JavaScript?",
    "answers": "<!--This is a comment-->", "//This is a comment", "'This is a comment", "* This is a comment*",
    "correct": "//This is a comment"
  }
  {
    "question": "What is the correct way to write a JavaScript array?",
    "answers": "var colors = ["red", "green", "blue"]  ", "var colors = "red", "green", "blue"", "var colors = (1:"red", 2:"green", 3:"blue")", "var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")",
    "correct": "var colors = ["red", "green", "blue"]  "
  }
]*/

//create function for questions and onclick event to next question when answer choosen.
var currentQuestionIndex =0;
function showNextQuestion() {
var questionElement = document.getElementsByClassName("question");
questionElement.innerHTML = questions[currentQuestionIndex].question;
currentQuestionIndex++;
if (currentQuestionIndex >= questions.length) {
  // clear the current question index
  currentQuestionIndex = 0;
}
}

//add onclick event to next question with green background on button when correcct, red when incorrect.

//collect user score for local storage
function init() {
getCorrect = [];
getIncorrect = [];
}

/*renderLastRegistered(); {
  var correct = localStorage.getCorrect("correct")
  var incorrect = localStorage.getIncorrect("incorrect")

}*/


//start quiz with timer set at 60sec, subtraccting 10sec for incorrect answer
function startQuiz() {
    // declare incorrect variable
    var incorrect = false;//do i need this in function?
  
    timerCount = 60;
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = "Time: " + timerCount;
  
      // check if user answered previous question incorrectly
      if (incorrect) {
        // deduct 10 seconds from timer
        timerCount -= 10;
      }
  
      // check if timer count reaches 0
      if (timerCount === 0) {
        clearInterval(timer);
      }
    }, 1000);
  }


    
    startButton.addEventListener("click", startQuiz);