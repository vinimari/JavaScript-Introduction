function checkSign(num)
{
  //     if condition - execute            else condition  execute              else   execute 
  return num < 0 ? "the number is negative" : num > 0 ? "the number is positive" : "the number is zero"
}

console.log(checkSign(5))