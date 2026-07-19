// //var Hoisting
// console.log(a); //Undefined

// var a = 10;

// console.log(a); //10


// //let Hoisting
// console.log(age); //error cannot access before initialization

// let age = 20;


// //const Hoisting
// console.log(pi); //ReferenceError: Cannot access 'pi' before initialization

// const pi = 3.14;


// //var Redeclaration
// var x = 10;

// var x = 20;

// console.log(x); //20


// //let & const
// let a = 10;

// // let a = 20;  //syntax error cannot redeclare let

// const b = 30;

// //const b = 40;  //syntax error cannot redeclare let

// console.log(a); //10
// console.log(b); //30


// //Function Hoisting
// sayHello();

// function sayHello() {
//     console.log("Hello"); //Hello
// }


// //Function Expression
// greet();

// var greet = function () {
//     console.log("Hi"); //function expression ko pehle call nhi kr skte
// }; //TypeError: greet is not a function 


// //Arrow Function
// hello();

// const hello = () => {
//     console.log("Arrow");
// }; //ReferenceError: Cannot access 'hello' before initialization


// //Temporal Dead Zone
// let city = "Delhi";

// function test() {

//     console.log(city); //ReferenceError: Cannot access 'city' before initialization

//     let city = "Mumbai";

// }

// test();


// //Final Mixed
// console.log(a); //undefined

// var a = 10;

// function demo() {

//     console.log(a); //undefined

//     var a = 20;

//     console.log(a); //20

// }

// demo();

// console.log(a); //10