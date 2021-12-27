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
