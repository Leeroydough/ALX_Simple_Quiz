// Function to perform addition
function add(number1, number2) {
    return number1 + number2;
}

// Function to perform subtraction
function subtract(number1, number2) {
    return number1 - number2;
}

// Function to perform multiplication
function multiply(number1, number2) {
    return number1 * number2;
}

// Function to perform division
function divide(number1, number2) {
    if (number2 === 0) {
        return "Error: Division by zero";
    }
    return number1 / number2;
}

// Function to get the input values and display the result
function calculate(operation) {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    let result;
    
    if (operation === 'add') {
        result = add(number1, number2);
    } else if (operation === 'subtract') {
        result = subtract(number1, number2);
    } else if (operation === 'multiply') {
        result = multiply(number1, number2);
    } else if (operation === 'divide') {
        result = divide(number1, number2);
    }
    
    document.getElementById('calculation-result').textContent = result;
}

// Adding event listeners to the buttons
document.getElementById('add').addEventListener('click', function() {
    calculate('add');
});

document.getElementById('subtract').addEventListener('click', function() {
    calculate('subtract');
});

document.getElementById('multiply').addEventListener('click', function() {
    calculate('multiply');
});

document.getElementById('divide').addEventListener('click', function() {
    calculate('divide');
});
