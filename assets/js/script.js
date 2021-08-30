// Query selectors to keep as a variable 
const startBtn = document.querySelector("#start-btn")
const nextBtn = document.querySelector("#next-btn")
const endBtn = document.querySelector("#end-btn")
const quizContainer = document.querySelector("#quiz-container");
const questionEl = document.querySelector("#question")
const answersEl = document.querySelector("#answers");
const timeEl = document.querySelector("#time");

//event listener variables
startBtn.addEventListener('click', startGame)
nextBtn.addEventListener('click', function() {
    questionIndex++;
    nextQuestion();
    checkWin();
})
endBtn.addEventListener('click', winGame)
    //Variables to store arrays and items to be used for questions
var isWin = false;
var timerCount;
var timer;
let currentQuestion = {};
let isClickAnswer = true;
let questionCounter;
let questionIndex = 0;
var score = 0;
let questionLeft = [];
// Pool of questions to be used
const questionPool = [{
    question: "Who is going to be the future Pirate King",
    answers: [
        { text: "Luffy", correct: true },
        { text: "Zoro", correct: false },
        { text: "Blackbeard", correct: false },
        { text: "Whitebeard", correct: false }
    ]
}, {
    question: "Who is the pirate that owned One Piece",
    answers: [
        { text: "\"Red-Haired\" Shanks", correct: false },
        { text: "Monkey D. Dragon", correct: false },
        { text: "Portgas D. Ace", correct: false },
        { text: "Gol D. Roger", correct: true }
    ]
}, {
    question: "The show One Piece is based loosely off of what epic?",
    answers: [
        { text: "Illiad", correct: false },
        { text: "Journey to the West", correct: true },
        { text: "The Odyssey", correct: false },
        { text: "Tales from the Crypt", correct: false }
    ]
}, {
    question: "What is the name of Luffy's crew?",
    answers: [
        { text: "Strawhats", correct: true },
        { text: "Kid", correct: false },
        { text: "Barto Club", correct: false },
        { text: "Heart", correct: false }
    ]
}, {
    question: "Who is the captain of the Luffy Fan club",
    answers: [
        { text: "Bartolomeo", correct: true },
        { text: "Sanji", correct: false },
        { text: "Rayleigh", correct: false },
        { text: "Sabo", correct: false }
    ]
}, {
    question: "What devil fruit did Luffy eat?",
    answers: [
        { text: "Bara Bara", correct: false },
        { text: "Baku Baku", correct: false },
        { text: "Gomu Gomu", correct: true },
        { text: "Yomi Yomi", correct: false }
    ]
}, {
    question: "What is the name of the Straw Hats Boat?",
    answers: [
        { text: "Thousand Sunny", correct: true },
        { text: "Jack Sparrow", correct: false },
        { text: "Ron Burgandy", correct: false },
        { text: "Going Merry", correct: false }
    ]

}, {
    question: "Who is Monkey D. Luffy's father?",
    answers: [
        { text: "Shanks", correct: false },
        { text: "Dragon", correct: true },
        { text: "Garp", correct: false },
        { text: "Rayleigh", correct: false }
    ]
}, {
    question: "Who is Monkey D. Luffy's brother?",
    answers: [
        { text: "Portgas D. Ace", correct: true },
        { text: "Gol D. Roger", correct: false },
        { text: "Zoro", correct: false },
        { text: "Sanji", correct: false }
    ]
}, {
    question: "What is the name of the ability that allows the user to make others pass out",
    answers: [
        { text: "Karate", correct: false },
        { text: "Tae Kwon Do", correct: false },
        { text: "Kung Fu", correct: false },
        { text: "Haki", correct: true }
    ]

}]

function init() {
    //clear timer and reset page to show default start screen
    //hide time
}

function startGame() {
    //click start to start game
    console.log("start button clicked")
        //set the timer to count down
    isWin = false;
    timerCount = 30;
    questionIndex = 0;
    startBtn.classList.add('hide');
    quizContainer.classList.remove('hide');
    nextQuestion();
    startCountdown();


}

function winGame() {
    //print you won game and add put saving the score here?
    //stop time
    score = timerCount;
    window.location.href = "score.html";

}

function loseGame() {
    //print you lost
    //if (timeLeft===0){
    // you lose
    // }
}

function startCountdown() {
    // Sets timer
    timer = setInterval(function() {
        timerCount--;
        timeEl.textContent = "Time: " + timerCount + "s";
        if (timerCount >= 0) {
            // Tests if win condition is met
            if (isWin && timerCount > 0) {
                // Clears interval and stops timer
                clearInterval(timer);
                winGame();
            }
        }
        // Tests if time has run out
        if (timerCount === 0) {
            // Clears interval
            clearInterval(timer);
            loseGame();
        }
    }, 1000);
}

function checkWin() {
    if (questionIndex === questionIndex.length) {
        isWin = true;
        winGame();
    }
}

function nextQuestion() {
    resetState();
    renderQuestion(questionPool[questionIndex]);

}

function renderQuestion(question) {
    //display question and answers
    //display the question
    //randomize the question, i think this would work
    // var questionDisplay = Math.floor(Math.random() * questionLeft.length);
    // currentQuestion= questionLeft[questionDisplay];
    questionEl.innerText = question.question;
    question.answers.forEach(function(answer) {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answersEl.appendChild(button)
    })

}

function resetState() {
    clearStatusClass(document.body)
    nextBtn.classList.add('hide')
    while (answersEl.firstChild) {
        answersEl.removeChild(answersEl.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    if (correct) {
        timerCount = timerCount + 15;
    } else {
        timerCount = timerCount - 15;
    }
    setStatusClass(document.body, correct)
    Array.from(answersEl.children).forEach(function(button) {
        setStatusClass(button, button.dataset.correct)
    })
    if (questionPool.length > questionIndex + 1) {
        nextBtn.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct');

    } else {
        element.classList.add('wrong');

    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

//need an event listener to listen for the correct answer button being pressed

//need an event listener for the start game?