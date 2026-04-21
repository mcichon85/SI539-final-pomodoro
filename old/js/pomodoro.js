//mcichon SI 539 Final Project Javascript

// Pomodoro Timer countdown
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const playPausebtn = document.getElementById('play-pause-btn');

let setTime = 1500; //25 minutes in seconds
let timeLeft = 1500;
let timerInterval = null;
let isRunning = false;

//main pomodoro timer
document.querySelector("body > main > div.timer-container > div.timer-buttons > button.pomodoro-timer").addEventListener('click', () => {
    setTimer(1500); // 25 min
})

//short break
document.querySelector("body > main > div.timer-container > div.timer-buttons > button.shortbreak-timer").addEventListener('click', () => {
    setTimer(300); // 5min
})

// long break
document.querySelector("body > main > div.timer-container > div.timer-buttons > button.longbreak-timer").addEventListener('click', () => {
    setTimer(900); // 15 min
})

function updateDisplay(setTime) {
    let mins = Math.floor(setTime / 60);
    let secs = setTime % 60;
    minutes.innerText = formatNumber(mins);
    seconds.innerText = formatNumber(secs);
}

function setTimer(seconds) {
    clearInterval(timerInterval);
    isRunning = false;
    playPausebtn.innerText = "Play";
    timeLeft = seconds;
    updateDisplay(timeLeft);
}

function toggleCountdown() {
    if (isRunning) {
        // pause timer
        clearInterval(timerInterval);
        playPausebtn.innerText = "Play";
    } else {
        // play timer
        playPausebtn.innerText = "Pause";
        timerInterval = setInterval(() => {
            timeLeft--;
            updateDisplay(timeLeft);
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                console.log("Time's up!");
                // alert("Time's up!");
            }
        }, 1000);
    }
    isRunning = !isRunning;
}

function formatNumber(num) { return num < 10 ? `0${num}` : num; }

playPausebtn.addEventListener('click', toggleCountdown);