// Etch-a-sketch

// const userInput = document.createElement("p");

const gameStart = document.getElementById("game-start");
const multiColor = document.getElementById("multi-color");
const blackColor = document.getElementById("black-color");
const eraseBoard = document.getElementById("erase-board");

const myGrid = document.getElementById("container");
let num = 16.00;
const widHt = 500.00;


function myNumber() {
    let num = prompt ("How many squares per side do you want in the grid? Choose between 10 - 100", "16.00");
    
    if (num == null || num == "") {
        alert ( "User cancelled the prompt.");
    } else if (num < 10 || num >100) {
        alert ( "The number is invalid.");
    } else { 
        while (myGrid.firstChild) myGrid.firstChild.remove();
        create(num);
    }};
    
    create(num);
    
function create (num) {
    for (i=0; i<num**2; i++) {
        gridSquares = document.createElement("div");
        gridSquares.className = "new-div";
        gridSquares.style.color = "";
        gridSquares.style.backgroundColor = "#E6A8F7";
        gridSquares.style.outline = "2px solid gray";
        gridSquares.style.width = Number(widHt/num)+"px";
        gridSquares.style.height = Number(widHt/num)+"px";
        myGrid.appendChild(gridSquares);
      
    }
};


function mouseOver() {
    // items.forEach((item) => {
    myGrid.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "magenta";    
        
        
    });
// })
}


// const heading = document.getElementById("game");



