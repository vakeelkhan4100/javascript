// Question 1
// Create Bill Calculator
// Ask below Questions
// How many french fries (60rs per piece) do you want to order ?
// How many burgers (50rs per piece) do you want to order ?
// How many plates of chowmin (100rs per plate) do you want to order?
// How many plates of Manchurian (80rs per plate) do you want to order?
// How many Cokes (50 per piece) do you want to order ?
// Use can enter any number of quantities. Calculate the bill based on the quantities entered and item prices. If user enteres 0 or negative value then consider item count as 0.

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

// Question 2
// Print below Pattern
// $##$##$
// $##$##
// $##$
// $##
// $
// for (let i = 5; i >= 1; i--) {
//   for (let j = 1; j <= i; j++) {
//     if (j % 2 === 0) {
//       document.write("##");
//     } else {
//       document.write("$");
//     }
//   }
//   document.write("<br>");
// }

// Question 3 (Marks:5)
// Ask the user question "How many times do you want to print Series". Then print below series. For example below series will print if user enteres 5
// 2, 6, 30, 260, 3130 Find the pattern for above series and print accordingly. If the user enters 10 then we will print the same series numbers till 10 times.
// let ask = +prompt("How many times do you want to print Series");
// for (let i = 1; i <= ask; i++) {
//   console.log(i ** i + i);
// }

// Question 4 (Marks:15)
// Using a switch case to do this exercise

// If number is odd then print Odd
// If number is even then print Even
// If number is 100 then print 100
// Else print 10000

// //  6
// let num = 19;
// let num1 = 40;
// let num2 = num1 - num;
// if (num < num2) {
//   console.log(num2 * 3);
// } else {
//   console.log(num2 * 2);
// }

//  8 (Marks:10)
// Write a JavaScript program to check if out of 4 numbers any two numbers are same or not. If yes then print Yes else print No
// let a = 1;
// let b = 5;
// let c = 3;
// let d = 5;
// if (
//   a === b ||
//   a === c ||
//   a === d ||
//   b === c ||
//   b === d ||
//   c === d ||
// ) {
//   console.log("yes");
// } else {
//   console.log("no");
// }

// 10 (Marks:5)
//  Take a String and check its length. If string length is greater than 10 then print from 1 to length of the string. else print No
// let str = "helllooll00";
// let strlen = str.length;
// console.log(strlen);
// if (strlen > 10) {
//   for (let i = 1; i <= strlen; i++) {
//     console.log(i);
//   }
// } else {
//   console.log("no");
// }
