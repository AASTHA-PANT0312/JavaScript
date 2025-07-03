//From January ! 1970
/*let myDate = new Date()
console.log(myDate);
//string conversion
console.log(myDate.toString());

console.log(myDate.toDateString());

console.log(myDate.toLocaleString());

console.log(myDate.toLocaleDateString());

console.log(myDate.toJSON());

console.log(typeof myDate); // type of date is object it is an object
*/
/*
let mycreate = new Date(2023 , 0 , 23)
console.log(mycreate.toDateString()); // the nuber or indexing for months begins from 0 in javaascript
let my = new Date(2023 , 0 , 23, 5, 3 , 45)
console.log(my.toLocaleString());*/
//yyyy-mm-dd fromat
//here the number starts like 01 , 02 AND SO ON CUZ UNLIKE THE FIRST ONE IT IS NOT AN ARRAY
/*
let myy = new Date(2025-01-23);
// mm-dd-yyyy fromat 
/*
let myyy = new Date(12-13-2025)
console.log(myy.toString());
console.log(myyy.toString());
*/
/*
let myTimeStamp = Date.now()  //helpful in quizzes and making polls
console.log(myTimeStamp) // this is am milliusecond value
//here now to compare these values we can get the miliseconds time from our dates as well.
//console.log(myyy.getTime()); easy fro comparisons, always to  comaprisons in milliseconds

//converting to seconds

console.log(Math.floor(Date.now()/1000))// gives the current date, milliseconds time , we divide it by 1000 and then we choose the floor value not in decimalks

*/
//specifically dates , montg , etc . { now as months begins from 0  but days begins from 1, 2 , 3 and so on

let newDate = new Date()
console.log(newDate)
console.log(newDate.getDay())
console.log(newDate.getMonth())
console.log(newDate.getMonth()+1) //for users
