//Math.round() | ceil() | floor() | trunc()
console.log(Math.round(5.4)); //5 nearest number
console.log(Math.round(5.5)); //6 nearest number

console.log(Math.ceil(5.1)); //6  upper nearest number
console.log(Math.floor(5.9)); //5 lower nearest number

console.log(Math.trunc(5.9)); //5 remove decimal
console.log(Math.trunc(-5.9)); //-5 remove decimal



//Math.sqrt() | pow() | abs()
console.log(Math.sqrt(64)); //8 => 8^2=64 = 8*8

console.log(Math.pow(2,5)); //32 => 2*2*2*2*2 = 32

console.log(Math.abs(-50)); //50 absolute value negative ko positive bna deta h

console.log(Math.abs(50)); //50


//Math.max() | Math.min()
console.log(Math.max(10,50,30,90)); //90 max find krke deta h

console.log(Math.min(10,50,30,90)); //10 min find krke deta h

let arr = [20,40,60,80];

console.log(Math.max(...arr)); //80 spread ka use krke arr ki sari value pr .max lga diya
console.log(Math.min(...arr)); //20 spread ka use krke arr ki sari value pr .min lga diya
console.log(Math.max(arr)); //NaN kyunki arr as a onject jaega is liye ye not as number dega isiliye humne uppar spread ka use kiya



//Math.random()
console.log(Math.random()); // ye hme 0 se 1 ke beech ke random number deta h

console.log(Math.floor(Math.random() * 10)); //ye hme 0 se 10 tk random number deta h

console.log(Math.floor(Math.random() * 100) + 1); //ye hme 1 se 100 tk random number deta h

//mixed question
let num2 = 15.789;

console.log(num2.toFixed(2));  //15.79

console.log(Number.isInteger(num2)); //false

console.log(Math.ceil(num2));   //16

console.log(Math.floor(num2));  //15

console.log(Math.round(num2));  //16

console.log(Math.trunc(num2));  //15


//mix question
let a = "200";

console.log(Number(a)); //200

console.log(Number.isInteger(Number(a))); //true

console.log((12.345).toFixed(2)); //12.35

console.log((12.345).toPrecision(4)); //12.35

console.log(Math.pow(3,3)); //27 => 3*3*3=27

console.log(Math.sqrt(81)); //9 => 9^2 = 81

console.log(Math.abs(-99)); //99

console.log(Math.max(10,20,30)); //30

console.log(Math.min(10,20,30)); //10

console.log(Number.isFinite(Infinity)); //false



//mix question 
let num = 9.8765;

console.log(num.toFixed(2)); //9.88

console.log(num.toPrecision(3)); //9.88

console.log(Number.isInteger(9)); //true

console.log(Number.isInteger(9.0)); //true

console.log(Number.isInteger(9.5)); //false

console.log(Math.floor(-9.8)); //-10

console.log(Math.ceil(-9.8)); //-9

console.log(Math.trunc(-9.8)); //-9

console.log(Math.abs(-100)); //100

console.log(Math.max(5,15,25)); //25

console.log(Math.min(5,15,25)); //5

console.log(Math.floor(Math.random()*6)+1); //1 to 6 random number


//questions

//1. Ek number ka square aur cube nikalo.

let n = 9;
console.log("Square of: " + n + " = " + n*n);
console.log("Cube of: " + n + " = " + n*n*n);



//2. Ek number ka absolute value nikalo without using Math.abs().
let sqr = -24;
let req = sqr*sqr;
for(let i=1; i<=req; i++){
    if(i*i==req){
        console.log(i);
        break;
    }
}



//3. 1 se 100 ke beech ka random integer generate karo.
let randomNumber = Math.floor(Math.random() * 100) +1;
console.log(randomNumber);
