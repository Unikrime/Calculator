const display = document.getElementById('display');
const errors = ["Неверное выражение", "Infinity", "undefined"];
const operators = ["+", "-", "*", "/", ".", "%"];

function removeText() {
    if (errors.includes(display.value)) {
        display.value = "";
    }
}
function appendNumber(input) {
    removeText();
    display.value += input;
}
function appendOperator1(input) {
    removeText();
    if (!operators.includes(display.value.slice(-1))) {
        display.value += input;
    }
}
function appendOperator2(input) {
    removeText();
    if (display.value != "" && !operators.includes(display.value.slice(-1))) {
        display.value += input;
    }
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
function clearSingle() {
    display.value = display.value.slice(0, -1);
}