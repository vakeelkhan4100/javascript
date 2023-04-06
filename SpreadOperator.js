// let arr = [1, 2, 3, 4, 5];
// let arr2 = [...arr]; //Shallow Copy
// arr2.push(100);
// arr.push(999);
// console.log(arr, arr2);

// dono array ko samil kiya
// let arr = [1, 2, 3, 4, 5];
// let arr1 = [5, 6, 7, 8, 9];
// let arr2 = [...arr1, ...arr]; //Copying Arrays 
// console.log(arr2); // [5,6,7,8,9,1,2,3,4,5]

// string ko array me convert kiya 
// let str = "Wecode Academy";
// let arr = [...str]; //string to char array
// console.log(arr);


// let arr = [1, 2, 3, 4, 5];
// function test([a, b, , , c]) {
//   console.log(a, b, c);
// }
// test(arr);

// let arr = [1,2,3,4,5,6,7]
// function sum([a,,,,b,,c]){
// console.log(a,b,c);
// }
// sum(arr)

// let arr = [1, 2, 3, 4, 5];
// function test(a, b, c, d) {
//   console.log(a, b, c, d);
// }
// test(...arr); //using spread operator

// let arr1 = [10,20,30,40]

// function test1(a,b, c){
//     console.log(a,b,c);
// }
// test1(...arr1)







// The Rest Parameter
// let arr = [1, 2, 3, 4, 5];
// let [a, b, ...c] = arr;
// console.log(a, b, c);


// let obj = {
//   name: "Wecode",
//   age: 21,
//   address: "Jaipur",
//   mobile: 93454534543,
// };
// let { name, address, ...other } = obj;
// console.log(name, address, other);


// function test(...val) {
//   console.log(val);
// }
// test(1, 2, 3, 4, 5);

// reset operater ka use hume last me ker sekte otherwise  useme error aayga
// let arr = [1,2,3,4]
// let [a,b,...c]= arr
// console.log(a,b,c);
// let obj = {
//     name: 'vakeel',
//     address:'karkwal merta',
//     mobile:6375164100
// }
// let {name,...address} = obj
// console.log(name,address
//     );

// ye esliy galte he kyuki humne reset operater ka  biche me kiya .reset operater ka use hume last vale value ke sath kerna huta reset ka matlab hi baki bache sare
// let arr = [1,2,3,4]
// let [a,...b,c]= arr
// console.log(a,b,c);// wronglet  

// let arr = [1,2,3,4,5]
// function test(...val) {
//     console.log(...val);
//      for(let i of val){
//        if(i%2===1){
//         console.log(i);
//        }
//     }
// }
// test(arr)
 

// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];
// let array3 = [7, 8, 9];

// let array4 = [100, ...array2, ...array1, ...array3, 200];
// console.log(array4);






// Short Circuiting

// let a = 0 || false || 0;
// console.log(a); // 0

// let a = false || true || -1;
// console.log(a); // true

// let a = 10 && 20 && 0 && -2;
// console.log(a); // 0



// let a = 10 && 2 || 10 && 0; 
// // a = 0 && 2 ;
// // a = 10 && 0
// console.log(a);


// let x = 10;
// if (x) {
//   x = 10;
// } else {
//   x = 5;
// }
// x = x ? 10 : 5;
// let x  = 10 || 5;
// console.log(x);

// function test() {
//   console.log("Hello");
// }

// 0 && test();
// 10 && test();


// let a = undefined ?? 10; //null/undefined
// console.log(a);  




 //Optional Chaining


// //Optional Chaining
// let obj1 = {
//     name: "wecode",
//     address: {},
//   };
//   console.log(obj1.address.pincode); //undefined
  
//   //Optional Chaining
//   let obj2 = {
//     name: "wecode",
//   };
//   console.log(obj2.address.pincode); //error
  
  
  //Optional Chaining
//   let obj3 = {
//     name: "wecode",
//     address: {
//       pincode: 302012,
//       myAddress: {
//         colony: "Narayanpuri",
//       },
//     },
//   };
//   console.log(obj3?.address?.otherAddress?.colony);
  
  
  //Optional Chaining
  let obj = {
    name: "wecode",
    address: {
      pincode: 302012,
      myAddress: {
        colony: "Narayanpuri",
      },
    },
  };
  if (
    obj &&
    obj.address &&
    obj.address.otherAddress &&
    obj.address.otherAddress.colony
  ) {
    console.log("Yes");
  } else {
    console.log("No");
  }
  
  if (obj?.address?.myAddress?.colony) {
    console.log("Yes");
  } else {
    console.log("No");
  }