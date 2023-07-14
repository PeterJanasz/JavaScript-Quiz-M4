var timerElement = document.querySelector(".timer");
var scores = document.querySelector("#scores");
var startButton = document.querySelector(".start-button");
var questionElement = document.querySelector(".question");
var questionContainer = document.querySelector("#question-container");
var answerContainer = document.querySelector(".answers");
var correct = document.querySelector(".correct");
var incorrect = document.querySelector(".incorrect");
var startScreen = document.querySelector("#start-screen");
var choice1 = document.querySelector(".choice-1")
var choice2 = document.querySelector(".choice-2")
var choice3 = document.querySelector(".choice-3")
var choice4 = document.querySelector(".choice-4")
var footer = document.querySelector("footer")
var feedbackEl = document.querySelector("#feedback")
var initials = document.querySelector("#initials")
var submitBtn = document.querySelector("#submit")
var input = document.querySelector("input")

var storedUsers = []
var currentQuestionIndex =0;
var correct = true;
var timer;
var timerCount;
var questions;
var score;
//create array for questions and answers
var questions = [
  {
   question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
    answers: ["if i <> 5","if i =! 5 then","if (i <> 5)","if (i != 5)"],
    correct: "if (i != 5)"
  },
  {
    question: "How does a FOR loop start?",
    answers: ["for (i = 0; i <= 5; i++)", "for (i = 0; i <= 5)", "for i = 1 to 5", "for (i <= 5; i++)"],
    correct: "for (i = 0; i <= 5; i++)"
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    answers: ["onmouseclick", "onmouseover", "onclick", "onchange"], 
    correct: "onclick"
  },
  {
    question: "How can you add a comment in a JavaScript?",
    answers: ["<!--This is a comment-->", "//This is a comment", "'This is a comment", "* This is a comment*"],
    correct: "//This is a comment"
  },
  {
    question: "Which of the following type of variable is visible only within a function where it is defined?",
    answers: ["Global Variable", "Local Variable", "Both of the above", "none of the above"],
    correct: "Local Variable",
  }
]

//start quiz with timer set at 60sec, subtraccting 10sec for incorrect answer
function startQuiz() {
  startScreen.setAttribute("class","hidden");
  questionContainer.removeAttribute("class");
    timerCount = 60;
    timer = setInterval(function() {
      timerCount--;

      if (timerCount < 0){
        timerCount = 0;
      }

      timerElement.textContent = "Time: " + timerCount;
  
      // check if timer count reaches 0
      if (timerCount <= 0) {
        clearInterval(timer);
      }
    }, 1000);
    getQuestion();
  }

//create function for questions and onclick event to next question when answer choosen.
  function getQuestion() {
    feedbackEl.textContent = "";
    feedbackEl.setAttribute("class", "hidden")
    console.log(currentQuestionIndex)
   var currentQuestion = questions[currentQuestionIndex]
    questionElement.textContent = currentQuestion.question;
    
    answers.innerHTML = "";
    for (var i = 0; i < currentQuestion.answers.length; i++){
      var choiceText = currentQuestion.answers[i];
      var choiceBtn = document.createElement("button");
      choiceBtn.setAttribute("class","choice");
      choiceBtn.setAttribute("value", choiceText);
      choiceBtn.textContent = choiceText;
      answerContainer.appendChild(choiceBtn)
    }
  }
//next question 
  function showNextQuestion() {
    var questionElement = document.getElementsByClassName("question");
    questionElement.innerHTML = questions[currentQuestionIndex].question;
    currentQuestionIndex++;
    if (currentQuestionIndex >= questions.length) {
      currentQuestionIndex = 0;
    }
    }

    //add green background on button when correcct, red when incorrect.
function checkAnswer(event) {
  var buttonEl = event.target;

  if (!buttonEl.matches(".choice")){
    return;
  }
  if (buttonEl.value !== questions[currentQuestionIndex].correct){
    timerCount -= 10;
    feedbackEl.removeAttribute("class", "hidden")
    //choiceBtn.setAttribute("style", "background-color: red;");
    //chooiceBtn.setAttribute(".incorrect");
    feedbackEl.textContent = "Incorrect!";
    //feedbackEl.removeAttribute("class", "hidden")
  } else {
    feedbackEl.textContent = "Correct!";
    feedbackEl.removeAttribute("class", "hidden")
  }
  
  currentQuestionIndex++;
  if (timerCount <= 0){
    endQuiz();
  }
  
  else if (currentQuestionIndex=== questions.length){
    var timeout = setTimeout(endQuiz, 300);
    endQuiz();
  }

  else {
    var timeout = setTimeout(getQuestion, 300);
  }
}
//get score from timer--------------------------------
/*function getScore(){

  var score = timerCount;
}
/*renderLastRegistered(timerCount); {

}*/

function endQuiz(){
  clearInterval(timer);
  questionContainer.style.display="none";
  feedbackEl.textContent = "";
  feedbackEl.setAttribute("class", "hidden");
  scores.textContent = "Your Score: " + timerCount;
  console.log(timerCount)
  initials.removeAttribute("class");
  //create container for user to input initials with their score


  //create highscore page to enter intials and show score----------------
}

submitBtn.addEventListener("click", function(event) {
  event.preventDefault();

  //window.location.href="/Module-4/score.html"
  window.location.href="/score.html"

  var score = timerCount;
  var initials = document.querySelector("input").value; 

  var user = {
    initials: initials,
    score: score,
    };

  var highScores = JSON.parse(localStorage.getItem("storedUsers"));

  if (highScores !== null){
    storedUsers = highScores;
  }

  storedUsers.push(user);
  localStorage.setItem("storedUsers", JSON.stringify(storedUsers));

})
  
//window.location.href = "file:///Users/peterjanasz/Desktop/bootcamp/challenges/Module-4/score.html"
    
    startButton.addEventListener("click", startQuiz);

    answerContainer.addEventListener("click", checkAnswer);