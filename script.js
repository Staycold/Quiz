const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.querySelector("#progessText");
const scoreText = document.querySelector("#score");
// const question = document.querySelector("#question");


let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
  {
    question: "If you order 'Ebi' at a sushi resturant, what will you get?",
    choice1: "eel",
    choice2: "squid",
    choice3: "salmon",
    choice4: "shrimp",
    answer: 4,
  },
  {
    question: "What method do astrophysicists mainly use to decect if a distant star has planets orbiting it?",
    choice1: "they guess",
    choice2: "the transit method",
    choice3: "the heisenberg method",
    choice4: "the comparrison method",
    answer: 2,
  },
  {
    question: "the local specialty dish of the Oaxaca state in Mexico is:",
    choice1: "Tlyuda",
    choice2: "Burrito",
    choice3: "Torta",
    choice4: "Pollo con mole verde",
    answer: 1,
  },
  {
    question: "What NHL team has the most stanley cup wins of all time?",
    choice1: "Boston Bruins",
    choice2: "Detroit Red Wings",
    choice3: "Montreal Canadiens",
    choice4: "Toronto Maple Leafs",
    answer: 3,
  }
]


const scorePoints = 100;
const maxQestions = 4;

// starting the game, getitng a question right away.
function startGame(){
  questionCounter = 0;
  // score = 0
  availableQuestions = [...questions]
  getNewQuestion()
}

getNewQuestion = () => {
  if(availableQuestions.length === 0 || questionCounter > maxQestions){
  localStorage.setItem("mostRecentScore", score)

  return  window.location.assign("/end.html")
  }
  
  const questionIndex = Math.floor(Math.random() * availableQuestions.length)
  currentQuestion = availableQuestions[questionIndex]
  question.innerText = currentQuestion.question


  // this is the right or wrong answer
  choices.forEach(choice => {
    const number = choice.dataset["number"]
    choice.innerText = currentQuestion["choice" + number]
  })
  

  availableQuestions.splice(questionIndex, 1)

  acceptingAnswers = true
}
// event on right or wrong answer
choices.forEach(choice => {
  choice.addEventListener("click", e => {
    e.stopPropagation()
    if(!acceptingAnswers) return

    acceptingAnswers = false
    const selectedChoice = e.target
    const selectedAnswer = selectedChoice.dataset["number"]

    let classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect"

    if(classToApply === "correct") {
      incrementScore(scorePoints)
    }
    else{
      secondsLeft = secondsLeft - 15;
    }

    selectedChoice.parentElement.classList.add(classToApply)

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply)
      if (selectedAnswer =="incorrect"){
        
      }
      
      getNewQuestion()
    }, 1000)
  })
})

incrementScore = num => {
  score +=num

}


startGame()

// getting the timer element in the div from the HTML
var timeEl = document.querySelector(".timer");




// this is the timer

var secondsLeft = 60;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time remaining: " +secondsLeft;

    if(secondsLeft <= 0) {      
      clearInterval(timerInterval);      
      sendMessage();
      return  window.location.assign("/end.html")
    }

  }, 1000);
}

function sendMessage() {
    timeEl.textContent = " Time's UP! ";

   
  
  }

  setTime();
