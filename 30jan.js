// let a = 10;
// let b = 20;
// let c = 30;
// if (!(!b < c)) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

// let a = 10;
// let b = 20;
// let c = 30;
// if (!b < !c) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

// if (!0) {
//   console.log("Truthy");
// } else {
//   console.log("Falsy");
// }

// let a = 10;
// let b = 20;
// let c = 30;
// if (!(b < c)) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

// let a = 0;
// let b = 20;
// if ((b = a)) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

// 3 * (2 * 3 + 12 * 10);

// let answer = confirm("Are you ready to play the game?");
// if (answer) {
//   console.log("Let's start the game");
// } else {
//   console.log("Sorry, please visit again.");
// }

// let year = Number(prompt("What is your dob year?"));
// if (year) {
//   let date = new Date();
//   alert("Your current age is " + (date.getFullYear() - year));
// }

// console.log(10 + 20 + "30" + 40 + 20 + 10);

// let ans = Number(false); Boolean to Number
// console.log(ans);

// Number("10");  String to Number

// let ans = String(10); //Number to String
// console.log(ans);

// let a = +"10"; //String to Number
// console.log(a);

// let value = Number(prompt("Your question")); //Prompt to Number
// console.log(value);

// let year1 = Number(prompt("what is your date of birth"));
// let date1 = new Date();
// alert("your current age is " + (date1.getFullYear() - year1));

let game = confirm("are you ready to play the game ");
let age = prompt("enter your age");
if (age > 21) {
  alert("let's play game");
} else {
  alert("you are not adult");
}
