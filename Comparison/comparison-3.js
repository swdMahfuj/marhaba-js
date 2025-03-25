const myMoney = 50;
const friendMoney = "50";
console.log(myMoney == friendMoney);
console.log(myMoney === friendMoney);

// cause both are string and same value
console.log("JavaScript" == 'JavaScript');
console.log("JavaScript" === 'JavaScript');

// cause '==' not check the data type. It just check the value. So, it shows true.
console.log(25 == "25");
// cause '===' check the data type and value. So, it shows false.
console.log(25 === "25");

console.log("apple" == "apple");
console.log("apple" === "apple");

console.log("test" == "TEST");
console.log("test" === "TEST");

const variableX = 15;
const variableY = "20";
console.log(variableX != variableY);
console.log(variableX !== variableY);

const variableA = hello;
const variableB = "Hello";
console.log(variableA == variableB);
console.log(variableA === variableB);