//Nan - it is also a type, when a string (alphanumeric) is changed typecasted it become nan and hence the value number is returned, it is a lack of strictness of javascript hance typescript is used.
/*let score = 223
let score = "223"
console.log(typeof score); number -> string ->   */

//let score = "332" after change it will be of type number

//let score = "332abs" // it will also be of type number , cuz its value will become a not a number as it is alphanumeric

//let score = null // type would be null after conversion but its value will be 0

//let score = undefined // type would be number after conversion and it value will be NaN

// let score = true // type would be number and the value will be 0 if false or 1 if true


// let score = "abc" // type would be number but the value will be Nan as it is a string and can not be changed into number. 
/*console.log( typeof(score));

let valueInNumber = Number(score) // here we use Number class which is one of the datatype available in js.
console.log(typeof valueInNumber)

console.log(valueInNumber) //NaN
*/

//let isLoggedIn = "true" // true

//let isLoggedIn = "false" // true

//let isLoggedIn = "1" // true

//let isLoggedIn = "0" // true as it is a string

//let isLoggedIn = 0 // false as now it is number converting into boolean
//let isLoggedIn = 1 // true: number to boolean

//let isLoggedIn = 67 // any number will also give true
/*
//let isLoggedIn = "33aa" // true
let isLoggedIn = "" // empty string gives false

let booleanValue = Boolean(isLoggedIn)
console.log(booleanValue)
// 1 -> true 0-> false "" -> false "abdjgj"->true 
*/

/*
// we can also use other classes like Strings

let namevar = 99
let boolsval = true
let StringName = String(namevar)
let Stringbv = String(boolsval)
console.log(StringName) // simply return number so check type of
console.log(typeof StringName) // yes now this thing is converted to a string
console.log(Stringbv)
console.log(typeof Stringbv)
*/

//OPERATIONS

/* NEGATIVES
let score = 5
let negscore = -score
console.log(negscore); // -5
// 
*/

// console.log(1+2);
//console.log(1-2)
//    console.log(1*2)
//  console.log(1/2)
//console.log(1%2)
//console.log(12**2)


// should not do these confusion things
 /*
console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); //32 , if string at last then preceeding terms are calculated else everyhting is considered as a string like in above example
*/

//again some example of confusion conversion

//console.log(true); //true
//console.log(+true); //1
//console.log(true+); // error not allowed
//console.log(+""); // empty string gives 0 on boolean after plus also 1

//Assignment operator
/*
let num1 , num2 , num3

num1 = num2 = num3 = 2+2 // not good , increase readability

let gamecounter = 100
//gamecounter++; postfix 
++gamecounter;
console.log(gamecounter);
*/

//mdn prefix and postfix:

let x = 3;
const y = x++;

console.log(`x: ${x} , y; ${y}`);
// x=4 , y=3


let a = 3;
const b = ++a;

console.log(`a: ${a} , b; ${b}`);
// a=4 , b=4
