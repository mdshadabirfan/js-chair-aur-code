//For each loop
const programmingLanguages = ["JS", "Ruby", "CPP", "Python", "Java"];
programmingLanguages.forEach((language) => {
    console.log(language);
    
})

//For each loop with function expression => Doesn't return anything => We get undefined as return value
const myLanguages = programmingLanguages.forEach((language) => {
    console.log(language);
})
console.log(myLanguages);

//Filter
const myNums = [1, 3, 5, 7, 9];
let filteredNums = myNums.filter((num) => num > 5);
console.log(filteredNums);//Returs a new filtered array

//Filtering with forEach loop
const filteredNums2 = [];
myNums.forEach((num) => {
    if (num > 5) {
        filteredNums2.push(num);
    }
}) 
console.log(filteredNums2);


//using filter on objects of array
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
  let filteredBooks = books.filter((book) => {
    return (book.genre === "History")
  })
  console.log(filteredBooks);

    filteredBooks = books.filter((book) => {
    return (book.edition > 2010)
  })
  console.log(filteredBooks);//Return an array of objects with filtered books

  //Using multiple conditions using filter
  filteredBooks = books.filter((book) => {
    return (book.genre === "Science" && book.publish >= 2000)
  })
  console.log(filteredBooks);
  
  
  
  

