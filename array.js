// 1.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let k = 0; k < arr.length; k++) {
//   if (arr[k] % 2 === 1) {
//     console.log(arr[k]);
//   }
// }

// 2.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let k = 0; k < arr.length; k++) {
//   if (arr[k] % 2 === 0) {
//     console.log(arr[k]);
//   }
// }

// let student = 10;
// let studentAverage = student * 45;
// let totalStudentAvergae = (student + 1) * 52;
// let teacherWeigth = totalStudentAvergae - studentAverage;
// console.log(teacherWeigth); // 122

//4
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 71];
// let sum = 0;
// for (let k = 0; k < arr.length; k++) {
//   if (arr[k] % 2 === 1 && arr[k] > 50 && arr[k] < 100) {
//     sum += arr[k];
//   }
// }
// console.log(sum);

// 5
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let multi = 1;
// for (let k = 0; k < arr.length; k++) {
//   multi *= arr[k];
// }
// console.log(multi);




// let str = "My name is wecode academy";
// let arr = str.split(" ");
// console.log();
// let ans = arr.reduce(test, );
// let count = 0;
// function test(ans, val) {
//   return
// }
// console.log(ans);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let ans = arr.filter(test);
// function test(val) {
//   return val % 2 === 1;
// }
// let ans2 = ans.map(sum);
// function sum(val) {
//   return val * 2;
// }
// console.log(ans2);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let ans = arr.filter(test);
// function test(val) {
//   return val % 2 === 0;
// }
// let ans2 = ans.every(sum);
// function sum(val) {
//   return val > 10;
// }
// console.log(ans2);


//  Find the Union and Intersection of the two sorted arrays
// let arr1 = [1, 2, 3, 4, 5, 6, 7];
// let arr2 = [2, 5, 4, 6, 9, 8, 10];
// // Union
// let newArr = arr1.concat(arr2);
// let set = new Set(newArr);
// console.log("union number", set);
// //Intersection
// let newArr1 = [];
// arr1.forEach((val) => {
//   if (arr2.includes(val)) {
//     newArr1.push(val);
//   }
// });
// console.log("Intersection number", newArr1);

// find duplicate 
// let arr = [1, 2, 3, 4, 5, 6, 7, 2, 3, 4, 2, 3, 3, 1, 3, 4];
// let duplicate = 0;
// let num = 1;
// for (let value of arr) {
//   if (value === num) {
//     duplicate++;
//   }
// }
// console.log(duplicate);