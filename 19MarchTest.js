// Question 1
// Write a JavaScript program to check whether a string "Code" presents at 5th (index 4) position in a given string, if "Code" presents in the string return the string without "Code" otherwise return the original one.
// let str = "i write the a code in javascript";
// let split = str.split(" ");
// let flag = false;
// for (let i = 0; i <= split.length - 1; i++) {
//   if (split[4] === "code") {
//     flag = true;
//   } else {
//     flag = false;
//   }
// }
// if (flag) {
//   let first = split.slice(0, 4);
//   let second = split.slice(5);
//   console.log([...first, ...second]);
// } else {
//   console.log(str);
// }

// Question 2
// Write a JavaScript program to capitalize the first letter of each word of a given string.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox'

// let str = "the quick brown fox";
// let split = str.split(" ");
// let ans = split.reduce(capitalize, " ");
// console.log(ans);
// function capitalize(total, val1) {
//   let first = val1.slice(0, 1).toUpperCase();
//   let second = val1.slice(1).toLowerCase();
//   return total + " " + first + second;
// }

// Question 3
// Write a JavaScript program to check whether all the digits in a given number are the same or not.
// let arr = [1, 2, 3, 4, 5, 6, 7];
// let ans = arr.every(same);
// console.log(ans);
// function same(val) {
//   return val === 1;
// }

// Question 4
// Write a JavaScript function that reverse a number.
// let arr = [1, 2, 3, 4, 5, 6, 7];
// let newArr = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//   newArr.push(arr[i]);
// }
// console.log(newArr);

//  7. Write a JavaScript function to find a word within a string. Test Data :
// console.log(search_word('The quick brown fox', 'fox'));
// console.log(search_word('aa, bb, cc, dd, aa', 'aa'));
// Output :
// "'fox' was found 1 times."
// "'aa' was found 2 times."

// let str = "aa bb cc dd aa";
// let split = str.split(" ");
// function findValue(val, find) {
//   let count = 0;
//   for (let i = 0; i <= val.length - 1; i++) {
//     if (val[i] === find) {
//       count++;
//     }
//   }
//   return count;
// }
// let ans = findValue(split, "aa");
// console.log(ans);

// Question 8
// Create an array of numbers. Now filter out all the numbers from the array where number is in between 30-50. After filtering the numbers, add 20 to each number and finally print the sum of all numbers using reduce function.
// let arr = [20, 30, 35, 40, 45, 50, 60];
// function array(val) {
//   return val > 30 && val < 50;
// }
// let ans = arr.filter(array);
// console.log(ans);
// function multi(val) {
//   return val + 20;
// }
// let add = ans.map(multi);
// console.log(add);

// function same(answer, val) {
//   return answer + val;
// }
// let sum = add.reduce(same, 0);
// console.log(sum);

// Question 9
// Convert below array
// [[1,2], [3,4], [5,6], [7,8], [9,10]]
// to
// [3,7,11,15,19]
// let arr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
//   [7, 8],
//   [9, 10],
// ];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   let first = arr[i][0] + arr[i][1];
//   newArr.push(first);
// }
// console.log(newArr);

// Question 5
// Write a JavaScript function to extract unique characters from a string.
// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"

// let str = "thequickbrownfoxjumpsoverthelazydog";
// let split = str.split("");
// let newChar = "";
// split.forEach((value) => {
//   if (!newChar.includes(value)) {
//     newChar += value;
//   }
// });
// console.log(newChar);

// Write a JavaScript function to chop a string into chunks of a given length. Test Data :
// console.log(string_chop('w3resource'));
// console.log(string_chop('w3resource',2));
// console.log(string_chop('w3resource',3));
// ["w3resource"][("w3", "re", "so", "ur", "ce")][("w3r", "eso", "urc", "e")];
// let arr = ["w3resource"];
// console.log(arr);

// function chop(arr, num) {
//   let newArr = [];
//   for (let i of arr) {
//     let first = i.slice(0, num);
//     newArr.push(i);
//   }
//   return newArr;
// }
// let ans = chop(arr.toString(), 2);
// console.log(ans);

// for (let i = 1; i <= 5; i++) {
//   for (let j = i; j < 6; j++) {
//     document.write(j + " ");
//   }

//   document.write(+"<br>");
// }

// for (let i = 1; i <= 5; i++) {
//   let x = "";
//   for (let j = i; j <= 5; j++) {
//     x += j + " ";
//   }
//   for (let k = 1; k < i; k++) {
//     x = " " + x;
//   }
//   console.log(x);
// }

// for (let i = 1; i <= 5; i++) {
//   let str = "";
//   for (let j = 1; j <= i - 1; j++) {
//     str += " ";
//   }
//   for (let l = i; l <= 5; l++) {
//     str += l + " ";
//   }
//   console.log(str);
// }

// function stringChop(str, len) {
//   let x = [];

//   for (let i = 0; i < str.length; i += len) {
//     x.push(str.substr(i, len));
//   }

//   return x;
// }
// console.log(stringChop("w3resource", 1));
// console.log(stringChop("w3resource", 2));
// console.log(stringChop("w3resource", 3));
