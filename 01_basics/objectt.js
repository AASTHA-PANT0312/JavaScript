// //const user = new Object() // empty and singleton
const user = {} // empty and non singleton
 user.id = "243as"
 user.name = "Ash"
 user.loggedIn = false
 
//  //console.log(user)

//  const regularUser = {
//     email: "aastha@gmail.com", 
//     fullname : {
//       firstname : "raj", //object within object
//       lastname : "rao"
//     }
//  }

//  console.log(regularUser.fullname); // more chaining can be done using dots
//  console.log(regularUser.fullname?.firstname.lastname); //optional chaining, check it inculsivity

//  const obj1 = { 1: "a" , 2: "b"}
//  const obj2 = { 3:"e" , 4:'g'}

//  //const obj3 = { obj1,obj2} //assign statyic method
//  //console.log(obj3) //combining two objects and storing them as objects only in an object
//  const obj4 = Object.assign({},obj1,obj2)//as a single object , better practice to add braces as it shows the guarantee of result , braces are as target and rest everything are source , which is good cuz why make any one object as target
//  console.log(obj4)
//   or 
//   const obj5 = {...obj1,...obj2,} //spread to combine
//   console.log(obj5)

// const users = [
//    {id:1,
//       user: "A"
//    },
//    {..

//    },
// ]
// users[1].id
// console.log(user)

// console.log(Object.keys(user)); //{return ythe keys of an object in an array}
// console.log(Object.values(user));//all values in an array
// console.log(Object.entries(user)); //each entry with its own keya nafd value is an array and a final array have them


// //check any property
// console.log(user.hasOwnProperty('id'));

//object destruct

const course = {
    coursename : "maths",
    price : 344,
    courseInstructor : "ashu"
}

//course.courseInstructor -- simple way to fetch it
//another way where we can ignore writing the ref of object and can also gove a nickname

const {courseInstructor:instructor} = course

// console.log(courseInstructor)
console.log(instructor);

//apis like objcet only but not stored in a variable , directly braces , and inside it the key and value both are strings.
// {
//     :name" : "We",
//     "group" : "g"
// }example only + we can have such files in an array , a combination of such.
//[

//     {},
//     {},
//     {},
//     {}
// ]
 