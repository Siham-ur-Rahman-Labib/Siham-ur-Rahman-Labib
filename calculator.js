function clearScreen() {
    document.getElementById('calculator-screen').value = '';
}

function appendToScreen(value) {
    document.getElementById('calculator-screen').value += value;
}

function calculate() {
    const screen = document.getElementById('calculator-screen');
    try {
        screen.value = eval(screen.value);
    } catch {
        screen.value = 'Error';
    }
}

function calculateSquareRoot() {
    const screen = document.getElementById('calculator-screen');
    try {
        screen.value = Math.sqrt(eval(screen.value));
    } catch {
        screen.value = 'Error';
    }
}