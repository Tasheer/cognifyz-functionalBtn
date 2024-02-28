function changeColor() {
    var button = document.querySelector('.color-button');
    var currentColor = button.style.backgroundColor;

    if (currentColor === 'red') {
        button.style.backgroundColor = 'green';
    } else {
        button.style.backgroundColor = 'red';
    }
}
function displayGreeting() {
    var currentTime = new Date();
    var currentHour = currentTime.getHours();

    var greetingMessage;

    if (currentHour > 4 && currentHour < 12) {
        greetingMessage = "Good morning!";
    } else if (currentHour < 16) {
        greetingMessage = "Good afternoon!";
    } else if (currentHour < 21) {
        greetingMessage = "Good evening!";
    } else {
        greetingMessage = "Good night"
    }

    alert(greetingMessage);
}

let displayValue = "0";

function updateDisplayValue() {
    document.getElementById("display").textContent = displayValue;
}

function clearDisplay() {
    displayValue = "0";
    updateDisplayValue();
}

function appendToDisplay(value) {
    if (displayValue === "0") {
        displayValue = value;
    } else {
        displayValue += value;
    }
    updateDisplayValue();
}

function calculateResult() {
    try {
        displayValue = eval(displayValue).toString();
    } catch (error) {
        displayValue = "Error";
    }
    updateDisplayValue();
}
