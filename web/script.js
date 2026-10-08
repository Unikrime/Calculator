const display = document.getElementById('display');
const errors = ["Неверное выражение", "Infinity", "-Infinity", "NaN"];
const operators = ["+", "-", "*", "/", ".", "%"];
let hasDot = false;

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
        hasDot = false;
    }
}
function appendOperator2(input) {
    removeText();
    if (display.value != "" && !operators.includes(display.value.slice(-1))) {
        display.value += input;
        hasDot = false;
    }
}
function appendOperator3(input) {
    removeText();
    if (display.value != ""
        && !operators.includes(display.value.slice(-1))
        && !hasDot) {
        display.value += input;
        hasDot = true;
    }
}
function clearDisplay() {
    display.value = "";
    hasDot = false;
}
function calculateResult() {
    if (display.value === "") {
        display.value = "";
    } else {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = "Неверное выражение"
        }
    }
    hasDot = display.value.includes('.');
}
function clearSingle() {
    if (display.value.slice(-1) == ".") {
        hasDot = false;
    }
    display.value = display.value.slice(0, -1);
}