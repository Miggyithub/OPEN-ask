// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='SIGE NA NGA']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Click Envelope to Open
envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout(() => {
        document.querySelector(".letter-window").classList.add("open");
    }, 50);
});

// Logic to move the NO btn randomly on hover
noBtn.addEventListener("mouseover", () => {
    const min = 150;
    const max = 250;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// YES is clicked
yesBtn.addEventListener("click", () => {
    title.textContent = "Yippeeee!";
    catImg.src = "cat_dance.gif"; // Make sure this file is in your folder

    document.querySelector(".letter-window").classList.add("final");
    buttons.style.display = "none";
    finalText.style.display = "block";
});
