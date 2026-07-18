// //if
// let number = prompt("Enter the Number");
// if(number>0){
//     console.log("positive number");
// }


// //if else
// if(number%2==0){
//     console.log(`${number} is Even number`);
// }else{
//     console.log(`${number} is Odd number`);
// }

// //if-else-if
// if(number>90){
//     console.log("A  GRADE");
// }else if(number>80){
//     console.log("B  GRADE");
// }else if(number>70){
//     console.log("C  GRADE");
// }else if(number>60){
//     console.log("D  GRADE");
// }else{
//     console.log("Fail");
// }


//Nested if
// let userName = "Azeem";
// let password = 1234;
// let enterUser = prompt("Enter the username");
// if(userName==enterUser){
//     let enterPass = prompt("Enter the password");
//     if(password==enterPass){
//         console.log("Login Successful")
//     }else{
//         console.log("Password is incorrect")
//     }
// }else{
//     console.log("User not found")
// }


//Largest of Three Numbers
// let num1 = prompt("Enter the first number");
// let num2 = prompt("Enter the second number");
// let num3 = prompt("Enter the third number");
// if(num1>num2 && num1>num3){
//     console.log(`In ${num1} ${num2} ${num3} max is: =  ${num1}`)
// }else if(num2>num1 && num2>num3){
//     console.log(`In ${num1} ${num2} ${num3} max is: =  ${num2}`)
// }else if(num3>num2 && num3>num1){
//     console.log(`In ${num1} ${num2} ${num3} max is: =  ${num3}`)
// }



//switch
// let day = Number(prompt("Enter the day number"));
// switch(day){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Enter a valid day number")
// }




//another switch
// let calculate = prompt("Enter the operator sign");
// let a = 20;
// let b = 10;
// switch(calculate){
//     case "+":
//         let add = a+b;
//         console.log(`${a} + ${b} = ${add}`);
//         break;
//     case "-":
//         let sub = a-b;
//         console.log(`${a} - ${b} = ${sub}`);
//         break;
//     case "*":
//         let mul = a*b;
//         console.log(`${a} * ${b} = ${mul}`);
//         break;
//     case "/":
//         let div = a/b;
//         console.log(`${a} / ${b} = ${div}`);
//         break;
//     case "%":
//         let mod = a%b;
//         console.log(`${a} % ${b} = ${mod}`);
//         break;
//     default:
//         console.log("Enter a valid operator")
// }



//Nested switch
// let country = prompt("Enter the country between India and USA");
// switch(country){
//     case "India":
//         let city = Number(prompt("Enter a city number in india"));
//         switch(city){
//             case 1:
//                 console.log("Delhi");
//                 break;
//             case 2:
//                 console.log("Mumbai");
//                 break;
//             case 3:
//                 console.log("Lacknow");
//                 break;
//             default:
//                 console.log("Invalid city")
//         }
//         break;
//     case "USA":
//         let city1 = Number(prompt("Enter a city number in usa"));
//         switch(city1){
//             case 1:
//                 console.log("New York");
//                 break;
//             case 2:
//                 console.log("Chicago");
//                 break;
//             case 3:
//                 console.log("Texas");
//                 break;
//             default:
//                 console.log("Invalid city")
//         }
//         break;
//     default:
//         console.log("Invalid country")
// }




