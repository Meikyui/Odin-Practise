let firstNumber = '0';
let secondNumber = '';
let result = '0';
let secondNumberInput = false;
let operation = '';

const action = {
    '+': () => addition(),
    '-': () => substraction(),
    '=': () => calculate(),
};

document.querySelector('.input_Button_Panel').addEventListener('click', (e) => {
    if (e.target.tagName !== 'BUTTON') return;

const value = e.target.textContent;

    if (!isNaN(value) || value === '.') {
        addDigit(value);
    }
    else if (action[value]) {
        action[value]();
    }
});

function addDigit(value)
{
    if (!secondNumberInput) {
        if (firstNumber === '0') {
            firstNumber = value;
        }
        else {
            firstNumber += value;
        }
        updateDisplay(firstNumber);
    }
    else
    {
        if (secondNumber === '') {
            secondNumber = value;
        }
        else
        {
            secondNumber += value;
        }
        updateDisplay(secondNumber);
        updateHistory(firstNumber + operation + secondNumber);
    }
};


function updateDisplay(value) {
    document.querySelector('.display').value = value;
};

function updateHistory(value) {
    document.querySelector('.history_Field').textContent = value;
};

function addition()
{
    secondNumberInput = true;
    updateDisplay('+');
    operation = '+';
};

function substraction()
{
    secondNumberInput = true;
    updateDisplay('-');
    operation = '-';
}

function calculate()
{
    const number1 = parseFloat(firstNumber);
    const number2 = parseFloat(secondNumber);   

    switch (operation) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
    }

    updateDisplay(result);
    firstNumber = result.toString();
    secondNumber = '';
    operation = '';
    secondNumberInput = false;

}