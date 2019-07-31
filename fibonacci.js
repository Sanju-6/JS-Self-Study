const fibonacci = function(count) {
  var a1= 0;
  var a2 =1;
  var sum = 1;
  if(count>0)
  {
    for(var i=1; i<count; i++)
    {
      sum = a1+a2;
      a1 = a2;
      a2 = sum;
    }
    return sum;
  }
  else {
    return "OOPS";
  }
}

module.exports = fibonacci
