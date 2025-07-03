//Methods - Maths
/*
console.log(Math.abs(-4)); //negative to positive bt not vice versa
console.log(Math.round(9.8));
console.log(Math.floor(5.9));
console.log(Math.ceil(5.3));
console.log(Math.pow(4,3));
console.log(Math.sqrt(144));
console.log(Math.min(5,9,7,2));
console.log(Math.max(5,9,7,2));
*/
console.log(Math.random()); // it will always give a value between 0 and 1
// for a range-

console.log((Math.random()*10)+1); // when we haave to define a range , we know that it's already generating values in decimal we multiply it by 10 to shift that place but what if it's like 0.0 hence we add 1 at the end,, also if we require a minimum value of random number , we can add floor
console.log(Math.floor(Math.random()*10)+1);

//What if we have a range given to us-

const min = 10
const max = 20

console.log(Math.floor(Math.random()* (max-min+1)) + min);

