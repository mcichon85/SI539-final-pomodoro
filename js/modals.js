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

// switching themes in the settings modal
const themeRadios = document.querySelectorAll('.settings-switch-themes input[type="radio"]');
const rootElement = document.documentElement; 

    // 2. THEME SWITCHING LOGIC
    themeRadios.forEach(radio => {
        radio.addEventListener('click', () => {
            const selectedTheme = radio.id; // e.g., 'mocha-theme'

            if (selectedTheme === 'flora-theme') {
                rootElement.removeAttribute('data-theme');
            } else {
                rootElement.setAttribute('data-theme', selectedTheme);
            }
            console.log("Active Theme:", selectedTheme);
 
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
            
            //saved the theme in local storage
            // localStorage.setItem('pomodoro-theme', radio.id);
        });
    });