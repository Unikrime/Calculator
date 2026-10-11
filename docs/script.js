const display = document.getElementById('display');
const errors = ["Неверное выражение", "Infinity", "-Infinity", "NaN"];
const operators = ["+", "-", "*", "/", ".", "%"];
let hasDot = false;

//function block begin:

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

function clearSingle() {
    if (!errors.includes(display.value)) {
        if (display.value.slice(-1) == ".") {
            hasDot = false;
        }
        display.value = display.value.slice(0, -1);
    }
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

function animateButton(text) {
    const buttons = document.querySelectorAll('.b');
    for (let btn of buttons) {
        if (btn.innerText === text) {
            btn.classList.add('active');
            break;
        }
    }
}

//function block end.

//keydown block begin:

document.addEventListener('keyup', (event) => {
    const pressedButton = document.querySelector('.b.active');
    if (pressedButton) {
        pressedButton.classList.remove('active');
    }
});

document.addEventListener('keydown', (event) => {
    const key = event.key;

    if (key >= '0' && key <= '9') {
        appendNumber(key);
        animateButton(key);
    }
    if (key === '+' || key === '-') {
        appendOperator1(key);
        animateButton(key);
    }
    if (key === '*' || key === '/' || key === '%') {
        event.preventDefault();
        appendOperator2(key);
        animateButton(key);
    }
    if (key === '.' || key === ',') {
        appendOperator3('.');
        animateButton('.');
    }
    if (key === 'Enter' || key === '=') {
        event.preventDefault();
        calculateResult();
        animateButton('=');
    }
    if (key === 'Backspace' || key === 'c') {
        clearSingle();
        animateButton('C');
    }
    if (key === 'Escape') {
        clearDisplay();
        animateButton('AC');
    }

});

//keydown block end.