// Etch-a-sketch

const userInput = document.createElement("p");

const gameStart = document.getElementById("game-start");
const multiColor = document.getElementById("multi-color");
const blackColor = document.getElementById("black-color");
const eraseBoard = document.getElementById("erase-board");

let myGrid = document.getElementById("container");

// gridSquares.style.border = "5px ";


function create (n) {
    let widHt = 600.00;
    for (i=0; i<n**2; i++) {
        let gridSquares = document.createElement("div");
        gridSquares.style.color = "";
        // gridSquares.style.boxSizing = "borderBox";
        gridSquares.style.outline = "2px solid gray";
        gridSquares.style.width = parseInt(widHt/n)+"px";
        gridSquares.style.height = parseInt(widHt/n)+"px";
        myGrid.appendChild(gridSquares);
    }

}

create(16.00);

// gameStart.addEventListener("click", (e) => {
//     myGrid.innerText = "It worked";
// });


// const heading = document.getElementById("game");


// buttons for start, multicolor, black, erase, input from user

