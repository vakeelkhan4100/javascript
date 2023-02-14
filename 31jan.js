//que 1.
// let num1 = 10;
// let num2 = 20;
// let sum = 60;
// let num3 = sum - (num1 + num2); //30
// console.log(num3);

//que 2.
// let totalMarks = 400;
// let englishMark = Number(prompt("What is your English marks in 10th?"));
// let ScienceMark = Number(prompt("What is your  Science  marks in 10th?"));
// let MathMark = Number(prompt("What is your math  marks in 10th?"));
// let HindiMark = Number(prompt("What is your  hindi  marks in 10th?"));
// let SSTMarks = Number(prompt("What is your  sst  marks in 10th?"));
// let myAllMarks = englishMark + ScienceMark + MathMark + HindiMark + SSTMarks;
// console.log(myAllMarks);
// let percentage = (myAllMarks / totalMarks) * 100;
// console.log(percentage);
// alert(percentage);

// que 3.
// part1
// let ask = Number(prompt(" In which century were your born? "));
// alert(Math.floor(ask / 100));

// part2. these one work only limited condition
// if (ask >= 1800 && ask < 1900) {
//   alert("your century is 18 ");
// } else if (ask >= 1900 && ask < 2000) {
//   alert("your century is 19 ");
// } else if (ask >= 2000 && ask < 2100) {
//   alert("your century is 20");
// }

// que 4.
// console.log("vakeel" + 20);
// console.log("vakeel" + true);
// console.log(30 + "wecode");

// que 5.
// let reverseGame = prompt(" Do you drink coffee or tea?");
// if (reverseGame == "tea") {
//   alert("coffee");
// } else if (reverseGame == "coffee") {
//   alert("tea");
// }

// que 6.
// let sum = 40;
// if ((sum % 2 === 0 && sum / 4) && sum < 100 || sum == 84) {
//   console.log("right ");
// } else console.log("wrong");

// que 7.
// let temprature = 39;
// if (temprature < 10) {
//   console.log("very cool");
// } else if (temprature <= 30 && temprature >= 10) {
//   console.log("cool");
// } else if (temprature > 30 && temprature < 40) {
//   console.log("hot");
// } else {
//   console.log("very hot ");
// }

// que 8.
// let answer = Number(prompt("What is your age "));
// if (answer > 18) {
//   let que = confirm("Do you want to open account?");
//   if (que == true) {
//     let name = prompt("What is your name ?");
//     let aaadharNumber = Number(prompt("What is your aaadhar number  ?"));
//     let address = prompt("What is your address ?");
//     let mobileNumber = Number(prompt("What is your  mobile number?"));
//     console.log(name, aaadharNumber, address, mobileNumber);
//   } else {
//     console.log("Sorry, please visit again.");
//   }
// } else {
//   alert("you are a child");
// }

// que 9.
// let calculate = String(
//   prompt("What do you want to do? like +,- or plus, minus or add, sub etc")
// );
// if (calculate == "+" || calculate == "add" || calculate == "plus") {
//   let que1 = Number(prompt("first number ?"));
//   let que2 = Number(prompt("second number ?"));
//   alert(que1 + que2);
// } else if (calculate == "-" || calculate == "minus" || calculate == "sub") {
//   let que1 = Number(prompt("first number ?"));
//   let que2 = Number(prompt("second number ?"));
//   alert(que1 - que2);
// } else if (calculate == "*" || calculate == "multiple") {
//   let que1 = Number(prompt("first number ?"));
//   let que2 = Number(prompt("second number ?"));
//   alert(que1 * que2);
// }

//que 10.
// let vakeel = Number(prompt("vakeel what is your 10th percentage?"));
// let aslam = Number(prompt("aslam what is your 10th percentage?"));
// let farukh = Number(prompt("farukh what is your 10th percentage?"));
// let sameer = Number(prompt("sameer what is your 10th percentage?"));
// console.log(vakeel, aslam, farukh, sameer);
// let max;
// if (vakeel >= aslam && (vakeel >= farukh) & (vakeel >= sameer)) {
//   max = vakeel;
// } else if (aslam >= vakeel && aslam >= farukh && aslam >= sameer) {
//   max = aslam;
// } else if (farukh >= vakeel && farukh >= aslam && farukh >= sameer) {
//   max = farukh;
// } else if (sameer >= vakeel && sameer >= aslam && sameer >= farukh) {
//   max = sameer;
// }
// console.log(max);
