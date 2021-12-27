// Logical operators: !=, ==, <=, >=, >, < 
function trueOrFalse(num)
{
  if(num < 10)
  {
    return "The number " + num + " is smaller than 10"
  } 
  else if (num == 10)
  {
    return "The number is equal to 10"
  }
  // 'else' is no needed because 'return' term  
  return "The number " + num + " is bigger than 10"
}
console.log(trueOrFalse(11)) 

// And = && 
// Check if two conditions are true at the same time 
function exampleAnd(num)
{
  if (num <= 10 && num >= 5)
    return "The number " + num + " is between 10 and 5"

  if (num >= 10 && num >= 15)
    return "The number " + num + " is between 10 and 15"

  return "The number " + num + " is outside the range (5-15)"
}
console.log(exampleAnd(2))

// Or = ||  
// Check if one of multiple condition are true 
function exampleOr(num)
{
  if (num < 5 || num > 15)
    return "The number " + num + " is outside the range (5-15)"
    
  return "The number " + num + " is inside the range (5-15)"
}
console.log(exampleOr(2))


