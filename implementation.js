// Here is an example to run tests IN YOUR BROWSER.

function square(n) {
  return n * n;
}

function addTwo(n1, n2) {
  return n1 + n2;
}

function multiply(n1, n2) {
  return n1 * n2;
}

function divide(n1, n2) {
  return n1 / n2;
}

function myReverseFunction(string){
  var newString = '';
  
  for (var i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  return newString;
}

function findLongestWord(str) {
  var strSplit = str.split(' ');
  var longestWordLength = 0;
  var longestWord = "";

  for(var i = 0; i < strSplit.length; i++) {
    if(strSplit[i].length > longestWordLength){
      longestWordLength = strSplit[i].length;
      longestWord = strSplit[i]
     }
  }
  return longestWord;
}

function convertTime(minutes) {
   var hours = Math.floor(minutes / 60)
   var convertedMinutes = minutes - (hours * 60)
  
  if(minutes < 10){
    return '0:0' + minutes;
  } else if (minutes >= 10 && minutes < 60){
   return '0:' + minutes;
  } else if (minutes > 60 && convertedMinutes < 10) {
   return hours + ":0" + convertedMinutes
  } else {
    return hours + ":" + convertedMinutes
  }
}

function fizzBuzz(n) {
  if(n % 5 === 0 && n % 3 === 0) {
      return 'FizzBuzz';
    } else if ( n % 3 === 0) {
      return 'Fizz';
    } else if (n % 5 === 0) {
      return 'Buzz';
    } else {
      return n;
    }
}
