// 'var' vs 'let' 
/*
  1- Let does not let you declare a variable twice 
  2- When you declared variables with var, it is declared globally or locally
     if declared inside a function. The scope 'let' is limited to the block 
     statement or expression that it was declared in. Block is everything inside the braces 
*/ 

function checkScope()
{
  "use strict"
  console.log("Check Scope One")
  let i = "function scope"
  if(true)
  {
    let i = "block scope"
    console.log("block scope i is: ", i)
  }
  console.log("function scope i is: ", i)
  return i; 
}
checkScope()
// ----------------- // 
function checkScopeTwo()
{
  "use strict" 
  console.log("Check Scope Two")
  var i = "function scope"
  if(true)
  {
    i = "block scope"
    console.log("block scope i is: ", i)
  }
  console.log("function scope i is: ", i)
  return i; 
}
checkScopeTwo()

// Const 
// It has all the features of let, but it's also read-only - use capital letters 
const PI = 3.14
// PI = 3.1415 -> error 
console.log(PI)