let firstNumber = '0';
let secondNumber = '';
let result = '';



document.querySelector('.input_Button_Panel').addEventListener('click', (e) => {
    if (e.target.tagName !== 'BUTTON') return;

const value = e.target.textContent;

    if (!isNaN(value) || value === '.') {
        addDigit(value);
    }
   
});

function addDigit(value)
{ 
    if (firstNumber === '0') {
        firstNumber = value;

    } else {
        firstNumber += value;
    }
    updateDisplay(firstNumber);
};

function updateDisplay(value) {
    document.querySelector('.display').value = value;
};