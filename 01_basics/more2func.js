//REST and Spread operators : when we need to pass multiple values to a function , like in an ecart app we want to let in all the records all the time.

function CalculatePrice(...num1){
    return num1
}
console.log(CalculatePrice(1200,456,5689))

function CalculatePrice(val1 ,val2 ,...num1){
    return num1 //now this will be storing the array value as before but except the first 2 values are going to be assigned to val1 and val2
}
console.log(CalculatePrice(200,897,2344,5409,40))
//functions and objects 

const user = {
    username : "Aastha",
    price : 1234
}

function handleObject(anyobject){
    console.log(`the name is ${anyobject.username} and the price to be stated is ${anyobject.price}.`);
}

handleObject(user)

//directly passing the object.

handleObject({
    user : "me",
    age : 12,
    value : true
})

//passing array to function

const myArray = [23,45,56]

function getsecond(getArray){
    return getArray[1]
}
console.log(getsecond(myArray));