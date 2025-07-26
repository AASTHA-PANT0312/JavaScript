// //SCopes : whenever we talk about let , var and const : if they are just going to print the values out why do you think they differ because they are the one who determines the scope , or acts along with scopes. {} - scope
// //out of braces - global scope
// //inside of braces - block scope 
// let a =78
// var c=34 //never use var as you can see it's value will change inside the function and then out
// if(true){

//     let a = 23
//     const b =34
//     var c = 22
//     console.log(a) // block wali value
// }

// console.log(a) // no out as block scope +2 if it's stated above the value it will give outside the function will be its global value
// console.log(b) //no out as block scope
// console.log(c) //it's global 

//global scope is different in code level and node level

//NESTED SCOPES AND CLOSURES (IMPORTANT) : child function can use the variables from the parent function.

// function one(){
//     const user = "ME"

//     function two(){
//         const website = "google"
//         console.log(user); //it is a global scope to it
//     }

//     //console.log(website);//out of scope

//     two()
// }

// one()

//same with if and else-

if(true){
    const user = "me"
    if(user === "me"){
        const website = "gp"
        console.log(user + website);
    }
    //console.log(website);
}

//console.log(user)

//LOOK IF THERE IS AN ERROR IT'S THERE NO WAY IT'S GONNA SHOW YOU HALF RIGHT DONE THINGS 

//++++++++EXCLUSIVE++++++++++

//expression: just a way of writing function.(Hoisting)- keeping a function inside a variable.


addOne(56)//it is valid before declaration
function addOne(num){
    return num+1
}

// addOne(56) // alright after declaration as well


//addTwo(78) - no use
const addTwo = function(num){
    return num+2
}

addTwo(45)
//can be called after declaration only cuz you are storing that function inside a varibale , so calling it means that the variable should be declaraed as of then.
