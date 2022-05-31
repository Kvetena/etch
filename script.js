const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    // cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(16, 16);

let resizeButton = document.querySelector('.resize');

resizeButton.addEventListener('click', resize);


function resize(){
    var rows = prompt("How many rows do you want?", 16);
    var columns = prompt("How many columns do you want?", 16);
    if (rows > 100 & columns > 100){
        rows = prompt("The rows must be less then 100, choose again", 16);
        columns = prompt("The columns must be less then 100, choose again", 16);
        document.getElementById("container").innerHTML = "";
        makeRows(rows, columns);
    }else if(columns > 100){
        columns = prompt("The columns must be less then 100, choose again", 16);
        document.getElementById("container").innerHTML = "";
        makeRows(rows, columns);
    }else if (rows > 100){
        rows = prompt("The rows must be less then 100, choose again", 16);
        document.getElementById("container").innerHTML = "";
        makeRows(rows, columns);
    }else {
        document.getElementById("container").innerHTML = "";
        makeRows(rows, columns);
    }
}

function act (){
    if (bool){
        activate.textContent = "Disable";
        coloring();
    }else if(!bool){
        activate.textContent = "Activate";
    }
};

function coloring(){
        var cells = document.querySelectorAll('.grid-item');
        Array.from(cells).forEach(cell => {
            cell.addEventListener("mouseenter", function() {
            cell.classList.add('grid-item-clicked')
            });
        });
}

var activate = document.querySelector('.activate');
var bool = false;

activate.addEventListener('click', function(){
    bool = !bool;
    console.log(bool);
    act();
})