// let map = new Map();
// map.set("js", 300);
// map.set("node js", 500);
// // map.clear();
// map.set("html", 700);
// console.log(map);
// console.log(map.has("html"));
// console.log(map.get("js"));
// console.log(map.get("node js"));
// console.log(map.get("java")); //undifiend

// for (let i of map) {
//   console.log(i[0], i[1]);
// }

// let arr = [1, 2, 1, 2, 3, 2, 5];
// let map = new Map();
// for (let key of arr) {
//   console.log(key);
// }
// console.log(map);

// let arr = [1, 2, 1, 2, 3, 2, 5];
// let map = new Map();

// for (let key of arr) {
//   let count = 1;
//   if (!map.has(key)) {
//     map.set(key);

//   }
// }
// console.log(map);

// 1. Create a new Map and add key-value pairs to it.
// let map = new Map();
// map.set("js", 2);
// map.set("node js", 1);
// console.log(map);

// 2. Get the value of a specific key in a Map.
// let map = new Map();
// map.set("js", 2);
// map.set("node js", 1);
// console.log(map.get("js"));

// 3. Check if a key exists in a Map.
// let map = new Map();
// map.set("js", 2);
// map.set("node js", 1);
// console.log(map.has("js"));

// 4. Iterate over the keys of a Map using a for...of loop.
// let map = new Map();
// map.set("js", 2);
// map.set("node js", 1);
// map.set("html", 3);
// map.set("css", 5);
// for (let value of map) {
//   console.log(value[0]);
// }

// 5. Iterate over the values of a Map using a for...of loop.
// let map = new Map();
// map.set("js", 2);
// map.set("node js", 1);
// map.set("html", 3);
// map.set("css", 5);
// for (let value of map) {
//   console.log(value[1]);
// }

// 6. Iterate over the key-value pairs of a Map using a for...of loop.
// let map = new Map();
// map.set("js", 2);
// map.set("node js", 1);
// map.set("html", 3);
// map.set("css", 5);
// for (let value of map) {
//   console.log(value[0], value[1]);
// }

// 7. Convert a Map to an array of key-value pairs.
// let map = new Map();
// map.set("js", 2);
// map.set("node js", 1);
// map.set("html", 3);
// map.set("css", 5);
// let arr = [...map];
// console.log(arr);
// 8. Convert an array of key-value pairs to a Map.
// let obj = {
//   js: 2,
//   "node js": 1,
//   html: 4,
//   css: 5,
// };
// let check = Object.entries(obj);
// let map = new Map(check);
// console.log(map);

// 9. Use the forEach() method to iterate over the key-value pairs of a Map.
// let map = new Map();
// map.set("js", 2);
// map.set("node js", 1);
// map.set("html", 3);
// map.set("css", 5);
// map.forEach((value, key) => {
//   console.log(key, value);
// });

// 10. Use the Map keys() method to get an iterator for the keys of a Map.
// let map = new Map();
// map.set("js", 2);
// map.set("node js", 1);
// map.set("html", 3);
// map.set("css", 5);
// console.log(map.keys());

// 11. Use the Map values() method to get an iterator for the values of a Map.
// let map = new Map();
// map.set("js", 2);
// map.set("node js", 1);
// map.set("html", 3);
// map.set("css", 5);
// console.log(map.values());

// 12. Use the Map entries() method to get an iterator for the key-value pairs of a Map.
// let map = new Map();
// map.set("js", 2);
// map.set("node js", 1);
// map.set("html", 3);
// map.set("css", 5);
// console.log(map.entries());

// 13. Use the Map has() method to check if a Map contains a key.
// let map = new Map();
// map.set("js", 2);
// map.set("node js", 1);
// map.set("html", 3);
// map.set("css", 5);
// console.log(map.has("html"));

// 14. Use the Map get() method to get the value associated with a key in a Map.
// let map = new Map();
// map.set("js", 2);
// map.set("node js", 1);
// map.set("html", 3);
// map.set("css", 5);
// console.log(map.get("css"));

// 15. Use the Map set() method to add a new key-value pair to a Map.
// let map = new Map();
// map.set("js", 2);
// map.set("node js", 1);
// map.set("html", 3);
// map.set("css", 5);
// map.set("react js", 4);
// console.log(map);
// 16. Use the Map delete() method to remove a key-value pair from a Map.
// let map = new Map();
// map.set("js", 2);
// map.set("node js", 1);
// map.set("html", 3);
// map.set("css", 5);
// map.set("react js", 4);
// map.delete("react js");
// console.log(map);
// 17. Use the Map clear() method to remove all key-value pairs from a Map.
// let map = new Map();
// map.set("js", 2);
// map.set("node js", 1);
// map.set("html", 3);
// map.set("css", 5);
// map.clear();
// console.log(map);

// 18. Use the Object.fromEntries() method to create a new object from a Map.
// let map = new Map();
// map.set("js", 2);
// map.set("node js", 1);
// let entries = Object.fromEntries(map);
// console.log(entries);

// 19. Use the Map constructor to create a new Map from an array of key-value pairs.
