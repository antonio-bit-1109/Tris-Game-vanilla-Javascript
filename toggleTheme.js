const input = document.querySelector("input");
const h1 = document.querySelector("h1");
const divVittorie1 = document.getElementById("vittorie1");
const divVittorie2 = document.getElementById("vittorie2");
const cellColor = document.querySelectorAll(".cell");

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
};
