// const arr = [0, 1, 2, 3, 4, 5];
// arr[2] = 10; does not support -ve indexing
// console.log(arr); o/p will be [0, 1, 10, 3, 4, 5] because arrays are mutable
// arr = [8, 3, 4]; => this will throw an assignment error due to the usage of const keyword

//METHOS IN ARRAY
// it could be said that methods in arrays are of 2 types mutating and non-mutating


// let arr = [6, 3, 6, 8, 2];
// arr.push(1); will mutate the original array and return the length of the modified version
// console.log(r, arr);

// let r = arr.pop(); returns the last popped element and mutates the array by removing the last element
// console.log(r, arr);

// let r = arr.unshift(2, 4, 78); will insert the elements in the argument at the begining of the array and mutate the original array and return the length of the modified version
// console.log(r, arr);

// let r = arr.shift(); returns the element that was removed and mutating in nature
// console.log(r, arr);

const names = ["Junaid", "Ali", "Javed", "Travis", "Sam"];
// console.log(names.includes('Junaid')); returns a boolean
// console.log(names.indexOf('Al')); returns -1 if the index doesnt exist

// const a = names.slice(-4, -1) non-mutating, ignores the last index in a range, supports -ve indexing
// console.log(names, a);

// console.log(names.at(-1)); supprts -ve indexing and returns undefined if out of range








