//Hoisting

//var
console.log(a);
var a = 10;
//output : undefined

//let
// console.log(b);
// let b = 10;
//output : ReferenceError: Cannot access 'b' before initialization
        //It will go in a Temporal Dead Zone

//const
console.log(c);
const c = 10;
//output : ReferenceError: Cannot access 'c' before initialization
        //It will go in a Temporal Dead Zone

