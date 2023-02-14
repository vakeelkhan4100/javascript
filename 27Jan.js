//question 1
// let percentage = 70;
// if (percentage > 60) {
//   console.log("Pass");
// } else {
//   console.log("Fail");
// }

//question 2
// let evenNumber = 10;
// let oddNumber = 9;
// if (evenNumber % 2 == 0) {
//   console.log("even number", evenNumber);
// } else {
//   console.log("odd number", oddNumber);
// }

//question 3
// let a = 10;
// let b = 20;
// let c = 30;
// let d = 40;
// a = b; //a =20 ,b = 20 , c = 30 , d = 40
// b = c; // a =20 b = 30 , c =30  d = 40
// c = d; // a =20 b = 30  , c =40 d = 40
// d = a; // a 20 , b 30 , c 40 , d 20
// console.log("check output----", a, b, c, d);

//question 4

//question 5 ?
// let numberOne = 2 + 5 * 10 - 20 ** 2;
// console.log("------1: ", numberOne);

// let numberTwo = (20 / 5) * 10 + 10;
// console.log("------2: ", numberTwo);

// let numberThree = 10 && 20 + 10 * 10;
// console.log("------ ", 10 && 20 + 10 * 10);

// let numberFourth = 30 > 20 && 10 + 4 < 15;
// console.log("------4: ", numberFourth);

// let numberFive = (30 > 20 && 10 + 4 < 15) || 10;
// console.log("------5: ", numberFive);

// let numberSix = (30 > 20 && 10 + 4 < 15) || 10;
// console.log("------6: ", numberSix);

// let numberSeven = 30 < 20 || 10 + 5 < 15 || 10;
// console.log("------7: ", numberSeven);

let numberEight = 30 < 20 || (10 + 5 < 15 && 10);
console.log("------8: ", numberEight);
// question 6
let oddNumber = 15;
if (oddNumber) {
  console.log("yes");
} else {
  console.log("no");
}

// // question 7  ?
// let i = 2;
// if (i % 10 && 5) {
//   console.log("right");
// } else {
//   console.log("wrong");
// }
//part2
// let number = 30;
// if (number % 10 == 0 && number % 5 == 0) {
//   console.log("right");
// } else {
//   console.log("wrong");
// }

// //  question 8
// let q = 5;
// if (q * 20 == 100) {
//   console.log("---right");
// } else {
//   console.log("---wrong");
// }

// // question 9
// let marks = 750
// let totalmark = 1000
// let percentage = 750/1000*100
// console.log("percentage",percentage);
// let percentage = 75;
// if ( percentage > 70) {
//   console.log("pass");
// } else {
//   console.log("fail");
// }

// //question 10
// let age = 18;
// if (age > 21) {
//   console.log("adult");
// } else {
//   console.log("minor");
// }

// let sum = "apti";
// switch (sum) {
//   case "apti":
//   case "reasoning":
//   case "quant":
//   case "tringo":
//     console.log("mathematics");
//     break;
//   case "kavita":
//     console.log("hindi");
//     break;
//   case "poem":
//     console.log("english");
//     break;
//   case 1978:
//     console.log("history");
//     break;
//   default:
//     console.log(" science");
// }

// for (let i = 1; i <= 100; i++) {
//   if (i > 20 && i <= 70) {
//     continue;
//   }
//   if (i > 80) {
//     break;
//   } else {
//     console.log(i);
//   }
// }

let sum = "feb";
switch (sum) {
  case "jan":
  case "mar":
  case "may":
  case "jul":
  case "aug":
  case "oct":
  case "dec":
    console.log("31");
    break;
  case "apr":
  case "jun":
  case "sep":
  case "nov":
    console.log("30");
    break;
  case "feb":
    console.log("28");
  default:
    console.log(-1);
}
