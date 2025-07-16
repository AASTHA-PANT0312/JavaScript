// while using the push  method the other array is pushes as an element hence the first array will contain the whole array as an element , it makes changes in the original array only
//while using concatenation a new array is made in which , they exists as elements only.
 const age = [12, 14, 15 , 16]
 const names = ["A" , "B" , "C"]

//  console.log( age.push(names))
//  console.log(age)
//  const newarr = age.concat(names)
//  console.log(newarr)

 // mostly we use spread operator(...) : as we can give more than 1 array to jiin , also its similar to taking two three eb boxes and rdropping them so that they all get out , they spread and collectively we coolect that mess

// const all = [...age , ...names]
// console.log(all) // similar to concat but we can add morethan 2 arrays

//Flat operator , if an array contains mutiple arrays in it , it just spreads the elements within those and then displays them as individuals ina single array

// const myarr = [ 1, 23,34, [4,5,6,7] , 23,67 , [6, 8, 9]]

// const real = myarr.flat(Infinity) //infinity is the depth 
// console.log(real)

// console.log(Array.isArray("Mummy"))
// console.log(Array.from("Mummy"))
// console.log(Array.from(names:"Mummy")) // interesting as it  will return an empty array , it can not decide key or value which one to make array amongstt both

let num1 = 23
let num2 = 67
let num3 =9
console.log(Array.of(num1 , num2 , num3));