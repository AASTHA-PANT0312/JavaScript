/* when we are dealing with comparisons of same datatypes which return boolean values*/
//console.log(2>1);
//console.log(2>=1);
//console.log(2<1);
//console.log(2==1);
//console.log(2!=1);


//We do not get predictable results if we have different datatypes
//console.log("2" > 1); //in case of different datatypes , it might provide different results so we make sure that our datatypes are same.
//console.log("02" > 1);

//Checking the unpredictability of comaprisons with NULL (might convert it into 0mor Nan , hence we avoid such lines of code and make sure to write a clean code)

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true

// Equality (==) and comparisons works differently , comparisons(> , < , >= , <=) convert null to a number , treat it as 0 

//UNDEFINED
//It gives false in all cases , it does not assign it any value.

//equality and comparisons are two different things

//Strict check - which checks data type along with the values "==="

 