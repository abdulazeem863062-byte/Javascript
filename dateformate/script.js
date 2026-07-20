// //Current Date
let today = new Date();
console.log(today);  //current time and date
console.log(typeof today); //object

// //Current Date Methods
console.log(today.getFullYear()); //year
console.log(today.getMonth()); //month jan-0 se dec-11 tk
console.log(today.getDate()); //Date
console.log(today.getDay()); //current day number mon-1 se sun-7

// //Time Methods
let now = new Date();
console.log(now.getHours()); //hour
console.log(now.getMinutes()); //minute
console.log(now.getSeconds()); //seconds
console.log(now.getMilliseconds()); //milliseconds

// //Creating Date
let d1 = new Date("2025-12-25"); //custom date
let d2 = new Date(2025,11,25); //custom date
console.log(d1); //Thu Dec 25 2025 05:30:00 GMT+0530 (India Standard Time)
console.log(d2); //Thu Dec 25 2025 00:00:00 GMT+0530 (India Standard Time)

// //Formatting
let today1 = new Date();
console.log(today1.toLocaleDateString())
console.log(today1.toDateString())
console.log(today1.toLocaleDateString("en"))
let year = today1.getFullYear();
let month = today1.getMonth();
let date1 = today.getDate();
console.log(`${year}-${month}-${date1}`);


// //Timestamp
let now1 = Date.now(); //1 jan 1970 se ab tk kitni millisecond beet gyin vo batata h
console.log(now1); //hr millisecond update
console.log(typeof now1); //number

// //Date Difference
let start = new Date("2025-01-01");
let end = new Date("2025-01-10");
let diff = end-start //millisecond me difference bta dega dono ke beech
let diffindays = diff/(1000*60*60*24);
console.log(diffindays);

// //Set Methods
let date = new Date();
date.setFullYear(2030); //custom year set 
date.setMonth(0); //custom month set
date.setDate(1); //custom date set
console.log(date); //Tue Jan 01 2030 11:43:16 GMT+0530 (India Standard Time)
