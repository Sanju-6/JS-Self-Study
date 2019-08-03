let findTheOldest = function(people) {
  var currentDate = new Date();
  var sorted = people.sort(function(a,b){
    if(("yearOfDeath" in a) && ("yearOfDeath" in b))
    {
      if((a.yearOfDeath - a.yearOfBirth)<(b.yearOfDeath-b.yearOfBirth))
      {
        return 1;
      }
      else {
        return -1;
      }
    }
    else {
      if("yearOfDeath" in a)
      {
        if((a.yearOfDeath - a.yearOfBirth)<(currentDate.getFullYear()-b.yearOfBirth))
        {
          return 1;
        }
        else {
          return -1;
        }
      }
      else{
        if((currentDate.getFullYear() - a.yearOfBirth)<(b.yearOfDeath-b.yearOfBirth))
        {
          return 1;
        }
        else {
          return -1;
        }
      }

    }

  });

  return sorted[0];
}

module.exports = findTheOldest
