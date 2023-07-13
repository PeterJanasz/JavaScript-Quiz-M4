var scores = document.querySelector(".scores");

function renderScore() {
var studentScore = localStorage.getItem("studentScore");
console.log(studentScore)

    /*var lastScore = (localStorage.getItem("studentScore"));
    if (lastScore !== null) {
        return;
    } 
    document.querySelector(".scores").textContent = lastScore;
    console.log(lastScore);*/
}