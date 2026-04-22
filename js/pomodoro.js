//mcichon SI 539 Final Project Javascript

// Pomodoro Timer countdown
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const playPausebtn = document.getElementById('play-pause-btn');
const clickSound = new Audio("assets/audios/trimmed-walkman-button-soundsforstory.mp3");
const alarmSound = new Audio("assets/audios/soundsforyou-old-mechanic-alarm-clock-140410-[AudioTrimmer.com].mp3")

// Sound Effect by soundsforstory from Pixabay
// Sound Effect by <a href="https://pixabay.com/users/soundsforstory-46312188/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=272973">soundsforstory</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=272973">Pixabay</a>

// Sound Effect by Mikhail from Pixabay
// Sound Effect by <a href="https://pixabay.com/users/soundsforyou-4861230/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=140410">Mikhail</a> from <a href="https://pixabay.com/sound-effects//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=140410">Pixabay</a>// Sound Effect by <a href="https://pixabay.com/users/freesound_community-46691455/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=14474">freesound_community</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=14474">Pixabay</a>

let setTime = 1500; //25 minutes in seconds
let timeLeft = 1500;
let timerInterval = null;
let isRunning = false;

//main pomodoro timer
document.querySelector("body > main > div.timer-container > div.timer-buttons > button.pomodoro-timer").addEventListener('click', () => {
    setTimer(1500); // 25 min
    clickSound.play();
})

//short break
document.querySelector("body > main > div.timer-container > div.timer-buttons > button.shortbreak-timer").addEventListener('click', () => {
    setTimer(300); // 5min
    clickSound.play();
})

// long break
document.querySelector("body > main > div.timer-container > div.timer-buttons > button.longbreak-timer").addEventListener('click', () => {
    setTimer(900); // 15 min
    clickSound.play();
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
                alarmSound.play();
                setTimer(setTime);
                isRunning = false;

                setTimeout(() => {
                    alert("Time's up!");
                }, 100);

            }
        }, 1000);
    }
    isRunning = !isRunning;
}

function formatNumber(num) { return num < 10 ? `0${num}` : num; }

playPausebtn.addEventListener('click', toggleCountdown);