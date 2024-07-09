for (let i = 0; i < 9; i++) {
    let gridElement = document.getElementById(i.toString());
    gridElement.addEventListener('click', function() {
        console.log(gridElement.id);
    });
}