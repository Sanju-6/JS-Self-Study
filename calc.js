

var mainContainer = document.createElement('div');

var calculator = document.createElement('div');

var display = document.createElement('span');

var displayContent = document.createElement('h2');

var divider = document.createElement('span');

var buttons = document.createElement('span');

var numberButtons = document.createElement('span');

var allOtherButtons = document.createElement('span');

var addition = document.createElement('button');

var subtraction = document.createElement('button');

var multiplication = document.createElement('button');

var division = document.createElement('button');

var equals = document.createElement('button');

var decimal = document.createElement('button');



mainContainer.setAttribute('style','display:flex; justify-content:center;')

calculator.setAttribute('style','background:black; width:405px; height:605px; display:flex; justify-content:space-evenly; flex-wrap:wrap; align-items:stretch; border-radius: 30px; overflow:hidden;');

display.setAttribute('style','width:402px; border: 1px solid white; height:140px;');

displayContent.setAttribute('style','color:white');

divider.setAttribute('style','width: 402px; height:50px;');

buttons.setAttribute('style','width: 410px; height:400px; display:flex; flex-direction:colums; justify-content:space-evenly');

numberButtons.setAttribute('style','width: 302px; height:400px;');

allOtherButtons.setAttribute('style','width: 102px; height:420px;');

addition.setAttribute('style','height:100px; width: 100px; background-color:black; color:white;');

subtraction.setAttribute('style','height:100px; width: 100px; background-color:black; color:white;');

multiplication.setAttribute('style','height:100px; width: 100px; background-color:black; color:white;');

division.setAttribute('style','height:100px; width: 100px; background-color:black; color:white;');

equals.setAttribute('style','height:100px; width: 100px; background-color:black; color:white;');

decimal.setAttribute('style','height:100px; width: 100px; background-color:black; color:white;');

function numbers() {
  for(var i=9; i>-1; i--)
  {
    var number = document.createElement('button');

    number.setAttribute('style','height:100px; width: 100px; background-color:black; color:white;');

    number.textContent = "" + i +"";

    numberButtons.appendChild(number);
  }
  numberButtons.appendChild(decimal);
  numberButtons.appendChild(equals);
}

document.body.appendChild(mainContainer);
mainContainer.appendChild(calculator);
calculator.appendChild(display);
calculator.appendChild(divider);
calculator.appendChild(buttons);
buttons.appendChild(numberButtons);
numbers();
buttons.appendChild(allOtherButtons);
allOtherButtons.appendChild(division);
allOtherButtons.appendChild(multiplication);
allOtherButtons.appendChild(subtraction);
allOtherButtons.appendChild(addition);
display.appendChild(displayContent);

displayContent.textContent = "heyy";
addition.textContent = "+";
subtraction.textContent = "-";
multiplication.textContent = "*";
division.textContent = "/";
equals.textContent = "=";
decimal.textContent = ".";


function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1,num2) {
  return num1*num2;
}

function divide(num1,num2) {
  return num1/num2;
}

function operate(operator, num1, num2)
{
  if(operator == "+")
  {
    return add(num1,num2);
  }
  else if (operator == "-") {
    return subtract(num1,num2);
  }
  else if (operator == "*") {
    return multiply(num1,num2);
  }
  else if (operator == "/") {
    return divide(num1,num2);
  }
}

var input = "";

document.addEventListener('keyup', function(e){
  console.log(e.key +" " +e.keyCode);
  if(e.key>=0 && e.key<=9 || (e.keyCode >= 187 && e.keyCode <= 191) || e.keyCode == 56  )
  {
    input = input + e.key;
    console.log(input);
  }
});
