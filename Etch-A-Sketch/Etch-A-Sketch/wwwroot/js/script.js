let isMouseDown = false;

// Add event listeners to handle mouse down and up events.
document.body.addEventListener('mousedown', (e) => {
    if (e.button === 0) {
        isMouseDown = true;
        e.preventDefault();
    }
});

// Prevent behavior for mouseup outside of bounds to avoid issues with dragging.
window.addEventListener('mouseup', () => {
    isMouseDown = false;
});

/**
 * Function to create a grid of squares.
 * @param {number} size - The number of squares, both width and height of the grid example : 16 for a 16x16 grid.
 */
function createGrid(size) {

    const container = document.querySelector('.container');
    container.innerHTML = '';

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `calc(100% / ${size})`;

        square.addEventListener('mouseover', () => {
            if (isMouseDown) {
                square.style.backgroundColor = 'black';
            }
        });

        square.addEventListener('mousedown', () => {
                square.style.backgroundColor = 'black';     
        });

        container.appendChild(square);
    }
}

createGrid(16);

/**
 * Function to reset the grid take the user input or the new grid size.
 */
function resetGrid() {
    let gridSize = prompt("Enter new grid size (1-100):");
    gridSize = parseInt(gridSize);

    if (isNaN(gridSize) || gridSize < 1 || gridSize > 100)
    {
        alert("Please enter a valid number between 1 and 100.");
    }
    else
    {
        createGrid(gridSize);
    }
}

