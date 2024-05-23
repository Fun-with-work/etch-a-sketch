// Etch-a-sketch

const Choose = document.getElementById("choose");
const gameStart = document.getElementById("game-start");
const blackColor = document.getElementById("black-color");
const multiColor = document.getElementById("multi-color");
const eraseBoard = document.getElementById("erase-board");
const myGrid = document.getElementById("container");
let gridSquares;

const textStart = document.createElement("p");
const textBlackColor = document.createElement("p");
const textMultiColor = document.createElement("p");
const textEraser = document.createElement("p");

gameStart.appendChild(textStart);
blackColor.appendChild(textBlackColor);
multiColor.appendChild(textMultiColor);
eraseBoard.appendChild(textEraser);

textStart.style.fontSize = "13px";
textBlackColor.style.fontSize = "13px";
textMultiColor.style.fontSize = "13px";
textEraser.style.fontSize = "13px";

textStart.textContent = "Click to begin";
textBlackColor.textContent = "Black here";
textMultiColor.textContent = "Random colors";
textEraser.textContent = "A new beginning";

let num = 16.00;
const widHt = 500.00;
let myColor = "magenta";


Choose.addEventListener("click", event => {
    let num = prompt("How many squares per side do you want? Choose between 10 - 100", "16.00");

    if (num == null || num == "") {
        alert("User cancelled the prompt.");
    } else if (num < 10 || num > 100) {
        alert("The number is invalid.");
    } else {
        while (myGrid.firstChild) myGrid.firstChild.remove();
        create(num);
    }
});

create(num);

function create(num) {
    for (i = 0; i < num ** 2; i++) {
        gridSquares = document.createElement("div");
        gridSquares.className = "new-div";
        gridSquares.style.color = "";
        gridSquares.style.backgroundColor = "#ECFAF6";
        gridSquares.style.outline = "2px solid gray";
        gridSquares.style.width = Number(widHt / num) + "px";
        gridSquares.style.height = Number(widHt / num) + "px";
        myGrid.appendChild(gridSquares);
    }
};


blackColor.addEventListener("click", event => {
    (myColor = "#000000");
});


multiColor.addEventListener("click", event => {
    myColor = 'rgb(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ')';
    return myColor;
});


gameStart.addEventListener("click", event => {
    // function mouseOver() {
        myGrid.addEventListener("mouseover", event => {
            event.target.style.backgroundColor = (myColor);
        })
    });
// });




