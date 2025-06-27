
const scoreEl = document.getElementById("score");
const buttons = document.querySelectorAll("button");
const numberDisplay = document.getElementById("display");
const levelEl = document.getElementById("lvl");
const timerDisplay = document.getElementById("safeTimerDisplay");


let currentLevel = 1;
let currentScore = 0;
let randomNumbers = [];
let playerInput = [];
let timerInterval;


function generateSequence(length) {
    const sequence = [];
    for (let i = 0; i < length; i++) {
        sequence.push(Math.floor(Math.random() * 9) + 1);
    }
    return sequence;
}


function showSequence(sequence) {
    let index = 0;
    const displayInterval = setInterval(() => {
        numberDisplay.innerText = sequence[index];
        index++;
        if (index >= sequence.length) {
            clearInterval(displayInterval);
            setTimeout(() => {
                numberDisplay.innerText = "";
            }, 500);
        }
    }, 1000);
}


function startTimer(duration) {
    clearInterval(timerInterval);
    let timer = duration;

    timerInterval = setInterval(() => {
        const minutes = String(Math.floor(timer / 60)).padStart(2, '0');
        const seconds = String(timer % 60).padStart(2, '0');
        timerDisplay.textContent = `${minutes}:${seconds}`;

        timer--;

        
        if (playerInput.toString() === randomNumbers.toString()) {
            clearInterval(timerInterval);
            timerDisplay.textContent = "";
        }
        else if(timer <= 0){
            resetGame()
            startTimer(30)
        }
    }, 1000);
}


function resetGame() {
    playerInput = [];
    currentLevel = 1;
    currentScore = 0;
    scoreEl.textContent = "score: 0";
    levelEl.textContent = "level: 1";
    numberDisplay.innerText = "Try Again!";
}


function nextRound() {
    playerInput = [];
    currentLevel++;
    currentScore += 10;

    
    scoreEl.textContent = `score: ${currentScore}`;
    levelEl.textContent = `level: ${currentLevel}`;
    numberDisplay.innerText = "Next Round";
    numberDisplay.style.background = "purple";
    setTimeout(() => {
        numberDisplay.style.background = "#e07000";
        numberDisplay.innerText = "";
    }, 500);

    
    randomNumbers = generateSequence(currentLevel + 2);
    console.log("New Sequence:", randomNumbers);
    showSequence(randomNumbers);
    startTimer(30);
}
const handler =(e) => {
        btnClick = e.target
        const chosenNumber = Number(btnClick.textContent);
        playerInput.push(chosenNumber);

     
        numberDisplay.innerText = chosenNumber;
        const currentIndex = playerInput.length - 1;

        if (playerInput[currentIndex] !== randomNumbers[currentIndex]) {
            btnClick.style.background = "red";
            resetGame();

            setTimeout(() => {
                btnClick.style.background = "blue";
            }, 1000);
        } else {
            btnClick.style.background = "green";

            setTimeout(() => {
                btnClick.style.background = "#0093b8";
            }, 2000);

            
            if (playerInput.length === randomNumbers.length) {
                if (playerInput.toString() === randomNumbers.toString()) {
                    nextRound();
                }
            }
        }
    }

buttons.forEach((btn) => {
    btn.addEventListener("click",handler );
});


window.onload = () => {
    randomNumbers = generateSequence(currentLevel + 2);
    console.log("Initial Sequence:", randomNumbers);
    showSequence(randomNumbers);
    startTimer(30);
};
