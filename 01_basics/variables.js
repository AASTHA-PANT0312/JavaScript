const accountId = 144 //not allowed to change and for sure can be displayed
let accountEmail = "aastha@google.com" // can be modified 
var accountPassword = "123"
accountCity= "Kashipur"  //  it's getting displayed in table

let accountNumber //only declared not defined , hence it will be shown as undefined.


accountEmail = "chai@gmail.com"
accountPassword = "asaa kooda"

//console.log(accountCity)

/* Displaying multiple values*/
console.table([ accountEmail , accountId, accountPassword , accountCity ,accountNumber])