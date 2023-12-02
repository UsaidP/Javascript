//singleton

//object literals

const mySym = Symbol();
const myObject = new Object({
  [mySym]: "1",
  Name: "Usaid",
  Address: "Taloja",
});

const myObject2 = {
  [mySym]: "1",
  Name: "Oneplus 11R",
  Processer: "SM 8+ gen1",
  Storage: "128GB",
  Ram: "8GB",
};
// console.log(myObject2.Processer);
// console.log(myObject2["Processer"]);
// console.log(myObject2["mySyn"]);

// myObject.Name = "Uzair";
// console.log(myObject);

/*        Object Destructuring         */

const { Name: N } = myObject;

console.log(N);
