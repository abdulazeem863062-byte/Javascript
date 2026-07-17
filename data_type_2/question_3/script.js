//predict output  1

let a = 10; //here a = 10
let b = a;  //here b = 10 "value of a copy in b"

b = 20;     //here b = 20

console.log(a);  //a = 10
console.log(b);  //b = 20


//predict output  2
let person1 = {
    name : "Abdul"
};   //here person1 name = Abdul reference hai

let person2 = person1; //here name reference copy in person2

person2.name = "Azeem"; //here person2 update their name reference Abdul to Azeem

console.log(person1.name); // here person1 name Azeem because person2 ne name reference change kr diya tha Abdul to Azeem
console.log(person2.name); // here person2 name Azeem


//predict output 3
let value = 10;

console.log(typeof value);  //number

value = "Hello";

console.log(typeof value);  //string

value = true;

console.log(typeof value);  //boolean


//predict output 4
console.log(typeof []); //object

console.log(typeof {}); //object

console.log(typeof null); //object

console.log(typeof function(){}); //function

console.log(typeof (()=>{}));  //function

//predict output 5
let id1 = Symbol("user");
let id2 = Symbol("user");

console.log(id1 == id2); //false
console.log(id1 === id2); //false

let big = 1234567890123456789012345678901234567890n;

console.log(typeof big); //bigInt


//predict output 6
let num = 10;
let str = "Hello";
let bool = false;
let und;
let nul = null;
let arr = [1,2,3];
let obj = {
    city : "Delhi"
};

function test(){}

console.log(typeof num); //number
console.log(typeof str); //string
console.log(typeof bool); //boolean
console.log(typeof und); //undefined
console.log(typeof nul); //object
console.log(typeof arr); //object
console.log(typeof obj); //object
console.log(typeof test); //function

num = "JavaScript";
console.log(typeof num); //string