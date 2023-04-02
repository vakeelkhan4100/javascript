// Object Questions

// 1 . What is an object in JavaScript?
/* object:-
           object ek datastructure hain. jiska use data store krane ke liye kiya jata hain.
           data store key or value ki form me huti he 
*/

//  2 . What is the difference between dot notation and bracket notation for accessing object properties?
//  3 . How do you loop through the properties of an object in JavaScript?

//  4 . What is the difference between an object and an array in JavaScript?

//  5 . Write a JavaScript function to convert an object into a list of `[key, value]` pairs.

//  6 . Write a function that takes an object representing a person and returns their full name.

//  7 . Create an Object with your personal details. Now print all the keys of the object in ascending order.

//  8 . Create an Object with your personal details. Now filter out all the values of the object and show them in descending order.

//  9 . Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

//  10 . Create a JavaScript function inside an object which finds max of 3 numbers. Now call this function of the object and print the maximum number.

// 3.How do you loop through the properties of an object in JavaScript?

// const obj = {
//   name: "vakeel",
//   mobile: 6375164100,
//   address: " karkwal",
// };
// let arr = Object.entries(obj);

// for (let i = 0; i <= arr.length - 1; i++) {
//   console.log(arr[i][0], arr[i][1]);
// }

//  5 . Write a JavaScript function to convert an object into a list of `[key, value]` pairs.

// let obj = {
//   name: "sameer",
//   mobile: 1234561234,
//   address: "merta city",
// };
// console.log(Object.entries(obj));

//  6 . Write a function that takes an object representing a person and returns their full name.

// let person = {
//   firstName: "xyz",
//   lastName: "xyz",
//   fatherName: "xyz",
//   address: "xyz",
// };
// console.log(
//   `my name is ${person.firstName} ${person.lastName}.and my father name is ${person.fatherName}.I am from ${person.address}`
// );

//  7 . Create an Object with your personal details. Now print all the keys of the object in ascending order.
// let personalDetails = {
//   name: "vakeel",
//   mobile: 6375164100,
//   fatherName: "saradeen khan",
//   village: "karkwal",
// };
// let key = Object.keys(personalDetails);
// console.log(key.sort());

//  8 . Create an Object with your personal details. Now filter out all the values of the object and show them in descending order.
// let personalDetails = {
//   name: "vakeel",
//   mobile: 6375164100,
//   fatherName: "saradeen khan",
//   village: "karkwal",
// };
// let key = Object.keys(personalDetails);
// let ans = key.sort(sorting);
// console.log(ans);
// function sorting(val1, val2) {
//   return val2.length - val1.length;
// }

//  9 . Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

//  10 . Create a JavaScript function inside an object which finds max of 3 numbers. Now call this function of the object and print the maximum number.
// const obj = {
//   function: function findsMax(arr) {
//     let max = Math.max(...arr);
//     console.log(max);
//   },
// };
// let cal = obj.function([1, 6, 3]);

// call obj

// let obj = {
//   name: "vakeel",
//   mobile: 6375164100,
//   address: "merta city",
//   printDeateal: function () {
//     console.log(
//       `my name is ${this.name},and my mobile number is ${this.moblee},i am from ${this.address}`
//     );
//   },
// };
// obj.printDeateal();

// call apply bind
// let student1 = {
//   name: "vakeel",
//   course: "nodejs",
//   Coursefees: 5000,
// };
// let student2 = {
//   name: "sameer",
//   course: "js",
//   Coursefees: 3000,
// };
// let printStudentDeateal = function (year, month, date) {
//   console.log(
//     `my name is ${this.name}, course ${this.course} and Coursefees ${this.Coursefees},date of birth `,
//     date + "/" + month + "/" + year
//   );
// };
// printStudentDeateal.call(student1, 2004, 01, 28);
// printStudentDeateal.apply(student1, [2004, 01, 28]);
// printStudentDeateal.bind(student1, 2004, 01, 28)();

// printStudentDeateal.call(student2, 2000, 02, 20);
// printStudentDeateal.apply(student2, [2000, 02, 20]);
// printStudentDeateal.bind(student2, 2000, 02, 20)();

// Que 29/03/2023
// 1.Write a function that uses the call method to print the name of an object.
// let obj = {
//   name: "vakeel",
// };
// let print = function () {
//   console.log(this.name);
// };
// print.call(obj);

// 2. Write a function that uses the apply method to find the minimum value in an array of numbers.
// let obj = {
//   arr: [8, 2, 3, 1, 5, 6],
// };
// let find = function () {
//   let arr = this.arr;
//   let min = arr[0];
//   for (let i = 0; i <= arr.length - 1; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//   }
//   return min;
// };
// let ans = find.apply(obj);
// console.log(ans);

// 3. Write a function that uses the bind method to create a new function that always has a specific "this" value.
// let obj = {
//   name: "vakeel",
//   mobile: 6375164100,
//   address: "merta city",
// };
// let create = function () {
//   console.log(this.name, this.mobile, this.address);
// };
// create.bind(obj)();

// 4.Write a function that uses the call method to add two numbers together.
// let obj = {
//   sum: function (num1, num2) {
//     return num1 + num2;
//   },
// };
// let print = function (a, b) {
//   console.log(this.sum(a, b));
// };
// print.call(obj, 5, 10);

// 5. Write a function that uses the apply method to concatenate two arrays.
// const obj = {
//   arr1: [1, 2, 3, 4, 5],
//   arr2: [6, 7, 8, 9, 10],
// };
// let concatenate = function () {
//   console.log(this.arr1.concat(this.arr2));
// };
// concatenate.apply(obj);

// 5. Write a function that uses the bind method to create a new function that multiplies a number by a specified value.
// const obj = {
//   arr1: [1, 2, 3, 4, 5],
// };
// let multi = function (num) {
//   let arr = this.arr1;
//   let newArr = [];
//   for (let val of arr) {
//     newArr.push(val * num);
//   }
//   return newArr;
// };
// let ans = multi.bind(obj, 2);
// console.log(ans());

// 6.Write a function that uses the call method to find the length of a string.
// const obj = {
//   str: "my name is vakeel khan",
// };
// let findLen = function () {
//   console.log(this.str.length);
// };
// findLen.call(obj);

// 7.Write a function that uses the apply method to find the sum of all numbers in an array.
// const obj = {
//   arr1: [1, 2, 3, 4, 5],
// };
// let sumOfAllNumber = function () {
//   let arr = this.arr1;
//   let sum = 0;
//   for (let val of arr) {
//     sum = sum + val;
//   }
//   return sum;
// };
// let ans = sumOfAllNumber.apply(obj);
// console.log(ans);

// 8.
//9.Write a function that uses the call method to convert a string to uppercase.
// const obj = {
//   str: "my name is vakeel khan",
// };
// let uppercase = function () {
//   console.log(this.str.toUpperCase());
// };
// uppercase.call(obj);

// 10. Create a function sum that takes in two numbers and returns their sum. Use call to invoke sum with an array [2, 3] as the context and log the result to the console.
// let obj = {
//   sum: function (num1, num2) {
//     return num1 + num2;
//   },
//   arr: [2, 3],
// };
// let print = function (a, b) {
//   let value = this.sum(a, b);
//   console.log(this.arr.concat(value));
// };
// print.call(obj, 5, 10);
