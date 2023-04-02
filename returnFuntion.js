// 1. function oddEven(num) yadi number odd hai to Odd word return kro otherwise Even word return kro
// function oddEven(num) {
//   if (num % 2 === 0) {
//     return "even";
//   } else {
//     return "odd";
//   }
// }
// let ans = oddEven(9);
// console.log(ans);

// 2. function max(arr) max number find krke return krna hai
// function findMax(arr) {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
// let ans = findMax([1, 20, 3, 8, 5, 60]);
// console.log(ans);

// 3. function min(arr) min number find krke return krna hai
// function findMin(arr) {
//   let min = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//   }
//   return min;
// }
// let ans = findMin([20, 3, 8, 5, 60, 2]);
// console.log(ans);

// 4. function minAndMax(arr) min and max number find krke dono ko plus krke return krna hai
// function MinAddMax(arr) {
//   let min = arr[0];
//   let max = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return min + max;
// }
// let ans = MinAddMax([20, 3, 8, 5, 50, 1]);
// console.log(ans);

// 6. function reverseString(str) function ko ek string pass krni hai. is string ko reverse krke return krna hai
// function reverseString(str) {
//   let str1 = str.split(" ");
//   let reverse = str1.reverse();
//   return reverse;
// }
// let ans = reverseString("My name is Wecode");
// console.log(ans);

// 7. function maskMobile(mobileNumber, start, end, char, total)
function maskMobile(mobileNumber, start, end, char, total) {
  if (start) {
    let str;
    str = mobileNumber.toString().slice(5);
    str = str.padStart(str.length + total, char);
  } else if (end) {
    str = mobileNumber.toString().slice(0, total);
    str = str.padEnd(str.length + total, char);
  } else {
    str = mobileNumber.toString();
  }
  return str;
}
let ans = maskMobile(6375164100, false, true, "*", 6);
console.log(ans);

// panding he toda bahut ..............

// 8. Replace all words in a string
