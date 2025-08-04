//const container = document.querySelector('.container');
//let gridSize = 95;
//for (let i = 0; i < gridSize  * gridSize; i++)
//{
//    const square = document.createElement('div');
//    square.classList.add('square');
//    square.style.width = `calc(100% / ${gridSize})`;
//    container.appendChild(square);
//}

//const squares = document.querySelectorAll('.square');

//squares.forEach(square => {
//    square.addEventListener('mouseover', () => {
//        square.style.backgroundColor = 'black';
//    });
//});

let isMouseDown = false;

document.body.addEventListener('mousedown', () => {
    isMouseDown = true;
});

document.body.addEventListener('mouseup', () => {
    isMouseDown = false;
});


function createGrid(size) {

    const container = document.querySelector('.container');
    container.innerHTML = '';

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `calc(100% / ${size})`;

        square.addEventListener('mousedown', () => {
            if (isMouseDown) {
                square.style.backgroundColor = 'black';
            }
           
        });

        square.addEventListener('mouseover', () => {
            if (isMouseDown) {
                square.style.backgroundColor = 'black';
            }
         });

        container.appendChild(square);
    }
}

/*createGrid(16);*/
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

