### Que 1. Create an array with three elements and print out the second element.

```
let arr = [10, 20, 30];
console.log(arr[1]);
```

### Que 2. Create an array with five elements and print out the length of the array.

```
let arr = [1, 3, 5, 7, 8];
console.log(arr.length);
```

### 3. Create an array with four elements and print out each element using a for loop.

```
let arr = [10, 30, 50, 40];
for (let i = 0; i <= arr.length - 1; i++) {
  console.log(arr[i]);
}
```

### Que 4. Create an array with six elements and print out each element using a forEach loop.

```
  let arr = ["vakeel", "jamil", "farukh", "aslam", "sameer", "akram"];
  let newArr = [];
  arr.forEach(text);
  function text(val) {
  newArr.push(val);
  }
  console.log(newArr);
```

### Que 5. Create an array with three elements and add a fourth element to the end of the array.

```
 let arr = [1, 2, 3];
 arr.push(4);
 console.log(arr);
```

### Ques 6. Create an array with four elements and remove the second element.

```
  let arr = [10, 20, 30, 40];
  let slice1 = arr.slice(0, 1);
  let slice2 = arr.slice(2, 4);
  let concat = slice1.concat(slice2);
  console.log(concat);
```

### Que 7. Create an array with five elements and remove the last element.

```
 let arr = [50, 40, 30, 20, 10];
 arr.pop();
 console.log(arr);
```

### 8. Create an array with three elements and check if the array includes a specific value.

```
 let arr = ["sameer", "aslam", "nazim"];
 let check = arr.includes("aslam");
 console.log(check);
```

### 9. Create an array with four elements and sort the array in ascending order.

```
 let arr = [10, 11111, 1112];
 let ans = arr.sort(test);
 function test(num1, num2) {
 return num1 - num2;
 }
 console.log(ans);
```

### 10. Create an array with five elements and sort the array in descending order.

```
// let arr = [1012, 120, 1112];
// let ans = arr.sort(test);
// function test(num1, num2) {
// return num2 - num1;
// }
// console.log(ans);
```

### 11. Create two arrays, concatenate them and print out the resulting array.

```
// let arr1 = [1, 2, 3, 4];
// let arr2 = [5, 6, 7, 8];
// let result = arr1.concat(arr2);
// console.log(result);
```

### 12. Create an array with three elements and convert it to a string.

```
// let arr = [10, 20, 30];
// let convert = arr.toString();
// console.log(convert);
```

### 13. Create an array with four elements and reverse the order of the elements.

```
  let arr = [5, 4, 3, 2];
  arr.reverse();
  console.log(arr);
```

### 14. Create an array with five elements and find the index of a specific value.

```
  let arr = [10, 20, 30, 40, 50];
  let index = arr.indexOf(50);
  console.log(index);
```

### 15. Create an array with six elements and slice the array to create a new array with the first three elements.

```
  let arr = [2, 4, 6, 8, 10, 12];
  let slice = arr.slice(0, 3);
  console.log(slice);
```

### 16. Create an array with six elements and use the map method to double each element.

```
  let arr = [1, 2, 3, 4, 5, 6];
  function text(val) {
  return val \* 2;
  }
  let ans = arr.map(text);
  console.log(ans);
```

### 17. Create an array with four elements and use the while loop to calculate the sum of all elements.

```
  let arr = [10, 20, 30, 50];
  let i = 0;
  let sum = +"";
  while (i <= arr.length - 1) {
  sum += arr[i];
  i++;
  }
  console.log(sum);
```

### 18. Create an array with five elements and use the filter method to return only the even numbers.

```
  let arr = [1, 2, 3, 4, 5];
  let ans = arr.filter(text);
  function text(val) {
  return val % 2 === 0;
  }
  console.log(ans);
```

### 19. Create an array with three elements and use the join method to concatenate the elements with a dash (-) separator.

```
  let arr = [9, 8, 7];
  let add = arr.join("-");
  console.log(add);
```

### 20. Create two arrays with three elements each and use the concat method to combine them into a new array.

```
  let arr1 = [10, 20, 30];
  let arr2 = [40, 50, 60];
  let newArr = [];
  let combine = newArr.concat(arr1, arr2);
  console.log(combine);
```
