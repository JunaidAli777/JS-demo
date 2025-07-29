//this is a comment

/*
this is
a multi-line comment
*/

// var a = 2;
// let b = 3;
// const c = 4;
// console.log(a, b, c);

// console.log(a);
// let a = 5;

// console.log(b);
// const b = 5;

// var a = 7;
// console.log(a)

// let num = 23;
// num = 25;
// console.log(num); => 25

// const email = 'user@gmail.com'
// email = 'user1@gmail.com'
// console.log(email); => error

// console.log(2+2);
// console.log(2-2);
// console.log(2/2);
// console.log(2*2);
// console.log(2**3);
// console.log(2%2);


// let name = 'J';
// let name2 = 'a';
//console.log(name + name2);

// let n1 = '21';
// let n2 = 2;
// let n3 = n1 + n2;
// console.log(n3); => 212

// let a = 2;
// let b = 12;
// let c = '2';
// console.log(a + b + c); => 142

//typeof keyword

// let str = 'Junaid';
// console.log(typeof str); => string

// let num = 32;
// console.log(typeof(num)); => number

//console.log(Number("32a"));

//console.log(Number(undefined));

// console.log(Number(true));

// console.log(Number(false));

// console.log(Boolean(32));

// console.log(Boolean("Junaid"));

// console.log(Boolean(""));

// let value = 3;
// let neg = -value;
// console.log(neg); => -3

// console.log(+true);
// console.log(+"");
// console.log(+"Junaid");

// let x = 3;
// const y = x++;

// console.log(`x:${x}, y:${y}`);
// // Expected output: "x:4, y:3"

// let a = 3;
// const b = ++a;

// console.log(`a:${a}, b:${b}`);
// // Expected output: "a:4, b:4"


// console.log(2 > 1);
// console.log(2 < 1);
// console.log(2 >= 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log('2' > 1); because JS converts the '2' into a number

// console.log(null > 0); => false since > converts null into 0 but 0 not greater than 0
// console.log(null == 0); => false because == operator does not convert the operands
// console.log(null >= 0); => true >= converts null into 0 hence it is true, since, it is equal to 0

// console.log(undefined == 0); => false 
// console.log(undefined >= 0); => false
// console.log(undefined > 0); => false

// let a = null;
// console.log(a); => null

// let a;
// console.log(a); => undefined

// console.log('2' == 2); => true because the datatypes won't be considered 
// console.log('2' === 2); => false because the datatypes would also be considered

// const id = Symbol('123');
// const anotherId = Symbol('123');
// console.log(id == anotherId); => false every symbol data is unique and will return a falsy value upon comparison

// let a = 10;
// console.log(typeof a);
// console.log(typeof(a));

//Stack
//in Primitive data types we get a copy

//Heaps
//in Non-primitive data types we get the reference

// let a = 'Junaid';
// let b = a;
// b = 'Ajay';
// console.log(a);
// console.log(b);


// let userOne = {
//     email: 'user1@gmail.com',
//     upi: 'user1@ybl'
// };

// let userTwo = userOne;
// userTwo.email = 'user2@gmail.com';
// console.log(userOne.email);

// const arr = [1, 2, 3, 4, 5, 6, 7]; because arrays are mutable and so are objects.
// arr.push(10);
// console.log(arr);





