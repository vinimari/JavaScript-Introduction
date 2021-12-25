//Like in python, strings can be appended 

var myName = "Vinicius"
var setenceOne = "Hello, " + myName 
console.log(setenceOne)

var adjective = "Nice" 
var SetenceTwo = "Learning JS is "
SetenceTwo += adjective 
console.log(SetenceTwo)

// Length of String 
console.log(setenceOne.length) 

// Bracket Notation 
// Finding the first letter of the setenceOne 
console.log(setenceOne[0])

// You can use this logic to find 'n' positions
// Finding the last position 
console.log(setenceOne[setenceOne.length-1])

// this is funny 
function wordBlanks(noun, adjective, verb, adverb)
{
  var result = ""; 
  result += "The " + adjective + noun + verb + "to the store" + adverb
  return result; 
}

console.log(wordBlanks("Julia ", "fast ", "cry ", " slow"))