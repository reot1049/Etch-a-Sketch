let size = 0;
var board = document.querySelector(".container");
let color = 0;
function initBoard(row, col) {
    board.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
    for(let i = 0; i < row; i++)
    {
        for(let j = 0; j < col; j++)
        {
            let newGrid = document.createElement("div");
            newGrid.style.backgroundColor = 'white';
            newGrid.style.height = (700 - 2 * row) / row + "px";
            newGrid.style.width = (800 - 2 * col) / col + "px";
            newGrid.style.border = "1px solid black";
            board.appendChild(newGrid).className = "gridSquares";
        }
    }
}  

function hover() {
    board.addEventListener("mouseover", (theGrid) => {
        if(theGrid.target.style.backgroundColor == 'white')
        {
            if(color == 0)
            {
                theGrid.target.style.backgroundColor = "pink";
            }
            else if(color == 1)
            {
                theGrid.target.style.backgroundColor = getRandomColor();
            }
        }
    })
}

function start() {
    size = prompt("choose a number between 5 and 64");
    if(size < 5 || size > 64)
    {
        alert("You didn't choose a number between 5 and 64, try again!");
        start();
    }
    else 
    {
        initBoard(size, size);
        hover();
    }
}

start();

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var randomColor = document.querySelector("#randColor");
var reset = document.getElementById("reset");
var origColor = document.querySelector("#origColor");
var resize = document.querySelector("#resize");

reset.onclick = function() {
    for(let i = 0; i < size * size; i++)
    {
        document.querySelectorAll(".gridSquares")[i].style.backgroundColor = 'white';
    }
}

randomColor.onclick = function() {
    color = 1;
}

origColor.onclick = function() {
    color = 0;
}

resize.onclick = function() {
    size = prompt("choose a number between 5 and 64");
    if(size < 5 || size > 64)
    {
        alert("You didn't choose a number between 5 and 64, try again!");
    }
    else 
    {
        var list = document.querySelectorAll(".gridSquares");
        for(let i = 0; i < list.length; i++)
        {
            list[i].remove();
        }
        initBoard(size, size);
    }
}