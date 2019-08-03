const palindromes = function(string) {
  var reverse = "";
  string = string.toLowerCase();
  string = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  string = string.replace(/\s/g,'');
  var i= string.length+1;

  for(var i=string.length; i>-1; i--)
  {

    reverse = reverse+string.charAt(i);

  }
  if(reverse==string)
  {
    return true;
  }
  else {
    return false;
  }
}

module.exports = palindromes
