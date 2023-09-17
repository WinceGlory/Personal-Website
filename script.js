/* Hamburger Menu */
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".links-container");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".link")
    .forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
    }));


const dynamicText = document.getElementById('typewriter');
const words = ['engaging', 'user-friendly', 'accessible'];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add('stop-animation')

    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 200);
    
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 100);

    } else {
        isDeleting = !isDeleting;
        dynamicText.classList.remove('stop-animation')
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1000);
    }
}

typeEffect();

/* Reveal Content on Scroll */
window.addEventListener('scroll', reveal);

function reveal() {
    let content = document.querySelectorAll('.reveal');

    for (let i = 0; i < content.length; i++) {

        let windowHeight = window.innerHeight;
        let revealContent = content[i].getBoundingClientRect().top;
        let revealPoint = 150;

        if (revealContent < windowHeight - revealPoint) {
            content[i].classList.add('active');
        }
        else {
            content[i].classList.remove('active');
        }
    }
}

