//this keyword - used to refer to current context 
// const user = {
//     username : "Aastha" ,
//     price :10011 ,

//     welcomeMessage : function(){
//         //console.log(`${this.username} , welcome to the website`);
//         //console.log(this)//it will always return the object wrt current context.(acc to calls first yours then sam)
//     }
// }

//inside we can use this , but what if we use it outside , what scope will it have.

// user.welcomeMessage()
// user.username = "SAM"
// user.welcomeMessage()//now context shifts to use SAM.

//console.log(this)//now this lies in the node environment and there is no global object here , now it will rturn empty . {}
//while inside of a browser , the global object present there is window , so instead of returning empty it will simply return the windo object.


//Arrow Function-

// function nname(){
//     //let username = "Miya"
//     // console.log(this); // this willl not yield this name but globals and other things
//     console.log(this.username)// it will give undefined as within a function we can not use it  , we can use it within the object.
// }

// nname() //don't forget this

// normal variable assignment declaration 

// const chai = function (){
//     let username = "Miya"
//     // console.log(this.username); // it will be undefined
//     console.log(this); //global values
// }
/*
const chai = () => {
    let username = "Miya"
    //console.log(this.username); // it will be undefined
    console.log(this); //it will return empty {}
}
chai()*/

// const addSum = (num1 , num2) => {
//     return num1 +num2
// }

//implicit return - assuming and not writing return + vaise toh you can avoid( ) but the key is if you use { } return needs to be used and if use() no need of return keyword
// const addSum = (num1 , num2) => (num1 +num2)
//same if we want to return object then in curly braces no action[undefined] so keep it within ()

// const addSum = (num1 , num2) => ({username:"ash"})
const addSum = (num1 , num2) => console.log(this) //empty
// console.log(addSum(2,8));
addSum(2,8);