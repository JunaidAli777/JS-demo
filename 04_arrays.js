// const arr = [0, 1, 2, 3, 4, 5];
// arr[2] = 10; does not support -ve indexing
// console.log(arr); o/p will be [0, 1, 10, 3, 4, 5] because arrays are mutable
// arr = [8, 3, 4]; => this will throw an assignment error due to the usage of const keyword

//METHOS IN ARRAY
// it could be said that methods in arrays are of 2 types mutating and non-mutating


// let arr = [6, 3, 6, 8, 2];
// let r = arr.push(1); //will mutate the original array and return the length of the modified version
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

// console.log(names.at(-1)); supports -ve indexing and returns undefined if the index is out of range


// let players = ['Gill', 'Ben', 'Root', 'Jaiswal'];
// // let str = players.join(' '); //converts an array into a string
// // console.log(str, players); non-mutating

// console.log(players.length);
// console.log(players.indexOf('Jaiswal'));


//splice method
// arr.splice(index, count, item1, item2......) index where the deletion must begin, no. of elements to be deleted, the elements to be added
// let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
// arr.splice(2, i, 'apples', 'mangoes'); mutates
// console.log(arr);

// let a = [0, 1, 2];
// let b = [3, 4, 5];
// let c  = a.concat(b); concats the array by flattening it and is non-mutating
// console.log(c);

//SPREAD OPERATOR
// let a = [0, 1, 2];
// let c  = [21, 34, 54, ...a];
// console.log(c);

// let a = [0, 1, 2];
// let b = [3, 4, 5];
// let c = [...a, ...b];
// console.log(c);

// const arr1 = [0, 1, 2, [3, 4]];
// const arr2 = arr1.flat();
// console.log(arr2);

// const arr1 = [0, 1, [2, 3, [4, 5, 7, [2, 3, 67]]]];
// const arr2 = arr1.flat(3);
// console.log(arr2);

// const arr1 = [0, 1, [2, 3, [4, 5, 7, [2,[78, 32, [21, 65, 32], 32], 3, 67]]]];
// const arr2 = arr1.flat(Infinity);
// console.log(arr2);

// console.log(Array.isArray(arr1)); checks if the passed argument is an array


//Array.from(argument) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
//Array.of https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of









