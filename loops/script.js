// //for loop
// //1 se 10 tak numbers print karo.
// for(let i=1;i<=10;i++){
//     console.log(i);
// }

// //while loop
// //10 se 1 tak reverse counting print karo.
// let i = 10;
// while(i>0){
//     console.log(i);
//     i--;
// }

// //do while loop
// let user = Number(prompt("Enter the Table number"));
// let i = 1;
// do{
//     console.log(`${user} * ${i} = ${user*i}`)
//     i++;
// }while(i<=10);


// //Break
// //1 se 100 tak loop chalao. Jab number 37 aaye to loop stop kar do.
// for(let i=1;i<=100;i++){
//     if(i==37){
//         break;
//     }
//     console.log(i);
// }  // //37 print nhi hoga bs 36 tk chlega loop


// //continue
// //1 se 20 tak sirf odd numbers print karo using continue.
// for(let i=1;i<=20;i++){
//     if(i%2==0){
//         continue;
//     }
//     console.log(i);
// }


// //for..of // iska use array or string ki values ko iterate krne ke liye hota h
// let fruit = ["Apple","Mango","Banana","Orange"];
// for(ch of fruit){
//     console.log(ch);
// }


// //for..in //iska use onject ki key value ko iterate krne ke liye hota h
// let student = {
//     name: "Azeem",
//     age: 20,
//     city: "Delhi"
// } 
// for(ch in student){
//     console.log(ch); //its for access only key
//     console.log(student[ch]) //its for access only values
// }


// //Nested loop
// //Stars ka pattern print karo.
// // *
// // * *
// // * * *
// // * * * *
// // * * * * *
// let n=5;
// for(let i=1;i<=n;i++){
//     let str = "";
//     for(let j=1; j<=i;j++){
//         str += "* ";
//     }console.log(str);
// }



// //Mixed Challenge
// //1 se 50 tak numbers print karo.
// for(let i=1;i<=50;i++){
//     if(i%5==0 && i%7==0){
//         console.log(`${i} is divisible by 5 and 7 so FizzBuzz`);
//     }else if(i%5==0){
//         console.log(`${i} is divisible by 5 so Fizz`);
//     }else if(i%7==0){
//         console.log(`${i} is divisible by 7 so Buzz`);
//     }else{
//         console.log(`${i} is not divisible by 5 and 7`);
//     }
// }


// //Final Loop Challenge
// //User se ek number lo. Us number ke andar jitne digits hain unka sum nikaalo.
// let user = Number(prompt("Enter the Number"));
// let sum = 0;
// while(user>0){
//     let digit = user % 10;
//     sum += digit;
//     user = Math.floor(user/10);
// }
// console.log(`sum is: = ${sum}`);


// //output
// for(let i = 1; i <= 5; i++){

//     if(i == 3)
//         break;

//     console.log(i);
// }   //output = 1 2


// //output
// for(let i = 1; i <= 3; i++){

//     for(let j = 1; j <= 2; j++){

//         console.log(i, j);

//     }

// }  //output = 1 1  1 2  2 1  2 2  3 1  3 2


// //output
// let obj = {
//     a:1,
//     b:2
// };

// for(let key in obj){

//     console.log(key);

// }  //output = a   b