#### 1. Write a function that takes a string and returns a new string with all the words reversed using the spread operator.

```
let str = ['my','name','is','khan']
 function test(...val){
    let str1 = val.toString().split(" ")
     let newArr = ''
    for(let  i = str1.length -1 ; i>= 0 ; i--){
        newArr= newArr+' '+(str1[i])
     }
     return [newArr]
  }
  console.log(test('my name is khan'));
```

#### 2 Create a function that takes in an array and uses the rest operator to remove the first element from the array and finally return the array without first element.

```
 let arr =  ['my','name','is','khan']
 let [,...other] = arr
 console.log(other);
```

#### 3. Create a function that takes in an unknown number of arrays and uses the rest operator to flatten them into a single array

```
 let num1 = [1,2,3,4,5]
 let num2 = [11,12,13,14]
 function unknown (...arr){
 console.log(arr);
 }
 unknown([...num1,...num2])
```

#### 4.Write a function that takes an object as a parameter and returns the value of its "x" property if it exists, otherwise it returns null. Hint : (Use optional chaining)

5.  Write a function which takes in an array and create two separate arrays for odd numbers and even numbers and finally merge them in the order that all odd numbers will move to the left of the array and all even numbers to right of the array.

```
let arr = [1,2,3,4,5,6,7,8,9,10,11,12]
function create (num) {
    let odd = []
    let even = []
    for (let index = 0; index < arr.length; index++) {
        if(num[index]%2===0){
            even.push(num[index])
        }else{
            odd.push(num[index])
        }
    }
    let newArr = [...odd,...even]
    return newArr
}
  console.log(create(arr));

```

6.

#### 7.Ask user below questions

Now create an object and use enhanced object literal property computation to create below
object
{
age12 : 12
9581894461 : 'Mobile',
Jaipur12Address : 'Jaipur'
}

```
 let age = +prompt('What is your age')
 let mobile = +prompt('What is your mobile ')
 let  address  = prompt('What is your address')

 let obj = {
     ['age'+age]:age,
     [mobile]:mobile,
     [address+"address"]:address
 }
 console.log(obj);


```

#### 8. Using enhanced object literal function, create a function sum which takes an array as parameter and return sum of all the numbers in the array.

```
 function sum(val) {
 let total = 0
    for(let i of val) {
     total+= i
    }
    return total
 }
 console.log(sum( [1,2,3,5,8,9,]));
```

#### 9. Take a number and check if number is greater than 80 or not. If yes then assign 100 to number else assign 200. Use short circuiting whereever possible.

```
let num =100
let check = num>60
let x = check? 100 : 200
num = x
console.log(num);

```

#### 10. Create an array of 10 numbers. Now create a new array of 0 and 1 using Array destructring based on if number is odd then 1 else 0

Array : [1,2,3,4,5,6,7,8,9]
Output: [1,0,1,0,1,0,1,0,1,0]

```
function sum (arr){
    let newArr = []
    for(let i of arr){
        if(i%2===0){
           i =   newArr.push(0)
        }else{
           i = newArr.push(1)
        }
    }
    return newArr
}
console.log(sum([1,2,3,4,5,6,7,8,9]));
```

#### 11.Given an array of price, use map function to return a new array where each price is converted to new price including tax, which is the price with a 10% tax added.

```
 let arrPrice = [20,30,50,70,90]

 function percentage(arr) {
     let count = []
     for(let i of arr){
     count.push ( 10/100 *i)
     }
     return count
 }
  let ans =  percentage(arrPrice)
  console.log(ans);

```

#### 12 . Given an array of strings, use reduce to return the total number of characters in all the strings.

```
 let arr = ['my name is khan'].toString()
 let arr1 = arr.split("")
 let ans = arr1.reduce(test,0)
 function test(total,val) {
     return total+ val.length
 }
 console.log(ans);
```

#### 13. Given an array of strings, use map and reduce to return the total number of characters in all the strings with a length less than 5.

```

 let arr = ['my name is wecode '].toString()
let arr1 = arr.split(" ")
 let ans  = arr1.filter(test)
 function test(num){
    return num.length < 5
 }
 let ans2 = ans.reduce(test2,0)
 function test2(total,val){
    return total + val.length
 }
 console.log(ans2);

```

#### 14. Given an array of numbers, use map, filter, and reduce to return the sum of all the odd numbers multiplied by 3

```
let arr = [1,2,3,4,5,6,7]
let ans = arr.filter((num)=>{
    return num % 2 === 1
}).map((num)=>{
    return  num * 3
}).reduce((total,val)=>{
   return total + val
})
 console.log(ans);

```

#### 15. Given a string, reverse the order of the words in the string. For example, "the quick brown fox" becomes "fox brown quick the".

```
let str  = "the quick brown fox"
let str1 = str.split(' ').reverse()
console.log(str1);
```
