// (<, >, <=, >=, ==, !=, ===, !==) return a boolean

// const temp = 40;
// if (temp >= 35) {
//     console.log('Temp is >= 35');
// } else {
//     console.log('Temp is < 35')
// }

// const balance = 500;
// if (balance >= 1000) {
//     console.log('>= 1000');
// } else if(balance >= 700){
//     console.log('>=700');
// } else if(balance >= 600) {
//     console.log('>=600');
// } else {
//     console.log('<600');
// }

// const userLoggedIn = true;
// const hasAccount = true;
// const debitCard = true;

// if (userLoggedIn && hasAccount && debitCard) {
//     console.log('valid user');
// } else {
//     console.log('invalid user');
// }

// if (userLoggedIn || hasAccount || debitCard) {
//     console.log('valid user');
// } else {
//     console.log('invalid user');
// }


// const day = 3;
// switch (day) {
//     case 1:
//         console.log('Monday');
//         break;
//     case 2:
//         console.log('Tuesday');
//         break;
//     case 3:
//         console.log('Wednesday');
//         break;        
//     default:
//         console.log('did not find');    
//         break;
// }

//a few examples of falsy value: false, 0, -0, 0n, "", mull, undefined, NaN
//a few example of truthy value: true, "0", " ", [], {}, function() {}

// const userEmail = "  hjfkdaskjnmew    ";
// if(userEmail.trim()) {
//     console.log('welcome');
// } else {
//     console.log('please enter a username');
// }

//to check if the array is empty
// const arr = [];
// if(arr.length > 0) {
//     console.log('array has elements');
// } else {
//     console.log('empty array');
// }

// //to check if the object is empty
// const obj = {};
// if(obj.length > 0) {
//     console.log('object has elements');
// } else {
//     console.log('empty object');
// }

// console.log(Boolean(false == 0));       would return true
// console.log(Boolean(false == ''));      would return true
// console.log(Boolean(0 == ''));      would return true


// const age = 19;
// if(age >= 18) {
//     console.log('Adult');
// } else {
//     console.log('minor');
// }

// can also be written like this

// const age = 19;
// const category = age >= 18 ? "Adult" : "Minor";
// console.log(category);