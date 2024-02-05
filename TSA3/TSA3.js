let currentInput = '';
let operator = '';
let resultDisplayed = false;

function clearDisplay() {
  document.getElementById('display').value = '';
  currentInput = '';
  operator = '';
}

function deleteLast() {
  const display = document.getElementById('display');
  currentInput = currentInput.slice(0, -1);
  display.value = currentInput;
}

function appendNumber(number) {
  if (resultDisplayed) {
    clearDisplay();
    resultDisplayed = false;
  }
  currentInput += number;
  document.getElementById('display').value = currentInput;
}

function setOperator(op) {
  operator = op;
  currentInput += ' ' + op + ' ';
  document.getElementById('display').value = currentInput;
}

function calculate() {
  const display = document.getElementById('display');
  try {
    const result = eval(currentInput);
    display.value = result;
    currentInput = result.toString();
    resultDisplayed = true;
  } catch (error) {
    display.value = 'Error';
  }
}
