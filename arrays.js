/* Arrays allow you to sotre several pieces of 
  data in one place 
*/  
var array = ["John", 23] 

//Multidimensional array 
var multiArray = [["Vini", 21], ["Cecilia", 22]]

//Acess Array data with Indexes 
console.log(array[0], array[1])

//Acess multidimensional array
console.log(multiArray[0])    // [Vini, 21]
console.log(multiArray[0][0]) // [Vini]
console.log(multiArray[0][1]) // [21]
console.log(multiArray[1][0]) // [Cecilia]

//Arrays are multable 
multiArray[0][0] = "Marcio"
console.log(multiArray[0])

//Manipulate arrays with PUSH()
  // add a alement at the end of the array 
array.push(["Josue", 32])
// array now equals [["John", 23]["Josue", 32]] 

//Manipulate arrays with UNSHIFT()
  // add a element at the beginning of the array 
array.unshift("Bolo de Cenoura")
console.log("primeiro elemento array:", array[0])
  
//Manipulate arrays with POP()
  //this function remove the last element of the array 
var last = array.pop()
console.log("ultimo elemento array:", last) 

//Manipulate arrays with SHIFT()
  //this function remove the first element of the array 
var first = multiArray.shift()
console.log("primeiro elemento multiarray:", first)