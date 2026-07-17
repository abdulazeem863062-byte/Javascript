//scope

//let
let a = 10;         //Global scope variable
{
    let a = 20;     //Block scope variable
    console.log(a); //Block variable access
}
console.log(a);     //Global variable access

//output  : 20
//          10


var b = 10;         //Global scope variable
{
    var b = 20;     // var is update here because var have global scope
    console.log(b); //Global  variable access
}
console.log(b);     // update value is 20 so output is 20

//output  : 20
//          20


//const
const c = 10;       //Global scope variable
{
    const c = 20;   //Block scope variable
    console.log(c); //Block variable access
}
console.log(c);     //Global variable access

//output  : 20
//          10
