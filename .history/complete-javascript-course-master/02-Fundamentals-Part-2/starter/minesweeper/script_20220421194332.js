document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid');
    let width = 10;
    lety bomb
    let squares = [];

    //create board
    function createBoard() {
        //get shuffled game array with random bombs
        const bombArray = 


        for(let i = 0; i < width * width; i++) {
            const square = document.createElement('div');
            square.setAttribute('id', i);
            grid.appendChild(square)
            squares.push(square);
        }
    }
    createBoard();
})