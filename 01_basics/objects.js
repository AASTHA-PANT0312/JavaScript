//Singleton
//Object.create
//objectliteral
const mySym = Symbol("key1")

const jsUser = {
    names : "A" ,
    [mySym] : "mykey1" ,// if not written in [] , it will be accepted as string only , while its data type is symbol
    age : 12 ,
    student : true ,
    marks : [12,45]
}

// console.log(jsUser.age)
// console.log(jsUser["age"]) // as behind the scenes all the keys are stored as strings only.
// //also if keys were in " " , you can only use second nethod

// console.log( typeof jsUser[mySym])
// // also symbol

// //changing value , use = and freeze the values , lock the values using freeze
// jsUser.age = 34
// Object.freeze(jsUser)
// jsUser.age = 89
// console.log(jsUser)

//adding functions as variable only
jsUser.greeting = function(){
    console.log("ja bhai")
}

jsUser.greeting1 = function(){
    console.log(`ja bhai ${this.names}`) //taken value from current object
}

console.log(jsUser.greeting); //only the function reference , not its execution
console.log(jsUser.greeting()); //executed
console.log(jsUser.greeting1()); //executed


majorly object accessed from . but in some cases we use[]