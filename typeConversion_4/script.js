//Implicit Type Conversion
console.log("10" + 5); //105 num-5 convert to string

console.log("10" - 5); //5 string-10 convert to number

console.log("10" * 5); //50 string-10 convert to number

console.log("10" / 5); //2 string-10 convert to number

console.log("10" % 3); //1 string-10 convert to number



//Explicit Type Conversion
console.log(Number("100")); //100
console.log(Number("100abc")); //NaN
console.log(String(500)); //"500"
console.log(Boolean(1)); //true
console.log(Boolean(0)); //false


//Number
console.log(Number(true)); //1
console.log(Number(false)); //0
console.log(Number(null));  //0
console.log(Number(undefined)); //NaN
console.log(Number(""));  //0
console.log(Number(" ")); //0


//String
console.log(String(100));  //"100"
console.log(String(true)); //"true"
console.log(String(null)); //"null"
console.log(String(undefined)); //"undefined"
console.log(String([1,2,3]));  //"1,2,3"
console.log(String({})); //"[object object]"


//Boolean
//true
console.log(Boolean(1)); //true
console.log(Boolean(100)); //true
console.log(Boolean(-5));  //true
console.log(Boolean("Hello")); //true
console.log(Boolean(" ")); //true
console.log(Boolean([])); //true
console.log(Boolean({})); //true

//false (bs ye 8 hi false value hn baaki sb true hn)
console.log(Boolean(false));  //false
console.log(Boolean(0));  //false
console.log(Boolean(-0));  //false
console.log(Boolean(0n));  //false
console.log(Boolean(""));  //false
console.log(Boolean(null));  //false
console.log(Boolean(undefined));  //false
console.log(Boolean(NaN));  //false


//NaN & isNaN  (NaN = not a number) (isNaN check krta h ke NaN h ya nhi)
console.log(Number("Hello")); //NaN
console.log(isNaN("Hello")); //true
console.log(isNaN("100"));  //false
console.log(isNaN(100));  //false
console.log(isNaN(NaN)); //true



//parseInt() (String se integer nikalta hai but starting se)
console.log(parseInt("123"));  //123
console.log(parseInt("123abc"));  //123
console.log(parseInt("abc123"));  //NaN

//parseFloat()  (String se integer nikalta hai decimal ke sath but starting se)
console.log(parseFloat("12.34")); //12.34
console.log(parseFloat("12.34abc")); //12.34
console.log(parseFloat("abc12.34")); //NaN


//mix question
console.log("5" + 5); //55
console.log("5" - 5); //0
console.log(true + 1); //2
console.log(false + 10); //10
console.log(null + 5);  //5
console.log(undefined + 5); //NaN


//mix question
let a = "100";
let b = "100abc";
let c = "";
let d = " ";
let e = null;
let f = undefined;

console.log(Number(a)); //100
console.log(Number(b)); //NaN
console.log(Number(c)); //0
console.log(Number(d)); //0
console.log(Number(e)); //0
console.log(Number(f)); //NaN

console.log(Boolean(c)); //false
console.log(Boolean(d)); //true

console.log(parseInt(b)); //100
console.log(parseFloat("99.99xyz")); //99.99

//mix question
console.log(10 + "20"); //1020
console.log("20" - 10); //10

console.log(Boolean("false")); //true
console.log(Boolean("0")); //true
console.log(Boolean("")); //false

console.log(Number(true)); //1
console.log(Number(false)); //0

console.log(parseInt("50px")); //50
console.log(Number("50px")); //NaN

console.log(isNaN("Hello")); //true
console.log(isNaN("123"));  //false

console.log(parseFloat("3.14abc")); //3.14
console.log(parseInt("3.14")); //3