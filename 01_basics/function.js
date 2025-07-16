// function myName(){

//     console.log("AASTHA");
//     console.log("Loki");
// }

// //myName - reference
// // myName() //execution

// function add2num(num1,num2){ //parameters
//     console.log(num1+num2);
// }
// add3num()//empty won't wprk as don't match
// add2num(3,"4") //it will give 34 as it'll take 3 as strings too

// const result =  add2num(8,9) //arguments
// add2num(4,"d") //4d
// add2num(6,null) //6
 




//now here's a check: in above varibale result we can call a function and store it's value , while executing this code , here it will follow th e flow and hence map through the console log statemet and give us the value but if we would ever print result in console log onlu y , it will give undefined , as storing and return value might not bet thsame

   //console.log(result) //undefined



 function add2num(num1,num2){ //parameters
    let result = num1+num2; //this result is of different scope of than that declared outside
    return result
    //console.log("HI")//it'll never get execute , after return , also unreachable code
    //or return num1+num2;
} //now here the result will contain some value , as here its not printing starement but a storing statement , and then a return statement which will return this value to the variable
result = add2num(8,5) //different scope
console.log(result)

//variations in the value passed

function login(user){
    return `${user} login status`
}
console.log(login("tia"))
console.log(login(""))//only statement as an empty string has been passed
console.log(login()) //undefined+statement

//way to soove it

function login(user){
    if(user===undefined){ //eqv to (!username) empty+undefined both are considered false
        console.log("valid user input required")
        return //just return it back , rest statements won't be read
    }
    return `${user} login status`
}

//we can also give some default values
function login(user = "riaa"){
    if(user===undefined){ //eqv to (!username) empty+undefined both are considered false
        console.log("valid user input required")
        return //just return it back , rest statements won't be read
    } //this section will never be executeed as by default it will always hac=ve some value , and in case we provide any value , it will override the default one 
    return `${user} login status`
}