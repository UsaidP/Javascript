// const books = [
//   { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
//   { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
//   { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
//   { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
//   { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
//   { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
//   { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
//   { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
//   { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
// ];

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 20];

// const Filter = arr.filter((fill) => fill >= 5);

// console.log(Filter);

// const Filter_2 = arr.filter((val) => {
//   return val > 2 && val < 8;
// });

// console.log(Filter_2);

// const scienceBooks = books.filter((bk) => {
//   return bk.genre === "Science";
// });
// console.log(scienceBooks);

// const HistoryBooks = books.filter((bk) => bk.genre === "History");
// console.log(HistoryBooks);

const blewNinty = books.filter((bk) => bk.publish < 1990);
console.log(blewNinty);
