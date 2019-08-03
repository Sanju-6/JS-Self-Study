var arr = []
var num1
var num2
var num3
var num4
var num5

const removeFromArray = function(arr, num1, num2, num3, num4, num5)
{
  for(var i=arr.length; i>=0;i--)
  {
    if(arr[i] == num1 || arr[i]==num2 || arr[i]==num3 || arr[i]==num4 || arr[i]==num5)
    {
      arr.splice(i,1);
    }
  }
  return arr;
}

module.exports = removeFromArray
