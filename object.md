### Object Questions

### Que 1. What is an object in JavaScript?

```
 object:-
           object ek datastructure hain. jiska use data store krane ke liye kiya jata hain.
           data store key or value ki form me huti he

```

### Que 2. What is the difference between dot notation and bracket notation for accessing object properties?

```
dot notation:- esme hum value . likhe ke nikalte for example : obj.keyname
bracket notation:-esme hum valu [] se nikalte he for example : obj.['key'name]

```

### Que 3. How do you loop through the properties of an object in JavaScript?

```
 const obj = {
   name: "vakeel",
   mobile: 6375164100,
   address: " karkwal",
 };
 let arr = Object.entries(obj);

 for (let i = 0; i <= arr.length - 1; i++) {
   console.log(arr[i][0], arr[i][1]);
 }

```

### Que 4. What is the difference between an object and an array in JavaScript?

```
array:-
       array ek datastructure jiska use data store kervane ke kiye kiya jata hain.emse value ko index se nikalte he.
object:-
       object bhi  ek datastructure jiska use data store kervane ke kiye kiya jata hain.emse hum value key pairs se nikalte he
```

### Que 5. Write a JavaScript function to convert an object into a list of `[key, value]` pairs.

```

 let obj = {
   name: "sameer",
   mobile: 1234561234,
   address: "merta city",
 };
 console.log(Object.entries(obj));

```

### Que 6. Write a function that takes an object representing a person and returns their full name.

```
 let person = {
   firstName: "xyz",
   lastName: "xyz",
   fatherName: "xyz",
   address: "xyz",
 };
 console.log(
   `my name is ${person.firstName} ${person.lastName}.and my father name is ${person.fatherName}.I am from ${person.address}`
 );
```

### Que 7. Create an Object with your personal details. Now print all the keys of the object in ascending order.

```
 let personalDetails = {
   name: "vakeel",
   mobile: 6375164100,
   fatherName: "saradeen khan",
   village: "karkwal",
 };
 let key = Object.keys(personalDetails);
 console.log(key.sort());

```

### Que 8. Create an Object with your personal details. Now filter out all the values of the object and show them in descending order.

```
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

```
