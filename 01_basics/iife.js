//immediately invoked function expressions - used because we want afunction to getimmediately execute or when we want a different scope than global scope. we do not want global scope pollution.
//to defined say all of it


// function chai(){
//     console.log(`DB connected`)
// }
// chai()//although it is immediately executed we want it to be free of global pollution.

//syntax we make use of () theory that we learned earlier , in case of return cuz if we simply use ()at end it won't work buttt when we use parenthesis to cover this all it will work

// function chai(){
//     console.log(`DB connected`)
// }() // simply won't work- 


(function chai(){ //named iife
    console.log(`DB connected`)
})();//now it will execute - iife +make sure you need to cover only the function code
 //syntax
 //()()- first set of parenthesis for definition second for execution just like chai()

 // if you miss this semicolon after execution parenthesis it will not know where to end the context so when you create another functions like these they won't execute , be it arrow function or normal function

 ( (name)=> { //unnamed iife
    console.log(` DB connected ${name}`)
 })('ash'); // normalyy pass the arguments as you do in functions