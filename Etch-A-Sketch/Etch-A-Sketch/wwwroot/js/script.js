const container = document.querySelector('.container');
let gridSize = 64;
for (let i = 0; i < gridSize  * gridSize; i++)
{
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `calc(100% / ${gridSize})`;
    container.appendChild(square);
}

const squares = document.querySelectorAll('.square');

squares.forEach(square => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'black';
    });
});