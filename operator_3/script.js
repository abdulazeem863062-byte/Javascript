//Arithmetic operators
let a =10;
let b = 5;

console.log(a+b);  // 10 + 5 = 15
console.log(a-b);  // 10 - 5 = 5
console.log(a*b);  // 10 * 5 = 50
console.log(a/b);  // 10 / 5 = 2 quotient
console.log(a%b);  // 10 % 5 = 0 reminder
console.log(a**b); // 10 ** 5 = 10*10*10*10*10 = 100000




//Assignment operators
let x = 20;
console.log(x);  //20

x += 20;
console.log(x); //x=x+20 = 20+20=40
                //x=40
x -= 20;
console.log(x); //x=x-20 = 40-20=20
                //x=20
x *= 20;
console.log(x); //x=x*20 = 20*20=400
                ////x=400
x /= 20;
console.log(x); //x=x/20 = 400/20=20
                //x=20
x %= 20;
console.log(x); //x=x%20 = 20%20=0
                //x=0



//Comparison operators
console.log(10 == "10"); //true

console.log(10 === "10"); //false

console.log(20 != "20");  //false

console.log(20 !== "20"); //true

console.log(5 > 3);  //true

console.log(5 < 3);  //false

console.log(10 >= 10); //true

console.log(8 <= 5); //false




//Logical operators
let manAge = 19;
let girlAge = 18;

console.log(manAge >= 18 && girlAge >=18); //true in And operator both condition are true so it will give true
console.log(manAge >= 18 && girlAge >=20); //false if any one condition is false it give the output false here girlAge is not >= 20

console.log(manAge >= 18 || girlAge >=18); //true in Or operator any one condition is true so the output is true
console.log(manAge >= 28 || girlAge >=18); //true here manAge is not >=28 this is false condition but girlAge is >=18 is true so it will give the true

console.log(!(manAge >= 18)); //false In Not operator it will change the condition if the condition is true it will give the output false or vise-versa
console.log(!(girlAge >=28)); //true here girlAge condition is false but with not operator it will give the false output



//Unary operators
let y = 5;

console.log(y++); //5
console.log(y);  //6

console.log(++y); //7

console.log(y--); //7
console.log(y);  //6

console.log(--y); //5


//Ternary operators
let marks = 45;
let result = marks > 33 ? "Pass" : "Fail";
console.log(result); //Pass
marks = 5;
result = marks > 33 ? "Pass" : "Fail";
console.log(result); //Fail


//Optional Chaining operator (?.)
let user = {
    name: "Azeem"
};

console.log(user.name); //Azeem
// console.log(user.address.city); //It will generate typeerror because address is not defined 
console.log(user.address?.city); //It check if the address object is present in user object or not if not it give undefined and prevent our program for crash



//Nallish coalascing operator (??)
//This operator check only null and undefined 
let val1 = null;
let val2 = undefined;
let val3 = 0;

console.log(val1 ?? "Default"); //Default
console.log(val2 ?? "Default"); //Default
console.log(val3 ?? "Default"); //0



//Spread   "Expand karna"
let arr1 = [1,2,3];
let arr2 = [...arr1,4,5,6];
console.log(arr2); // [1,2,3,4,5,6]



//Rest "Collect multiple values"
function sum(...numbers){
    console.log(numbers); //[1,2,3,5,7,9]
}
sum(1,2,3,5,7,9);


//Delete Or In  operator
let person = {
    name: "Azeem",
    age: 20
};
delete person.age;
console.log(person); //{name:"Azeem"}

console.log("name" in person); //true
console.log("age" in person);  //false



//mix question
class Student {}

let user1 = {
    name: "Azeem"
};

let arr = [1,2,3];

let std = new Student();

console.log(user1 instanceof Object); //true
console.log(arr instanceof Array);   //true
console.log(arr instanceof Object);  //true
console.log(std instanceof Student);  //true
console.log("name" in user1);   //true
console.log("city" in user1);   //false

let marks1 = null;

console.log(marks1 ?? "No Marks");  //No Marks

let city = user1.address?.city;

console.log(city); //undefined



//another question
let n = 5;
let m = "5";

console.log(n == m);  //true
console.log(n === m); //false

console.log(true && false || true); //true

let obj = {
    name: "Abdul"
};

console.log(obj.city?.name); //undefined

console.log(null ?? "Hello");  //Hello
console.log(undefined ?? "World"); //World
console.log(0 ?? 100); //0

let nums = [1,2];

let copy = [...nums];

copy.push(3);

console.log(nums); //[1,2]
console.log(copy); //[1,2,3]