//interview regarding important points - refer notes

const arr = [1,3, 78,89]
const names = ["A" , "B" , "C" , "D"]
const age = new Array(23,18,15,7)

//console.log(age[0]);

//Array Methods
/* Simple methods
arr.push(67) //adds an element at last
arr.push(9)

arr.pop() //removes the last element

arr.unshift(8) //inserts an element at the first position which led to the further shifting of other elements which is jheavy on comuters, costly on computational power
arr.shift() //similar to pop , removes the first element
console.log(arr);
*/

//Questionarre methods - 

// console.log( age.includes(18)) //returns boolean values
// console.log(age.indexOf(4)) // it will return -1 as it does not exist in the array
// console.log(age.indexOf(18))

//Join

// const newarr = arr.join() // adds all the elements of ana array into a string
// //now the values remains the same but the type changes , it is now a string , it binds all the values of array into a string

// console.log(arr)
// console.log(newarr)

//slice (returns a section of an array), splice ()

console.log("A" , arr);

const arrnew = arr.slice(2,3)
console.log(arrnew);
console.log("B" , arr);

const arrnew1 = arr.splice(2,3)
console.log(arrnew1);
console.log("C" , arr);

// when looking on the surface it might seem as slice excludes the last element while splice does not , but the actual thing is different the slice operation do not change anything in the origunal array while the splice actually seperates that section into some other entitity and removes that portion from the original 

