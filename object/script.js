// //Create + Access + Update + Delete (Object)
let student = {
    name: "Azeem",
    age: 20,
    city: "Delhi"
};
console.log(student.name);
console.log(student.age);
console.log(student.city);
student.city = "Meerut";
console.log(student.city);
delete student.age;
console.log(student);



// //Dot vs Bracket Notation
let person = {
    name: "Azeem",
    age: 20
};
console.log(person.name); //Azeem (by dot notation)
console.log(person["age"]); //20  (by bracket notation)

let key = "name";
console.log(person[key]) //Azeem 
console.log(person.key); //yahan js key naam ki property dhood rha h isliye undefined aara h



// //Nested Objects
let user = {
    name: "Abdul",
    address: {
        city: "Delhi",
        state: "UP"
    }
};
console.log(user.address.city); //Delhi
user.address.city = "Lucknow";
console.log(user.address.city); //Lucknow


// //Object.keys | values | entries
let obj = {
    a:10,
    b:20,
    c:30
};
console.log(Object.keys(obj)); //['a', 'b', 'c']

console.log(Object.values(obj)); //[10, 20, 30]

console.log(Object.entries(obj)); //[Array(2), Array(2), Array(2)]


// //freeze 
let person1 = {
    name:"Abdul",
    age:20
};

Object.freeze(person1); //obj ko completly lock kr deta h kch nhi kr skte na add na delete na update

person1.age = 25; //kch nhi hoga object freez h

person1.city = "Delhi"; //yahan bhi nhi hoga object freez h

delete person1.name; //delete bhi nhi hoga

console.log(person1); //same pura obj jo bnaya tha

// //seal
let person2 = {
    name:"Abdul",
    age:20
};
Object.seal(person2); //seal object ko seal kr deta h freez ke jese but freez me hm kch nhi kr skte isme bs existing properties ko update kr skte hn
person2.age = 25; //update ho jaega

person2.city = "Delhi"; //yahan add nhi hota seal me bs update kr skte hn
console.log(person2);


// //assign (object ko merge krta h)
let obj1 = {
    a:1,
    b:2
};

let obj2 = {
    b:20,
    c:30
};

let result = Object.assign({},obj1,obj2);
console.log(result);


// //hasOwnProperty (check krta h property exist krti h ya nhi)
let student0 = {
    name:"Abdul",
    age:20
};

console.log(student0.hasOwnProperty("name")); //ture

console.log(student0.hasOwnProperty("city")); //false


// //Destructuring
let person0 = {
    name:"Abdul",
    age:20,
    city:"Delhi"
};

let {name,age,city} = person0;

console.log(name); //Abdul

console.log(age); //20

console.log(city) //Delhi


// //Spread + Rest
let obj10 = {
    a:1,
    b:2
};

let obj20 = {
    ...obj1,  //spread ho rha h obj10 ki sari value yahan aari hn
    c:3
};
console.log(obj20);

let {a,...rest} = obj20; //yahan rest ka use hua destruction me a ki jagah a ki value aa gyi baaki sari value ...rest ki help se le aaye
console.log(a); //yahan bs a ki value 1
console.log(rest); //yahan baki sari value {b: 2  c: 3}


// //Final Mixed
let student00 = {
    name1:"Abdul",
    marks:90,
    address:{
        city:"Delhi"
    }
};

console.log(student00.name1); //Abdul

console.log(student00.address.city); //Delhi

student00.marks = 95; 

delete student00.address.city;

console.log(Object.keys(student00)); //[name , marks , address]

console.log(Object.values(student00)); //[Abdul , 95 , {..}]

console.log(student00.hasOwnProperty("marks")); //true

let {name1,marks} = student00;

console.log(name1); //Abdul

console.log(marks); //95



// //Object ke key-value pairs print karo using Object.entries().
let student001 = {
    name1:"Abdul",
    marks:90,
    address:{
        city:"Delhi"
    }
};
for(let [key1,value] of Object.entries(student001)){
    console.log(key1,value)
}