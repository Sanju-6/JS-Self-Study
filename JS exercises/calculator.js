function add (numberOne, numberTwo) {
	return numberOne+numberTwo;
}

function subtract (numberOne, numberTwo) {
	return numberOne-numberTwo;
}

function sum (numberArray) {
	if(numberArray.length ==0)
	{
		return 0;
	}
	else {
		var tot =0;
     numberArray.forEach(function(element) {
     	tot = tot+element;
     });
		return tot;
	}
}

function multiply (numberArray) {
	var tot = 1;
	numberArray.forEach(function(element) {
		tot = tot*element;
	});
	return tot;
}

function power(exp, pow) {
	var tot=1;
	for(var i=0; i<pow;i++)
	{
		tot = tot*exp;
	}
	return tot;
}

function factorial(number) {
	var tot=1;
	if(number == 0 || number ==1)
	{
		return 1;
	}
	else {
		for(var i=number; i>0; i--)
		{
			tot = tot*i;
		}
	}
	return tot;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
