# Question 1

- Write a JavaScript function to capitalize the first character of the string.
- for example:
- wecodeacademy
- output:
- Wecodeacademy

```
 let str = "wecodeacademy";
 let slice = str.slice(1);
 let capitalfirst = str.charAt(0).toUpperCase();
 console.log(capitalfirst + slice);
```

# Question 2

- Write a JavaScript function to insert a string within a string at a particular position
- for example:
- We are learning exercises.
- now insert the word JavaScript at 14 position so output will be :
- We are learning JavaScript exercises.

```
 let str = "We are learning exercises";
 let slice1 = str.slice(0, 16);
 let slice2 = str.slice(16);
 console.log(slice1 + "JavaScript" + " " + slice2);
```

# Question 3

- Write a JavaScript function to count the occurrence of a substring in a string.
- "My name is wecode academy and my friend name is Arun Kumar."
- find count "of 'is' in this word is 2.

```
  let str = "My name is wecode academy and my friend name is my  Arun Kumar";
 let split = str.split(" ");
 let count = 0;
 function findcount(split, value) {
   for (let i = 0; i <= split.length; i++) {
     if (split[i] === value) {
       count++;
     }
   }
 }
 findcount(split, "my");
 console.log(count);
```

# Question 4

```
 let name = prompt("What is your name?");
  let mobileNumber = prompt("What is your mobile number?");
 let accountNumber = prompt("What is your account number?");
 let cardNumber = prompt("What is your atm card number?");
let aadharNumber = prompt("What is your aadhar number?");

- Mask last 3 digits of the mobile number
//  let mobileNumber = prompt("What is your mobile number?");
// let sliceNum = mobileNumber.slice(0, 7);
// let num = sliceNum.padEnd(10, "*");
// console.log(num);

- Mask last 8 digit of atm card number
// let cardNumber = prompt("What is your atm card number?");
// let atm = cardNumber.slice(0, 4);
// let slice = atm.padEnd(12, "*");
// console.log(slice);

```

# Question 6

```
let name = prompt("What is your name?");
let birthYear = +prompt("What is your birth year?");
let currentage = 2023 - birthYear;
let address = prompt("What is your address ?");
let countryCode = +prompt("What is your country code?");
let mobileNumber = +prompt("What is your mobile number?");
console.log(
  `My name is ${name}.I was born in ${birthYear} and and my current age is ${currentage} years. My address is ${address} and and my mobile number is +${countryCode}${mobileNumber}`
// );
```

# Question 7

- Divide a string in two part.
- Now in right side part add Hello in the end In left side of the string add World in starting
- for example:

```
 let str = "Wecode Academy"
 output:
 Wecode Hello World Academy
 let str = "Wecode Academy";
 let Divide = str.slice(0, 6);
 let Divide1 = str.slice(6);
 console.log(`${Divide} Hello World ${Divide1} `);
```

# Question 8

- Guessing Game? Ask user what character is present at particular index in a word.
- If user guess is right then show him Congrulations message otherwise show Sorry message.
- for example: Wecode Academy
- What is the character you are guessing? A What is the index? 3
- Sorry

```
 let str = "Abhi is a good person";
 let index = str.indexOf("a");
 let Guessing = +prompt("'Abhi is a good person' What is the index of a ?");
 if (Guessing === index) {
   alert("Congrulations");
 } else {
   alert("sorry try again");
 }
```
