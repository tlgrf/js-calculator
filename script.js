const history = []


function add(a, b) {
    const result = a + b;
    addToHistory(a, b, '+', result);
    return result;
}

function subtract(a, b) {
    const result = a - b;
    addToHistory(a, b, '-', result);
    return result;
}

function multiply(a, b) {
    const result = a * b;
    addToHistory(a, b, '*', result);
    return result;
}

function division(a, b) {
    if (b === 0) {
        console.log("Error - Cannot divide by 0!");
        return null;
    } else {
        const result = a / b;
        addToHistory(a, b, '/', result);
        return result;
    }
}

// add new calculation to history array
function addToHistory(a, b, operator, result) {
    history.push({
        operands: [a, b],
        operator: operator,
        result: result
    });
}

// Display all stored history
function displayHistory() {
    if (history.length === 0) {
        console.log("No calculations stored.");
    } else {
        console.table(history);
    }
}

// Testing the calculator
add(5, 3);
subtract(10, 2);
multiply(4, 7);
division(20, 5);
division(5, 0); // triggers divide by 0

displayHistory();