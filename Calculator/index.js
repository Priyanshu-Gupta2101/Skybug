// Get elements
const resultTextElement = document.getElementById("result-text");
const buttonGridElement = document.getElementById("button-grid");

let expression = "";

// Initialize calculator state
let currentInput = "";
let currentOperator = "";
let previousInput = "";

// Handle button click
function handleButtonClick(value) {
  if (value === "C") {
    clearCalculator();
  } else if (isNumeric(value) || value === ".") {
    handleNumericInput(value);
  } else {
    handleOperatorInput(value);
  }
  updateDisplay();
}

// Handle numeric input
function handleNumericInput(value) {
  currentInput += value;
  expression += value;
}

// Handle operator input
function handleOperatorInput(operator) {
  if (currentInput !== "") {
    if (previousInput !== "") {
      calculateResult();
    }
    currentOperator = operator;
    previousInput = currentInput;
    currentInput = "";
    expression += operator;
  }
}

// Calculate and display the result
function calculateResult() {
  if (currentInput !== "" && previousInput !== "" && currentOperator !== "") {
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);

    switch (currentOperator) {
      case "+":
        currentInput = (num1 + num2).toString();
        break;
      case "-":
        currentInput = (num1 - num2).toString();
        break;
      case "*":
        currentInput = (num1 * num2).toString();
        break;
      case "/":
        currentInput = (num1 / num2).toString();
        break;
    }

    expression = currentInput;
    currentOperator = "";
    previousInput = "";
  }
}

// Clear the calculator
function clearCalculator() {
  expression = "";
  currentInput = "";
  currentOperator = "";
  previousInput = "";
}

// Update display with current input
function updateDisplay() {
  resultTextElement.textContent = expression !== "" ? expression : "0";
}

// Check if a value is numeric
function isNumeric(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
}
