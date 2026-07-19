// //Creation + Access + Update + Delete
// let fruit = ["Apple","Banana","Mango"]; //create
// console.log(fruit[0]); //access first
// console.log(fruit[fruit.length-1]); //access last
// fruit[1] = "Orange"; //update
// console.log(fruit); //print updated array
// fruit.pop(); //delete last element
// console.log(fruit); //print updated array


// //push | pop | shift | unshift
// let arr = [10,20,30];
// console.log(arr);
// arr.push(40); //add element in array on last position
// console.log(arr);
// arr.pop(); //delete element in array on last position
// console.log(arr);
// arr.unshift(5); //starting me element add krta h
// console.log(arr);
// arr.shift(); //starting me SE element delete krtA H
// console.log(arr);


// //splice | slice
// let arr = [10,20,30,40,50];
// console.log(arr.slice(1,4)); //20,30,40 original array change nhi krta
// console.log(arr); //original array
// arr.splice(2,1,99);
// console.log(arr); //10,20,99,40,50
// console.log(arr); //10,20,99,40,50


// //concat | includes | indexOf
// let a=[1,2];
// let b=[3,4];
// let c = a.concat(b);
// console.log(c); // [1,2,3,4]
// console.log(c.includes(3)); //true
// console.log(c.indexOf(4)); //3 ye punch rha h 4 value kis index pr h
// console.log(c.indexOf(100)); //-1 agr value nhi h to -1


// //reverse | sort
// let arr = [5,2,8,1];

// console.log(arr.reverse()); //[1,8,2,5]

// console.log(arr.sort()); //[1,2,5,8]

// let nums = [10,5,100,20];

// console.log(nums.sort()); //[5,10,20,100] ye hona chahiye tha but 
//    // [10,100,20,5] ye h kyunki .sort method as a string compare krta h
// nums.sort((a,b)=>a-b);
// console.log(nums) //ye dega sorted array


// //flat | fill | copyWithin | at
// let arr = [1,[2,3],[4,[5]]];

// console.log(arr.flat()); //[1,2,3,4,5]  ye jo nested arrays hn usse htake ek flat array me de dega

// let nums = [1,2,3,4];

// nums.fill(0,1,3); //isme h ke 0 krni h 1 se 3 tak 3 chorke //ek value se array bhr deta h

// console.log(nums); //[1,0,0,4]

// let x = [10,20,30,40];

// x.copyWithin(1,2); //array ki value ko ussi me copy kr deta h 

// console.log(x); //[10,30,40,40]

// console.log(x.at(-1)); //[40] last index -1


// //forEach | map
// let nums = [1,2,3];
// nums.forEach((num)=>{
//      console.log(num*2);
// }); //2  4  6
// let result = nums.map((num)=>{
//     return num*2;
// }); 
// console.log(result); //ye ek array return krta h
// [2,4,6]


// //filter | reduce
// let nums = [10,15,20,25,30];

// let even = nums.filter((num)=>{
//     return num % 2 === 0;
// });

// console.log(even); //[10,20,30]

// let sum = nums.reduce((acc,num)=>{
//     return acc + num;
// },0);

// console.log(sum); //100


// //some | every | find | findIndex
// let nums = [5,10,15,20];

// console.log(nums.some(num=>num>18));//true agr ek bhi element condition satisfy kre to true

// console.log(nums.every(num=>num>3)); //true agr sbhi element condition stisfy kren tbhi true

// console.log(nums.find(num=>num>10)); //15 pehla matching element return

// console.log(nums.findIndex(num=>num>10)); //2 pehla matching element ka index return


// //flatMap
// let words = ["Hi","JS"];

// let result = words.flatMap(word=>word.split(""));

// console.log(result); //["H","i","J","S"]


// let arr = [1,2,3];

// arr.splice(1,1);

// console.log(arr);


// let arr = [10,20,30];

// console.log(arr.map(x=>x+5));


// let arr = [10,15,20];

// console.log(arr.filter(x=>x>15));


// //Coding Practice
// //Array ka sum nikalo.
// let arr = [10,20,40];
// console.log(arr.reduce((a,b)=>a+b,0));


// //