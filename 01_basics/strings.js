let mummy = "Pushpa-young-beautiful";
let sname = " Pant"; //add space here for space after conactenation
//console.log(mummy +  sname); //this is a very old method , not stylish to use.
//console.log(mummy +  sname + " beautiful");

//console.log(`you are pretty ${mummy}${sname} and so beautiful.`); // use reverse quotes sign and place the variable to be concatenate within curly braces initializing with $.

//another way to declare a string variable is :


const papa = new String('Papa-Pant-awholenewworld'); // this uses an object to store the string , it store it in a key value pair style,index:character

/*
console.log(papa);
console.log(papa[0]);
console.log(papa.length); // function without parenthesis until anything needs to be passed.
console.log(papa.toUpperCase());//baki sb me we need parenthesis
console.log(papa.italics());
console.log(papa.charAt(7));
console.log(papa.indexOf('n'));*/

//slicing a string , making a substring , giving it an end and beggining , end is not included.
/*
const newString = papa.substring(0,3)
console.log(newString);

const anotherString = papa.slice(-7,-5); //slicing gives the benefit of negative indexing , we can trace our string in a backward fashion , reverse string is there.
console.log(anotherString);
*/
//trim and replace
//trim- remove the starting and end spaces (white spaces +line terminators) trimstart and trimend
/*
const s1 = "     REAR     OG    ";
console.log(s1);
console.log(s1.trim());//removes only the starting and trailing spaces.

const uname = "ashtha%3gmail";
console.log(uname.replace("%3","@"));
console.log(uname.includes('pant')); // returns true and false.
*/
//split - splits string into arrays , based on some seperators

console.log(papa.split('-'));
console.log(papa.bold());
