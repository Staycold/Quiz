var username = document.querySelector("#username")
var saveSroceBtn = document.querySelector("#saceScoreBtn")
var finalScore = document.querySelector("#finalScore")
var mostRcentScore = localstorage.getItem("score")

var highScores = JSON.parse(localStorage.getItem("highScores")) || []

var maxHighScored = 5

finalScore.innerText = mostRecentScore

username.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !username.value
})


saveHighScore = e => {
    e.preventDefault()

    var score = {
        score: mostRecentScore,
        name: username.value
    }
    highScores.push(score)

    highScores.sort((a,b) => {
        return b.score - a.score
    })

    highScores.splice(5)

    localStorage.setItem("highScores", JSON.stringify(highScores))
    window.location.assign("home.html")
}