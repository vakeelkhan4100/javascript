# Question 1 (Marks:20)

- Create Bill Calculator
- Ask below Questions
- How many french fries (60rs per piece) do you want to order ?
- How many burgers (50rs per piece) do you want to order ?
- How many plates of chowmin (100rs per plate) do you want to order?
- How many plates of Manchurian (80rs per plate) do you want to order?
- How many Cokes (50 per piece) do you want to order ?
- Use can enter any number of quantities. Calculate the bill based on the quantities entered and item prices. If user enteres 0 or negative value then consider item count as 0.

```
 let sum = +"";
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
// // console.log(` ${a * 60}${b * 50}${c * 100}${d * 80}${e * 50}`);
// if (a >= 0 || b >= 0 || c >= 0 || d >= 0 || e >= 0) {
//   sum += a * 60;
//   sum += b * 50;
//   sum += c * 100;
//   sum += d * 80;
//   sum += e * 50;
// }
```

}

# Question 4 (Marks:15)

- Using a switch case to do this exercise
- If number is odd then print Odd
- If number is even then print Even
- If number is 100 then print 100
- Else print 10000

```
let num = 100;
switch (num % 2 == 0) {
   case true:
     console.log("even");
     break;
   case false:
     console.log("odd");
     break;
   case 100:
     console.log("100");
     break;

   default:
     console.log("10000");
     break;
 }
```

// Question 7 (Marks:5)
// Write a JavaScript program to check from two given integers, whether one is positive and another one is negative.
// If yes then print sum of both the numbers Else print multiplication of both numbers

# 5

- Ask user his/her birth year, "What is your birth year?"
- If user age is greater than 18 then ask user "Do you have valid license number?" If user click on Okay then ask for his license number and finally in the alert show message "User with license number #### is ready to drive."
- If user age is less than 18 then ask him question in confirm box "Do you have gaurdians ?"" If user says yes then ask his/her Gaurdian name and then in alert show "You are ready to drive with your #### (show gaurdian name here.)" Else show "Sorry visit again please." in alert box

```
 let ask = Number(prompt("What is your birth year?"));
 let age = 2023 - ask;
 if (age > 18) {
 let que = confirm("Do you have valid license number?");
 if (que) {
 let que1 = Number(prompt("what is your license number?"));
 alert(`User with license number ${que1} is ready to drive.`);
 }
 } else if (age < 18) {
 let hello = confirm("Do you have gaurdians ?");
 if (hello) {
 let que1 = prompt("what is your gaurdians ?");
 alert(`You are ready to drive with your ${que1}`);
 } else {
 alert("Sorry visit again please.");
 }
 }
```

# Question 10 (Marks:5)

- Take a String and check its length. If string length is greater than 10 then print from 1 to length of the string. else print No

```
 let str = "helllooll00";
 if (str.length > 10) {
   for(let i = 1 <=str.lenght; i++){
    console.log(str)
}
  console.log("no");
  }

```

# 6

let num = 19;
let num1 = 40;
let num2 = num1 - num;
if (num < num2) {
console.log(num2 _ 3);
} else {
console.log(num2 _ 2);
}

# Question 8 (Marks:10)

- Write a JavaScript program to check if out of 4 numbers any two numbers are same or not. If yes then print Yes else print No
- let a = 1;
- let b = 5;
- let c = 3;
- let d = 5;

```
 if (
   a === b ||
   a === c ||
   a === d ||
   b === c ||
   b === d ||
   b === a ||
   c === d ||
   c === a ||
   c === b
 ) {
   console.log("yes");
 } else {
   console.log("no");
 }
```
