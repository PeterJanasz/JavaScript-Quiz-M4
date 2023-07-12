var scores = document.querySelector(".scores");

function renderScore() {
    var lastScore = JSON.parse(localStorage.getItem("studentScore"));
    if (lastScore !== null) {
        document.querySelector(".scores").textContent = lastGrade;
    } 
    console.log(lastScore)
}