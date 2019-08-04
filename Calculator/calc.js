

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

var clearButton = document.createElement('button');

var backSpaceButton = document.createElement('button');

var num1 = 0;
var num2 = 0;


mainContainer.setAttribute('style','display:flex; justify-content:center;')

calculator.setAttribute('style','background:black; width:405px; height:605px; display:flex; justify-content:space-evenly; flex-wrap:wrap; align-items:stretch; border-radius: 30px; overflow:hidden;');

display.setAttribute('style','width:402px; border: 1px solid white; height:140px; display:flex; align-items:center');

displayContent.setAttribute('style','color:white');

divider.setAttribute('style','width: 402px; height:50px; display:flex; justify-content:flex-end;');

buttons.setAttribute('style','width: 410px; height:400px; display:flex; flex-direction:colums; justify-content:space-evenly');

numberButtons.setAttribute('style','width: 302px; height:400px;');

allOtherButtons.setAttribute('style','width: 102px; height:420px;');

addition.setAttribute('style','height:100px; width: 100px; background-color:black; color:white;');

subtraction.setAttribute('style','height:100px; width: 100px; background-color:black; color:white;');

multiplication.setAttribute('style','height:100px; width: 100px; background-color:black; color:white;');

division.setAttribute('style','height:100px; width: 100px; background-color:black; color:white;');

equals.setAttribute('style','height:100px; width: 100px; background-color:black; color:white;');

decimal.setAttribute('style','height:100px; width: 100px; background-color:black; color:white;');

clearButton.setAttribute('style','height:50px; width: 100px; background-color:black; color:white;');

backSpaceButton.setAttribute('style','height:50px; width: 100px; background-color:black; color:white;');

function numbers() {
  for(var i=9; i>-1; i--)
  {
    var number = document.createElement('button');

    number.setAttribute('style','height:100px; width: 100px; background-color:black; color:white;');

    number.textContent = "" + i +"";

    number.addEventListener('click', calcDisplay);

    numberButtons.appendChild(number);
  }
  numberButtons.appendChild(decimal);
  decimal.addEventListener('click', calcDisplay);
  numberButtons.appendChild(equals);
  equals.addEventListener('click', showResult);
}

document.body.appendChild(mainContainer);
mainContainer.appendChild(calculator);
calculator.appendChild(display);
calculator.appendChild(divider);
divider.appendChild(clearButton);
divider.appendChild(backSpaceButton);
calculator.appendChild(buttons);
buttons.appendChild(numberButtons);
numbers();
buttons.appendChild(allOtherButtons);
allOtherButtons.appendChild(division);
allOtherButtons.appendChild(multiplication);
allOtherButtons.appendChild(subtraction);
allOtherButtons.appendChild(addition);
display.appendChild(displayContent);


addition.textContent = "+";
subtraction.textContent = "-";
multiplication.textContent = "*";
division.textContent = "/";
equals.textContent = "=";
decimal.textContent = ".";
clearButton.textContent = "Clear";
backSpaceButton.textContent = "Backspace";

addition.addEventListener('click', calcDisplay);
multiplication.addEventListener('click', calcDisplay);
subtraction.addEventListener('click', calcDisplay);
division.addEventListener('click', calcDisplay);
clearButton.addEventListener('click', clear);
backSpaceButton.addEventListener('click', backSpace);

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
  num1 = Number(num1);
  num2 = Number(num2);

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

var input = new Array();
var contentDisplay = "";

var strInput = "";

var count = 0;
var operator = "";
var decimalCount = 0;

var individualInput = "";

var prevInput = "";

var multiDigit = "";

var result = "hello";

var resultShown = false;


function calcDisplay(e) {
  if(resultShown)
  {
    clear();
    resultShown = false;
  }

  individualInput = e.target.textContent;

  if(individualInput != "=" && isNaN(individualInput) && individualInput != ".")
  {
    strInput = strInput +" " +individualInput + " ";
    decimalCount =0;
  }
  if(!isNaN(individualInput) || individualInput == ".")
  {
    if(individualInput == ".")
    {
      decimalCount++;
    }
    if(decimalCount > 1 && (!strInput.includes("+") || !strInput.includes("/") || !strInput.includes("-") || !strInput.includes("*")))
    {
      alert("There already exists a decimal in the equation. Please check the equation and try again.");
      return;
    }
    else {
      strInput = strInput + individualInput;
    }

  }
  displayContent.textContent = strInput;

}

function showResult(e) {

  if(strInput.charAt(strInput.length -1) == " ")
  {
    alert("Please check the inputted equation.");
    return;
  }
  else if (!strInput.includes("+") && !strInput.includes("/") && !strInput.includes("-") && !strInput.includes("*")) {
    result = strInput;
    displayContent.textContent = result;
    return;
  }
  if(strInput.charAt(0) == " ")
  {
    alert("Please check the inputted equation.");
    return;
  }

  calcDisplay(e);
  strInput = strInput.trim();
  input = strInput.split(" ");

  calcWork(input);
  displayContent.textContent = result;
  resultShown = true;
  result = "hello";
}

function backSpace(e) {

  if(!isNaN(strInput.charAt(strInput.length -1)) && strInput.charAt(strInput.length -1) != " ")
  {
    strInput = strInput.slice(0,strInput.length -1);
    displayContent.textContent = strInput;
  }
  else
  {
    strInput = strInput.slice(0, strInput.length -3);
    displayContent.textContent = strInput;
  }

}

function calcWork(str) {
  while(str.length !=0)
  {
    for(var j = 0; j<str.length; j++)
    {
      if(str[j] == "/" && result == "hello")
      {
        num1 = str[j-1];
        num2 = str[j+1];
        operator = str[j];
        result = operate(operator,num1, num2);
        str.splice(j-1, 3);
      }
      else if (str[j] == "/" && result != "hello") {
        if(j == str.length - 1)
        {
          num1 = result;
          num2 = str[j - 1];
          operator = str[j];
          result = operate(operator, num1, num2);
          str.splice(j-1, 2);
        }
        else {
          num1 = result;
          num2 = str[j+1];
          operator = str[j];
          result = operate(operator,num1, num2);
          str.splice(j, 2);
        }
      }
    }
    for(var j = 0; j<str.length; j++)
    {
      if(str[j] == "*" && result == "hello")
      {
        num1 = str[j-1];
        num2 = str[j+1];
        operator = str[j];
        result = operate(operator,num1, num2);
        str.splice(j-1, 3);
      }
      else if (str[j] == "*" && result != "hello") {
        if(j == str.length - 1)
        {
          num1 = result;
          num2 = str[j - 1];
          operator = str[j];
          result = operate(operator, num1, num2);
          str.splice(j-1, 2);
        }
        else {
          num1 = result;
          num2 = str[j+1];
          operator = str[j];
          result = operate(operator,num1, num2);
          str.splice(j, 2);
        }
      }
    }
    for(var j = 0; j<str.length; j++)
    {
      if(str[j] == "+" && result == "hello")
      {
        num1 = str[j-1];
        num2 = str[j+1];
        operator = str[j];
        result = operate(operator,num1, num2);
        str.splice(j-1, 3);
      }
      else if (str[j] == "+" && result != "hello") {
        if(j == str.length - 1)
        {
          num1 = result;
          num2 = str[j - 1];
          operator = str[j];
          result = operate(operator, num1, num2);
          str.splice(j-1, 2);
        }
        else {
          num1 = result;
          num2 = str[j+1];
          operator = str[j];
          result = operate(operator,num1, num2);
          str.splice(j, 2);
        }
      }
    }
    for(var j = 0; j<str.length; j++)
    {
      if(str[j] == "-" && result == "hello")
      {
        num1 = str[j-1];
        num2 = str[j+1];
        operator = str[j];
        result = operate(operator,num1, num2);
        str.splice(j-1, 3);
      }
      else if (str[j] == "-" && result != "hello") {
        if(j == str.length - 1)
        {
          num1 = result;
          num2 = str[j - 1];
          operator = str[j];
          result = operate(operator, num1, num2);
          str.splice(j-1, 2);
        }
        else {
          num1 = result;
          num2 = str[j+1];
          operator = str[j];
          result = operate(operator,num1, num2);
          str.splice(j, 2);
        }
      }
    }
  }
  return result;
}


function clear() {
  result = "hello";
  count = 0;
  operator = "";

  individualInput = "";

  input.splice(0, input.length);

  contentDisplay = "";
  multiDigit = "";

  strInput = "";

  decimalCount =0;

  displayContent.textContent = contentDisplay;
}

document.addEventListener('keyup', function(e){
  var collectionOfNumBtns = numberButtons.children;
  if(e.key>=0 && e.key<=9 || (e.keyCode >= 187 && e.keyCode <= 191) || e.keyCode == 56 || e.keyCode == 8 || e.keyCode == 13 || e.keyCode == 46 && e.keyCode != 16)
  {
    if(e.keyCode == 189)
    {
      subtraction.click();
    }
    if(e.keyCode == 8 )
    {
      backSpaceButton.click();
    }
    if(e.keyCode == 187)
    {
      addition.click();
    }
    if(e.keyCode == 191)
    {
      division.click();
    }
    if(e.keyCode == 56 && e.key != 8)
    {
      multiplication.click();
    }
    if(e.keyCode == 13)
    {
      equals.click();
    }
    if(e.keyCode == 46)
    {
      clearButton.click();
    }
    if(e.keyCode == 190)
    {
      decimal.click();
    }


    if(e.key == 9)
    {
      collectionOfNumBtns[0].click();
    }
    if(e.key == 8 && e.keyCode==56)
    {
      collectionOfNumBtns[1].click();
    }
    if(e.key == 7)
    {
      collectionOfNumBtns[2].click();
    }
    if(e.key == 6)
    {
      collectionOfNumBtns[3].click();
    }
    if(e.key == 5)
    {
      collectionOfNumBtns[4].click();
    }
    if(e.key == 4)
    {
      collectionOfNumBtns[5].click();
    }
    if(e.key == 3)
    {
      collectionOfNumBtns[6].click();
    }
    if(e.key == 2)
    {
      collectionOfNumBtns[7].click();
    }
    if(e.key == 1)
    {
      collectionOfNumBtns[8].click();
    }
    if(e.key == 0)
    {
      collectionOfNumBtns[9].click();
    }
  }
});
