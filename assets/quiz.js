var timerElement = document.querySelector(".timer");
var scores = document.querySelector(".scores");
var startButton = document.querySelector(".start-button");
var question = document.querySelector(".question")
var correct = document.querySelector(".correct");
var incorrect = document.querySelector(".incorrect");

var correct = true;
var inCorrect = false;
var timer;
var timerCount;
var questions;
var answerOptions;
var answer;


//collect user score
function init() {
getCorrect = [];
getIncorrect = [];
}

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