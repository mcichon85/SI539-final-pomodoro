const helpModal = document.querySelector(".help-modal");
const overlay = document.querySelector(".overlay");
const openHelpModalBtn = document.querySelector("#open-help-modal");
const closeHelpModalBtn = document.querySelector("#close-help-modal");
const todoHeading = document.querySelector("body > main > div.todo-list-container > div > h2");

//check if user has a theme already saved in their local storage
// const savedTheme = localStorage.getItem('pomodoro-theme');
// if (savedTheme) {
//     document.getElementById(savedTheme).click();
// }

openHelpModalBtn.addEventListener("click", () => {
    overlay.style.display = "flex";
    helpModal.style.display = "flex";
})

closeHelpModalBtn.addEventListener("click", () => {
    overlay.style.display = "none";
    helpModal.style.display = "none";
})

const settingsModal = document.querySelector(".settings-modal");
const openSettingsModalBtn = document.querySelector("#open-settings-modal");
const closeSettingsModalBtn = document.querySelector("#close-settings-modal");

openSettingsModalBtn.addEventListener("click", () => {
    overlay.style.display = "flex";
    settingsModal.style.display = "flex";
})

closeSettingsModalBtn.addEventListener("click", () => {
    overlay.style.display = "none";
    settingsModal.style.display = "none";
})

const audioToggleBtn = document.getElementById('audio-toggle-btn');
const audioContainer = document.getElementById('audio-player-container');
const alertSound = document.getElementById('timer-sound');
const audioDescription = document.querySelector("body > main > section.settings-modal > div > div.settings-audio > div.audio-manual-controls > p");

const themeSounds = {
    'flora-theme': 'assets/audios/flora_starostin-universe-cosmic-planet-galaxy-music-258633.mp3',
    'mocha-theme': 'assets/audios/mocha_lofidreams-cozy-coffee-shop-chill-lofi-music-385853.mp3',
    'aqua-theme': 'assets/audios/aqua_samuelfjohanns-atmosphere-of-atlantis-246389.mp3',
    'nebula-theme': 'assets/audios/nebula_denis-pavlov-music-cosmos-galaxy-stars-universe-milky-way-planet-ambient-music-208619.mp3'
};

// switching themes in the settings modal
const themeRadios = document.querySelectorAll('.settings-switch-themes input[type="radio"]');
const rootElement = document.documentElement; 

    themeRadios.forEach(radio => {
        radio.addEventListener('click', () => {
            const selectedTheme = radio.id; // e.g., 'mocha-theme'

            if (selectedTheme === 'flora-theme') {
                rootElement.removeAttribute('data-theme');
            } else {
                rootElement.setAttribute('data-theme', selectedTheme);
            }
            console.log("Active Theme:", selectedTheme);
            audioDescription.textContent = "Audio is currently OFF";
 
            if (selectedTheme == "flora-theme") {
                todoHeading.textContent = "🌿 🌸°•∘To Do List ∘•°🌸🌿";
            } else if (selectedTheme == "mocha-theme") {
                todoHeading.textContent = "☕⋆˚✧ To Do List  ✧˚⋆📚";
            } else if (selectedTheme == "nebula-theme") {
                todoHeading.textContent = "⋆.˚⭒⋆🌌To Do List 🌌⋆⭒˚.⋆";
            } else if (selectedTheme == "aqua-theme") {
                todoHeading.textContent = " ⋆🪼ೃ⭒ To Do List ⭒ೃ🪼⋆";
            }

            console.log(`Theme switched to: ${selectedTheme}`);

            audioToggleBtn.textContent = "Play Audio";
            audioContainer.style.display = "none";
            alertSound.pause();
            alertSound.currentTime = 0;
            alertSound.src = "";

        });
    });


audioToggleBtn.addEventListener('click', () => {
    const audioIsOff = audioToggleBtn.textContent === "Stop Audio";

    if (!audioIsOff) {
        audioToggleBtn.textContent = "Stop Audio";
        audioToggleBtn.classList.add('audio-active');
        audioContainer.style.display = "flex";

        const currentTheme = document.documentElement.getAttribute('data-theme') || 'flora-theme';
        const trackPath = themeSounds[currentTheme];

        if (trackPath) {
            alertSound.src = trackPath;
            alertSound.load();
            // currentTheme.loop = true;
            alertSound.play();
            switch (currentTheme) {
                case "flora-theme":
                     audioDescription.textContent = "Audio by Viacheslav Starostin";
                    break;
                case "mocha-theme":
                    audioDescription.textContent = "Audio by Kaveesha Senanayake";
                    break;
                case "nebula-theme":
                    audioDescription.textContent = "Audio by Denis Pavlov";
                    break;
                case "aqua-theme":
                    audioDescription.textContent = "Audio by Samuel F. Johanns";
                    break;
                default:
                    audioDescription.textContent = "Audio is currently ON"
                    // Code to run if no cases match
                }
        }

    } else {
        audioToggleBtn.textContent = "Play Audio";
        audioDescription.textContent = "Audio is currently OFF";
        audioContainer.style.display = "none";
        alertSound.pause();
        alertSound.currentTime = 0;
    }
})