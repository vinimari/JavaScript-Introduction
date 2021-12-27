// Objetcs are like strucs in C language 
// Is also like arrays, but instead of using indexes to acess data 
// you use properties 

var myCat = {
  // Properties 
  "name": "Luci",
  "age": 5, 
  "legs": 4, 
  "tails": 0.5, 
  "favorite food": "meat",
  "friends": [] //none :c 
} 

// Acess the data using DOT notation 
var nameCat = myCat.name
var ageCat = myCat.age 

// DOT notation also can be used to update properties
var myDog = { 
  "name": "Mike", 
  "age": 7 
} 
// Changing the name 
myDog.name = "Spike Mike"

// Acess the data using BRACKED notation
// Is required that the name of the propertie have a space in it 
var favFood = myCat["favorite food"]

// Variables also can be use as a form to acess the data of objects
var aPropCat = "favorite food"
console.log(myCat[aPropCat])

