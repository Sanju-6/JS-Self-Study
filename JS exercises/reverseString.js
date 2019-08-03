var str = ''

const reverseString = function(str)
{
  var revStr = '';
  for(var i=str.length -1; i>=0; i--)
  {
    revStr = revStr + str.charAt(i);
  }


  return revStr;
}

module.exports = reverseString
