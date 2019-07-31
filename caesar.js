const caesar = function(str, shift) {
  var newStr = "";

  const mod = (a,b) => (a % b + b) % b; //to make sure that the remainder is maintained even in case of large negative shifts, to see why this works do 3%2 and then plug these two numbers in the equation and check

  for(var i=0; i<str.length;i++)
    {
      var charCode = str.charCodeAt(i);
      if((charCode>=65 && charCode<=90) || (charCode>=97 && charCode<=122))
      {
        if(charCode>=97 && charCode<=122)
        {
          var altCharCode = (mod(((charCode+shift) - 97), 26) + 97);
          newStr = newStr + String.fromCharCode(altCharCode);
        }
        else if (charCode>=65 && charCode<=90) {
          var altCharCode = (mod(((charCode+shift) - 64), 26) + 64);
          newStr = newStr + String.fromCharCode(altCharCode);
        }
      }
      else {
        newStr = newStr + String.fromCharCode(charCode);
      }
    }
    return newStr;
}

module.exports = caesar
