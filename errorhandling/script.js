// //try-catch
try {
    console.log("Start"); //start
    console.log(a); //error go to catch block
    console.log("End"); //ye print nhi hogi
}
catch(error){
    console.log("Error Found"); //error found
}

// //Error Object
try{
    console.log(x); // yahan error aayega ye jaega catch block me
}
catch(error){
    console.log(error); //ye btaega full detail (ReferenceError: x is not defined at script.js:13:17)
    console.log(error.name); // ye btaega kiss type ka error h (ReferenceError)
    console.log(error.message); //ye btaega msg of the error (x is not defined)
}

// //finally (error aaye ya na aaye finally me jo bhi likha hoga vo hmesha execute hoga)
try{
    console.log("Try"); //try
}
catch(error){
    console.log("Catch"); //ye nhi chlega error nhi aaya
}
finally{
    console.log("Finally"); //ye hmesha chlega
}

// //finally with Error
try{
    console.log(a);
}
catch(error){
    console.log("Error"); //yahan ye chlega
}
finally{
    console.log("Done"); //or ye bhi
}

// //throw
let age = 15;
try{
    if(age < 18){
        // throw error
        throw new Error("Not Eligible");
    }
    console.log("Eligible");
}
catch(error){
    console.log(error);
}


// //throw + Number Validation
let num = "ABC";
try{
    if(isNaN(num)){
        // throw error
        throw new Error("Invalid Number");
    }
   console.log(num);
}
catch(error){
    console.log(error);
}

// //Custom Error
// Condition
// Password length < 6
// Throw
// Weak Password
let password = "123";
try{
    if(password.length<6){
        throw new Error("Weak Password");
    }
  console.log(password);
}
catch(error){
    console.log(error);
}


// //Nested catch
try{
    console.log("Outer"); //outer
    try{
        console.log(a);
    }
    catch(error){
        console.log("Inner Catch"); //inner catch
    }
}
catch(error){
    console.log("Outer Catch");
}