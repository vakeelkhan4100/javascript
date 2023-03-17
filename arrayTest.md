# Array exercise

### Que1. Create an array called fruits that contains the following elements: "apple", "banana", "orange". Now check if "orange" is in the fruits array.

```
let fruits = ["apple", "banana", "orange"];
let check = fruits.includes("orange");
console.log(check);

```

### Que2. Given an array of numbers, write a function that returns the sum of all the even numbers in the array.

```
 function sum(arr) {
   str = 0;
   for (let value of arr) {
     if (value % 2 === 0) {
       str += value;
     }
   }
   return str;
 }
 let ans = sum([1, 2, 4, 50, 7, 5, 20, 9]);
 console.log(ans);

```

### Que3.Given two arrays of numbers, write a function that returns a new array that contains only the unique elements from both arrays.

```
 function uniqueElements(val1, val2) {
   let arr = val1.concat(val2);
   let num = new Set(arr);
   let newArr = [...num];
   return newArr;
 }
 let ans = uniqueElements([10, 20, 30, 40], [10, 40, 50, 60, 70]);
 console.log(ans);

```

### Que4.

```

```

### Que5.Write a function that takes an array of numbers and returns the largest number in the array.

```
 function sum(arr) {
   largest = arr[0];
   for (let value of arr) {
     if (value > largest) {
       largest = value;
     }
   }
   return largest;
 }
 let ans = sum([1, 2, 4, 50, 7, 6, 208, 9]);
 console.log(ans);

```

### Que6. Write a function that takes an array of numbers and returns a new array that only contains the even numbers from the original array.

```
 let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 let ans = arr.filter(originalArray);
 function originalArray(val) {
   return val % 2 === 0;
 }
 console.log(ans);

```

### Que7.

```
const arr = ["vakeel", "jamil", "sam", "aslam"];
function countvalue(val) {
  let newArr = [];
  for (let i = 0; i < val.length; i++) {
    if (val[i].length >= 5) {
      newArr.push(val[i]);
    }
  }
  return newArr;
}
let ans = countvalue(arr);
console.log(ans);

```

### Que8.Write a function that takes two arrays of numbers and returns a new array that contains the intersection of the two arrays (i.e. only the numbers that appear in both arrays).

```
function intersection(arr1, arr2) {
  let newArr = [];
  for (let val of arr1) {
    if (arr2.includes(val)) {
      newArr.push(val);
    }
  }
  return newArr;
}
let ans = intersection([1, 2, 3, 4], [2, 4, 5, 6]);
console.log(ans);

```

### Que9.Write a function that takes an array of numbers and returns a new array where each element is the square of the original element

```
let arr = [1, 2, 3, 4, 5, 6, 6, 2, 5];
let ans = arr.map(square);
function square(val) {
  return val * val;
}
console.log(ans);

```

### Que10.Write a function that takes an array of numbers and returns the average of all the numbers in the array.

```
 let arr = [10, 20, 30, 40, 50];
 let ans = arr.reduce(average, 0);
 function average(val, val2) {
   let total = val + val2;
   return total / 5;
 }

 console.log(ans);

```

### Que11.Write a function that takes an array of numbers and returns a new array that only contains numbers that are greater than 5. Use filter function

```
let arr = [1, 4, 5, 6, 8, 10];
let ans = arr.filter(sum);
function sum(val) {
  return val > 5;
}
console.log(ans);

```

### Que12. Write a function that takes an array of numbers and returns a new array where each element is the original element plus 1. use map function

```
 let arr = [1, 4, 5, 6, 8, 10];
 let ans = arr.map(sum);
 function sum(val) {
   return val + 1;
 }
 console.log(ans);

```

### Que13.Write a function that takes an array of numbers and returns a new array that contains only the unique numbers using reduce.

```

```

### Que14. Write a function that takes an array of strings and returns the total number of characters in all the strings using reduce.

```
 let arr = ["my", "name", "is", "wecode"];
 let ans = arr.reduce(sum, 0);
 function sum(total, val) {
   let count = total + val.length;
   return count;
 }
 console.log(ans);


```

### Que15.Write a function that takes an array of strings and sorts them by their length in ascending order.

// Example usage

```
let arr = ["apple", "banana", "cherry", "date"];
let ans = arr.sort(sum);
function sum(a, b) {
  return a.length - b.length;
}
console.log(ans);

```

### Que16. Write a function that takes an array of numbers and returns the second highest number

```
let arr = [10, 20, 30, 40, 50, 60];
function secondHighest(val) {
  let highest = 0;
  let secondhigh = 0;
  for (let j = 0; j <= val.length; j++) {
    if (val[j] > highest) {
       highest = val[j];
      secondhigh = highest;
    } else if (val[j] > secondhigh) {
      secondhigh = val[j];
    }
  }
  return secondhigh;
}
let ans = secondHighest(arr);
console.log(ans);


```

### Que17.Write a function that takes an array of numbers and returns a new array with all the unique numbers.

```
let arr = [1, 2, 3, 4, 5, 6, 6, 2, 5];
function uniqueNumbers(val) {
  let newSet = new Set(val);
  let newArr = [...newSet];
  return newArr;
}
let ans = uniqueNumbers(arr);
console.log(ans);

```

### Que18.Write a function that takes an array of strings and returns a new array with only the strings that contain the letter "a".

```
let arr = ["a", "a", "b", "c", "d", "a", "e", "a"];
 let ans = arr.filter(sum);
 function sum(val) {
   return val === "a";
 }
 console.log(ans);
```

### Que19.Write a function that takes an array of numbers and returns a new array with the numbers sorted in ascending order.

```
let arr = [1, 2, 10, 7, 6, 8, 9, 5];
let ans = arr.sort(sum);
function sum(val, val2) {
  return val - val2;
}
console.log(ans);

```

### Que20.Write a function that takes an array of strings and flattens each string into an array of characters, then flattens the result into a single array.

```
let arr = ["hello", "world"];
function sum(val) {
  let first = val.split("");
  return first;
}
let ans = sum(arr.toString());
console.log(ans);

```
