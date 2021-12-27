function switchStuffs(val)
{
  var answer = ""
  switch (val) {
    case 1:
      answer = "apple"
      break;
    case 2: 
    answer = "orange"
      break; 
    // if any case match, the defaut would be printed 
    default:
    answer = "defaut, any case match"
      break;
  }
  return answer
}
console.log(switchStuffs(3))