// Question 1.
// const french = Number(
//   prompt("How many french fries (60rs per piece) do you want to order ?")
// );
// const burgers = Number(
//   prompt("How many burgers (50rs per piece) do you want to order ?")
// );
// const chowmin = Number(
//   prompt("How many plates of chowmin (100rs per plate) do you want to order?")
// );
// const Manchurian = Number(
//   prompt("How many plates of Manchurian (80rs per plate) do you want to order?")
// );
// const Cokes = Number(
//   prompt("How many Cokes (50 per piece) do you want to order ?")
// );
// let sum = +"";
// if (french > 0) {
//   sum = sum + french * 60;
// }
// if (burgers > 0) {
//   sum = sum + burgers * 50;
// }
// if (chowmin > 0) {
//   sum = sum + chowmin * 100;
// }
// if (Manchurian > 0) {
//   sum = sum + Manchurian * 80;
// }
// if (Cokes > 0) {
//   sum = sum + Cokes * 50;
// }
// alert(sum);

// Question 2.
// for (let i = 5; i >= 1; i--) {
//   for (let j = 1; j <= i; j++) {
//     if (j === 2 || j === 4) {
//       document.write("#");
//     } else {
//       document.write("$$");
//     }
//   }
//   document.write("<br>");
// }

//  Question 3.
// 1 2 3 5 8 13 21 34 55 Find the pattern for above series and print accordingly. If the user enters 10 then we will print the same series numbers till 10 times.
// let ask = Number(prompt("How many times do you want to print Series."));
// let num = +"";
// for (let i = 1; i <= ask; i) {
//   num = num + i;
//   console.log(num - 2);
// }

// Question 4.
// let user = prompt("Do you drink tea/coffee ?");
// switch (user) {
//   case "tea":
//     console.log("tea");
//     break;
//   case "coffee":
//     console.log("coffee");
//     break;
//   default:
//     console.log("water");
//     break;
// }

// Question 5.
// let user = Number(prompt("What is your age?"));
// let age = 2023 - user;
// if (age > 18 && age < 50) {
//   let que1 = confirm("Would you like to have a coffee?");
//   if (que1) {
//     let que2 = prompt("What type of coffee you want to have?");
//     alert(`Hello Sir/Mam, here is your ${que2} coffee `);
//   } else {
//     alert("Sorry visit again please.");
//   }
// } else {
//   let user = confirm("Would you like to have tea?");
//   if (user) {
//     let que1 = prompt("What type of tea do you want?");
//     alert(`Hello Sir/Mam, here is your ${que1} tea.`);
//   } else {
//     alert("Sorry visit again please.");
//   }
// }

// Question 6.
// sum = "";
// let num1 = 39;
// let num2 = 0;
// let diff = num1 - num2;
// if (diff > 40) {
//   sum += diff * -1 * 2;
// } else {
//   sum += diff * -1 * 3;
// }
// console.log(sum);

// Question 7.
// let num1 = 9;
// let num2 = 19;
// if ((num1 > 18 && num2 < 10) || (num2 > 18 && num1 < 10)) {
//   console.log(num1 + num2);
// } else {
//   console.log(num1 * num2);
// }

// 8.
// Write a JavaScript program to check if out of 5 numbers any two numbers are same or not. If yes then print Yes else print No.
// let num1 = 20;
// let num2 = 30;
// let num3 = 40;
// let num4 = 50;
// let num5 = 20;
// if (
//   num1 === num2 ||
//   num1 === num3 ||
//   num1 === num4 ||
//   num1 === num5 ||
//   num2 === num3 ||
//   num2 === num4 ||
//   num2 === num5 ||
//   num3 === num4 ||
//   num3 === num5 ||
//   num4 === num5
// ) {
//   console.log("yes");
// } else {
//   console.log("no");
// }

// 9. Write a program to check if a number is divisible by 10 && 20 or not. If yes then multiply the number by 51 else multiply the number by 59 and print.
// let num = 4;
// if (10 % num === 0 && 20 % num === 0) {
//   console.log(num * 51);
// } else {
//   console.log(num * 59);
// }

// 10.
// Take a String and check its length. If string length is greater than 15 then print 2's table till the length of the string else print No
// let str = "vakeel khan deshwali";
// if (str.length > 15) {
//   for (let i = 1; i < str.length; i++) {
//     console.log(i * 2);
//   }
// } else {
//   console.log("string is less then 15");
// }

// 1. Take any String with some space before and after. Store string length. Now do below exercises:
//     a. remove space from both end and print new length of the returned string
//     b. remove space from start and then print new string length
//     c. remove space from end then print new string length
// 2. Take any string in lowercase. Now using toUppercase function check if uppercase of the string is equal to uppercase of function or not
// 3. Introduction about your self. Use concat function
// 4. Take a big string and split it using below characters/string
//     a. " "   console.log(ans.length);
//     b. ","
//     c. "is"
//     d. "a"

// 1.
// let str = "   wecode ";
// let ans = str.length;
// // a
// let removespace = str.trim();
// console.log(removespace.length);

// //b
// let removespace1 = str.trimStart();
// console.log(removespace1.length);

// // c
// let removespace2 = str.trimEnd();
// console.log(removespace2.length);

// // 2.
// let str1 = "deshwali";
// let ans1 = str1.toUpperCase();
// if (ans1 === "DESHWALI") {
//   console.log("yes");
// } else {
//   console.log("no");
// }

// //3.
// let str2 = "my name, is vakeel, khan mai";
// console.log(str2.length);
// let space = str2.split(" ");
// console.log(space, space.length);
// let coma = str2.split(",");
// console.log(coma, coma.length);

// let is = str2.split("is");
// console.log(is, is.length);

// let a = str2.split("a");
// console.log(a, a.length);

// for (let i = 5; i >= 1; i--) {
//   console.log("ha".repeat(i));
// }

// for (let i = 6; i >= 1; i--) {
//   console.log("$$".repeat(i).concat("##".repeat(i)));
// }

// let num1 = "637516";
// let num2 = "637516";
// console.log(num1.padStart(10, "*"));
// console.log(num2.padEnd(10, "*"));
 
let print = prompt("what do you print ?"
);
let time = +prompt("how many time do you want to print? ");
// let frequency = +prompt("what is the frequency?");
// let clear = setInterval(function () {
//   console.log(print);
// }, frequency * 1000);
// setTimeout(function () {
//   clearInterval(clear);
// }, time * frequency * 1000);
console.log(`my name is ${print} khan.
i will study today ${time} pm`);
console.log("my" + "nmae" + "is" + print + "khan");
