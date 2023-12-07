// Immediately Invoked Function Expression

// (function IIFE() {
//   console.log("My Name is Usaid");
// })();

// const first = () => {
//   console.log("first");
// };
// console.log(first());
// (() => {
//   console.log("This is IIFE Function");
// })();

// ((iife) => {
//   console.log(`This is ${iife} Function`);
// })("IIFE");
// console.log(this);

const names = () => {
  let username = "Usaid";

  console.log(this.username);
};

names();
function chai() {
  let username = "hitesh";
  console.log(this.username);
}
chai();
