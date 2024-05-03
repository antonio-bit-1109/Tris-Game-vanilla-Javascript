let IsUtente1_turn = false;
let isutente2_turn = false;
let IsGameReady = false;
const btnStart = document.getElementById("btnStart");
const outputDiv = document.getElementById("output");
const divWinner = document.getElementById("outputwinner");
const resetButton = document.getElementById("reset");
const caselle = document.querySelectorAll(".cell");
let statusGioco = document.getElementById("statusGame");
const divVIttoriePL1 = document.getElementById("vittorie1");
const divVIttoriePL2 = document.getElementById("vittorie2");
let myModal = new bootstrap.Modal(document.getElementById("exampleModal"));
// le caselle contrassegnate da utente1 prenderanno 1 mentre quelle segnate da utente2 prenderanno 2
let arrayVIttoria = [null, null, null, null, null, null, null, null, null];
let VittoriePlayer1 = 0;
let VIttoriePlayer2 = 0;

window.addEventListener("DOMContentLoaded", () => {
    resetButton.addEventListener("click", () => {
        reset(arrayVIttoria);
    });
    btnStart.addEventListener("click", startGame);
    btnStart.innerText = "Inizia Gioco";
});

const startGame = () => {
    if (IsGameReady === true) {
        IsGameReady = false;
        btnStart.innerText = "Inizia il gioco";
        statusGioco.innerText = "";
    } else {
        IsUtente1_turn = true;
        IsGameReady = true;
        btnStart.innerText = "Interrompi gioco";
        statusGioco.innerText = "tocca ad Utente 1 ";
        MakeTheMove();
    }
};

const MakeTheMove = () => {
    caselle.forEach((cell, i) =>
        cell.addEventListener("click", () => {
            if (cell.innerHTML !== "") {
                outputDiv.innerHTML = "casella gia presa, scegline un altra.";
                return;
            }
            if (IsUtente1_turn) {
                console.log("hai selezionato casella " + i);
                cell.innerHTML = `<span class='text-primary letter'>o</span>`;
                cell.classList.add("addPerspective");
                let letter = cell.querySelector(".letter");
                letter.classList.add("slide-in");
                IsUtente1_turn = false;
                isutente2_turn = true;
                outputDiv.innerHTML = "";
                arrayVIttoria[i] = 1;
                const ritornaNull = checkVittoria(arrayVIttoria);

                if (ritornaNull === null) {
                    let ReturnedArray = IspartitaPatta(arrayVIttoria);
                    if (ReturnedArray.length === 9 && ReturnedArray.every((value) => value === true)) {
                        izTie();
                    }
                    return;
                }
                //
                //
                //
            } else if (isutente2_turn) {
                console.log("hai selezionato casella " + i);
                cell.innerHTML = `<span class='text-success letter'>x</span>`;
                cell.classList.add("addPerspective");
                let letter = cell.querySelector(".letter");
                letter.classList.add("slide-in");
                IsUtente1_turn = true;
                isutente2_turn = false;
                outputDiv.innerHTML = "";
                arrayVIttoria[i] = 2;
                const ritornaNull = checkVittoria(arrayVIttoria);

                if (ritornaNull === null) {
                    let ReturnedArray = IspartitaPatta(arrayVIttoria);
                    if (ReturnedArray.length === 9 && ReturnedArray.every((value) => value === true)) {
                        izTie();
                    }
                    return;
                }
            } else {
                console.error("errore di progettazione");
            }
        })
    );
};

const checkVittoria = (array) => {
    const condizioniVittoria = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < condizioniVittoria.length; i++) {
        const [a, b, c] = condizioniVittoria[i];

        if (array[a] && array[a] === array[b] && array[a] === array[c]) {
            let winningPlayer = array[a];
            declareWinner(winningPlayer);
            return;
        }
    }
    return null;
};

const declareWinner = (num) => {
    if (num === 1) {
        divWinner.innerText = `ha vinto il giocatore ${num}`;
        VittoriePlayer1++;
        divVIttoriePL1.innerHTML = `Vittorie giocatore1:  <span class="fst-italic display-3 fw-bold">${VittoriePlayer1}</span>`;
    } else {
        divWinner.innerText = `ha vinto il giocatore ${num}`;
        VIttoriePlayer2++;
        divVIttoriePL2.innerHTML = `Vittorie giocatore2: <span class="fst-italic display-3 fw-bold">${VIttoriePlayer2}</span>`;
    }
};

const IspartitaPatta = (array) => {
    let arraycontrollo = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== null) {
            arraycontrollo.push(true);
        } else {
            return;
        }
    }

    return arraycontrollo;
};

const izTie = () => {
    console.log("parità");
    myModal.show();
};

const reset = (array) => {
    IsGameReady = false;
    IsUtente1_turn = true;
    isutente2_turn = false;
    statusGioco.innerHTML = "";
    divWinner.innerHTML = "";
    outputDiv.innerHTML = "";
    btnStart.innerText = "Inizia il gioco";
    caselle.forEach((cell, i) => {
        cell.innerHTML = "";
    });
    for (let i = 0; i < array.length; i++) {
        array[i] = null;
    }
};
