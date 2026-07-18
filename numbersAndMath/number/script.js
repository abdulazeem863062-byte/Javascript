//Number Object + Number()
console.log(Number("100")); //100
console.log(Number("100.5")); //100
console.log(Number(true)); //1
console.log(Number(false)); //0
console.log(Number(null)); //0
console.log(Number(undefined)); //NaN


//toFixed() (string return krta h )
let num = 12.34567;

console.log(num.toFixed(0)); //12
console.log(num.toFixed(1)); //12.3
console.log(num.toFixed(2)); //12.35
console.log(num.toFixed(3)); //12.346

//toPrecision() (ye total significant digits count krta h kitti total significant digits chahiye baki bachi hui values ko rounded krke deta h)
let num1 = 123.456;

console.log(num1.toPrecision(2)); //1.2e+2 digit aagengi baaki ko rounded krega 1.2 * 10^2 = 120 to iska sidha 1.2e+2 ye hi de deta h
console.log(num1.toPrecision(4)); //123.5 rounding krke dega
console.log(num1.toPrecision(6)); //123.456



//isInteger()  (1.Value ka type number hona chahiye. 2.Decimal part nahi hona chahiye.)
console.log(Number.isInteger(10)); //true
console.log(Number.isInteger(10.5)); //false
console.log(Number.isInteger("10")); //false

//isFinite()   (Kya value ek finite (limited) number hai?)
console.log(Number.isFinite(100)); //true
console.log(Number.isFinite(Infinity)); //false
console.log(Number.isFinite("100")); //false


//questions
//1. User se ek decimal number lo aur usko 2 decimal places tak print karo.
let numdec = 12.5678;
let temp = numdec *100;  //point ke 2 tk value aa jaegi jese 1256.78
let intPart = temp - (temp % 1); //intiger part alg kr liya 1256
let deciPart = temp%1; // decimal part alag 0.78
if(deciPart>=0.5){ //agr decimal 0.5 ya usse jyada ho to integer pasr me ek badha do
    intPart++;   //1257
}
let ans = intPart / 100; //ab jo ineger bnaya tha 1257 usse vaps decimal bna do 12.57

console.log(ans);


//2. Do numbers me bada number print karo without using Math.max().
let first = 10;
let second =20;
if(first>second){
    console.log(`Maximum number between ${first} and ${second} is = ${first}`)
}else{
    console.log(`Maximum number between ${first} and ${second} is = ${second}`)
}

