//Creating Strings + Template Literals
let firstName = "Andul";
let lastName = "Azeem";
let age = 23;

console.log(`My name is ${firstName} ${lastName} and I am ${age} years old.`);

//Escape Characters
console.log("Hello\nWorld"); // \n for next line
console.log("JavaScript\tLanguage"); // \t for tab "javascript language"
console.log('He said "Hello"'); //\" \" for " "  he said "hello"
console.log("It's JavaScript"); // \` for `  it`s javascript
console.log("C:\\Users\\Azeem"); // \\ \\ for \ \ c:\users\azeem

//length + charAt + charCodeAt
let str = "JavaScript";

console.log(str.length); //10  calculate length
console.log(str.charAt(4)); //s give the character by its index
console.log(str.charCodeAt(4)); //83 because at index 4 is s and the ascii value of s is 83

//slice + substring + substr
let str1 = "JavaScript";

console.log(str1.slice(0, 4)); //Java = string ka part nikalke deta h 0 start 4 end but except 4
console.log(str1.slice(0, -6)); //Java = negative index bhi support krta h
console.log(str1.slice(5, 3)); //    = agr start end se bda h to empty string dega kyunki start end se bda h ye swap nhi krta

console.log(str1.substring(0, 4)); //Java = string ka part nikalke deta h 0 start 4 end but except 4
console.log(str1.substring(0, -6)); //    = negative index support nhi krta ese me empty dega kyunki ye -6 ko bhi 0 maan lega
console.log(str1.substring(3, 0)); //Jav = agr start end se bda hua to swap kr dega

console.log(str1.substr(0, 4)); //Java = sub string hi nikalke deta h ye bhi

console.log(str1.slice(-6)); //Script = -6 index in S to start s se end tk
console.log(str1.substring(-6)); //JavaScript = kyunki ye negative -6 ko 0 maan lega isliye 0 se end tk sari string print ho jaegi

//replace + replaceAll
let str2 = "I like Java. Java is easy. Java is powerful.";

console.log(str2.replace("Java", "JavaScript")); //ye sirf first occurence replace krega
//I like JavaScript. Java is easy. Java is powerful.
console.log(str2.replaceAll("Java", "JavaScript")); //ye puri string me jahan jahan bhi hoga sb jagah replace kr dega
//I like JavaScript. JavaScript is easy. JavaScript is powerful.

//split + join + concat
let str3 = "HTML,CSS,JavaScript";

let arr2 = str3.split(","); //string ko array me convert krta h

console.log(arr2); //["HTML", "CSS", "JavaScript"]

console.log(arr2.join(" | ")); //HTML | CSS | JavaScript = array ko string me convert krta h

let a1 = "Hello";
let b1 = "World";

console.log(a1.concat(" ", b1)); //Hello World = do strings ko apas me jodta h

//trim + trimStart + trimEnd
let str5 = "   JavaScript   ";

console.log(str5.length); //16 = spaces also count

console.log(str5.trim().length); //10 by .trim spaces of both side will be remove

console.log(str5.trimStart()); //JavaScript   = remove spaces but only starting side

console.log(str5.trimEnd()); //   JavaScript = remove spaces but only end side

//includes + startsWith + endsWith
let str6 = "JavaScript";

console.log(str6.includes("Script")); //true
console.log(str6.includes("script")); //false = case sensetive hota hai

console.log(str6.startsWith("Java")); //true = Java se starting hori h string ki
console.log(str6.startsWith("Script")); //false

console.log(str6.endsWith("Script")); //true = Script se ending hori h string ki
console.log(str6.endsWith("Java")); //false

//indexOf + lastIndexOf + toUpperCase + toLowerCase
let str7 = "Java JavaScript Java";

console.log(str7.indexOf("Java")); //0 starting match ka index bta dega
console.log(str7.lastIndexOf("Java")); //16 end se pehle match ka index bta dega
//agar word ma mile to -1 return hota h

console.log(str7.toUpperCase()); //JAVA JAVASCRIPT JAVA

console.log(str7.toLowerCase()); //java javascript java

//repeat + padStart + padEnd
console.log("Hi".repeat(3)); // HiHiHi = repeat us chz ko kitti baar repeat krna h

console.log("7".padStart(3, "0")); //007 = iska mtlb h ke 7 h usme pad start lgaoo or total length 3 hogi or starting me 0 jood do to ek sath h to do 00 or jod denge to 007

console.log("7".padEnd(3, "0")); //700 = end me jod denge

console.log("JS".padStart(6, "*")); //****js = start me 4 * 2 js hn total 6

console.log("JS".padEnd(6, "*")); //js**** = end me jod denge



//mix question
let str8 = "   JavaScript is Awesome   ";

console.log(str8.length); //27

let newStr = str8.trim();

console.log(newStr.length); //21

console.log(newStr.slice(0,10)); //JavaScipt

console.log(newStr.substring(11)); //is Awesome

console.log(newStr.includes("Awesome")); //true

console.log(newStr.startsWith("Java")); //true

console.log(newStr.endsWith("Awesome")); //true

console.log(newStr.replace("Awesome","Powerful")); //JavaScript is Powerful

console.log(newStr.split(" ")); //["JavaScipt", "is", "Awesome"]

console.log(newStr.toUpperCase()); //JAVASCRIPT IS AWESOME

console.log(newStr.padStart(25,"*")); //****JavaScript is Awesome

console.log(newStr.padEnd(25,"*")); //JavaScript is Awesome****



//question
//1. String ki length manually count karo (.length use nahi karna).
let strName = "JavaScript";
let count1 = 0;
for(ch of strName){
    count1++;
}
console.log(count1);



//2. String ko reverse karo.
let strName1 = "JavaScript";
let count  = 0;
for(ch of strName1){
    count++;
}
let newStr1 = "";
for(let i=count-1; i>=0; i--){
    newStr1 += strName1[i];
    
}
console.log(newStr1)



//3. Count karo kitni vowels hain.
let str0 = "i love javascript"
let ginti = 0;
for(ch of str0){
    if(ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u" || ch == "A" || ch == "E" || ch == "I" || ch == "O" || ch == "U" ){
        ginti++;
    }
}console.log(ginti)



//4. Check karo string palindrome hai ya nahi.
let palstr = "madam";
let totalchar  = 0;
for(ch of palstr){
    totalchar++;
}
let newStr2 = "";
for(let i=totalchar-1; i>=0; i--){
    newStr2 += palstr[i];
    
}
if(palstr == newStr2){
    console.log("palindrom")
}else{
    console.log("Not a palindrom")
}



//5. Har word ka first letter capital karo.
let myString = "my name is abdul azeem";
let result = "";
let capitalize = true;

for(ch of myString){
    if(capitalize && ch !== " "){
        result += ch.toUpperCase();
        capitalize = false;
    }else{
        result += ch;
    }
    if(ch === " "){
        capitalize = true;
    }
}
console.log(result);