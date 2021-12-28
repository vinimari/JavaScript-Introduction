// While Loop 
var someArray = []

var count = 0; 

// adding 5 elements
while(count < 5)
{
  someArray.push(count)
  count++
}
console.log(someArray); 

// For Loop - most commom in JS
// adding more 5 elements
// 'for(var cont...)' if the variable was not initializated berfore 
for(count = 5; count < 10; count++) 
{
  someArray.push(count)
} 
console.log(someArray)

//obs: count at for loop can be added more than one per cicle
// can also be subtracted 

// do-while always run at least once before checks the condition. 
count = 0; 
do {
  console.log(count)
} while (count != 0) 