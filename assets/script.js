var timerElement = document.querySelector(".timer");
var scores = document.querySelector(".scores");
var startButton = document.querySelector(".start-button");
var question = document.querySelector(".question")
var correct = document.querySelector(".correct");
var incorrect = document.querySelector(".incorrect");

var correct = true;
var inCorrect = false;//do i need a false?
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
timerCount = 60;
//disable start button once quiz starts
startButton.disabled = true;

}

function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = "Time Remaining: " + timerCount;
        if (incorrect) {
            timerCount = -10;
        }
        if (timerCount === 0){
            clearInterval(timer);
        }
        }, 1000);
    }

    


