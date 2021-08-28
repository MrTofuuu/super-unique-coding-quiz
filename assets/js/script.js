// Query selectors to keep as a variable 
const question = document.querySelector("#question");
const answers = document.querySelector(".answers");
const timeEl = document.querySelector("#time");
//Variables to store arrays and items to be used for questions
let currentQuestion = {};
let isClickAnswer = true;
let questionCounter;
let questionLeft = [];
// Pool of questions to be used
let questionPool = [{
    question: "Who is going to be the future Pirate King",
    answer1: "Luffy",
    answer2: "Zoro",
    answer3: "Blackbeard",
    answer4: "Whitebeard",
    correct: 1
}, {
    question: "Who is the pirate that owned One Piece",
    answer1: "\"Red-Haired\" Shanks",
    answer2: "Monkey D. Dragon",
    answer3: "Portgas D. Ace",
    answer4: "Gol D. Roger",
    correct: 4
}, {
    question: "The show One Piece is based loosely off of what epic?",
    answer1: "The Illiad",
    answer2: "Journey to the West",
    answer3: "The Odyssey",
    answer4: "Tales from the Crypt",
    correct: 2
}, {
    question: "What is the name of Luffy's crew?",
    answer1: "Strawhats",
    answer2: "Kid",
    answer3: "Barto Club",
    answer4: "Heart",
    correct: 1
}, {
    question: "Who is the captain of the Luffy Fan club",
    answer1: "Bartolomeo",
    answer2: "Sanji",
    answer3: "Rayleigh",
    answer4: "Sabo",
    correct: 1
}, {
    question: "What devil fruit did Luffy eat?",
    answer1: "Bara Bara",
    answer2: "Baku Baku",
    answer3: "Gomu Gomu",
    answer4: "Yomi Yomi",
    correct: 3
}, {
    question: "What is the name of the Straw Hats Boat?",
    answer1: "Thousand Sunny",
    answer2: "Jack Sparrow",
    answer3: "Ron Burgandy",
    answer4: "Going Merry",
    correct: 1
}, {
    question: "Who is Monkey D. Luffy's father?",
    answer1: "Shanks",
    answer2: "Dragon",
    answer3: "Garp",
    answer4: "Rayleigh",
    correct: 2
}, {
    question: "Who is Monkey D. Luffy's brother?",
    answer1: "Portgas D. Ace",
    answer2: "Gol D. Roger",
    answer3: "Zoro",
    answer4: "Sanji",
    correct: 1
}, {
    question: "What is the name of the ability that allows the user to make others pass out",
    answer1: "Karate",
    answer2: "Tae Kwon Do",
    answer3: "Kung Fu",
    answer4: "Haki",
    correct: 4
}]

function init() {
    //clear timer and reset page to show default start screen
    //hide time
}

function startGame() {
    //click start to start game
    startCountdown();
    renderQuestion();

}

function winGame() {
    //print you won game and add put saving the score here?
    //stop time

}

function loseGame() {
    //print you lost
    //if (timeLeft===0){
    // you lose
    // }
}

function startCountdown() {
    //set the timer to count down
    var timeLeft = 30;

    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function() {
        // As long as the `timeLeft` is greater than 1
        if (timeLeft > 1) {
            // Set the `textContent` of `timeEl` to show the remaining seconds
            timeEl.textContent = 'Time: ' + timeLeft;
            // Decrement `timeLeft` by 1
            timeLeft--;
        } else if (!isClickAnswer) {
            // Decrement 'timeLeft' by 10 for penalty 
            timeLeft - 10;
            // Set the `textContent` of `timeEl` to show the remaining seconds
            timeEl.textContent = 'Time: ' + timeLeft;
        } else {
            // Once `timeLeft` gets to 0, set `timeEl` to an empty string
            timeEl.textContent = '';
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);
            // Call the `loseGame()` function
            loseGame();
        }
    }, 1000);
}

function renderQuestion() {
    //display question and answers
    //display the question
    var currentQuestion =
        //randomize the question, i think this would work
        // var questionDisplay = Math.floor(Math.random() * questionLeft.length);
        // currentQuestion= questionLeft[questionDisplay];

}

//need an event listener to listen for the correct answer button being pressed

//need an event listener for the start game?