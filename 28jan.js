// //question 1 Convert all solutions into ternary operator

// //1:)
let percentage = 70;
percentage > 60 ? console.log("pass") : console.log("fail");

// //2:)
let even = 10;
let even1 = 20;
even % 2 === 0 && even1 % 2 === 0 ? console.log("even") : console.log("odd");

// //3:)
let odd = 31;
odd % 2 === 1 ? console.log("yes") : console.log("no");

// //4:)
let number = 30;
if (number % 10 === 0 && number % 5 === 0) {
  console.log("right");
} else {
  console.log("wrong");
}

// //5:)
let number2 = 5;
number2 * 20 === 100 ? console.log("yes--") : console.log("no");

// //6:)
let age = 19;
age > 21 ? console.log("adult") : console.log("minor");

// //question  2. Marksheet Logic
let percentage2 = 81;
if (percentage2 >= 80) {
  console.log("Distinction");
} else if (percentage2 >= 60 && percentage2 < 80) {
  console.log("first division");
} else if (percentage2 >= 33 && percentage2 < 60) {
  console.log("second division");
} else if (percentage2 < 33) {
  console.log("fail");
}

// //question 3. Find max of 2 numbers
let num = 5;
let num1 = 7;
if (num > num1) {
  console.log("max number is 5");
} else if (num1 > num) {
  console.log("max number is 7");
}

//question 4. find max of 3 numbers
// part 1
let a = 10;
let b = 20;
let c = 30;
if (a > b && a > c) {
  console.log("max number ", a);
} else if (b > c && b > a) {
  console.log("max number ", b);
} else if (c > a && c > b) {
  console.log("max number ", c);
}

// part 2
let p = 20;
let q = 40;
let r = 20;
if (p > q && p > r) {
  console.log("max number is ", p);
} else if (q > p && q > r) {
  console.log("max number is ", q);
} else if (r > p && r > q) {
  console.log("max number is ", r);
} else if (p == q && q == r && r == p) {
  console.log("all numbers are equal");
} else if (p === q) {
  console.log("p q numbers are equal");
} else if (q === r) {
  console.log("q r numbers are equal");
} else if (p === r) {
  console.log("p r numbers are equal");
}

// part 3
let A = 30;
let B = 20;
let C = 30;
let max = A;
if (B > max) {
  max = B;
} else if (C > max) {
  max = C;
}
console.log(max);
