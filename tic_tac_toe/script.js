let currentPlayer = "x";


//Array to store the x and o so setting the array content to null ;
// let array = Array(9).fill(null);



// select the grid box from the 3x3 grid
for (let i = 0; i < 9; i++) {
    let gridElement = document.getElementById(i.toString());
    gridElement.addEventListener('click', function() {
        console.log(gridElement.id);
    });
}