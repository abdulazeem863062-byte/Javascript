var a = 10;

{
    let a = 20;
    const b = 30;
    var c = 40;

    console.log(a); //20
    console.log(b); //30
}

console.log(a); //10
console.log(c); //40
console.log(b); //ReferenceError: b is not defined