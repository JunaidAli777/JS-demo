// const coding = ["JS", "Ruby", "Java", "Python", "CPP"];
// coding.forEach(
//     function(val) {
//         console.log(val);
//     }
// )

// coding.forEach((ele) => {
//     console.log(ele);
// })

// function printme(ele) {
//     console.log(ele);
// }
// coding.forEach(printme);

// const languages = [
//     {
//         name: 'javascript',
//         extension: 'js'
//     },
//     {
//         name: 'python',
//         extension: 'py'
//     },
//     {
//         name: 'typescript',
//         extension: 'ts'
//     }
// ]

// const languageName = languages.forEach( (ele) => {
//     // console.log(ele.name)
//     return ele.name
// })
// console.log(languageName);



// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = nums.filter( (num) => {
//     return num > 4
// })
// const newNums = nums.filter( (num) => num > 4 )
// console.log(newNums);


// const books = [
//     {title: 'book1', genre: 'History', publish: 1971, price: 1999},
//     {title: 'book2', genre: 'Non-Fiction', publish: 2003, price: 999},
//     {title: 'coming back to me', genre: 'Bio', publish: 2011, price: 399},
//     {title: 'book4', genre: 'Crime', publish: 1999, price: 299},
//     {title: 'book5', genre: 'History', publish: 2005, price: 1499},
//     {title: 'coming back to me', genre: 'Science', publish: 1987, price: 399},
//     {title: 'book7', genre: 'Non-Fiction', publish: 1991, price: 799},
// ]

// const userBooks  = books.filter( (book) => {
//     return book.price < 500
// })
// const userBooks  = books.filter( (book) => book.price > 500)
// const userBooks = books.filter( (book) => book.publish < 2000)
// const userBooks = books.filter( (book) => book.genre === 'Science')
// const userBooks = books.filter( (book) => book.title === 'coming back to me')
// console.log(userBooks);

//maps
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = nums.map( (num) => num*10 );
// console.log(newNums);

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = nums
//                 .map( (num) => num*10 )
//                 .map( (num) => num+1)
//                 .filter( (num) => num >= 40);
// console.log(newNums);


//reduce method
// const arr = [1, 2, 3, 4];
// let initialValue = 0;
// const sumOfAll = arr.reduce(
//     (accumulator, current_value) => accumulator + current_value, initialValue
// );
// console.log(sumOfAll);

const cart = [
    {
        coursename: 'JS',
        price: 2999
    },
    {
        coursename: 'Mobile Dev',
        price: 5999
    },
    {
        coursename: 'Data Science',
        price: 12999
    }
]

const sum = cart.reduce((acc, crr) => acc + crr.price, 0);
console.log(sum);
