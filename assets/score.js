var scores = document.querySelector(".scores");
var clear=document.querySelector("#clear")

var highScores = JSON.parse(localStorage.getItem("storedUsers"));

for (var i =0; i < highScores.length; i ++){
    var highScoreList = document.createElement("li");

    highScoreList.textContent = "Initials: " + highScores[i].initials + " " + "Score: " + highScores[i].score;
    scores.appendChild(highScoreList);
}

function clearHighScores() {
window.localStorage.removeItem("storedUsers")
window.location.reload();
}

clear.addEventListener("click", clearHighScores);

