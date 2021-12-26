//---- Example ----//  
// Declared function 
function printHelloWorld()
{
  //command 
  console.log("Hello, world") 
}

// Call the function 
printHelloWorld() 

//---- Passing values by arguments ----// 
// 'a' and 'b' can be any name, and represent any value
function subtract(a, b)
{
  console.log(a - b)
}

//10 = a | 5 = b  
subtract(10, 5) 

//---- Global Scope and Functions ----// 
/* variables which are defined outside of a function 
   block, have global scope = they can be seen 
   everywhere in your JS code. 
*/ 

var globalVarOne

function exampleOne()
{
  // if a variable is declared without 'var' inside a function
  // it becomes global automatically. 
  globalVarTwo = 2 
}

exampleOne()
globalVarTwo += 2; 
console.log("Value globalVarOne:", globalVarOne)
console.log("Value globalVarTwo:", globalVarTwo)

//---- Local Scope and Functions ----// 
/*Local variables are visible just inside the function that it was declared*/
function exampleTwo()
{
  var localVariable = 2; 
  return localVariable 
}
exampleTwo()
// localVariable += 2 -> error 
// console.log("Value localVariable:", localVariable) -> error 
console.log("Value localVariable:", exampleTwo())

// It is possible to have both, local and global variables with the same name. 
// When you do this, the local variable takes precedent over the global variable. 

var myName = "Vinicius"

function id()
{
  var myName = "Marcio"
  return myName 
}
// If you don't especify a return value, it would be undefined 
// variables with the same name 'myName' 
console.log("Value local variable:", id())
console.log("Value global variable:", myName)

 