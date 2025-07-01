const score = 400; //automatically number type
console.log(score);

const balance = new Number(100); // using Number class , it will differently show that it is number in console, they have very few propperties , but can be changed to string and then other props can be used
console.log(balance);

//to String

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const temp = 4567.8976
console.log(temp.toPrecision(4)); //contains a number , exponential but it returns a string , 4 because after that we have to apply precision.

// place value , us and indian

const hundreds = 100000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));

//MAX_VALUE and MIN_VALUE - stores the minimum and maximum value.

//=========Maths===========



