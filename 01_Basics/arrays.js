const newArray = [1, 2, 3, 4, 5, ['Usaid', 'Uzair', 'Affan', 'Saad']]; //Array is an object

// console.log(`1. ${newArray}`); by using backticks it convert array of element in a string format
// the whole array is converted into an string.

// console.log(newArray.length);

const newArray2 = new Array('banana', 'orange', 'apple', 'strawberry');
const newArray3 = ['Usaid', 'Uzair', 'Affan', 'Saad'];
// console.log(newArray2);
// console.log(newArray[3]);

// console.log(newArray.slice(1, 4)); it returns slice of element between index of 1,4
//It do not change array element
// In this case it returns between index of 1-3 4th element is not included

// console.log(newArray);
// console.log(newArray2.splice(1, 3));
// console.log(newArray2);

// console.log(newArray.push(6)); add element to the array at last position
// console.log(newArray.pop()); remove last element from array

// console.log(newArray);

// const concatArray = newArray2.concat(newArray);

// console.log(typeof newArray);

// const shiftValue = newArray.shift();
// console.log(shiftValue); //remove first element from array and return that removed element.it changes array elements
// console.log(newArray.reverse());

// const spreadArray = [...newArray, ...newArray2, ...newArray3];
// console.log(spreadArray);
// console.log(concatArray);
// console.log(newArray.flat()); //The flat() method of Array instances creates a new array with all sub-array elements concatenated into
//it recursively up to the specified depth.
// console.log(Array.from('Usaid'));
// console.log(
//   Array.from({
//     name: 'Usaid',
//     from: 'Taloja',
//   })
// );

console.log(Array.of(newArray,newArray2,newArray3))