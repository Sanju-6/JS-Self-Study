var num1
var num2

const sumAll = function(num1, num2)
{
  var result =0

    if(num1>=0 && num2>=0 && typeof(num1) == 'number' && typeof(num2) == 'number')
    {
      if(num1<num2)
      {
        for(var i=num1; i<=num2; i++)
        {
          result = result +i;
        }
        return result;
      }
      else {
        for(var j=num1; j>=num2; j--)
        {
          result = result +j;
        }
        return result;

      }
    }
    else
    {
      return 'ERROR'
    }

}

module.exports = sumAll
