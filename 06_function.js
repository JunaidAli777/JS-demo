// function sayMyName () {
//     console.log("J");
//     console.log("U");
//     console.log("N");
//     console.log("A");
//     console.log("I");
//     console.log("D"); 
// }
// sayMyName()


// function sumOfTwo (num1, num2) {
//     console.log(num1+num2);
// }

// const result = sumOfTwo(2, 4)
// console.log(result); would show undefined because we did not returned any value

// function sumOfTwo(n1, n2) {
//     let result = n1 + n2
//     return result
// }

// const r = sumOfTwo(54, 21);
// console.log(`Result: ${r}`);

// function loginUserMessage (username) {
//     return `${username} just logged in`
// }

// loginUserMessage("Junaid") // wont print anything because we just returned the string



// function calcCartPrice (n1, n2, n3, n4) {
//     let sum1 = n1 + n2;
//     let sum2 = n3 + n4;
//     return [sum1, sum2]
// }
// console.log(calcCartPrice(43, 21, 65, 32));




// function calcCartPrice(...num) { //rest operator because it is being passed as a parameter
//     return num
// }
// console.log(calcCartPrice(99, 21, 54));


// function calcCartPrice(n1, n2, ...num) { //rest operator
//     return [n1, n2, num]
// }
// console.log(calcCartPrice(21, 32, 43, 21, 65, 65));


// function calcCartPrice(n1, n2, ...num) { //rest operator
//     return [n1, n2, ...num] //spread operator
// }
// console.log(calcCartPrice(21, 32, 43, 21, 65, 65));

//Handling objects in a function
// const user = {
//     username: 'Junaid',
//     price: 199
// }

// function handleObjects (anyobject) {
//     console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`);
// }

// handleObjects(user)
// handleObjects({username: "Travis", price: "299"})

//Handle arrays in functions
// const arr = [200, 300, 400, 500];
// function returnSecondValue(array) {
//     return array[1]
// }
// console.log(returnSecondValue(arr));


//Function scoping
// function one() {
//     const username = 'Junaid';
//     function two() {
//         const website = 'googlemeet';
//         console.log(username);
//     }
//     console.log(website);
//     two()
// }
// one()

// console.log(addone(5));
// function addone(num) {
//     return num+1
// }  this would work fine


// console.log(addtwo(5));
// const addtwo = function (num) {
//     return num+2
// } this would throw an error because the variable has been declared before


//ARROW FUNCTIONS.......introduced in ES6(2015)

// function printname() {
//     console.log('Junaid');
// }
// printname() regular function

// () => {} syntax of an arrow function
// const printname = () => {
//     console.log('Junaid');
// }
// printname()

// const addtwo = (num1, num2) => {
//     return num1+num2
// } // needs return keyword since {} have been used
// console.log(addtwo(3, 2));

// const addthree = (num1) => num1+3 implicit return, does not need () or the return keyword

// const addthree = (num1) => (
//     num1
// ) does not need the return keyword since () have been given
// console.log(addthree(3));


// const addtwo = (num1, num2) => (
//     num1+num2
// ) a function can be stored in a variable
// console.log(addtwo(3, 2));





