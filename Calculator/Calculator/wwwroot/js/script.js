let firstNumber = '0';
let secondNumber = '';
let result = '0';
let secondNumberInput = false;
let operation = '';

const deleteButton = document.getElementById('delete_Button');
deleteButton.addEventListener('click', deleteLastDigit);

const clearButton = document.getElementById('clear_Button');
clearButton.addEventListener('click', clearAll);

const action = {
    '+': () => addition(),
    '-': () => substraction(),
    'x': () => multiplication(),
    '÷': () => division(),
    /*'⌫':() => deleteLastDigit(),*/
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

function multiplication()
{
    secondNumberInput = true;
    updateDisplay('x');
    operation = 'x';
}

function division()
{
    secondNumberInput = true;
    updateDisplay('÷');
    operation = '÷';
}

function deleteLastDigit()
{
    if (!secondNumberInput) {
        firstNumber = firstNumber.slice(0, -1) || '0';
        updateDisplay(firstNumber);
        
    }
    else if (secondNumberInput)
    {
        secondNumber = secondNumber.slice(0, -1) || '0';
        updateDisplay(secondNumber);
        updateHistory(firstNumber + operation + secondNumber);
    }
}

function clearAll()
{
    firstNumber = '0';
    secondNumber = '';
    result = '0';
    secondNumberInput = false;
    operation = '';
    updateDisplay(firstNumber);
    updateHistory('');
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
        case 'x':
            result = number1 * number2;
            break;
        case '÷':
            if (number2 === 0) {
                alert('Cannot divide by zero');
                return;
            }
            else
            {
                result = number1 / number2;
                break;
            }
    }

    updateDisplay(result);
    firstNumber = result.toString();
    secondNumber = '';
    operation = '';
    secondNumberInput = false;

}