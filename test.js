// Question 1 (Marks:20)
// Create Bill Calculator
// Ask below Questions
// How many french fries (60rs per piece) do you want to order ?
// How many burgers (50rs per piece) do you want to order ?
// How many plates of chowmin (100rs per plate) do you want to order?
// How many plates of Manchurian (80rs per plate) do you want to order?
// How many Cokes (50 per piece) do you want to order ?
// Use can enter any number of quantities. Calculate the bill based on the quantities entered and item prices. If user enteres 0 or negative value then consider item count as 0.
// let sum = +"";
// let a = Number(
//   prompt("How many french fries (60rs per piece) do you want to order ?")
// );
// let b = Number(
//   prompt(" How many burgers (50rs per piece) do you want to order ?")
// );

// let c = Number(
//   prompt("How many plates of chowmin (100rs per plate) do you want to order?")
// );
// let d = Number(
//   prompt(
//     " How many plates of Manchurian (80rs per plate) do you want to order?"
//   )
// );

// let e = Number(prompt("How many Cokes (50 per piece) do you want to order ?"));
// if ((a, b, c, d, e)) {
//   sum += a * 60;
//   sum += b * 50;
//   sum += c * 100;
//   sum += d * 80;
//   sum += e * 50;
//   console.log(sum);
// }

// Question 2 (Marks:10)
// Print below Pattern
// $##$##$
// $##$##
// $##$
// $##
// $

// for (let i = 5; i >= 1; i--) {
//   for (let j = 1; j <= i; j++) {
//     document.write("$");
//   }
//   document.write("<br>");
// }

// Ask the user question "How many times do you want to print Series". Then print below series. For example below series will print if user enteres 5
// 2, 6, 30, 260, 3130 Find the pattern for above series and print accordingly. If the user enters 10 then we will print the same series numbers till 10 times.
// let ask = Number(prompt("How many times do you want to print Series"));
// if (ask) {
//   for (let i = 2; i <= 10; i++) {
//     console.log(i + i);
//     o++;
//   }
// }

// Question 4 (Marks:15)
// Using a switch case to do this exercise

// If number is odd then print Odd
// If number is even then print Even
// If number is 100 then print 100
// Else print 10000
// let i = 80;
// switch (i) {
//   case 100:
//     console.log("100");
//     break;
//   case i:
//     if (i % 2 === 1) {
//       console.log("odd");
//     } else if (i % 2 === 0) {
//       console.log("even");
//     }
//     break;
//   default:
//     console.log("1000");
// }

// Question 7 (Marks:5)
// Write a JavaScript program to check from two given integers, whether one is positive and another one is negative.
// If yes then print sum of both the numbers Else print multiplication of both numbers

// Question 10 (Marks:5)
// Take a String and check its length. If string length is greater than 10 then print from 1 to length of the string. else print No
// let str = "helllooll00";
// let a = [...str];
// if (a.length > 10) {
//   console.log(a.slice(1));
// } else {
//   console.log("no");
// }

// 5
// Ask user his/her birth year, "What is your birth year?"
// If user age is greater than 18 then ask user "Do you have valid license number?" If user click on Okay then ask for his license number and finally in the alert show message "User with license number #### is ready to drive."
// If user age is less than 18 then ask him question in confirm box "Do you have gaurdians ?"" If user says yes then ask his/her Gaurdian name and then in alert show "You are ready to drive with your #### (show gaurdian name here.)" Else show "Sorry visit again please." in alert box
let ask = Number(prompt("What is your birth year?"));
let age = 2023 - ask;
if (age > 18) {
  let que = confirm("Do you have valid license number?");
  if (que) {
    let que1 = Number(prompt("what is your license number?"));
    alert(`User with license number ${que1} is ready to drive.`);
  }
}
if (age < 18) {
  let hello = confirm("Do you have gaurdians ?");
  if (hello) {
    let que1 = prompt("what is your gaurdians ?");
    alert(`You are ready to drive with your ${que1}`);
  } else {
    alert("Sorry visit again please.");
  }
}
