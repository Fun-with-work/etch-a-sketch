// Etch-a-sketch

const gameHeading = document.createElement("p");
const gameStart = document.createElement("button");
const multicolor = document.createElement("button");
const blackColor = document.createElement("button");
const eraseBoard = document.createElement("button");
const userInput = document.createElement("p");

gameStart.textContent = "Start";
multicolor.textContent = "Multi Color";
blackColor.textContent = "Black";
eraseBoard.textContent = "Erase";

gameStart.style.marginRight = "50px";
multicolor.style.marginRight = "50px";
blackColor.style.marginRight = "50px";
// eraseBoard.style.marginRight = "50px";

gameStart.style.backgroundColor = "yellow";
multicolor.style.backgroundColor = "yellow";
blackColor.style.backgroundColor = "yellow";
eraseBoard.style.backgroundColor = "yellow";

gameStart.style.padding = "20px";
multicolor.style.padding = "20px";
blackColor.style.padding = "20px";
eraseBoard.style.padding = "20px";

gameStart.style.border = "5px solid gray";
multicolor.style.border = "5px solid gray";
blackColor.style.border = "5px solid gray";
eraseBoard.style.border = "5px solid gray";

gameStart.style.borderRadius = "30%";
multicolor.style.borderRadius = "30%";
blackColor.style.borderRadius= "30%";
eraseBoard.style.borderRadius = "30%";


gameStart.style.fontSize = "1.2rem";
multicolor.style.fontSize = "1.2rem";
blackColor.style.fontSize = "1.2rem";
eraseBoard.style.fontSize = "1.2rem";

gameStart.style.color = "gray";
multicolor.style.color = "gray";
blackColor.style.color = "gray";
eraseBoard.style.color = "gray";


const heading = document.getElementById("game");

heading.appendChild (gameStart);
heading.appendChild (multicolor);
heading.appendChild (blackColor);
heading.appendChild (eraseBoard);




// function for creating divs
// buttons for start, multicolor, black, erase, input from user