let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
}
const textElement = document.getElementById('typing-text');
const textList = ["Web developers"];
let currentIndex = 0;
let charIndex = 0;
let typingSpeed = 100;
let erasingSpeed = 50;
let delayBetweenTexts = 1500;

function typeText() {
    if (charIndex < textList[currentIndex].length) {
        textElement.textContent += textList[currentIndex][charIndex];
        charIndex++;
        setTimeout(typeText, typingSpeed);
    } else {
        setTimeout(eraseText, delayBetweenTexts);
    }
}

function eraseText() {
    if (charIndex > 0) {
        textElement.textContent = textList[currentIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, erasingSpeed);
    } else {
        currentIndex = (currentIndex + 1) % textList.length;
        setTimeout(typeText, typingSpeed);
    }
}

setTimeout(typeText, delayBetweenTexts);

const themeButton = document.getElementById("theme-button");
const body = document.body;

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    body.classList.add(savedTheme);
    themeButton.textContent = savedTheme === "dark-mode" ? "☀" : "🌚";
}

themeButton.addEventListener("click", () => {
    const isDarkMode = body.classList.toggle("dark-mode");
    themeButton.textContent = isDarkMode ? "☀" : "🌚";
    localStorage.setItem("theme", isDarkMode ? "dark-mode" : "");
});

