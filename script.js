// Etch-a-sketch

// const userInput = document.createElement("p");

const gameStart = document.getElementById("game-start");
const blackColor = document.getElementById("black-color");
const multiColor = document.getElementById("multi-color");
const eraseBoard = document.getElementById("erase-board");

const textStart = document.createElement("p");
gameStart.appendChild(textStart);
textStart.textContent = "Click to begin";
textStart.style.fontSize = "13px";

const textMultiColor = document.createElement("p");
multiColor.appendChild(textMultiColor);
textMultiColor.textContent = "A different color each time";
textMultiColor.style.fontSize = "13px";

const textBlackColor = document.createElement("p");
blackColor.appendChild(textBlackColor);
textBlackColor.textContent = "Black here";
textBlackColor.style.fontSize = "13px";

const myGrid = document.getElementById("container");
let num = 16.00;
const widHt = 500.00;


function myNumber() {
    let num = prompt("How many squares per side do you want in the grid? Choose between 10 - 100", "16.00");

    if (num == null || num == "") {
        alert("User cancelled the prompt.");
    } else if (num < 10 || num > 100) {
        alert("The number is invalid.");
    } else {
        while (myGrid.firstChild) myGrid.firstChild.remove();
        create(num);
    }
};

create(num);

function create(num) {
    for (i = 0; i < num ** 2; i++) {
        gridSquares = document.createElement("div");
        gridSquares.className = "new-div";
        gridSquares.style.color = "";
        gridSquares.style.backgroundColor = "#E6A8F7";
        gridSquares.style.outline = "2px solid gray";
        gridSquares.style.width = Number(widHt / num) + "px";
        gridSquares.style.height = Number(widHt / num) + "px";
        myGrid.appendChild(gridSquares);
    }
};

let myColor = "magenta";


blackColor.addEventListener("click", event => {
    (myColor = "#000000");
});


multiColor.addEventListener("mouseover", event => {
    // function randomColor() {
  { let letters = '0123456789ABCDEF';
    myColor = '#';
    for (let i = 0; i < 6; i++) {
        myColor += letters[Math.floor(Math.random() * 16)];
    }
    return myColor;}

});



function mouseOver() {
    myGrid.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = (myColor);

    });
}


// const heading = document.getElementById("game");



