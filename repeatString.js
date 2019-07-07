var str = ""
var num = 0


const repeatString = function(str, num) {
  if(num>=0)
  {
    var addStr = str
    str = ""
    for(var i=0;i<num;i++)
    {
      str = str + addStr;
    }

    return str
  }
  else {
    return 'ERROR'
  }


}

module.exports = repeatString
