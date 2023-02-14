// For Loop Exercise

// 1. Print 1 to 100
// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }

// 2. Print all Odd numbers from 1 to 100
// for (let j = 1; j <= 100; j++) {
//   if (j % 2 === 1) {
//     console.log(j);
//   }
// }

// 3. Print all Even numbers from 1 to 100
// for (let w = 1; w <= 100; w++) {
//   if (w % 2 === 0) {
//     console.log(w);
//   }
// }

// 4.Print all numbers which are multiple of 5 in 1 to 100
// for (let r = 1; r <= 100; r++) {
//   if (r % 5 === 0) {
//     console.log(r);
//   }
// }

// 5.Print all numbers which are multiple of 5 and 15 in 1 to 100
// for (let r = 1; r <= 100; r++) {
//   if (r % 5 === 0 && r % 15 === 0) {
//     console.log(r);
//   }
// }

// 6.Print 2's table
// for (let i = 1; i <= 10; i++) {
//   console.log(i * 2);
// }

// 7. Ask user a question "How many times do you want to print Hello World?" and then print Hello World that number of times
// let a = Number(prompt("How many times do you want to print Hello World?"));
// if (a) {
//   for (let h = 1; h <= a; h++) {
//     console.log(h, "hellow word ");
//   }
// }

// 8.Calculate sum of all numbers from 1 to 100
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   sum = sum + i;
//   console.log(i, sum);
// }

// 9. Calculate sum of all odd numbers from 1 to 100
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 1) {
//     sum = sum + i;
//   }
//   console.log(i, sum);
// }

// 10. Calculate sum of all even numbers from 1 to 100
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     sum = sum + i;
//   }
//   console.log(i, sum);
// }

// 11.print 1,2,4,8,16,32,64.......upto 2048
// for (let l = 1; l <= 2048; l = l * 2) {
//   console.log(l);
// }

// 12. print

// part 1
// for (let f = 1; f <= 100; f++) {
//   if (
//     f === 11 ||
//     f === 21 ||
//     f === 31 ||
//     f === 41 ||
//     f === 51 ||
//     f === 61 ||
//     f === 71 ||
//     f === 81 ||
//     f === 91
//   ) {
//     document.write("<br>");
//   }
//   document.write(f, ",");
// }
// part 2
// for (let i = 1; i <= 100; i++) {
//   document.write(i);
//   if (i % 10 === 0) {
//     document.write("<br>");
//   }
// }

// 13.pritn 1 to 100, but with a specific condition. If a number is divisible by both 3 and 5, it logs "fizzbuzz" to the console instead of the number itself.

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("fizzbuzz");
//   } else {
//     console.log(i);
//   }
// }

// 14.print 10 table like this
// for (let i = 1; i <= 10; i++) {
//   console.log(2 + "*" + i + "=" + i);
// }

// 15.Run a loop from 1 to 50
// for (let i = 1; i <= 50; i++) {
//   if (i <= 10) {
//     console.log("A", i);
//   } else if (i <= 20) {
//     console.log("B", i);
//   } else if (i <= 30) {
//     console.log("C", i);
//   } else if (i <= 40) {
//     console.log("D", i);
//   } else if (i <= 50) {
//     console.log("E", i);
//   }
// }

// 16.Run a loop from 50 to 1

// for (let i = 50; i >= 1; i--) {
//   if (i > 40) {
//     console.log("A", i);
//   } else if (i > 30) {
//     console.log("B", i);
//   } else if (i >= 20) {
//     console.log("C", i);
//   } else if (i >= 10) {
//     console.log("D", i);
//   } else if (i >= 1) {
//     console.log("E", i);
//   }
// }

// 17 .Print below series 5 25 125.. till number is less than equal to 10000
// for (let p = 5; p <= 10000; p = p * 5) {
//   console.log(p);
// }

// 18.Print below series 3,6,9,12... till number is less than equal to 500
// for (let y = 3; y <= 500; y++) {
//   console.log(y);
//   ++y;
//   ++y;
// }

// 19. print below seriest
/*
 120
221
322
423
524
625
726
827
928
1029*/
// for (let i = 1, j = 20; i <= 10, j <= 29; i++, j++) {
//   console.log(i + "" + j);
//   document.write(i + "" + j + "<br>");
// }

// 20.print below series 100 95 90 85 80 ... till 0
// for (let n = 100; n >= 0; n = n - 5) {
//   console.log(n);
// }

// 21.Number 70 is divisible by which numbers till 70? Find out and print those numbers
// for (let h = 1; h <= 70; h++) {
//   if (70 % h === 0) {
//     console.log(h);
//   }
// }

// for (let a = 1; a <= 5; a++) {
//   document.write("<br>");
//   for (let b = 5; b >= a; b--) {
//     document.write(b);
//   }
// }

// for (let a = 1; a <= 5; a++) {
//   document.write("<br>");
//   for (let b = 1; b <= 5; b++) {
//     document.write(b);
//   }
// }

// for (let a = 1, b = 1; a <= 8, a <= 8; a++, b++) {
//   document.write("*" + " " + "*");
//   document.write("<br>");
// }
