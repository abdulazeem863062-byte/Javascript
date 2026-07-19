// global scope
// let name = "Abdul"; //global scope

// function greet(){
//     console.log(name); //Abdul
// }

// greet();

// console.log(name); //Abdul


// //Local Scope
// function test(){

//     let age = 20;  //local scope

//     console.log(age); //20

// }

// test();

// console.log(age); //referenceerror


// //Block Scope
// {
//     let a = 10;
//     const b = 20;

//     console.log(a); //10
//     console.log(b); //20
// }

// console.log(a); //referenceerror
// console.log(b); //referenceerror


// //var vs Block Scope
// {
//     var x = 100; //ye ek block me h but var h isliye access ho jaega bhr bhi
// }

// console.log(x); //100


// //Global + Local
// let city = "Delhi"; //global scope

// function showCity(){

//     let city = "Mumbai"; //local scope

//     console.log(city); //Mumbai

// }

// showCity();

// console.log(city); //Delhi


// //Lexical Scope
// let a = 10;

// function outer(){

//     let b = 20;

//     function inner(){

//         console.log(a); //10
//         console.log(b); //20

//     }

//     inner();

// }

// outer();


// //Lexical Scope
// function first(){

//     let x = 10;

//     function second(){

//         let y = 20;

//         function third(){

//             console.log(x); //10
//             console.log(y); //20

//         }

//         third();

//     }

//     second();

// }

// first();


// //Shadowing
// let value = 100;

// function demo(){

//     let value = 200;

//     console.log(value); //200

// }

// demo();

// console.log(value);  //100



// //Mixed Scope
// let a = 1;

// function one(){

//     let b = 2;

//     if(true){

//         let c = 3;

//         console.log(a); //1
//         console.log(b); //2
//         console.log(c); //3

//     }

//     console.log(c); //referenceerror

// }

// one();


// //Final challenge
// let name = "Global";

// function first(){

//     let name = "First";

//     function second(){

//         let name = "Second";

//         console.log(name); //second

//     }

//     second();

//     console.log(name); //first

// }

// first();

// console.log(name); //global


// //TDZ
// let x = 100;

// function demo(){

//     console.log(x); //cannot access x before initialization

//     let x = 200;

// }

// demo();