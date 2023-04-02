//  Question 1
// Write a JavaScript function to capitalize the first character of the string.
// for example:
// wecodeacademy
// output:
// Wecodeacademy
// let str = "wecodeacademy";
// let slice = str.slice(1);
// let capitalfirst = str.charAt(0).toUpperCase();
// console.log(capitalfirst + slice);

// Question 2
// Write a JavaScript function to insert a string within a string at a particular position
// for example:
// We are learning exercises.
// now insert the word JavaScript at 14 position so output will be :
// We are learning JavaScript exercises.
// let str = "We are learning exercises";
// let slice1 = str.slice(0, 16);
// let slice2 = str.slice(16);
// console.log(slice1 + "JavaScript" + " " + slice2);

// Question 3
// Write a JavaScript function to count the occurrence of a substring in a string.
// "My name is wecode academy and my friend name is Arun Kumar."
// find count "of 'is' in this word is 2.
// let str = "My name is wecode academy and my friend name is my  Arun Kumar";
// let split = str.split(" ");
// let count = 0;
// function findcount(split, value) {
//   for (let i = 0; i <= split.length; i++) {
//     if (split[i] === value) {
//       count++;
//     }
//   }
// }
// findcount(split, "my");
// console.log(count);

// Question 4
// Ask user below questions:
// What is your name?
// What is your mobile number?
// What is your account number?
// What is your atm card number?
// What is your aadhar number?
// Now do below tasks:
// Mask middle of 5 numbers of the account
// Mask starting 4 digits and last 4 digits of aadhar number

// let name = prompt("What is your name?");
//  let mobileNumber = prompt("What is your mobile number?");
// let accountNumber = prompt("What is your account number?");
// let cardNumber = prompt("What is your atm card number?");
// let aadharNumber = prompt("What is your aadhar number?");

// Mask last 3 digits of the mobile number
// let sliceNum = mobileNumber.slice(0, 7);
// let num = sliceNum.padEnd(10, "*");
// console.log(num);

// Mask last 8 digit of atm card number
// let atm = cardNumber.slice(0, 4);
// let slice = atm.padEnd(12, "*");
// console.log(slice);

// Question 6
// Ask below questions :
// What is your name?
// What is your birth year?
// What is your address ?
// What is your country code?
// What is your mobile number?
// Now using string template literal syntax show below output based on your answer:
// My name is Sajid Khan. I was born in 1993 and my current age is 30 years. My address is Jhotwara, Jaipur and my mobile number is +919565465654.
// let name = prompt("What is your name?");
// let birthYear = +prompt("What is your birth year?");
// let currentage = 2023 - birthYear;
// let address = prompt("What is your address ?");
// let countryCode = +prompt("What is your country code?");
// let mobileNumber = +prompt("What is your mobile number?");
// console.log(
//   `My name is ${name}.I was born in ${birthYear} and and my current age is ${currentage} years. My address is ${address} and and my mobile number is +${countryCode}${mobileNumber}`
// );

// Question 7
// Divide a string in two part.
// Now in right side part add Hello in the end In left side of the string add World in starting
// for example:
// let str = "Wecode Academy"
// output:
// Wecode Hello World Academy
// let str = "Wecode Academy";
// let Divide = str.slice(0, 6);
// let Divide1 = str.slice(6);
// console.log(`${Divide} Hello World ${Divide1} `);

// Question 8
// Guessing Game? Ask user what character is present at particular index in a word.
// If user guess is right then show him Congrulations message otherwise show Sorry message.
// for example: Wecode Academy
// What is the character you are guessing? A What is the index? 3
// Sorry
// let str = "Abhi is a good person";
// let index = str.indexOf("a");
// let Guessing = +prompt("'Abhi is a good person' What is the index of a ?");
// if (Guessing === index) {
//   alert("Congrulations");
// } else {
//   alert("sorry try again");
// }

// for (let i = 11; i >= 1; i--) {
//   let value = "" + "*";

//   if (i % 2 === 1) {
//     console.log(value.repeat(i));
//   }
// }

// for (let i = 1; i <= 11; i++) {
//   let value = "" + "$";

//   if (i % 2 === 1) {
//     console.log(value.repeat(i));
//   }
// }
// let space = "&nbsp";
// let star = "$";
// let count = 0;
// for (let i = 5; i >= 1; i--) {
//   count++;
//   document.write(space.repeat(i) + star.repeat(count), "<br>");
// }

// // 1 224 3339 44412 555520
// str =    1
// for(let n = 1;n<=5;n++){
// str++
// sqr =( str += "")
//     document.write(sqr.repeat;)
// }
// let star = "*";
// let space = "&nbsp";
// let count = 0;
// for (let i = 5; i >= 1; i--) {
//   count++;
//   document.write(
//     space.repeat(count) + star.repeat(i) + space.repeat(count),
//     "<br>"
//   );
// }

// let str = "9581894461";
// let str2 = "958***";
// let str3 = "4461";
// console.log(str2 + str3);

