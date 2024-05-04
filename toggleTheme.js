const input = document.querySelector("input");
const h1 = document.querySelector("h1");
const divVittorie1 = document.getElementById("vittorie1");
const divVittorie2 = document.getElementById("vittorie2");
const cellColor = document.querySelectorAll(".cell");

const resetBtn = document.getElementById("reset");
const startBtn = document.getElementById("btnStart");
const resetScore = document.getElementById("btnResetPunti");

input.addEventListener("change", () => {
    if (input.checked) {
        darkMode();
    } else {
        LightMode();
    }
});

const darkMode = () => {
    document.body.style.backgroundImage = "url('./assets/images/bg-final.jpg')";
    document.body.style.backgroundSize = "cover";
    h1.style.color = "white";
    divVittorie1.style.color = "white";
    divVittorie2.style.color = "white";
    cellColor.forEach((cell) => {
        cell.classList.add("cellDimensionDark");
        cell.classList.remove("cellDimensionLight");
    });

    startBtn.style.backgroundColor = "yellow";
    startBtn.style.color = "blueviolet";

    resetBtn.style.backgroundColor = "green";
    resetBtn.style.color = "blue";

    resetScore.style.backgroundColor = "red";
    resetScore.style.color = "lightgreen";

    resetBtn.classList.add("shadowDarkMode");
    startBtn.classList.add("shadowDarkMode");
    resetScore.classList.add("shadowDarkMode");
    resetBtn.classList.remove("shadowLigthMode");
    startBtn.classList.remove("shadowLigthMode");
    resetScore.classList.remove("shadowLigthMode");
};

const LightMode = () => {
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "white";
    h1.style.color = "black";
    divVittorie1.style.color = "black";
    divVittorie2.style.color = "black";
    cellColor.forEach((cell) => {
        cell.classList.remove("cellDimensionDark");
        cell.classList.add("cellDimensionLight");
    });

    startBtn.style.backgroundColor = "blueviolet";
    startBtn.style.color = "yellow";

    resetBtn.style.backgroundColor = "blue";
    resetBtn.style.color = "green";

    resetScore.style.backgroundColor = "lightgreen";
    resetScore.style.color = "red";

    resetBtn.classList.add("shadowLigthMode");
    startBtn.classList.add("shadowLigthMode");
    resetScore.classList.add("shadowLigthMode");
    resetBtn.classList.remove("shadowDarkMode");
    startBtn.classList.remove("shadowDarkMode");
    resetScore.classList.remove("shadowDarkMode");
};
