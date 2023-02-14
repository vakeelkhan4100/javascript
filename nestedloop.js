// for (let i = 5; i >= 1; i--) {
//   let ans = "";
//   for (let j = 1; j <= i; j++) {
//     ans = ans + 5;
//   }
//   document.write(ans, "<br>");
// }
// for (let i = 1; i <= 5; i++) {
//   let ans = "";
//   for (let j = 1; j <= i; j++) {
//     ans = ans + 5;
//   }
//   document.write(ans, "<br>");
// }

// part 1
// for (let i = 1; i <= 5; i++) {
//   for (let j = 6 - i; j >= 1; j--) {
//     document.write(j);
//   }
//   document.write("<br>");
// }
/*
54321
4321
321
21
1
*/

// part 2
// for (let i = 1; i <= 5; i++) {
//   for (let j = 5; j >= i; j--) {
//     document.write(j);
//   }
//   document.write("<br>");
// }

/*
54321;
5432;
543;
54;
5;
*/

// part 3
// for (let i = 5; i >= 1; i--) {
//   let str = " ";
//   for (let j = 1; j <= i; j++) {
//     str = str + "*";
//   }
//   document.write(str);
//   document.write("<br>");
// }

// for (let i = 1; i <= 5; i++) {
//   let str = " ";
//   for (let j = 1; j <= i; j++) {
//     str = str + "*";
//   }
//   document.write(str);
//   document.write("<br>");
// }
// 12345;
// 1234;
// 123;
// 12;
// 1;

//
// for (let i = 1; i <= 5; i++) {
//   let str = " ";
//   for (let j = 1; j <= i; j++) {
//     str = str + "*";
//   }
//   document.write(str);
//   document.write("<br>");
// }
/*
 *
 **
 ***
 ****
 *****
 */

// for (let i = 5; i >= 1; i--) {
//   let str = " ";
//   for (let j = 1; j <= i; j++) {
//     str = str + "*";
//   }
//   document.write(str);
//   document.write("<br>");
// }

/*
 *****
 ****
 ***
 **
 *
 
 */

//
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     document.write("$");
//   }
//   document.write("<br>");
// }

// $$$$$;
// $$$$$;
// $$$$$;
// $$$$$;
// $$$$$;

// for (let p = 1; p <= 10; p++) {
//   for (let q = 11 - p; q >= 1; q--) {
//     document.write(q);
//   }
//   document.write("<br>");
// }
// 10987654321;
// 987654321;
// 87654321;
// 7654321;
// 654321;
// 54321;
// 4321;
// 321;
// 21;
// 1;

//
// for (let x = 1; x <= 5; x++) {
//   for (let y = 1; y <= x; y++) {
//     document.write("*");
//   }
//   document.write("<br>");
// }
// for (let k = 5; k >= 1; k--) {
//   for (let l = 1; l <= k; l++) {
//     document.write("*");
//   }
//   document.write("<br>");
// }

// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *

// let a = prompt("what is your name");
// let b = prompt("what is your age");
// let c = prompt("what? address");
// let d = prompt("what? number");
// console.log(`name: ${a}
//  age:${b}
//  address:${c}
//  number:${d}`);
let a = prompt("what is your name");
let b = prompt("what is your birth year");
let c = prompt("do you have many sister and brothers");
let d = Number(prompt("enter your  marks of hindi subject in 10th class "));
let e = Number(prompt("enter your  marks of science subject in 10th class "));
let f = Number(prompt("enter your  marks of math subject in 10th class "));
let currentBirth = 2023 - b;
console.log(`my name is ${a}.
I was born in ${b} and my current age ${currentBirth}. 
I have ${c} brother and sister .My total marks in 10th class were${d + e + f}
`);
