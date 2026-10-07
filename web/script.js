const display = document.getElementById('display');

function appendNumber(input) {
    if (display.value == "Неверное выражение" || display.value == "Infinity") {
        display.value = "";
    }
    display.value += input;
}
function appendOperator(input) {
    if (display.value == "Неверное выражение" || display.value == "Infinity") {
        display.value = "";
    }
    display.value += input;
}
function clearDisplay() {
    display.value = "";
}
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Неверное выражение"
    }
}