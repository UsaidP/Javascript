// const arr = [1, 2, 3, 4, 5, 6];

// for (const i of arr) {
//     console.log(i)

// }

// Iterate String

// const Country = "India is my Country";

// for (const i of Country) {
//   if (i === " ") {
//     continue;
//   }

//   console.log(i);
// }

// ++++++++++++++++++++++++++ Map +++++++++++++++++++++++++
// const map = new Map();

//     map.set(1,"India")
//     map.set(2, "Pakistan")
//     map.set(3, "Palestine")
//     map.set(4, "Soudi Arebia")

//     for (const [key, value] of map) {
//         console.log(`Key is ${key} and Value is ${value}`)
//     }

// +++++++++++++++++++++++++ Object +++++++++++++++++++++++++
// const games = {
//   1: "CSGO",
//   2: "NFS",
//   3: "Dota 2",
// };

// +++++++++++++++++++++++++++ For OF Loop ++++++++++++++++++++++++

// for (const key of games) { // forof loop doen't work for object iteration and work for maps
//   console.log(key);
// }

// +++++++++++++++++++++++++++ For In Loop ++++++++++++++++++++++++
// for (const key in arr) {
//forin loop use for Object iteraton
//   console.log(`${key} ${arr[key]}`);
// }

// ++++++++++++++++++++++++++++++ For Each Loop +++++++++++++++++++++

// const data = {
//   username: "Usaid",
//   password: "12345",
//   email: "arkammulla123@gmail.com",
// };

// const printItems = (items) => {
//   console.log(items.toLowerCase());
// };

// const cloths = ["t-shirt", "jeans", "Shirt", "Underware"];

// cloths.forEach((items) => {
//   console.log(items.toUpperCase());
// });

// cloths.forEach(printItems);

// cloths.forEach((val, key) => {
//   console.log(`${key} ${val}`);
// });

// const users = [
//   {
//     username: "Usaid",
//     password: "12345",
//     email: "arkammulla123@gmail.com",
//   },
//   {
//     username: "Uzair",
//     password: "12er5",
//     email: "uzair@gmail.com",
//   },
//   {
//     username: "Affan",
//     password: "12345afds",
//     email: "affan@gmail.com",
//   },
// ];

// users.forEach((val) => {
//   console.log(val.username);
// });
