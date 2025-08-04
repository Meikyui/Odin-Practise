//const container = document.querySelector('.container');
//let gridSize = 95;
//for (let i = 0; i < gridSize  * gridSize; i++)
//{
//    const square = document.createElement('div');
//    square.classList.add('square');
//    square.style.width = `calc(100% / ${gridSize})`;
//    container.appendChild(square);
//}

const squares = document.querySelectorAll('.square');

squares.forEach(square => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'black';
    });
});

function createGrid(size) {

    const container = document.querySelector('.container');
    container.innerHTML = '';

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `calc(100% / ${size})`;
        container.appendChild(square);
    }
}

createGrid(16);