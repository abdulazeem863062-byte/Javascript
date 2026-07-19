// //Function Declaration
// function add(a,b){
//     return a+b;
// };
// console.log(add(10,20));

// //Function Expression
// let add = function(a,b){
//     return a+b;
// }
// console.log(add(10,30))

// //Arrow function
// let length = 10;
// let width = 5;
// let area = () =>{
//     return length*width;
// }
// console.log(area());

// //One line Arrow function
// let length = 10;
// let width = 5;
// let area = () => {return length*width};
// console.log(area())

// //Anonymous Function  (jiska koi naam na ho)
// let greet = function(){
//     console.log("Hello");
// };
// greet(); //output Hello

// //IIFE
// (function(){
//     console.log("I am IIFE");
// })();  // ye khud hi turant call ho jata h

// //Higher Order Function + Callback
// function calculate(a, b, operation){
//     return operation(a,b);
// }

// function add(x, y){
//     return x + y;
// }

// console.log(calculate(10,20,add));

// //Pure vs Impure Function
// let count = 0;

// function increase(){
//     count++;
//     return count;
// }

// console.log(increase()); //1
// console.log(increase()); //2
//ye ek impure funtion h kynki iski value hr baar change ho rhi h

// function increase1(a,b){
//     return a+b;
// }

// console.log(increase1(2,3)); //5
// console.log(increase1(2,3)); //5
//ye ek pure funtion h kynki iski value hr baar change nhi ho rhi h same input pe same hi output aa rha h

// //Default Parameters
// function greet(name = "Guest"){
//     console.log("Hello", name);
// }

// greet(); //yahan hmne koi argument nhi di but funtion me parameter pass kiya h isliye ye default parameter wala argument utha lega "Guest"

// greet("Abdul"); // yahan hmne argument de diya h to yahan yhi aaega "Abdul"

// //Rest Parameters
// function sum(...numbers){

//     console.log(numbers);

// }

// sum(10,20,30,40); //ye hme sum ke same argument ko ikattha krke array ki form me de dega

// //Arguments Object
// function test(){

//     console.log(arguments); //yahan rest ki tarah kaam krega sare argument de dega

//     console.log(arguments[0]); //yahan sirf pehla argument dega

//     console.log(arguments.length); // yahan total length dega  3

// }

// test(10,20,30);

// //Recursion
// function count(n){
//    if(n===0){
//     return ;
//    }console.log(n);
//    count(n-1);
// }
// count(6);

// //factorial

// function count(n){
//     if(n===0){
//         return 1;
//    }
//    return n * count(n-1);

// }
// console.log(count(4));

// //output
// function test(a,b=10){

//     return a+b;

// }

// console.log(test(5)); //15

// console.log(test(5,20)); //25

// //QUESTIONS

//1. Even/Odd check karne wala function.
// function evenOdd(a) {
//   if (a % 2 == 0) {
//     console.log(`${a} is even number`);
//   } else {
//     console.log(`${a} is odd number`);
//   }
// }

// evenOdd(6);

//2. Prime number check karne wala function.
// function isPrime(a) {
//   let prime = true;
//   for (let i = 2; i < a; i++) {
//     if (a % i == 0) {
//       prime = false;
//       break;
//     }
//   }
//   if (prime) {
//     console.log(`${a} is a prime number`);
//   } else {
//     console.log(`${a} is not a prime number`);
//   }
// }
// isPrime(9);

//3. Maximum of three numbers.
// function maxNum(...number){
//     let max = number[0];
//     for(let i=1; i<number.length;i++){
//         if(number[i]>max){
//             max = number[i];
//         }
//     }console.log(max)
// }
// maxNum(10,30,20);

// //4. Palindrome string check karo.
// function palindrome(a) {
//   let totalchar = 0;
//   for (ch of a) {
//     totalchar++;
//   }
//   let newStr2 = "";
//   for (let i = totalchar - 1; i >= 0; i--) {
//     newStr2 += a[i];
//   }
//   if (a == newStr2) {
//     console.log("palindrom");
//   } else {
//     console.log("Not a palindrom");
//   }
// }
// palindrome("madan");


// //5. Reverse a string
// function reverse(a){
//       let totalchar = 0;
//   for (ch of a) {
//     totalchar++;
//   }
//   let newStr2 = "";
//   for (let i = totalchar - 1; i >= 0; i--) {
//     newStr2 += a[i];
//   }console.log(newStr2)
// }
// reverse("azeem")