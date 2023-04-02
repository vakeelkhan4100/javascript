// let arr = [1, 2, 3, 4, 1, 2];
// let set = new Set(arr);
// console.log(set);
// set.add(10);
// set.add(7);
// console.log(set);
// set.delete(1);
// console.log(set);
// set.forEach((value) => {
//   console.log(value);
// });
// for (let val of set) {
//   console.log(val);
// }

// Set Exercise
// 1. Create an empty set called mySet.
// let mySet = new Set();
// console.log(myset);
// 2. Add the values 1, 2, and 3 to mySet.
// let mySet = new Set();
// mySet.add(1);
// mySet.add(2);
// mySet.add(3);
// console.log(mySet);
// 3. Check if mySet contains the value 2.
// let mySet = new Set();
// mySet.add(1);
// mySet.add(2);
// mySet.add(3);
// console.log(mySet.has(2));

// 4. Remove the value 3 from mySet.
// let mySet = new Set();
// mySet.add(1);
// mySet.add(2);
// mySet.add(3);
// mySet.delete(3);
// console.log(mySet);

// 5. Find the size of mySet.
// let mySet = new Set();
// mySet.add(1);
// mySet.add(2);
// console.log(mySet.size);
// 6. Create a new set called otherSet containing the values 2, 3, and 4.
// let otherSet = new Set([2, 3, 4]);
// console.log(otherSet);

// 7. Find the intersection of mySet and otherSet.
// let mySet = new Set();
// mySet.add(1);
// mySet.add(2);
// mySet.add(3);
// let otherSet = new Set();
// otherSet.add(2);
// otherSet.add(3);
// otherSet.add(4);
// let newArr = [];
// for (let value of mySet) {
//   if (otherSet.has(value)) {
//     newArr.push(value);
//   }
// }
// console.log(newArr);

// 8. Find the union of mySet and otherSet.
// let mySet = new Set([1, 2, 3]);
// let otherSet = new Set([2, 3, 4]);
// let newArr = new Set([...mySet, ...otherSet]);
// console.log(newArr);

// 9. Find the difference of mySet and otherSet.
// let mySet = new Set([1, 2, 3]);
// let otherSet = new Set([2, 3, 4]);
// // mySet to otherSet
// let newArr = [];
// for (let value of mySet) {
//   if (!otherSet.has(value)) {
//     newArr.push(value);
//   }
// }
// console.log(newArr);
// // otherSet to mySet
// let mySet1 = new Set([1, 2, 3]);
// let otherSet1 = new Set([2, 3, 4]);

// for (let value of otherSet1) {
//   if (!mySet1.has(value)) {
//     newArr.push(value);
//   }
// }
// console.log(newArr);

// 10. Find the symmetric difference of mySet and otherSet.
// let mySet = new Set([1, 2, 3]);
// let otherSet = new Set([2, 3, 4]);
// let newArr = [];
// for (let value of mySet) {
//   if (!otherSet.has(value)) {
//     newArr.push(value);
//   }
// }
// for (let value of otherSet) {
//   if (!mySet.has(value)) {
//     newArr.push(value);
//   }
// }
// console.log(newArr);

// 11. Create an array called myArray containing the values 1, 2, 2, and 3.
// let myArray = [1, 2, 2, 3];
// console.log(myArray);
// 12. Convert myArray to a set called mySet2.
// let myArray = [1, 2, 2, 3];
// let mySet2 = new Set(myArray);
// console.log(mySet2);

// 13. Check if mySet2 contains the value 2.
// let myArray = [1, 2, 2, 3];
// let mySet2 = new Set(myArray);
// console.log(mySet2.has(2));

// 14. Remove all duplicate values from myArray and store the result in a new array called uniqueArray.
// let myArray = [1, 2, 2, 3];
// let removeDuplicate = new Set(myArray);
// let uniqueArray = [...removeDuplicate];
// console.log(uniqueArray);

// 15. Convert uniqueArray to a set called uniqueSet.
// let uniqueArray = [1, 2, 3];
// let uniqueSet = new Set(uniqueArray);
// console.log(uniqueSet);

// 16. Add the value 4 to uniqueSet.
// let uniqueSet = new Set([1, 2, 3]);
// uniqueSet.add(4);
// console.log(uniqueSet);

// 17. Remove the value 3 from uniqueSet.
// let uniqueSet = new Set([1, 2, 3, 4]);
// uniqueSet.delete(3);
// console.log(uniqueSet);

// 18. Check if uniqueSet is a subset of mySet.
// let mySet = new Set([1, 2, 4, 3, 5]);
// let uniqueSet = new Set([1, 2, 3, 4]);
// let flag = true;
// for (let value of uniqueSet) {
//   if (!mySet.has(value)) {
//     flag = false;
//   }
// }
// console.log(flag);

// 19. Check if uniqueSet is a superset of mySet.
// let set = new Set([1, 2, 3, 6, 4, 5]);
// let otherSet = new Set([2, 3, 4, 5, 6, 7, 8, 9]);
// //OtherSet is superset of set
// let flag = false;
// if (set.size > otherSet.size) {
//   console.log("No");
// } else {
//   for (let value of set) {
//     if (!otherSet.has(value)) {
//       flag = true;
//     }
//   }
// }
// if (flag) {
//   console.log("No");
// } else {
//   console.log("Yes");
// }

// 20. Find the difference between mySet and uniqueSet.
// let mySet = new Set([1, 2, 3, 6, 4, 5]);
// let uniqueSet = new Set([2, 3, 5, 6, 7, 8, 9]);
// let newArr = [];
// for (let val of mySet) {
//   if (!uniqueSet.has(val)) {
//     newArr.push(val);
//   }
// }
// for (let val of uniqueSet) {
//   if (!mySet.has(val)) {
//     newArr.push(val);
//   }
// }
// console.log(newArr);
