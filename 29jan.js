// //Home Work
// let year = 2023;
// let person1 = 1992;
// let person2 = 1996;
// let person3 = 1985;
// // age nikalne ka formuola  = current year- birthyear
// // part 1
// let a = 2023 - 1992; //31
// let b = 2023 - 1971; //52
// let c = 2023 - 1996; //27
// let d = 2023 - 1965; //58

// console.log(a, b, c, d);
// let max = a;
// if (b > max) {
//   max = b;
// } else if (c > max) {
//   max = c;
// } else if (d > max) {
//   max = d;
// }
// console.log(max);

// //  part 2
// let A = 2023 - 1992; //31
// let B = 2023 - 1960; //52
// let C = 2023 - 1996; //27
// let D = 2023 - 1965; //58
// console.log(A, B, C, D);
// let max1 = A;
// if (B > max1) {
//   max1 = B;
// }
// if (C > max1) {
//   max1 = C;
// }
// if (D > max1) {
//   max1 = D;
// }
// console.log(max1);

let year = 2023;
let person1 = 1990;
let person2 = 1992;
let person3 = 1984;
let p1Age = year - person1;
let p2Age = year - person2;
let p3Age = year - person3;
let Big = p1Age;
if (p2Age > Big) {
  Big = p2Age;
}
if (p3Age > Big) {
  Big = p3Age;
}
console.log(Big);

let aslam = 2023 - 2002;
let vakeel = 2023 - 2004;
let farukh = 2023 - 1996;
console.log(aslam, vakeel, farukh);
let bigAge = aslam;
if (vakeel > bigAge) {
  bigAge = vakeel;
}
if (farukh > bigAge) {
  bigAge = farukh;
}
console.log(bigAge);
